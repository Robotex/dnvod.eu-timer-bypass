// ==UserScript==
// @name         vnvod.eu timer bypass
// @namespace    https://github.com/Robotex/
// @version      1.0
// @description  Ads timer bypass
// @author       Robotex
// @license      Affero GPL version 3; https://www.gnu.org/licenses/agpl-3.0.html
// @copyright    2016+, Robotex (https://github.com/Robotex/)
// @homepage     https://github.com/Robotex/vnvod.eu-timer-bypass/
// @supportURL   https://github.com/Robotex/vnvod.eu-timer-bypass/issues
// @match        http://www.dnvod.eu/*/Readyplay.aspx?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.PlayAds = function(l, r, t, callback) {
        if (callback && $.isFunction(callback)) {
            callback();
        }
    };
})();
