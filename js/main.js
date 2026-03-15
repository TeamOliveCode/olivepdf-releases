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
    if (navigator.userAgentData && navigator.userAgentData.architecture) {
      return navigator.userAgentData.architecture === 'arm' ? 'arm' : 'x64';
    }
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
    return 'arm';
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

    var macArch = detectMacArch();
    var macAsset = macArch === 'arm' ? macArmAsset : macIntelAsset;

    // Hero CTA — point to user's OS download
    if (os === 'mac' && macAsset) {
      heroCtaText.textContent = window.I18n.t('hero.ctaMac');
      heroCta.href = macAsset.downloadUrl;
    } else if (os === 'win' && winAsset) {
      heroCtaText.textContent = window.I18n.t('hero.ctaWin');
      heroCta.href = winAsset.downloadUrl;
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
        if (releaseCache) setupDownload(releaseCache);
      });
    }

    updateLabel();
  }

  // ── Scroll Reveal ──
  function setupScrollReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    for (var j = 0; j < elements.length; j++) {
      observer.observe(elements[j]);
    }
  }

  // ── App Preview Parallax ──
  function setupParallax() {
    var frame = document.getElementById('appPreviewFrame');
    if (!frame) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          var rect = frame.getBoundingClientRect();
          var windowHeight = window.innerHeight;
          var progress = 1 - (rect.top / windowHeight);
          progress = Math.max(0, Math.min(1, progress));

          var rotateX = 2 * (1 - progress);
          var scale = 0.96 + 0.04 * progress;

          frame.style.transform =
            'perspective(1200px) rotateX(' + rotateX.toFixed(2) + 'deg) scale(' + scale.toFixed(4) + ')';
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
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
    setupScrollReveal();
    setupParallax();
    setupSmoothScroll();

    // Fetch release data
    fetchRelease().then(function (release) {
      if (release) setupDownload(release);
    });

    // GA download tracking
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href*=".dmg"], a[href*=".exe"]');
      if (!link) return;
      var href = link.href || '';
      var platform = /\.exe/i.test(href) ? 'windows' : /aarch64/i.test(href) ? 'mac-arm' : 'mac-intel';
      if (window.gtag) window.gtag('event', 'download', { platform: platform });
    });
  });
})();
