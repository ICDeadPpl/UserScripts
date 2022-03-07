// ==UserScript==
// @name         Gmail with ISO Date
// @version      1.0
// @description  Change Gmail date format to ISO 8601, per https://webapps.stackexchange.com/q/89499
// @author       LovelyHanibal
// @match        https://mail.google.com/mail/u/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    function toISO() {
        var rows = document.getElementsByClassName('xW');
        for (var i = 0; i < rows.length; i++) {
            var d = new Date(rows[i].firstElementChild.title);
            var n = new Date;

            const isToday = (someDate) => {
                const today = new Date()
                return someDate.getDate() == today.getDate() &&
                    someDate.getMonth() == today.getMonth() &&
                    someDate.getFullYear() == today.getFullYear()
            }

            if( d != 'Invalid Date' ){
                var x = rows[i].firstChild;

                if (isToday(d)) {
                    x.innerText = (d.getHours()<10?'0':'') + d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes();

                }
                else {
                    x.innerText = d.getFullYear() + '-' + ('0' + (d.getMonth()+1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
                }

            }
        }
    }
    window.setInterval(toISO, 1000);
})();
