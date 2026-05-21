// ==UserScript==
// @name       Unraid Forum posts in new tab
// @namespace  https://www.bitshark.se
// @version    0.5
// @description  Makes all links to forum posts open in a new tab
// @description  Edit the "match" address below for your needs.
// @match      https://forums.unraid.net/discover/*
// @grant none
// @copyright  2020+ Jan Karjalainen
// ==/UserScript==

(function() {
    'use strict';
    var pattern = new RegExp('/topic/|/prereleases/|stable-releases/');

    document.addEventListener('click', function(e) {
        var anchor = e.target.closest('a');
        if (anchor && anchor.href && pattern.test(anchor.href)) {
            anchor.target = '_blank';
        }
    }, true);
})();
