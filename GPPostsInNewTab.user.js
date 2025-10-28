/// ==UserScript==
// @name       GP.se posts in new tab
// @namespace  https://www.bitshark.se
// @version    0.6
// @description  Makes all links open in a new tab
// @match      https://www.gp.se/
// @grant none
// @copyright  2024+ Jan Karjalainen
// ==/UserScript==

var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
    var a = anchors[i];
        a.setAttribute("target", "_blank");
}
