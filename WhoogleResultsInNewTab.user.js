// ==UserScript==
// @name       Whoogle search results in new tab
// @namespace  https://www.bitshark.se
// @version    0.1
// @description  Makes all search result links open in a new tab
// @description  Edit the "match" address below for your needs.
// @match      https://whoogle.bitshark.se/*
// @grant none
// @copyright  2021+ Jan Karjalainen
// ==/UserScript==

var pattern = new RegExp('/search/');
var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
    var a = anchors[i];
    if (pattern.test(a.href)){
        a.setAttribute("target", "_blank");
    }
}
