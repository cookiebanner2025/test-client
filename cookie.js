
                    const scrollPercentage = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
                    if (scrollPercentage > 30) {
                        acceptAllCookies();
                        hideCookieBanner();
                        if (config.behavior.showFloatingButton) {
                            showFloatingButton();
                        }
                    }
                }, 200);
            }
        });
    }

    // Handle continue button acceptance if enabled
    if (config.behavior.acceptOnContinue) {
        document.addEventListener('click', function(e) {
            if (!getCookie('cookie_consent') && bannerShown && 
                !e.target.closest('#cookieConsentBanner') && 
                !e.target.closest('#cookieSettingsModal')) {
                acceptAllCookies();
                hideCookieBanner();
                if (config.behavior.showFloatingButton) {
                    showFloatingButton();
                }
            }
        });
    }
});



// Add this function to check consent on each page load
function checkExistingClarityConsent() {
    const consentCookie = getCookie('cookie_consent');
    if (!consentCookie) return null;
    
    try {
        const consentData = JSON.parse(consentCookie);
        // Update Clarity with existing consent state
        ensureClarityConsentSignal(consentData.categories.analytics);
        return consentData.categories.analytics;
    } catch (e) {
        return null;
    }
}


// Export functions for global access if needed
if (typeof window !== 'undefined') {
    window.cookieConsent = {
        showBanner: showCookieBanner,
        hideBanner: hideCookieBanner,
        showSettings: showCookieSettings,
        acceptAll: acceptAllCookies,
        rejectAll: rejectAllCookies,
        saveSettings: saveCustomSettings,
        changeLanguage: changeLanguage,
        showAnalytics: showAnalyticsDashboard,
        config: config
    };
}

