// ==UserScript==
// @name       rakapuckar.com posts in new tab
// @namespace  https://www.bitshark.se
// @version    0.2
// @description  Makes all links open in a new tab
// @match      https://rakapuckar.com
// @match      https://rakapuckar.com/smatt-och-gott
// @match      https://rakapuckar.com/samarbetsartiklar/
// @match      https://rakapuckar.com/hockey/herr/
// @match      https://rakapuckar.com/hockey/dam/
// @match      https://rakapuckar.com/podd/
// @match      https://rakapuckar.com/arkiv/
// @grant none
// @copyright  2024+ Jan Karjalainen
// ==/UserScript==

var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
    var a = anchors[i];
        a.setAttribute("target", "_blank");
}
