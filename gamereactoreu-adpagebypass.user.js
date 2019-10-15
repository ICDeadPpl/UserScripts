// ==UserScript==
// @name       Gamereactor.eu - ad page bypass
// @namespace  http://www.fmbv.nu/
// @version    0.2
// @description  Gamereactor.eu - Bypass ad pages.
// @match      http://www.gamereactor.eu/*
// @match      https://www.gamereactor.ey/*
// @grant       none
// @copyright  2013, Jan Karjalainen
// ==/UserScript==


(function() {

    try {

        textLink="Continue to";

        nPage=-1;
        
	// opens 1.st such a link in tab

        for( i=0; i < document.links.length; i++ )

            if( document.links[ i ].innerHTML.match( textLink ))

		window.location.href=document.links[i].href
    
