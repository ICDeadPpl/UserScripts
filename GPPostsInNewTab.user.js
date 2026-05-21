/// ==UserScript==
// @name       GP.se posts in new tab
// @namespace  https://www.bitshark.se
// @version    0.7
// @description  Makes all links open in a new tab
// @match      https://www.gp.se/
// @grant none
// @copyright  2024+ Jan Karjalainen
// ==/UserScript==

document.addEventListener('click', function(e) {
    var anchor = e.target.closest('a');
    if (anchor && anchor.href) {
        anchor.target = '_blank';
    }
}, true);
