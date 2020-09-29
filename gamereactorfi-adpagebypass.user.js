// ==UserScript==
// @name       Gamereactor.fi - ad page bypass
// @namespace  http://www.fmbv.nu/
// @version    0.1
// @description  Gamereactor.fi - Bypass ad pages.
// @match      http://www.gamereactor.fi/*
// @match      https://www.gamereactor.fi/*
// @grant       none
// @copyright  2020, Jan Karjalainen
// ==/UserScript==


(function() {

    try {

        textLink="Jatka Gamereactoriin";

        nPage=-1;
        
	// opens 1.st such a link in tab

        for( i=0; i < document.links.length; i++ )

            if( document.links[ i ].innerHTML.match( textLink ))

		window.location.href=document.links[i].href
    }

    catch (e) {

        GM_log( 'Gamereactor.fi - ad page bypasst - script exception: ' + e );

        alert ( 'Gamereactor.fi - ad page bypass - script exception: ' + e );

    }

}

)();
