// ==UserScript==
// @name         Exit Intent defuser
// @namespace    https://blog.silocitylabs.com/post/author/maave/
// @version      0.17
// @description  block "exit intent" popups by blocking ALL mouseleave events
// @updateURL    https://openuserjs.org/meta/Maave/Exit_Intent_defuser.meta.js
// @copyright    2018, Maave (https://blog.silocitylabs.com/post/author/maave/)
// @license      0BSD
// @include      http://*
// @include      https://*
// @exclude      https://*.wikipedia.org/*
// @exclude      https://hackaday.com/*
// @exclude      https://hackaday.io/*
// @exclude      https://*.youtube.com/*
// @exclude      https://*.ebay.com/*
// @exclude      https://*.google.com/*
// @exclude      https://*.mbed.com/*
// @exclude      https://caniuse.com/*
// @exclude      https://*.aliexpress.com/*
// @exclude      https://blog.silocitylabs.com/*
// @exclude      https://superuser.com/*
// @exclude      https://*.stackexchange.com.com/*
// @exclude      https://www.amazon.com/*
// @exclude      https://squidboards.com/*
// @exclude      https://devzone.nordicsemi.com/*
// @exclude      https://www.stubhub.com/*
// @exclude      https://www.gdax.com/*
// @exclude      https://www.coinbase.com/*
// @exclude      https://www.reddit.com/*
// @exclude      https://www.xda-developers.com/*
// @exclude      https://www.patreon.com/*
// @exclude      https://www.etsy.com/*
// @exclude      https://www.ally.com/*
// @exclude      http://webmailb.juno.com/*
// @exclude      https://swappa.com/*
// @exclude      https://www.target.com/*
// @exclude      https://teespring.com/*
// @exclude      https://www.newegg.com/*
// @exclude      https://regexone.com*
// @exclude      https://twitter.com*
// @exclude      https://*.autodesk.com/*
// @exclude      https://stackoverflow.com/*
// @exclude      https://forums.unraid.net/*
// @exclude      https://www.prisjakt.nu/*
// @grant        none
// ==/UserScript==

// ==OpenUserJS==
// @author Maave
// ==/OpenUserJS==

(function () {
  function stopProp(e) {
    e.stopImmediatePropagation();
  }
  window.addEventListener("mouseleave", stopProp, true);
  window.addEventListener("mouseout", stopProp, true);
})();
