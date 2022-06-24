/******************************************************************************
 * To Install:
 *  - like any greasemonkey script: install greasemonkey, restart FF, open
 *    this script in a browser window, go to Tools/Install User Script
 *
 * To Uninstall:
 *  - like any greasemonkey script: Tools/Manage User Scripts, select
 * 'linuxtoday.com News "Complete Story" Redirect', click the Uninstall button
 */


// ==UserScript==

// @name          raspberrypi.com magazine download redirect
// @description   Automatic redirect for raspberrypi.com magazine downloads
// @namespace     http://userscript.org/
// @include       http*://custompc.raspberrypi.com/issues/*
// @include       http*://hackspace.raspberrypi.com/issues/*
// @include       http*://helloworld.raspberrypi.org/issues/*
// @include       http*://magpi.raspberrypi.com/issues/*
// @include       http*://wireframe.raspberrypi.com/issues/*
// @grant       none
// @version     1.1
// ==/UserScript==

var i = 0;
var textLink = '';
var nPage = '';

(function () {
    try {
        textLink = "No thanks, take me to the free PDF";

        nPage = -1;

        // opens 1.st such a link in tab
        for (i = 0; i < document.links.length; i++) {
            if (document.links[i].innerHTML.match(textLink)) {
                window.location.href = document.links[i].href
            }
        }
    } catch (err) {
        GM_log('raspberrypi.com magazine download redirect - script exception: ' + err);
        alert('raspberrypi.com magazine download redirect - script exception: ' + err);
    }
})();

