// ==UserScript==
// @name       xda-developers.com forum - goto first unread redirect
// @namespace  http://www.fmbv.nu/
// @version    0.1
// @description  xda-developers.com forum - goes to first unread post.
// @match      http://forum.xda-developers.com/*
// @copyright  2013, Jan Karjalainen
// @grant       none
// ==/UserScript==


(function() {

    try {

        textLink="View First Unread";

        nPage=-1;
        
	// opens 1.st such a link in tab

        for( i=0; i < document.links.length; i++ )

            if( document.links[ i ].innerHTML.match( textLink ))

		window.location.href=document.links[i].href
    }

    catch (e) {

        GM_log( 'xda-developers.com forum - goto first unread Redirect - script exception: ' + e );
        alert ( 'xda-developers.com - goto first unread Redirect - script exception: ' + e );

    }

}

)();
