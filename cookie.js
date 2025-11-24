var control = {
        licenceInfo: "alifFiverr",
        logo: "https://bungeeclub.bg/wp-content/uploads/2025/04/bungeeclub-dark.svg",
        privacyPage: "https://bungeeclub.bg/privacy-policy/",
        showLogo: !0,
        logoWith: "50px",
        closeBtn: !0,
        consentDefault: !1,
        activeNavAndContent: 0,
        defaultCookiePaths: ["_ga", "_gid", "_gat", "_gcl_au", "_gcl_aw", "_gcl_dc", "_fbp", "_fbc"],
        removeRejectBtn: !1,
        showBanner: !0,
        miniIcon: !0,
        geoLocation: !1,
        getLocationCoutries: [
            "AT",
            "BE",
            "BG",
            "HR",
            "CY",
            "CZ",
            "DK",
            "EE",
            "FI",
            "FR",
            "DE",
            "GR",
            "HU",
            "IS",
            "IE",
            "IT",
            "LV",
            "LI",
            "LT",
            "LU",
            "MT",
            "NL",
            "NO",
            "PL",
            "PT",
            "RO",
            "SK",
            "SI",
            "ES",
            "SE",
        ],
        marketingParameters: [
            "utm_source",
            "utm_medium",
            "utm_campaign",
            "utm_term",
            "utm_content",
            "gclid",
            "dclid",
            "gbraid",
            "wbraid",
            "fbclid",
            "msclkid",
            "ttclid",
            "twclid",
            "pclid",
            "sclid",
        ],
        enableConsentOnSpecificPage: !0,
        disableBannerForAdsUsers: !1,
        enableWaterMark: !0,
        bannerShowingDelay: 500,
        clickLoaderDelay: 500,
    },
    bulgarianContentInfo = {
        navText: ["Ð¡ÑŠÐ³Ð»Ð°ÑÐ¸Ðµ", "ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚Ð¸", "ÐžÑ‚Ð½Ð¾ÑÐ½Ð¾"],
        section1:
            "Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, Ð·Ð° Ð´Ð° Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼ Ð²Ð°ÑˆÐµÑ‚Ð¾ Ð¸Ð·Ð¶Ð¸Ð²ÑÐ²Ð°Ð½Ðµ, ÐºÐ°ÐºÑ‚Ð¾ Ð¸ Ð·Ð° Ð°Ð½Ð°Ð»Ð¸Ð· Ð¸ Ð¸Ð·Ð¼ÐµÑ€Ð²Ð°Ð½Ðµ. ÐŸÑ€Ð¾Ð´ÑŠÐ»Ð¶Ð°Ð²Ð°Ð¹ÐºÐ¸ Ð´Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚Ðµ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚ Ð¸ ÑƒÑÐ»ÑƒÐ³Ð¸, Ð²Ð¸Ðµ ÑÐµ ÑÑŠÐ³Ð»Ð°ÑÑÐ²Ð°Ñ‚Ðµ Ñ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, ÐºÐ°ÐºÑ‚Ð¾ Ðµ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¾ Ð² Ð½Ð°ÑˆÐ°Ñ‚Ð° ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¸ ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚. Ð—Ð° Ð¿Ð¾Ð²ÐµÑ‡Ðµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð¾Ñ‚Ð½Ð¾ÑÐ½Ð¾ Ð½Ð°Ñ‡Ð¸Ð½Ð°, Ð¿Ð¾ ÐºÐ¾Ð¹Ñ‚Ð¾ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚Ð²Ð°Ð¼Ðµ Ð²Ð°ÑˆÐ¸Ñ‚Ðµ Ð´Ð°Ð½Ð½Ð¸, Ð¼Ð¾Ð»Ñ, Ð¿Ð¾ÑÐµÑ‚ÐµÑ‚Ðµ Ð½Ð°ÑˆÐ°Ñ‚Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ð·Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚.",
        section3:
            "Ð‘Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ ÑÐ° Ð¼Ð°Ð»ÐºÐ¸ Ñ‚ÐµÐºÑÑ‚Ð¾Ð²Ð¸ Ñ„Ð°Ð¹Ð»Ð¾Ð²Ðµ, Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½Ð¸ Ð¾Ñ‚ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð¾Ð²ÐµÑ‚Ðµ Ð·Ð° Ð¿Ð¾Ð´Ð¾Ð±Ñ€ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¸Ñ‚ÐµÐ»ÑÐºÐ¾Ñ‚Ð¾ Ð¸Ð·Ð¶Ð¸Ð²ÑÐ²Ð°Ð½Ðµ. Ð—Ð°ÐºÐ¾Ð½ÑŠÑ‚ Ð¿Ð¾Ð·Ð²Ð¾Ð»ÑÐ²Ð° Ð´Ð° ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ð¼Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð½Ð° Ð²Ð°ÑˆÐµÑ‚Ð¾ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾, Ð°ÐºÐ¾ Ñ‚Ðµ ÑÐ° ÑÑ‚Ñ€Ð¾Ð³Ð¾ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¸ Ð·Ð° Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚Ð° Ð½Ð° Ñ‚Ð¾Ð·Ð¸ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚. Ð—Ð° Ð²ÑÐ¸Ñ‡ÐºÐ¸ Ð´Ñ€ÑƒÐ³Ð¸ Ð²Ð¸Ð´Ð¾Ð²Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐµ Ð¸Ð·Ð¸ÑÐºÐ²Ð° Ð²Ð°ÑˆÐµÑ‚Ð¾ ÑÑŠÐ³Ð»Ð°ÑÐ¸Ðµ. Ð¢Ð¾Ð²Ð° Ð¾Ð·Ð½Ð°Ñ‡Ð°Ð²Ð°, Ñ‡Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ, ÐºÐ»Ð°ÑÐ¸Ñ„Ð¸Ñ†Ð¸Ñ€Ð°Ð½Ð¸ ÐºÐ°Ñ‚Ð¾ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¸, ÑÐµ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÑÐ²Ð°Ñ‚ ÑÑŠÐ³Ð»Ð°ÑÐ½Ð¾ Ñ‡Ð»ÐµÐ½ 6(1)(f) Ð¾Ñ‚ GDPR. Ð’ÑÐ¸Ñ‡ÐºÐ¸ Ð´Ñ€ÑƒÐ³Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, ÐºÐ°Ñ‚Ð¾ Ñ‚ÐµÐ·Ð¸ Ð² ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ð¸Ñ‚Ðµ ÐŸÑ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸Ñ Ð¸ ÐœÐ°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³, ÑÐµ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÑÐ²Ð°Ñ‚ ÑÑŠÐ³Ð»Ð°ÑÐ½Ð¾ Ñ‡Ð»ÐµÐ½ 6(1)(a) Ð¾Ñ‚ GDPR. Ð¢Ð¾Ð·Ð¸ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð° Ñ€Ð°Ð·Ð»Ð¸Ñ‡Ð½Ð¸ Ð²Ð¸Ð´Ð¾Ð²Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸. ÐÑÐºÐ¾Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐµ Ð¿Ð¾ÑÑ‚Ð°Ð²ÑÑ‚ Ð¾Ñ‚ ÑƒÑÐ»ÑƒÐ³Ð¸ Ð½Ð° Ñ‚Ñ€ÐµÑ‚Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸, ÐºÐ¾Ð¸Ñ‚Ð¾ ÑÐµ Ð¿Ð¾ÑÐ²ÑÐ²Ð°Ñ‚ Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ‚Ðµ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð¸.",
        section3PrivacyLink: `<div class="consentPPLinkWrapper">ÐÐ°ÑƒÑ‡ÐµÑ‚Ðµ Ð¿Ð¾Ð²ÐµÑ‡Ðµ Ð·Ð° Ñ‚Ð¾Ð²Ð° ÐºÐ¾Ð¸ ÑÐ¼Ðµ Ð½Ð¸Ðµ, ÐºÐ°Ðº Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð´Ð° ÑÐµ ÑÐ²ÑŠÑ€Ð¶ÐµÑ‚Ðµ Ñ Ð½Ð°Ñ Ð¸ ÐºÐ°Ðº Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚Ð²Ð°Ð¼Ðµ Ð»Ð¸Ñ‡Ð½Ð¸Ñ‚Ðµ Ð²Ð¸ Ð´Ð°Ð½Ð½Ð¸ Ð² Ð½Ð°ÑˆÐ°Ñ‚Ð° <a target="_blank" class="consentPPLink" href="${control.privacyPage}">ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚</a>.</div>`,
        buttons: ["ÐŸÑ€Ð¸ÐµÐ¼Ð°Ð¼", "ÐžÑ‚ÐºÐ°Ð·Ð²Ð°Ð¼", "ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ðµ", "Ð—Ð°Ð¿Ð°Ð·Ð²Ð°Ð½Ðµ"],
        categoryText: [
            "Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸",
            "ÐŸÑ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸Ñ",
            "ÐÐ½Ð°Ð»Ð¸Ð·",
            "ÐœÐ°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³",
            "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð¸",
        ],
        categoryDescription: [
            "ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¸Ñ‚Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¿Ñ€Ð°Ð²ÑÑ‚ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°ÐµÐ¼, ÐºÐ°Ñ‚Ð¾ Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð°Ñ‚ Ð¾ÑÐ½Ð¾Ð²Ð½Ð¸ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ ÐºÐ°Ñ‚Ð¾ Ð½Ð°Ð²Ð¸Ð³Ð°Ñ†Ð¸Ñ Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð¸Ñ‚Ðµ Ð¸ Ð´Ð¾ÑÑ‚ÑŠÐ¿ Ð´Ð¾ Ð·Ð°Ñ‰Ð¸Ñ‚ÐµÐ½Ð¸ Ð·Ð¾Ð½Ð¸ Ð½Ð° ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð°. Ð‘ÐµÐ· Ñ‚ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚ÑŠÑ‚ Ð½Ðµ Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð¸Ñ€Ð° Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð½Ð¾.",
            "Ð‘Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ Ð·Ð° Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸Ñ Ð¿Ð¾Ð·Ð²Ð¾Ð»ÑÐ²Ð°Ñ‚ Ð½Ð° ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð° Ð´Ð° Ð·Ð°Ð¿Ð¾Ð¼Ð½Ñ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ, ÐºÐ¾ÑÑ‚Ð¾ Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ñ Ð½Ð°Ñ‡Ð¸Ð½Ð°, Ð¿Ð¾ ÐºÐ¾Ð¹Ñ‚Ð¾ ÑÐ°Ð¹Ñ‚ÑŠÑ‚ ÑÐµ Ð´ÑŠÑ€Ð¶Ð¸ Ð¸Ð»Ð¸ Ð¸Ð·Ð³Ð»ÐµÐ¶Ð´Ð°, ÐºÐ°Ñ‚Ð¾ Ð²Ð°ÑˆÐ¸Ñ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½ ÐµÐ·Ð¸Ðº Ð¸Ð»Ð¸ Ñ€ÐµÐ³Ð¸Ð¾Ð½Ð°, Ð² ÐºÐ¾Ð¹Ñ‚Ð¾ ÑÐµ Ð½Ð°Ð¼Ð¸Ñ€Ð°Ñ‚Ðµ.",
            "ÐÐ½Ð°Ð»Ð¸Ñ‚Ð¸Ñ‡Ð½Ð¸Ñ‚Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¿Ð¾Ð¼Ð°Ð³Ð°Ñ‚ Ð½Ð° ÑÐ¾Ð±ÑÑ‚Ð²ÐµÐ½Ð¸Ñ†Ð¸Ñ‚Ðµ Ð½Ð° ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð¾Ð²Ðµ Ð´Ð° Ñ€Ð°Ð·Ð±ÐµÑ€Ð°Ñ‚ ÐºÐ°Ðº Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸Ñ‚Ðµ Ð²Ð·Ð°Ð¸Ð¼Ð¾Ð´ÐµÐ¹ÑÑ‚Ð²Ð°Ñ‚ ÑÑŠÑ ÑÐ°Ð¹Ñ‚Ð¾Ð²ÐµÑ‚Ðµ, ÐºÐ°Ñ‚Ð¾ ÑÑŠÐ±Ð¸Ñ€Ð°Ñ‚ Ð¸ Ð¾Ñ‚Ñ‡Ð¸Ñ‚Ð°Ñ‚ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð½Ð¾.",
            "ÐœÐ°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ Ð·Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸Ñ‚Ðµ Ð¼ÐµÐ¶Ð´Ñƒ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð¾Ð²Ðµ. Ð¦ÐµÐ»Ñ‚Ð° Ðµ Ð´Ð° ÑÐµ Ð¿Ð¾ÐºÐ°Ð·Ð²Ð°Ñ‚ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸, ÐºÐ¾Ð¸Ñ‚Ð¾ ÑÐ° Ñ€ÐµÐ»ÐµÐ²Ð°Ð½Ñ‚Ð½Ð¸ Ð¸ Ð°Ð½Ð³Ð°Ð¶Ð¸Ñ€Ð°Ñ‰Ð¸ Ð·Ð° Ð¾Ñ‚Ð´ÐµÐ»Ð½Ð¸Ñ Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¸Ñ‚ÐµÐ», ÐºÐ°Ñ‚Ð¾ Ð¿Ð¾ Ñ‚Ð¾Ð·Ð¸ Ð½Ð°Ñ‡Ð¸Ð½ ÑÐ° Ð¿Ð¾-Ñ†ÐµÐ½Ð½Ð¸ Ð·Ð° Ð¸Ð·Ð´Ð°Ñ‚ÐµÐ»Ð¸Ñ‚Ðµ Ð¸ Ð²ÑŠÐ½ÑˆÐ½Ð¸Ñ‚Ðµ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¾Ð´Ð°Ñ‚ÐµÐ»Ð¸.",
            "ÐÐµÐºÐ»Ð°ÑÐ¸Ñ„Ð¸Ñ†Ð¸Ñ€Ð°Ð½Ð¸Ñ‚Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐ° Ñ‚Ð°ÐºÐ¸Ð²Ð°, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð² Ð¼Ð¾Ð¼ÐµÐ½Ñ‚Ð° ÐºÐ»Ð°ÑÐ¸Ñ„Ð¸Ñ†Ð¸Ñ€Ð°Ð¼Ðµ Ð·Ð°ÐµÐ´Ð½Ð¾ Ñ Ð´Ð¾ÑÑ‚Ð°Ð²Ñ‡Ð¸Ñ†Ð¸Ñ‚Ðµ Ð½Ð° ÑÑŠÐ¾Ñ‚Ð²ÐµÑ‚Ð½Ð¸Ñ‚Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸.",
        ],
        learnMoreText: "ÐÐ°ÑƒÑ‡ÐµÑ‚Ðµ Ð¿Ð¾Ð²ÐµÑ‡Ðµ Ð·Ð° Ñ‚Ð¾Ð·Ð¸ Ð´Ð¾ÑÑ‚Ð°Ð²Ñ‡Ð¸Ðº",
        noCookieText: "ÐÑÐ¼Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¿Ð¾ÐºÐ°Ð·Ð²Ð°Ð½Ðµ",
    },
    contentInfo = bulgarianContentInfo,
    cookieInfo = { functional: {}, prefrence: {}, analytics: {}, marketing: {}, unknown: {} };
