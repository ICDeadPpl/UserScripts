// ==UserScript==
// @name        ALL THE LINKS in new windows
// @namespace   http://www.bitshark.se/
// @include     https://forums.unraid.net/discover/*
// @include     hhttps://www.snbforums.com/watched/threads
// @version     1
// @description This will force all the links to open in a new tab, even internal links.
// ==/UserScript==

(function(){
	var script = document.createElement("script");
	script.type = "application/javascript";
	script.innerHTML = "$(function(){$('a').attr('target', '_blank');});";
	document.body.appendChild(script);
})();
