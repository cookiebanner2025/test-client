<script>
(function () {
  /* ============================
     CONFIG (Edit this block)
     ============================ */
  var CONFIG = {
    placement: "left-bottom",     // options: "left-bottom","right-bottom","center-bottom","full-width"
    theme: "light",               // default theme shown. options: "light","dark","auto"
    enableAutoDark: true,         // if theme === "auto" or enableAutoDark true -> detect system preference
    languages: ["en","es","fr","de"], // included translations (expand if needed)
    defaultLanguage: "en",        // fallback language
    cookieName: "site_cookie_consent_v1",
    cookieExpiryDays: 365,
    showBannerAfterMS: 600,       // delay showing banner (ms) - 0 for immediate
    modalWidth: 640,
    // Default consent state (GCS / google consent mode style). All non-security default to "denied".
    defaultGCS: {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      personalization_storage: "denied",
      functionality_storage: "denied",
      security_storage: "granted"
    },
    // Which categories map to which GCS keys
    categoryMap: {
      necessary: [], // kept as always enabled, no GCS except security_storage
      functional: ["functionality_storage"],
      analytics: ["analytics_storage"],
      marketing: ["ad_storage","ad_personalization","ad_user_data","personalization_storage"]
    },
    translations: {
      en: {
        title: "We value your privacy",
        description: "We and our partners use cookies to improve your browsing experience, analyze site usage and support our marketing efforts.",
        accept: "Accept",
        refuse: "Refuse",
        adjust: "Adjust preferences",
        modalTitle: "Cookie preferences",
        modalDescription: "Select which cookies you allow. You can change these at any time.",
        necessary: "Necessary",
        necessaryDesc: "Required for site security and basic functionality. Always active.",
        functional: "Functional",
        functionalDesc: "Helps remember your choices and preferences.",
        analytics: "Analytics",
        analyticsDesc: "Collects anonymous usage data to improve the site.",
        marketing: "Marketing",
        marketingDesc: "Used to deliver personalized ads across sites.",
        save: "Save preferences",
        cancel: "Cancel",
        allDone: "Thanks — your preferences have been saved."
      },
      es: {
        title: "Valoramos su privacidad",
        description: "Usamos cookies para mejorar su experiencia, analizar el uso del sitio y apoyar esfuerzos de marketing.",
        accept: "Aceptar",
        refuse: "Rechazar",
        adjust: "Ajustar preferencias",
        modalTitle: "Preferencias de cookies",
        modalDescription: "Seleccione qué cookies permite. Puede cambiar esto en cualquier momento.",
        necessary: "Necesarias",
        necessaryDesc: "Requeridas para la seguridad y funcionalidad básica. Siempre activas.",
        functional: "Funcionales",
        functionalDesc: "Ayudan a recordar sus elecciones y preferencias.",
        analytics: "Analíticas",
        analyticsDesc: "Recolecta datos de uso anónimos para mejorar el sitio.",
        marketing: "Marketing",
        marketingDesc: "Se usan para anuncios personalizados.",
        save: "Guardar preferencias",
        cancel: "Cancelar",
        allDone: "Gracias — sus preferencias han sido guardadas."
      },
      fr: {
        title: "Nous respectons votre vie privée",
        description: "Nous utilisons des cookies pour améliorer votre expérience, analyser l'utilisation du site et soutenir le marketing.",
        accept: "Accepter",
        refuse: "Refuser",
        adjust: "Ajuster les préférences",
        modalTitle: "Préférences de cookies",
        modalDescription: "Sélectionnez les cookies que vous autorisez. Vous pouvez modifier cela à tout moment.",
        necessary: "Nécessaires",
        necessaryDesc: "Requises pour la sécurité et les fonctions de base. Toujours actives.",
        functional: "Fonctionnelles",
        functionalDesc: "Aident à mémoriser vos choix et préférences.",
        analytics: "Analyses",
        analyticsDesc: "Collecte des données d'utilisation anonymes pour améliorer le site.",
        marketing: "Marketing",
        marketingDesc: "Utilisé pour diffuser des publicités personnalisées.",
        save: "Enregistrer",
        cancel: "Annuler",
        allDone: "Merci — vos préférences ont été enregistrées."
      },
      de: {
        title: "Wir respektieren Ihre Privatsphäre",
        description: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, die Nutzung zu analysieren und Marketing zu unterstützen.",
        accept: "Akzeptieren",
        refuse: "Ablehnen",
        adjust: "Einstellungen",
        modalTitle: "Cookie-Einstellungen",
        modalDescription: "Wählen Sie, welche Cookies Sie erlauben. Sie können dies jederzeit ändern.",
        necessary: "Notwendig",
        necessaryDesc: "Erforderlich für Sicherheit und Basisfunktionen. Immer aktiv.",
        functional: "Funktional",
        functionalDesc: "Hilft dabei, Ihre Einstellungen zu speichern.",
        analytics: "Analytics",
        analyticsDesc: "Sammelt anonyme Nutzungsdaten zur Verbesserung der Seite.",
        marketing: "Marketing",
        marketingDesc: "Wird verwendet, um personalisierte Werbung anzuzeigen.",
        save: "Speichern",
        cancel: "Abbrechen",
        allDone: "Danke — Ihre Einstellungen wurden gespeichert."
      }
    }
  };

  /* ============================
     Utils
     ============================ */
  function cookieSet(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/; SameSite=Lax";
  }
  function cookieGet(name) {
    var re = new RegExp("(^| )" + name + "=([^;]+)");
    var m = document.cookie.match(re);
    return m ? decodeURIComponent(m[2]) : null;
  }
  function cookieDelete(name) {
    cookieSet(name, "", -1);
  }
  function isObject(obj) {
    return obj && typeof obj === "object" && !Array.isArray(obj);
  }
  function mergeDeep(target, source) {
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
          if (!(key in target)) Object.assign(output, { [key]: source[key] });
          else output[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }

  /* ============================
     Language selection
     ============================ */
  function detectLanguage() {
    var nav = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage || CONFIG.defaultLanguage;
    var lang = nav.toLowerCase().split("-")[0];
    if (CONFIG.languages.indexOf(lang) > -1) return lang;
    return CONFIG.defaultLanguage;
  }
  var LANG = detectLanguage();
  var T = CONFIG.translations[LANG] || CONFIG.translations[CONFIG.defaultLanguage];

  /* ============================
     Default state behavior
     ============================ */
  var DEFAULT_STATE = JSON.parse(JSON.stringify(CONFIG.defaultGCS));

  /* ============================
     Helper: Build UI and CSS
     ============================ */
  function createStyles() {
    var css = '';
    css += "\n#cookie-consent-root{font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial;}\n";
    css += "\n.cookie-banner{position:fixed; z-index:2147483647; box-shadow:0 10px 30px rgba(0,0,0,0.18); border-radius:10px; padding:16px; max-width:100%; box-sizing:border-box;}\n";
    css += "\n.cookie-banner .title{font-weight:700; font-size:16px; margin-bottom:6px}\n";
    css += "\n.cookie-banner .desc{font-size:13px; margin-bottom:12px; line-height:1.35}\n";
    css += "\n.cookie-banner .controls{display:flex; gap:10px}\n";
    css += "\n.cookie-banner .controls button{cursor:pointer; border-radius:7px; padding:10px 12px; border:0; font-weight:600}\n";
    css += "\n.cookie-banner.light{background:#ffffff; color:#111}\n.cookie-banner.light .accept{background:#2e8b57; color:#fff}\n.cookie-banner.light .refuse{background:transparent; color:#333; border:1px solid #ddd}\n.cookie-banner.light .adjust{background:transparent; color:#333; border:1px solid #ddd}\n";
    css += "\n.cookie-banner.dark{background:#0b1220; color:#e6eef8}\n.cookie-banner.dark .accept{background:#1f9a6a; color:#fff}\n.cookie-banner.dark .refuse{background:transparent; color:#cfeaf4; border:1px solid rgba(255,255,255,0.06)}\n.cookie-banner.dark .adjust{background:transparent; color:#cfeaf4; border:1px solid rgba(255,255,255,0.06)}\n";
    css += "\n.cookie-modal-backdrop{position:fixed; inset:0; background:rgba(0,0,0,0.45); z-index:2147483646; display:flex; align-items:center; justify-content:center}\n";
    css += "\n.cookie-modal{background:#fff; border-radius:10px; max-width:calc(100% - 40px); box-sizing:border-box; padding:18px;}\n";
    css += "\n.cookie-modal h3{margin:0 0 10px 0}\n";
    css += "\n.preference-row{display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #f0f0f0}\n";
    css += "\n.preference-row .desc{font-size:13px; color:#666}\n";
    css += "\n.toggle{width:44px; height:26px; border-radius:16px; background:#ddd; position:relative}\n";
    css += "\n.toggle .knob{position:absolute; width:20px; height:20px; border-radius:50%; top:3px; left:3px; background:#fff; transition:all .18s}\n";
    css += "\n.toggle.on{background:#2e8b57}\n.toggle.on .knob{left:21px}\n";
    css += "\n@media (max-width:520px){.cookie-banner{padding:14px; border-radius:8px}}\n";
    return css;
  }

  /* ============================
     State management (in memory + cookie)
     ============================ */
  var state = {
    gcs: mergeDeep(DEFAULT_STATE, {}), // current gcs values
    categories: {
      necessary: true, // fixed true
      functional: false,
      analytics: false,
      marketing: false
    }
  };

  function loadSaved() {
    var raw = cookieGet(CONFIG.cookieName);
    if (!raw) return false;
    try {
      var parsed = JSON.parse(raw);
      if (parsed && parsed.gcs && typeof parsed.categories === 'object') {
        state.gcs = mergeDeep(DEFAULT_STATE, parsed.gcs);
        state.categories = mergeDeep(state.categories, parsed.categories);
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  }
  loadSaved();

  function saveState() {
    var payload = { gcs: state.gcs, categories: state.categories, updated_at: new Date().toISOString() };
    cookieSet(CONFIG.cookieName, JSON.stringify(payload), CONFIG.cookieExpiryDays);
  }

  /* ============================
     Map categories -> GCS
     and update helper
     ============================ */
  function updateGcsFromCategories() {
    // Start from defaults then override for granted categories
    var newGcs = mergeDeep(DEFAULT_STATE, {});
    // necessary keeps security_storage granted (already in DEFAULT_STATE)
    if (state.categories.functional) {
      CONFIG.categoryMap.functional.forEach(function (k) { newGcs[k] = "granted"; });
    } else {
      CONFIG.categoryMap.functional.forEach(function (k) { newGcs[k] = "denied"; });
    }
    if (state.categories.analytics) {
      CONFIG.categoryMap.analytics.forEach(function (k) { newGcs[k] = "granted"; });
    } else {
      CONFIG.categoryMap.analytics.forEach(function (k) { newGcs[k] = "denied"; });
    }
    if (state.categories.marketing) {
      CONFIG.categoryMap.marketing.forEach(function (k) { newGcs[k] = "granted"; });
    } else {
      CONFIG.categoryMap.marketing.forEach(function (k) { newGcs[k] = "denied"; });
    }
    // security_storage remains as default (granted)
    state.gcs = newGcs;
  }

  /* ============================
     Consent Mode / gtag update
     ============================ */
  function updateGtagConsent() {
    try {
      if (typeof window.gtag === "function") {
        // gtag consent update - uses Google Consent Mode v2 keys
        window.gtag('consent', 'update', state.gcs);
      }
    } catch (e) {
      // ignore
    }
  }

  /* ============================
     DataLayer pushes
     ============================ */
  function pushDataLayerEvent(name, payload) {
    window.dataLayer = window.dataLayer || [];
    var obj = { event: name, timestamp: new Date().toISOString() };
    if (payload) {
      for (var k in payload) if (Object.prototype.hasOwnProperty.call(payload, k)) obj[k] = payload[k];
    }
    window.dataLayer.push(obj);
  }

  /* ============================
     Script loader for auto-blocking
     - Look for <script type="text/plain" data-cookiecategory="...">
     - When category allowed -> convert to normal script and insert
     ============================ */
  function loadDeferredScripts() {
    var all = document.querySelectorAll('script[type="text/plain"][data-cookiecategory]');
    if (!all || !all.length) return;
    Array.prototype.forEach.call(all, function (s) {
      try {
        var cat = s.getAttribute('data-cookiecategory');
        // if multiple categories separated by space, take first allowed
        var cats = (cat || '').split(/\s+/).map(function(c){return c.trim();}).filter(Boolean);
        var allow = false;
        for (var i=0;i<cats.length;i++){
          var c = cats[i];
          if (c === 'necessary') { allow = true; break; } // necessary always true
          if (state.categories[c]) { allow = true; break; }
        }
        if (!allow) return;
        // Create a script element and copy attributes/content
        var ns = document.createElement('script');
        // copy attributes except type/data-cookiecategory
        Array.prototype.slice.call(s.attributes).forEach(function (attr) {
          if (attr.name === 'type' || attr.name === 'data-cookiecategory') return;
          ns.setAttribute(attr.name, attr.value);
        });
        ns.text = s.textContent;
        s.parentNode.insertBefore(ns, s);
        s.parentNode.removeChild(s);
      } catch (e) {
        // ignore single script failures
      }
    });
  }

  /* ============================
     API exposed to page
     ============================ */
  window.CookieConsent = window.CookieConsent || {
    getState: function () { return JSON.parse(JSON.stringify(state)); },
    isAllowed: function (category) { return !!state.categories[category]; },
    grantAll: function () {
      state.categories.functional = true;
      state.categories.analytics = true;
      state.categories.marketing = true;
      updateGcsFromCategories();
      saveState();
      postConsentChange('grant_all');
    },
    denyAll: function () {
      state.categories.functional = false;
      state.categories.analytics = false;
      state.categories.marketing = false;
      updateGcsFromCategories();
      saveState();
      postConsentChange('deny_all');
    },
    openPreferences: function () {
      openPreferencesModal();
    }
  };

  /* ============================
     Consent change common actions
     ============================ */
  function postConsentChange(action) {
    // Update gtag consent
    updateGtagConsent();
    // push to dataLayer
    pushDataLayerEvent('gcs_update', { gcs: state.gcs, categories: state.categories, action: action });
    pushDataLayerEvent('cookie_consent_changed', { gcs: state.gcs, categories: state.categories, action: action });
    // Save cookie
    saveState();
    // Load deferred scripts if category allowed
    loadDeferredScripts();
  }

  /* ============================
     Build DOM for banner & modal
     ============================ */
  var rootId = "cookie-consent-root";
  if (document.getElementById(rootId)) return; // avoid duplicates

  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.appendChild(document.createTextNode(createStyles()));
  document.head.appendChild(styleEl);

  var root = document.createElement('div');
  root.id = rootId;
  document.documentElement.appendChild(root);

  var bannerEl = document.createElement('div');
  bannerEl.className = "cookie-banner";
  bannerEl.setAttribute('role','dialog');
  bannerEl.setAttribute('aria-live','polite');

  // theme
  function computeThemeClass() {
    var theme = CONFIG.theme;
    if (CONFIG.theme === 'auto' || CONFIG.enableAutoDark) {
      try {
        var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) theme = 'dark'; else theme = 'light';
      } catch (e) { theme = CONFIG.theme || 'light'; }
    }
    return theme;
  }

  function placeBanner() {
    var placement = CONFIG.placement || 'left-bottom';
    var style = bannerEl.style;
    style.maxWidth = "540px";
    style.boxSizing = "border-box";
    style.padding = "16px";
    style.transition = "transform .28s, opacity .28s";
    var theme = computeThemeClass();
    bannerEl.classList.remove('light','dark');
    bannerEl.classList.add(theme);

    // reset positions
    style.left = style.right = style.bottom = style.top = style.width = style.transform = style.margin = '';

    if (placement === 'left-bottom') {
      style.left = "20px";
      style.bottom = "20px";
    } else if (placement === 'right-bottom') {
      style.right = "20px";
      style.bottom = "20px";
    } else if (placement === 'center-bottom') {
      style.left = "50%";
      style.bottom = "20px";
      style.transform = "translateX(-50%)";
    } else if (placement === 'full-width') {
      style.left = "0";
      style.right = "0";
      style.bottom = "0";
      style.width = "100%";
      style.borderRadius = "0";
    }
  }

  // create content
  function renderBanner() {
    var theme = computeThemeClass();
    bannerEl.classList.add(theme);

    bannerEl.innerHTML = '\
      <div style="display:flex;align-items:flex-start;gap:12px">\
        <div style="flex:1">\
          <div class="title">' + escapeHtml(T.title) + '</div>\
          <div class="desc">' + escapeHtml(T.description) + '</div>\
        </div>\
      </div>\
      <div style="margin-top:12px" class="controls">\
        <button class="accept">' + escapeHtml(T.accept) + '</button>\
        <button class="refuse">' + escapeHtml(T.refuse) + '</button>\
        <button class="adjust">' + escapeHtml(T.adjust) + '</button>\
      </div>';
    placeBanner();
  }

  function escapeHtml(s) {
    if (typeof s !== 'string') return s;
    return s.replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }

  renderBanner();
  root.appendChild(bannerEl);

  // Modal UI (hidden by default)
  var backdrop = null;
  function buildModal() {
    backdrop = document.createElement('div');
    backdrop.className = 'cookie-modal-backdrop';
    backdrop.style.display = 'none';
    var modal = document.createElement('div');
    modal.className = 'cookie-modal';
    modal.style.width = Math.min(CONFIG.modalWidth, window.innerWidth - 40) + 'px';
    modal.innerHTML = '\
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">\
        <h3>' + escapeHtml(T.modalTitle) + '</h3>\
        <button class="modal-close" aria-label="Close" style="border:0;background:transparent;cursor:pointer;font-size:18px">✕</button>\
      </div>\
      <div style="margin-bottom:8px;color:#555">' + escapeHtml(T.modalDescription) + '</div>\
      <div class="preference-row">\
        <div style="flex:1">\
          <div style="font-weight:700">' + escapeHtml(T.necessary) + '</div>\
          <div class="desc">' + escapeHtml(T.necessaryDesc) + '</div>\
        </div>\
        <div style="margin-left:12px;display:flex;align-items:center">\
          <div class="toggle on" data-key="necessary"><div class="knob"></div></div>\
        </div>\
      </div>\
      <div class="preference-row">\
        <div style="flex:1">\
          <div style="font-weight:700">' + escapeHtml(T.functional) + '</div>\
          <div class="desc">' + escapeHtml(T.functionalDesc) + '</div>\
        </div>\
        <div style="margin-left:12px;display:flex;align-items:center">\
          <div class="toggle" data-key="functional"><div class="knob"></div></div>\
        </div>\
      </div>\
      <div class="preference-row">\
        <div style="flex:1">\
          <div style="font-weight:700">' + escapeHtml(T.analytics) + '</div>\
          <div class="desc">' + escapeHtml(T.analyticsDesc) + '</div>\
        </div>\
        <div style="margin-left:12px;display:flex;align-items:center">\
          <div class="toggle" data-key="analytics"><div class="knob"></div></div>\
        </div>\
      </div>\
      <div class="preference-row" style="border-bottom:0">\
        <div style="flex:1">\
          <div style="font-weight:700">' + escapeHtml(T.marketing) + '</div>\
          <div class="desc">' + escapeHtml(T.marketingDesc) + '</div>\
        </div>\
        <div style="margin-left:12px;display:flex;align-items:center">\
          <div class="toggle" data-key="marketing"><div class="knob"></div></div>\
        </div>\
      </div>\
      <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px">\
        <button class="modal-cancel">' + escapeHtml(T.cancel) + '</button>\
        <button class="modal-save" style="background:#2e8b57;color:#fff;border:0;padding:10px 14px;border-radius:6px">' + escapeHtml(T.save) + '</button>\
      </div>';
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    // Initialize toggles from state
    setTimeout(initModalToggles, 0);
  }

  function initModalToggles() {
    if (!backdrop) return;
    var toggles = backdrop.querySelectorAll('.toggle');
    Array.prototype.forEach.call(toggles, function (el) {
      var key = el.getAttribute('data-key');
      if (key === 'necessary') {
        el.classList.add('on'); // locked on
      } else {
        if (state.categories[key]) el.classList.add('on'); else el.classList.remove('on');
        el.addEventListener('click', function () {
          el.classList.toggle('on');
        });
      }
    });
    // close, save, cancel
    var closeBtn = backdrop.querySelector('.modal-close');
    var cancelBtn = backdrop.querySelector('.modal-cancel');
    var saveBtn = backdrop.querySelector('.modal-save');
    closeBtn && closeBtn.addEventListener('click', closePreferencesModal);
    cancelBtn && cancelBtn.addEventListener('click', closePreferencesModal);
    saveBtn && saveBtn.addEventListener('click', function () {
      // read toggles
      var togglesNow = backdrop.querySelectorAll('.toggle');
      Array.prototype.forEach.call(togglesNow, function (el) {
        var key = el.getAttribute('data-key');
        if (key === 'necessary') return;
        state.categories[key] = el.classList.contains('on');
      });
      updateGcsFromCategories();
      saveState();
      postConsentChange('custom_save');
      closePreferencesModal();
      showTemporaryMessage(T.allDone);
    });
  }

  function openPreferencesModal() {
    if (!backdrop) buildModal();
    backdrop.style.display = 'flex';
  }
  function closePreferencesModal() {
    if (!backdrop) return;
    backdrop.style.display = 'none';
  }

  function showTemporaryMessage(msg) {
    var m = document.createElement('div');
    m.style.position = 'fixed';
    m.style.bottom = '30px';
    m.style.left = '50%';
    m.style.transform = 'translateX(-50%)';
    m.style.background = '#2e8b57';
    m.style.color = '#fff';
    m.style.padding = '10px 14px';
    m.style.borderRadius = '8px';
    m.style.zIndex = 2147483648;
    m.style.fontWeight = '700';
    m.innerText = msg;
    document.body.appendChild(m);
    setTimeout(function () { m.style.opacity = '0'; m.style.transition = '0.5s'; setTimeout(function(){m.remove();},600); }, 1600);
  }

  /* ============================
     Button handlers
     ============================ */
  function bindBannerButtons() {
    var acceptBtn = bannerEl.querySelector('.accept');
    var refuseBtn = bannerEl.querySelector('.refuse');
    var adjustBtn = bannerEl.querySelector('.adjust');

    acceptBtn && acceptBtn.addEventListener('click', function () {
      // grant all non-necessary
      state.categories.functional = true;
      state.categories.analytics = true;
      state.categories.marketing = true;
      updateGcsFromCategories();
      saveState();
      // close banner
      hideBanner();
      postConsentChange('accept_all');
      showTemporaryMessage(T.allDone);
    });

    refuseBtn && refuseBtn.addEventListener('click', function () {
      // deny all non-necessary
      state.categories.functional = false;
      state.categories.analytics = false;
      state.categories.marketing = false;
      updateGcsFromCategories();
      saveState();
      hideBanner();
      postConsentChange('refuse_all');
      showTemporaryMessage(T.allDone);
    });

    adjustBtn && adjustBtn.addEventListener('click', function () {
      openPreferencesModal();
    });
  }

  function hideBanner() {
    bannerEl.style.opacity = '0';
    bannerEl.style.transform = 'translateY(10px)';
    setTimeout(function () {
      try { bannerEl.remove(); } catch (e) { bannerEl.style.display = 'none'; }
    }, 320);
  }

  /* ============================
     Initialize behavior on page load
     ============================ */

  // If state loaded from cookie -> apply and do not show banner
  if (loadSaved()) {
    // apply settings silently
    updateGcsFromCategories();
    updateGtagConsent();
    // push initial event
    pushDataLayerEvent('cookie_consent_loaded', { gcs: state.gcs, categories: state.categories });
    // load scripts that are now allowed
    setTimeout(loadDeferredScripts, 50);
    // do not display banner if already saved
  } else {
    // show banner after small delay
    setTimeout(function () {
      renderBanner();
      bindBannerButtons();
      // attach adjust -> open modal
      var adjustBtn = bannerEl.querySelector('.adjust');
      if (adjustBtn) adjustBtn.addEventListener('click', openPreferencesModal);
      // show initial dataLayer event (default denied)
      pushDataLayerEvent('cookie_banner_shown', { gcs: state.gcs, categories: state.categories });
    }, CONFIG.showBannerAfterMS);
  }

  // Build modal but hidden to save a tick
  buildModal();

  // Expose a helper to programmatically set categories (useful for integrations)
  window.CookieConsent.setCategories = function (obj) {
    if (!isObject(obj)) return;
    ['functional','analytics','marketing'].forEach(function(k){
      if (typeof obj[k] === 'boolean') state.categories[k] = obj[k];
    });
    updateGcsFromCategories();
    saveState();
    postConsentChange('programmatic_update');
  };

  // Expose a helper to get GCS object
  window.CookieConsent.getGcs = function () {
    return JSON.parse(JSON.stringify(state.gcs));
  };

  // If user wants to revoke later, they can call CookieConsent.denyAll() or open preferences.
  // Push initial cookie consent state to dataLayer for GTM to read
  pushDataLayerEvent('cookie_consent_initialized', { gcs: state.gcs, categories: state.categories });

  // Listen for system theme changes if auto
  if (CONFIG.enableAutoDark) {
    try {
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
          // If theme is auto, update banner look if present
          if (CONFIG.theme === 'auto') {
            renderBanner();
          }
        });
      }
    } catch (e) { /* ignore old browsers */ }
  }

  // Done - return
})();
</script>
