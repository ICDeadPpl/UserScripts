/// ==UserScript==
// @name       GP.se posts in new tab
// @namespace  https://www.bitshark.se
// @version    0.1
// @description  Makes all links open in a new tab
// @match      https://www.gp.se/nyheter/*
// @match      https://www.gp.se/sport/*
// @match      https://www.gp.se/ekonomi/*
// @match      https://www.gp.se/ledare/*
// @match      https://www.gp.se/kultur*/*
// @match      https://www.gp.se/debatt/*
// @match      https://www.gp.se/poddar/*
// @match      https://www.gp.se/politik/*
// @match      https://www.gp.se/krim/*
// @match      https://www.gp.se/nyhetsshowen/*
// @match      https://www.gp.se/livsstil/*
// @match      https://www.gp.se/fria-ord/*
// @grant none
// @copyright  2024+ Jan Karjalainen
// ==/UserScript==

var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
    var a = anchors[i];
        a.setAttribute("target", "_blank");
}
