(function () {
  'use strict';

  // ── OS Detection ──
  function detectOS() {
    var ua = navigator.userAgent || '';
    var platform = navigator.platform || '';
    if (/Mac/.test(platform) || /Macintosh/.test(ua)) return 'mac';
    if (/Win/.test(platform) || /Windows/.test(ua)) return 'win';
    return 'other';
  }

  function detectMacArch() {
    // Chromium: navigator.userAgentData
    if (navigator.userAgentData && navigator.userAgentData.architecture) {
      return navigator.userAgentData.architecture === 'arm' ? 'arm' : 'x64';
    }
    // Safari/Firefox: check WebGL renderer
    try {
      var canvas = document.createElement('canvas');
      var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        var ext = gl.getExtension('WEBGL_debug_renderer_info');
        if (ext) {
          var renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
          if (/Apple/.test(renderer) && !/Intel|AMD|NVIDIA/.test(renderer)) return 'arm';
        }
      }
    } catch (e) {}
    return 'arm'; // Default to Apple Silicon for modern Macs
  }

  // ── Release API ──
  var releaseCache = null;

  function fetchRelease() {
    return fetch('https://api.github.com/repos/TeamOliveCode/olivepdf-releases/releases/latest')
      .then(function (res) {
        if (!res.ok) throw new Error('Failed');
        return res.json();
      })
      .then(function (data) {
        releaseCache = {
          version: data.tag_name,
          name: data.name,
          published: data.published_at,
          assets: data.assets.map(function (a) {
            return {
              name: a.name,
              size: a.size,
              downloadUrl: a.browser_download_url,
            };
          }),
        };
        return releaseCache;
      })
      .catch(function () {
        return null;
      });
  }

  // ── Download Setup ──
  function setupDownload(release) {
    var os = detectOS();
    var heroCta = document.getElementById('heroCta');
    var heroCtaText = document.getElementById('heroCtaText');
    var heroCtaMeta = document.getElementById('heroCtaMeta');
    var heroAlso = document.getElementById('heroAlso');
    var downloadWin = document.getElementById('downloadWin');

    if (!release || !release.assets) return;

    var macArmAsset = null;
    var macIntelAsset = null;
    var winAsset = null;

    for (var i = 0; i < release.assets.length; i++) {
      var name = release.assets[i].name;
      if (/aarch64\.dmg$/i.test(name)) macArmAsset = release.assets[i];
      else if (/x64\.dmg$/i.test(name) || /x86_64\.dmg$/i.test(name)) macIntelAsset = release.assets[i];
      if (/\.exe$/i.test(name)) winAsset = release.assets[i];
    }

    var version = (release.version || '').replace(/^v/, '');
    var freeText = window.I18n.t('hero.free');
    var macArch = detectMacArch();
    var macAsset = macArch === 'arm' ? macArmAsset : macIntelAsset;
    var macOtherAsset = macArch === 'arm' ? macIntelAsset : macArmAsset;
    var macOtherLabel = macArch === 'arm' ? 'Mac (Intel)' : 'Mac (Apple Silicon)';

    // Hero CTA
    if (os === 'mac' && macAsset) {
      heroCtaText.textContent = window.I18n.t('hero.ctaMac');
      heroCta.href = macAsset.downloadUrl;
      heroCtaMeta.textContent = 'v' + version + ' \u00b7 ' + formatSize(macAsset.size) + ' \u00b7 ' + freeText;
      var alsoLinks = [];
      if (macOtherAsset) alsoLinks.push('<a href="' + macOtherAsset.downloadUrl + '">' + macOtherLabel + '</a>');
      if (winAsset) alsoLinks.push('<a href="' + winAsset.downloadUrl + '">Windows</a>');
      if (alsoLinks.length) {
        heroAlso.innerHTML = window.I18n.t('download.also').replace('{platform}', alsoLinks.join(', '));
      }
    } else if (os === 'win' && winAsset) {
      heroCtaText.textContent = window.I18n.t('hero.ctaWin');
      heroCta.href = winAsset.downloadUrl;
      heroCtaMeta.textContent = 'v' + version + ' \u00b7 ' + formatSize(winAsset.size) + ' \u00b7 ' + freeText;
      var alsoMacLinks = [];
      if (macArmAsset) alsoMacLinks.push('<a href="' + macArmAsset.downloadUrl + '">Mac (Apple Silicon)</a>');
      if (macIntelAsset) alsoMacLinks.push('<a href="' + macIntelAsset.downloadUrl + '">Mac (Intel)</a>');
      if (alsoMacLinks.length) {
        heroAlso.innerHTML = window.I18n.t('download.also').replace('{platform}', alsoMacLinks.join(', '));
      }
    } else {
      heroCtaMeta.textContent = 'v' + version + ' \u00b7 ' + freeText;
    }

    // Download section buttons
    var downloadMacArm = document.getElementById('downloadMacArm');
    var downloadMacIntel = document.getElementById('downloadMacIntel');

    if (macArmAsset && downloadMacArm) {
      downloadMacArm.href = macArmAsset.downloadUrl;
      var armMeta = downloadMacArm.querySelector('.dl-btn-meta');
      if (armMeta) armMeta.textContent = 'macOS 11+ \u00b7 ' + formatSize(macArmAsset.size);
    }
    if (macIntelAsset && downloadMacIntel) {
      downloadMacIntel.href = macIntelAsset.downloadUrl;
      var intelMeta = downloadMacIntel.querySelector('.dl-btn-meta');
      if (intelMeta) intelMeta.textContent = 'macOS 11+ \u00b7 ' + formatSize(macIntelAsset.size);
    }
    if (winAsset) {
      downloadWin.href = winAsset.downloadUrl;
      var winMeta = downloadWin.querySelector('.dl-btn-meta');
      if (winMeta) winMeta.textContent = 'Windows 10+ \u00b7 ' + formatSize(winAsset.size);
    }

    // Reorder buttons: user's OS first
    var downloadButtons = document.getElementById('downloadButtons');
    if (os === 'win') {
      downloadWin.className = 'dl-btn dl-btn-primary';
      if (downloadMacArm) downloadMacArm.className = 'dl-btn dl-btn-secondary';
      if (downloadMacIntel) downloadMacIntel.className = 'dl-btn dl-btn-secondary';
      downloadButtons.insertBefore(downloadWin, downloadButtons.firstChild);
    } else if (os === 'mac' && macArch === 'x64') {
      if (downloadMacIntel) {
        downloadMacIntel.className = 'dl-btn dl-btn-primary';
        downloadButtons.insertBefore(downloadMacIntel, downloadButtons.firstChild);
      }
      if (downloadMacArm) downloadMacArm.className = 'dl-btn dl-btn-secondary';
    }
  }

  function formatSize(bytes) {
    if (!bytes) return '';
    var mb = bytes / (1024 * 1024);
    return Math.round(mb) + ' MB';
  }

  // ── Language Selector ──
  function setupLangSelector() {
    var langBtn = document.getElementById('langBtn');
    var langLabel = document.getElementById('langLabel');
    var langDropdown = document.getElementById('langDropdown');
    var buttons = langDropdown.querySelectorAll('button');

    function updateLabel() {
      var current = window.I18n.getCurrentLang();
      langLabel.textContent = window.I18n.langLabels[current] || 'EN';

      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('active', buttons[i].getAttribute('data-lang') === current);
      }
    }

    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', function () {
      langDropdown.classList.remove('open');
    });

    langDropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        window.I18n.setLang(this.getAttribute('data-lang'));
        updateLabel();
        langDropdown.classList.remove('open');
        // Re-apply download labels
        if (releaseCache) setupDownload(releaseCache);
      });
    }

    updateLabel();
  }

  // ── Scroll Animations ──
  function setupAnimations() {
    var elements = document.querySelectorAll('.animate-in');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('visible');
      }
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    for (var j = 0; j < elements.length; j++) {
      observer.observe(elements[j]);
    }
  }

  // ── Screenshot fallback ──
  function setupScreenshot() {
    var img = document.getElementById('appScreenshot');
    if (!img) return;

    function onLoad() {
      img.classList.add('loaded');
      // The real screenshot already includes macOS window chrome,
      // so hide the CSS-rendered window header to avoid duplication
      var header = img.closest('.app-window').querySelector('.app-window-header');
      if (header) header.style.display = 'none';
    }

    // Handle race condition: image may already be loaded from cache
    if (img.complete && img.naturalWidth > 0) {
      onLoad();
    } else {
      img.addEventListener('load', onLoad);
    }

    img.addEventListener('error', function () {
      img.style.display = 'none';
    });
  }

  // ── Smooth scroll for anchor links ──
  function setupSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        var id = this.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function () {
    // i18n
    var lang = window.I18n.detectLanguage();
    window.I18n.setLang(lang);
    setupLangSelector();

    // UI
    setupScreenshot();
    setupAnimations();
    setupSmoothScroll();

    // Fetch release data
    fetchRelease().then(function (release) {
      if (release) setupDownload(release);
    });
  });
})();
