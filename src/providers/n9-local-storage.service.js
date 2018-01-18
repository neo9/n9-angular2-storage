"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var n9_window_provider_1 = require("../n9-window.provider");
var N9LocalStorageService = (function () {
    function N9LocalStorageService(window) {
        this.window = window;
    }
    N9LocalStorageService.prototype.get = function (key) {
        try {
            return Promise.resolve(JSON.parse(this.window.localStorage.getItem(key)));
        }
        catch (e) {
            return Promise.resolve(null);
        }
    };
    N9LocalStorageService.prototype.set = function (key, data) {
        if (data === undefined) {
            this.del(key);
            return Promise.resolve();
        }
        try {
            this.window.localStorage.setItem(key, JSON.stringify(data));
        }
        catch (e) { }
        return Promise.resolve();
    };
    N9LocalStorageService.prototype.del = function (key) {
        try {
            this.window.localStorage.removeItem(key);
            return Promise.resolve();
        }
        catch (e) { }
    };
    N9LocalStorageService.prototype.clear = function () {
        try {
            this.window.localStorage.clear();
        }
        catch (e) { }
        return Promise.resolve();
    };
    N9LocalStorageService.prototype.forEach = function (fnc) {
        var _this = this;
        try {
            Object.keys(this.window.localStorage).forEach(function (key) {
                fnc(_this.window.localStorage[key], key);
            });
        }
        catch (e) { }
    };
    N9LocalStorageService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    N9LocalStorageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [n9_window_provider_1.windowProvider,] },] },
    ]; };
    return N9LocalStorageService;
}());
exports.N9LocalStorageService = N9LocalStorageService;
