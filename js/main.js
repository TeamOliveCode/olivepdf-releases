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
    var downloadMac = document.getElementById('downloadMac');
    var downloadWin = document.getElementById('downloadWin');

    if (!release || !release.assets) return;

    var macAsset = null;
    var winAsset = null;

    for (var i = 0; i < release.assets.length; i++) {
      var name = release.assets[i].name;
      if (/\.dmg$/i.test(name)) macAsset = release.assets[i];
      if (/\.exe$/i.test(name)) winAsset = release.assets[i];
    }

    var version = (release.version || '').replace(/^v/, '');
    var freeText = window.I18n.t('hero.free');

    // Hero CTA
    if (os === 'mac' && macAsset) {
      heroCtaText.textContent = window.I18n.t('hero.ctaMac');
      heroCta.href = macAsset.downloadUrl;
      heroCtaMeta.textContent = 'v' + version + ' \u00b7 ' + formatSize(macAsset.size) + ' \u00b7 ' + freeText;
      if (winAsset) {
        heroAlso.innerHTML = window.I18n.t('download.also').replace('{platform}', '<a href="' + winAsset.downloadUrl + '">Windows</a>');
      }
    } else if (os === 'win' && winAsset) {
      heroCtaText.textContent = window.I18n.t('hero.ctaWin');
      heroCta.href = winAsset.downloadUrl;
      heroCtaMeta.textContent = 'v' + version + ' \u00b7 ' + formatSize(winAsset.size) + ' \u00b7 ' + freeText;
      if (macAsset) {
        heroAlso.innerHTML = window.I18n.t('download.also').replace('{platform}', '<a href="' + macAsset.downloadUrl + '">Mac</a>');
      }
    } else {
      heroCtaMeta.textContent = 'v' + version + ' \u00b7 ' + freeText;
    }

    // Download section buttons
    if (macAsset) {
      downloadMac.href = macAsset.downloadUrl;
      var macMeta = downloadMac.querySelector('.dl-btn-meta');
      if (macMeta) macMeta.textContent = 'macOS 11+ \u00b7 ' + formatSize(macAsset.size);
    }
    if (winAsset) {
      downloadWin.href = winAsset.downloadUrl;
      var winMeta = downloadWin.querySelector('.dl-btn-meta');
      if (winMeta) winMeta.textContent = 'Windows 10+ \u00b7 ' + formatSize(winAsset.size);
    }

    // Reorder buttons: user's OS first
    var downloadButtons = document.getElementById('downloadButtons');
    if (os === 'win' && downloadWin && downloadMac) {
      downloadWin.className = 'dl-btn dl-btn-primary';
      downloadMac.className = 'dl-btn dl-btn-secondary';
      downloadButtons.insertBefore(downloadWin, downloadMac);
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
