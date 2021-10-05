// ==UserScript==
// @name       Mobileread Forum posts in new tab
// @namespace  https://www.bitshark.se
// @version    0.4
// @description  Makes all links to forum posts open in a new tab
// @description  Edit the "match" address below for your needs.
// @match      https://www.mobileread.com/forums/subscription.php
// @match      https://www.mobileread.com/forums/forumdisplay.php*
// @grant none
// @copyright  2020+ Jan Karjalainen
// ==/UserScript==

var pattern = new RegExp('/showthread');
var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
    var a = anchors[i];
    if (pattern.test(a.href)){
        a.setAttribute("target", "_blank");
        a.href += "&goto=newpost";
    }
}
