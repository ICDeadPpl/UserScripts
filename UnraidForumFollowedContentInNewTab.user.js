// ==UserScript==
// @name        ALL THE LINKS in new windows
// @namespace   http://www.bitshark.se/
// @include     https://forums.unraid.net/discover/*
// @version     1
// @description This will force all the links at Unraid forums "Content I Follow" page to open in a new tab, even internal links.
// ==/UserScript==

(function(){
	var script = document.createElement("script");
	script.type = "application/javascript";
	script.innerHTML = "$(function(){$('a').attr('target', '_blank');});";
	document.body.appendChild(script);
})();
