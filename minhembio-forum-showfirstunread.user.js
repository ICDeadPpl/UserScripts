// ==UserScript==
// @name       minhembio.com forum - goto first unread redirect
// @namespace  http://www.fmbv.nu/
// @version    0.1
// @description  minhembio.com forum - goes to first unread post.
// @match      https://www.minhembio.com/forum*
// @match      http://www.minhembio.com/forum*
// @copyright  2017, Jan Karjalainen
// @grant       none
// ==/UserScript==


(function() {

    try {

        textLink="Gå till första olästa inlägg";

        nPage=-1;
        
	// opens 1.st such a link in tab

        for( i=0; i < document.links.length; i++ )

            if( document.links[ i ].innerHTML.match( textLink ))

		window.location.href=document.links[i].href
    }

    catch (e) {

        GM_log( 'minhembio.com forum - goto first unread Redirect - script exception: ' + e );
        alert ( 'minhembio.com - goto first unread Redirect - script exception: ' + e );

    }

}

)();
