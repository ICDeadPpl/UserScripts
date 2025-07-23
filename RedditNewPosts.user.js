// ==UserScript==
// @name         Reddit new posts
// @namespace    http://bitshark.se
// @version      1.0
// @description  Show "new" posts instead of "best"
// @author       Jan Karjalainen
// @match        https://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

function checkURL() {
    let match;

    if (window.location.pathname === "/") {
        window.location.replace("//www.reddit.com/new");
    } else if (match = window.location.pathname.match("(/r/[^/]+)/$")) {
        window.location.replace("//www.reddit.com" + match[1] + "/new/");
    }
}

let currentUrl = location.href;
checkURL();

setInterval(() => {
    if (location.href !== currentUrl) {
        currentUrl = location.href;
        checkURL();
    }
}, 500);
