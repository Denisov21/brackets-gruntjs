/*
* SettingsDialog.js
* @author: Fede91
* Github: https://github.com/Fede91
*
* Made available under a MIT @license:
* http://www.opensource.org/licenses/mit-license.php
*
* SettingsDialog.js Copyright Fede91 2014.
*/
define(function (require, exports) {
    "use strict";

    var sDT_unR = require("text!htmlContents/bGJS-settings-dialog.html"),
        Dialogs = brackets.getModule("widgets/Dialogs"),
        Strings = require("../strings");

    var dialog;

    function storePreferences() {
        return 1;
    }//storePreferences

    function show() {
        var sDT = Mustache.render(sDT_unR, Strings);
        dialog = Dialogs.showModalDialogUsingTemplate(sDT);
        dialog.done(function (buttonID) {
            if (buttonID === "save") {
                storePreferences();
                console.log("Preferences saved");
            }
        });
    }//show

    exports.show = show;
});