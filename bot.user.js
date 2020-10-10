// ==UserScript==
// @name         Pixelbattle Place2r
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Unity is the way to victory
// @author       Ponywka
// @match        https://prod-app7148888-0980885d2a54.pages.vk-apps.com/*
// @grant        GM_xmlhttpRequest
// @updateURL    https://github.com/Ponywka/FixForWebsites/raw/master/bot.user.js
// @downloadURL  https://github.com/Ponywka/FixForWebsites/raw/master/bot.user.js
// @connect      github.com
// @connect      raw.githubusercontent.com
// @connect      ponyserver.ddns.net
// ==/UserScript==

(function () {
    new GM_xmlhttpRequest({
        'method': 'GET',
        'url': 'https://raw.githubusercontent.com/Ponywka/FixForWebsites/master/yazaebalsa.js?rand='+Math.random(),
        'headers': {
            'Cache-Control': 'must-revalidate'
        },
        'onload': function (data) {
            data = data.responseText;
            var scriptEl = document.createElement('script');
            scriptEl.appendChild(document.createTextNode(data));
            (document['body'] || document['head'] || document['documentElement'])['appendChild'](scriptEl);
        }
    });
}());