function gtag() {
    dataLayer.push(arguments);
}
function log(e) {}
function dataLayerPush(e) {
    (window.dataLayer = window.dataLayer || []), window.dataLayer.push({ event: e });
}
(window.dataLayer = window.dataLayer || []), (window.disableConsentPageList = window.disableConsentPageList || []);
var consent = {
        ad_storage: control.consentDefault ? "granted" : "denied",
        ad_user_data: control.consentDefault ? "granted" : "denied",
        ad_personalization: control.consentDefault ? "granted" : "denied",
        analytics_storage: control.consentDefault ? "granted" : "denied",
        functionality_storage: control.consentDefault ? "granted" : "denied",
        personalization_storage: control.consentDefault ? "granted" : "denied",
        unclassified_storage: control.consentDefault ? "granted" : "denied",
        security_storage: "granted",
    },
    cookieReplacements = {
        _ga_DYVSV686H8: "_ga_*",
        "wp-settings-1": "wp-settings-",
        "wp-settings-time-1": "wp-settings-time-",
    },
    getWebCookies = document.cookie.split(";").map(function (e) {
        return e.split("=")[0].trim();
    });
getWebCookies = getWebCookies.concat(control.defaultCookiePaths);
for (let e = 0; e < localStorage.length; e++) getWebCookies.push(localStorage.key(e));
for (let e = 0; e < sessionStorage.length; e++) getWebCookies.push(sessionStorage.key(e));
async function getUserCountryCode() {
    if (control.geoLocation)
        try {
            var e = !1;
            const n = localStorage.getItem("consent_country");
            if (n)
                control.getLocationCoutries.forEach((t) => {
                    t == n && (e = !0);
                }),
                    (control.showBanner = !!e);
            else if (!n) {
                const n = await fetch("https://ipinfo.io/json?token=300abcf485f9a1"),
                    t = await n.json();
                localStorage.setItem("consent_country", t.country),
                    control.getLocationCoutries.forEach((n) => {
                        n == t.country && (e = !0);
                    }),
                    (control.showBanner = !!e);
            }
        } catch (e) {}
}
async function getCookieData() {
    if (control.showBanner) {
        const e = "https://consent-banner-template-1498a0.gitlab.io/cookie.json";
        try {
            const n = await fetch(e),
                t = await n.json();
            let o = [];
            t.forEach(function (e) {
                getWebCookies.includes(e.data_key) &&
                    (o.push(e.data_key),
                    Object.keys(cookieInfo).forEach(function (n) {
                        e.category.toLowerCase() == n &&
                            (cookieInfo[n][e.data_controller] || (cookieInfo[n][e.data_controller] = []),
                            cookieInfo[n][e.data_controller].push(e));
                    }));
            }),
                getWebCookies.forEach(function (e) {
                    if (!o.includes(e)) {
                        let n = {
                            ID: "",
                            platform: "Website",
                            category: "Unknown",
                            data_key: e,
                            domain: window.location.host,
                            description: "Cookie info is unknown",
                            retention_period: "Unknown",
                            data_controller: "Website",
                            privacy_rights_portals: `${control.privacyPage}`,
                            wildcard_match: 1,
                        };
                        cookieInfo.unknown.Website || (cookieInfo.unknown.Website = []),
                            cookieInfo.unknown.Website.push(n);
                    }
                });
        } catch (e) {}
    }
}
function onVisit() {
    const e = new URLSearchParams(window.location.search);
    let n = JSON.parse(localStorage.getItem("marketingParams") || "{}"),
        t = !1;
    if (
        (control.marketingParameters.forEach((o) => {
            e.has(o) && ((n[o] = e.get(o)), (t = !0));
        }),
        t && localStorage.setItem("marketingParams", JSON.stringify(n)),
        control.disableBannerForAdsUsers)
    ) {
        var o = !1;
        let e = new URLSearchParams(document.location.search);
        (e.get("gclid") || e.get("fbclid")) && (o = !0);
        let n = ["_gcl_aw", "_fbc"];
        document.cookie.split(";").forEach(function (e) {
            let t = e.split("=")[0].trim();
            n.forEach(function (e) {
                e == t && (o = !0);
            });
        }),
            o && (control.showBanner = !1);
    }
    if (
        (control.enableConsentOnSpecificPage &&
            disableConsentPageList.forEach(function (e) {
                window.location.pathname.includes(e) && (control.showBanner = !1);
            }),
        control.showBanner)
    ) {
        var a = JSON.parse(localStorage.getItem("bannerChoice"));
        a ? gtag("consent", "update", a) : gtag("consent", "default", consent), dataLayerPush("consent_page_view");
    } else
        Object.keys(consent).forEach(function (e) {
            consent[e] = "granted";
        }),
            gtag("consent", "default", consent),
            dataLayerPush("consent_page_view");
}
function closeBannerControll() {
    var e = document.querySelector(".closeBanner");
    let n = localStorage.getItem("bannerChoice");
    e.style.display = n && control.closeBtn ? "flex" : "none";
}
function replaceAndControll() {
    var e = document.querySelector(".bannerLogo");
    control.showLogo && ((e.innerHTML = `<img src="${control.logo}" alt="">`), (e.style.width = control.logoWith)),
        closeBannerControll(),
        document.querySelectorAll(".bannerNavWrapper .nav").forEach(function (e, n) {
            e.innerHTML = contentInfo.navText[n];
        });
    var n = document.querySelectorAll(".bannerContentWrapper .content");
    (n[0].innerHTML = contentInfo.section1),
        (n[2].innerHTML = contentInfo.section3 + contentInfo.section3PrivacyLink),
        document.querySelectorAll(".bannerButtons button").forEach(function (e, n) {
            e.innerHTML = contentInfo.buttons[n];
        });
}
function restEvents() {
    function e() {
        const e = JSON.parse(localStorage.getItem("marketingParams") || "{}");
        if (!e || 0 === Object.keys(e).length) return;
        const n = new URL(window.location.href),
            t = new URLSearchParams(n.search);
        for (const [n, o] of Object.entries(e)) t.set(n, o);
        const o = `${n.origin}${n.pathname}?${t.toString()}${n.hash}`;
        window.history.replaceState({}, "", o);
    }
    function n() {
        var e = JSON.parse(localStorage.getItem("bannerChoice")) || {},
            n = document.querySelectorAll(".consentBannerSwitch input");
        n[0] && (n[0].checked = !0),
            n[1] && (n[1].checked = "granted" === e.functionality_storage),
            n[2] && (n[2].checked = "granted" === e.analytics_storage),
            n[3] && (n[3].checked = "granted" === e.ad_personalization),
            n[4] && (n[4].checked = "granted" === e.unclassified_storage),
            n[5] && (n[5].checked = "granted" === e.security_storage);
    }
    control.showBanner &&
        (JSON.parse(localStorage.getItem("bannerChoice"))
            ? control.miniIcon &&
              setTimeout(function () {
                  t(!1, !0);
              }, control.bannerShowingDelay)
            : setTimeout(function () {
                  t(!0, !1);
              }, control.bannerShowingDelay));
    function t(e, n) {
        (document.querySelector(".consentBannerBG").style.display = e ? "flex" : "none"),
            (document.querySelector(".miniIcon").style.display = n ? "flex" : "none");
    }
    let o = document.querySelector(".divLoader"),
        a = document.querySelector(".consentBannerWrapper");
    function c() {
        (o.style.display = "block"), a.classList.add("addBlur");
    }
    function r() {
        (o.style.display = "none"), a.classList.remove("addBlur");
    }
    var i = document.querySelector(".closeBanner"),
        s = document.querySelectorAll(".bannerNavWrapper .nav"),
        l = document.querySelectorAll(".bannerContentWrapper .content"),
        d = document.querySelectorAll(".bannerCategory"),
        u = document.querySelectorAll(".allProviderWrapper"),
        g = document.querySelectorAll(".cookiesProviderWrapper"),
        f = document.querySelectorAll(".arrowCategory"),
        p = document.querySelectorAll(".cookieInfoHeader"),
        v = document.querySelectorAll(".allCookieInfoWrapper"),
        h = document.querySelectorAll(".arrowCookie"),
        m = document.querySelectorAll(".bannerButtons button"),
        k = control.activeNavAndContent,
        y = document.querySelector(".miniIcon"),
        b = document.querySelectorAll(".consentBannerSwitch");
    0 !== b.length &&
        ((b[0].style.opacity = "0.5"),
        (b[0].querySelector("input").checked = !0),
        (b[0].querySelector("input").disabled = !0)),
        s[k].classList.add("navActiveBorder"),
        l[k].classList.add("activeFlex"),
        (i.onclick = function () {
            t(!1, !!control.miniIcon);
        }),
        (y.onclick = function () {
            t(!0, !1), closeBannerControll();
        }),
        s.forEach(function (e, t) {
            e.onclick = function () {
                s.forEach(function (e) {
                    e.classList.remove("navActiveBorder");
                }),
                    s[t].classList.add("navActiveBorder"),
                    l.forEach(function (e) {
                        e.classList.remove("activeFlex"), e.classList.add("hideElement");
                    }),
                    l[t].classList.remove("hideElement"),
                    l[t].classList.add("activeFlex"),
                    1 == t
                        ? ((m[2].innerText = contentInfo.buttons[3]),
                          document.querySelector(".bannerButtons").classList.add("btnShadow"),
                          (document.querySelectorAll(".bannerButtons button")[2].id = "save"),
                          n())
                        : ((m[2].innerText = contentInfo.buttons[2]),
                          document.querySelector(".bannerButtons").classList.remove("btnShadow"),
                          (document.querySelectorAll(".bannerButtons button")[2].id = "custom"));
            };
        }),
        d.forEach(function (e, n) {
            e.onclick = function (e) {
                var t = u[n].classList.contains("activeFlex");
                u.forEach(function (e) {
                    e.classList.remove("activeFlex");
                }),
                    u[n].classList.add("activeFlex"),
                    f.forEach(function (e) {
                        e.classList.remove("rotate");
                    }),
                    f[n].classList.add("rotate"),
                    t && (u[n].classList.remove("activeFlex"), f[n].classList.remove("rotate"));
            };
        }),
        g.forEach(function (e) {
            e.onclick = function (e) {
                e.stopPropagation();
            };
        }),
        p.forEach(function (e, n) {
            e.onclick = function () {
                var e = v[n].classList.contains("activeFlex");
                v.forEach(function (e) {
                    e.classList.remove("activeFlex");
                }),
                    v[n].classList.add("activeFlex"),
                    h.forEach(function (e) {
                        e.classList.remove("rotate");
                    }),
                    h[n].classList.add("rotate"),
                    e && (v[n].classList.remove("activeFlex"), h[n].classList.remove("rotate"));
            };
        }),
        control.removeRejectBtn && (m[1].style.display = "none"),
        m.forEach(function (o, a) {
            o.onclick = function (i) {
                var d = document.querySelectorAll(".consentBannerSwitch input");
                0 == a
                    ? (e(),
                      Object.keys(consent).forEach(function (e) {
                          consent[e] = "granted";
                      }),
                      gtag("consent", "update", consent),
                      dataLayerPush("consent_update"),
                      localStorage.setItem("bannerChoice", JSON.stringify(consent)),
                      d.forEach(function (e) {
                          e.checked = !0;
                      }),
                      c(),
                      setTimeout(function () {
                          t(!1, !!control.miniIcon), r();
                      }, control.clickLoaderDelay))
                    : 1 == a
                      ? (Object.keys(consent).forEach(function (e, n) {
                            7 != n && (consent[e] = "denied");
                        }),
                        gtag("consent", "update", consent),
                        dataLayerPush("consent_update"),
                        localStorage.setItem("bannerChoice", JSON.stringify(consent)),
                        d.forEach(function (e, n) {
                            0 != n && (e.checked = !1);
                        }),
                        c(),
                        setTimeout(function () {
                            t(!1, !!control.miniIcon), r();
                        }, control.clickLoaderDelay))
                      : 2 == a &&
                        ("custom" == o.id
                            ? (s.forEach(function (e) {
                                  e.classList.remove("navActiveBorder");
                              }),
                              s[1].classList.add("navActiveBorder"),
                              l.forEach(function (e) {
                                  e.classList.remove("activeFlex"), e.classList.add("hideElement");
                              }),
                              l[1].classList.remove("hideElement"),
                              l[1].classList.add("activeFlex"),
                              (m[2].innerText = contentInfo.buttons[3]),
                              (o.id = "save"),
                              document.querySelector(".bannerButtons").classList.add("btnShadow"),
                              n())
                            : "save" == o.id &&
                              (e(),
                              d.forEach(function (e, n) {
                                  0 == n
                                      ? ((consent.security_storage = e.checked ? "granted" : "denied"),
                                        (consent.functionality_storage = e.checked ? "granted" : "denied"))
                                      : 1 == n
                                        ? (consent.personalization_storage = e.checked ? "granted" : "denied")
                                        : 2 == n
                                          ? (consent.analytics_storage = e.checked ? "granted" : "denied")
                                          : 3 == n
                                            ? ((consent.ad_user_data = e.checked ? "granted" : "denied"),
                                              (consent.ad_personalization = e.checked ? "granted" : "denied"),
                                              (consent.ad_storage = e.checked ? "granted" : "denied"))
                                            : 4 == n &&
                                              (consent.unclassified_storage = e.checked ? "granted" : "denied");
                              }),
                              localStorage.setItem("bannerChoice", JSON.stringify(consent)),
                              gtag("consent", "update", consent),
                              dataLayerPush("consent_update"),
                              c(),
                              setTimeout(function () {
                                  t(!1, !!control.miniIcon), r();
                              }, control.clickLoaderDelay)));
            };
        });
}
function createMainElements() {
    var e = document.createElement("div");
    e.classList.add("consentBannerBG");
    var n = document.createElement("div");
    n.classList.add("miniIcon");
    (e.innerHTML =
        '\n<div class="consentBannerWrapper">\n<div class="bannerHeader">\n    <div class="bannerLogo"></div>\n    <div class="closeBanner">\n        <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -1087.000000)" fill="#000000"> <path d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z" id="cross-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>\n    </div>\n</div>\n\n<div class="bannerNavWrapper bannerHeadline">\n    <div class="nav"></div>\n    <div class="nav"></div>\n    <div class="nav"></div>\n</div>\n\n<div class="bannerContentWrapper bannerDescription">\n    <div class="content"></div>\n    <div class="content cookieContentWrapper">\n        \n    </div>\n    <div class="content"></div>\n</div>\n\n\n<div class="bannerButtons">\n    <button class="btnActive"></button>\n    <button></button>\n    <button id="custom"></button>\n</div>\n\n<div class="divLoader">\n    \n</div>\n\n</div>\n\n\n'),
        (n.innerHTML =
            '\n    <svg width="50px" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.938.005-.034.016-.134.017-.168a.998.998 0 0 0-1.254-1.006A3.002 3.002 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-2 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.5-6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></g></svg>\n'),
        document.body.appendChild(e),
        document.body.appendChild(n);
}
function createElement() {
    var e = document.querySelector(".cookieContentWrapper"),
        n = "";
    Object.keys(cookieInfo).forEach(function (e, t) {
        var o = contentInfo.categoryText[t],
            a = contentInfo.categoryDescription[t],
            c = cookieInfo[e],
            r = Object.keys(c).reduce((e, n) => e + c[n].length, 0);
        (n += `\n    <div class="bannerCategory">\n        <div class="categoryHeaderWrapper">\n            <div class="categoryName bannerHeadline">\n                <svg class="arrow arrowCategory" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#292D32"></path> </g></svg>\n                <span class="categoryTitle">${o}</span>\n                <span class="cookieTotal">${r}</span>\n            </div>\n            <div class="categoryToggle">\n                <label class="consentBannerSwitch">\n                    <input type="checkbox" checked>\n                    <span class="consentSlider round"></span>\n                </label>\n            </div>\n        </div>\n\n        <div class="categoryDescription bannerDescription">\n            ${a}\n        </div>\n    `),
            0 === r
                ? (n += `\n        <div class="allProviderWrapper">\n            <div class="noCookie">${contentInfo.noCookieText}</div>\n        </div>\n        `)
                : ((n += '<div class="allProviderWrapper">'),
                  Object.keys(c).forEach(function (e) {
                      var t = c[e],
                          o = t.length;
                      (n += `\n                <div class="cookiesProviderWrapper">\n                    <div class="cookieInfoHeader bannerHeadline">\n                        <div class="providerName">\n                            ${e}\n                            <span class="cookieTotal">${o}</span>\n                        </div>\n                        <svg class="arrow arrowCookie" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#292D32"></path> </g></svg>\n                    </div>\n\n                    <div class="learnMoreWrapper bannerDescription">\n                        <a href="${t[0].privacy_rights_portals}" target="_blank">${contentInfo.learnMoreText}</a>\n                    </div>\n\n                    <div class="allCookieInfoWrapper">\n            `),
                          t.forEach(function (e) {
                              n += `\n                    <div class="cookieInfoWrapper bannerDescription">\n                        <div class="cookiePath">${e.data_key}</div>\n                        <div class="cookieDetails">${e.description}</div>\n                        <div class="cookieBorder"></div>\n                        <div class="cookieOtherInfo">\n                            <span>Retention: ${e.retention_period}</span>\n                            <span>Domain: ${e.domain || window.location.host}</span>\n                            <span>Controller: ${e.data_controller}</span>\n                        </div>\n                    </div>\n                `;
                          }),
                          (n += "</div>"),
                          (n += "</div>");
                  }),
                  (n += "</div>")),
            (n += "</div>");
    }),
        (e.innerHTML += n),
        logEvents("ðŸ”¤ Banner Element Created");
}
function logEvents(e) {
    control.enableWaterMark;
}
function restCode() {
    window.addEventListener("load", async function () {
        control.showBanner
            ? (await getCookieData(),
              logEvents("ðŸª Getting Cookie Data..."),
              createMainElements(),
              createElement(),
              replaceAndControll(),
              restEvents(),
              logEvents("ðŸ”¥ Tracking + Consent Banner By ALIFMAHMUD.COM"))
            : (logEvents("ðŸ”¥ Banner Disabled"), logEvents("ðŸ”¥ Tracking + Consent Banner By ALIFMAHMUD.COM"));
    });
}
(getWebCookies = (getWebCookies = getWebCookies.filter((e) => "" !== e)).map(function (e) {
    return cookieReplacements[e] || e;
})),
    (getWebCookies = [...new Set(getWebCookies)]),
    (async function () {
        onVisit(), logEvents("âœ… Updating Consent Settings..."), restCode();
    })();
