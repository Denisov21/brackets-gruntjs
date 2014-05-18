/*
* Panel.js
* @author: Fede91
* Github: https://github.com/Fede91
*
* Made available under a MIT @license:
* http://www.opensource.org/licenses/mit-license.php
*
* Panel.js Copyright Fede91 2014.
*/
define(function (require, exports) {
    "use strict";

    var Strings            = require("../strings"),
        PanelManager       = brackets.getModule("view/PanelManager");

    var panelTemplate_unR = require("text!htmlContents/bGJS-panel.html");

    var gruntJSPanel = null,
        $gruntJSPanel = $(null);

    function toggle(bool) {
        if (typeof bool !== "boolean") {
            bool = !gruntJSPanel.isVisible();
        }
        gruntJSPanel.setVisible(bool);
        console.log("bind click");
    }//toggle

    function init() {
        var panel_r = Mustache.render(panelTemplate_unR, {S: Strings});
        var $panel_r = $(panel_r);
        gruntJSPanel = PanelManager.createBottomPanel("brackets-gruntjs.panel", $panel_r, 100);
        $gruntJSPanel = gruntJSPanel.$panel;

        console.log("Panel init");
    }//init

    exports.init = init;
    exports.toggle = toggle;
});