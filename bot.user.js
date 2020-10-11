// ==UserScript==
// @name         Pixelbattle Bot /mlpp/
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Unity is the way to victory
// @author       Ponywka
// @grant        GM_xmlhttpRequest
// @include      https://prod-app*
// @updateURL    https://github.com/Ponywka/FixForWebsites/raw/master/bot.user.js
// @downloadURL  https://github.com/Ponywka/FixForWebsites/raw/master/bot.user.js
// @connect      github.com
// @connect      raw.githubusercontent.com
// @connect      ponyserver.ddns.net
// @connect      localhost
// @connect      mlpp.itpony.ru
// ==/UserScript==
(function (window, undefined) {
        GM_xmlhttpRequest({
            'method': 'GET',
            'url': 'https://raw.githubusercontent.com/Ponywka/FixForWebsites/master/yazaebalsa.js?rand='+Math.random(),
            'headers': {
                'Cache-Control': 'must-revalidate'
            },
            'onload': function (data) {
                console.log("Bot loaded!");
                new Function(data.responseText)();
            }
        });
})(window);
