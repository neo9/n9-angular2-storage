"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var n9_window_provider_1 = require("../n9-window.provider");
var N9LocalStorageService = (function () {
    function N9LocalStorageService(window) {
        this.window = window;
    }
    N9LocalStorageService.prototype.get = function (key) {
        try {
            return JSON.parse(this.window.localStorage.getItem(key));
        }
        catch (e) {
            return null;
        }
    };
    N9LocalStorageService.prototype.set = function (key, data) {
        if (data === undefined) {
            this.del(key);
            return;
        }
        try {
            this.window.localStorage.setItem(key, JSON.stringify(data));
        }
        catch (e) { }
    };
    N9LocalStorageService.prototype.del = function (key) {
        try {
            this.window.localStorage.removeItem(key);
        }
        catch (e) { }
    };
    N9LocalStorageService.prototype.clear = function () {
        try {
            this.window.localStorage.clear();
        }
        catch (e) { }
    };
    return N9LocalStorageService;
}());
N9LocalStorageService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(n9_window_provider_1.windowProvider))
], N9LocalStorageService);
exports.N9LocalStorageService = N9LocalStorageService;
