// ==UserScript==
// @name         LinkedIn Auto-Uncheck Follow Company Checkbox
// @namespace    https://github.com/itakurah
// @version      1.1
// @description  Automatically uncheck the "Follow Company" checkbox on LinkedIn's dynamic site
// @author       itakurah
// @match        *://www.linkedin.com/jobs*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to uncheck the "Follow Company" checkbox
    function uncheckFollowCompanyCheckbox() {
        const label = document.querySelector('label[for="follow-company-checkbox"]');

        if (label) {
            const checkbox = document.getElementById('follow-company-checkbox');
            if (checkbox && checkbox.checked) {
                checkbox.checked = false;
                console.log("Follow Company checkbox automatically unchecked.");
            }
        }
    }

    // Observe the document body for dynamic changes
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                uncheckFollowCompanyCheckbox();
            }
        }
    });

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
})();
