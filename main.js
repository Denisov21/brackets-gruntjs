/*
* main.js
* @author: Fede91
* Github: https://github.com/Fede91
*
* Made available under a MIT @license:
* http://www.opensource.org/licenses/mit-license.php
*
* main.js Copyright Fede91 2014.
*/
define(function (require, exports, module) {
    "use strict";

    // Brackets modules
    var AppInit         = brackets.getModule("utils/AppInit"),
        ExtensionUtils  = brackets.getModule("utils/ExtensionUtils"),
        Commands        = brackets.getModule("command/Commands"),
        CommandManager  = brackets.getModule("command/CommandManager"),
        Menus           = brackets.getModule("command/Menus");

    // Local modules
    var Strings         = require("strings"),
        SettingsDialog  = require("src/SettingsDialog"),
        Core            = require("src/Core");

    // Load CSS
    ExtensionUtils.loadStyleSheet(module, "styles/brackets-gruntjs.css");

    // Register command and add it to the menu.
    var SETTINGS_COMMAND_ID = "brackets-gruntjs.settings";
    CommandManager.register(Strings.GRUNTJS_SETTINGS, SETTINGS_COMMAND_ID, SettingsDialog.show);
    Menus.getMenu(Menus.AppMenuBar.FILE_MENU).addMenuItem(SETTINGS_COMMAND_ID, "", Menus.AFTER, Commands.FILE_PROJECT_SETTINGS);

    AppInit.appReady(function () {
        Core.init();
    });
});