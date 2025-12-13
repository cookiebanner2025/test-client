<script>
/* ==========================================================
   CMP BLOCKER CORE (SAFE FOR ANY BANNER)
========================================================== */
(function () {
  'use strict';

  /* ========== CONSENT STATE (DEFAULT = DENY) ========== */
  var CONSENT = {
    analytics: false,
    ads: false
  };

  /* ========== TRACKING DOMAINS ONLY (UI SAFE) ========== */
  var TRACKERS = {
    analytics: [
      'google-analytics.com',
      'googletagmanager.com',
      'gtag/js',
      'hotjar.com',
      'clarity.ms',
      'mixpanel',
      'segment'
    ],
    ads: [
      'doubleclick.net',
      'googleads',
      'googlesyndication',
      'facebook.net',
      'connect.facebook.net',
      'tiktok',
      'snapchat',
      'bing.com'
    ]
  };

  function isTracker(src) {
    return Object.values(TRACKERS).flat()
      .some(function (d) { return src.includes(d); });
  }

  function shouldBlock(src) {
    if (!src) return false;
    if (!CONSENT.analytics &&
        TRACKERS.analytics.some(d => src.includes(d))) return true;
    if (!CONSENT.ads &&
        TRACKERS.ads.some(d => src.includes(d))) return true;
    return false;
  }

  /* ========== BLOCK STATIC TRACKERS ========== */
  document.querySelectorAll('script[src]').forEach(function (s) {
    if (isTracker(s.src) && shouldBlock(s.src)) {
      s.type = 'text/plain';
      s.dataset.cmpBlocked = 'true';
      s.dataset.src = s.src;
      s.removeAttribute('src');
    }
  });

  /* ========== BLOCK DYNAMIC TRACKERS ========== */
  var nativeCreate = document.createElement;
  document.createElement = function (tag) {
    var el = nativeCreate.call(document, tag);
    if (tag === 'script') {
      Object.defineProperty(el, 'src', {
        set: function (src) {
          if (isTracker(src) && shouldBlock(src)) {
            el.type = 'text/plain';
            el.dataset.cmpBlocked = 'true';
            el.dataset.src = src;
          } else {
            el.setAttribute('src', src);
          }
        }
      });
    }
    return el;
  };

  /* ========== COOKIE HARD BLOCK (SAFE) ========== */
  var nativeCookie = Object.getOwnPropertyDescriptor(
    Document.prototype, 'cookie'
  );

  Object.defineProperty(document, 'cookie', {
    configurable: true,
    get: function () {
      return nativeCookie.get.call(document);
    },
    set: function (value) {
      var name = value.split('=')[0];

      // allow essential + consented
      if (
        /^PHPSESSID|^__Host-|^__Secure-/.test(name) ||
        CONSENT.analytics ||
        CONSENT.ads
      ) {
        nativeCookie.set.call(document, value);
      }
    }
  });

  /* ========== PUBLIC API (BANNER INTEGRATION) ========== */
  window.CMPBlocker = {
    applyConsent: function (c) {
      CONSENT.analytics = !!c.analytics;
      CONSENT.ads = !!c.ads;

      // Restore allowed scripts
      document.querySelectorAll('script[data-cmp-blocked]').forEach(function (s) {
        var src = s.dataset.src;
        if (!shouldBlock(src)) {
          var ns = document.createElement('script');
          ns.src = src;
          document.head.appendChild(ns);
          s.remove();
        }
      });

      console.log('[CMPBlocker] Consent applied:', CONSENT);
    }
  };

})();
</script>
