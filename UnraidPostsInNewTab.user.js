// ==UserScript==
// @name       Unraid Forum posts in new tab
// @namespace  https://www.bitshark.se
// @version    0.4
// @description  Makes all links to forum posts open in a new tab
// @description  Edit the "match" address below for your needs.
// @match      https://forums.unraid.net/discover/*
// @grant none
// @copyright  2020+ Jan Karjalainen
// ==/UserScript==

var pattern = new RegExp('/topic/|/prereleases/|stable-releases/');
var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
    var a = anchors[i];
    if (pattern.test(a.href)){
        a.setAttribute("target", "_blank");
    }
}
