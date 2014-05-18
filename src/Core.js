/*
* Core.js
* @author: Fede91
* Github: https://github.com/Fede91
*
* Made available under a MIT @license:
* http://www.opensource.org/licenses/mit-license.php
*
* Core.js Copyright Fede91 2014.
*/
define(function (require, exports) {
    "use strict";

    var AppInit           = brackets.getModule("utils/AppInit");

    var Panel = require("./Panel");

    var $gruntJSIcon = $("<a id='gruntJS-toolbar-icon' href='#'>GR</a>").appendTo($("#main-toolbar .buttons"));

    function init() {
        AppInit.htmlReady(function () {
            // UI
            Panel.init();
            $gruntJSIcon.on("click", Panel.toggle);
            console.log("Core init");
        });
    }//init

    exports.init = init;
});