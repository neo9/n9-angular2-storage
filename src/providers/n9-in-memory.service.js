"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var N9InMemoryService = (function () {
    function N9InMemoryService() {
        this.cache = {};
    }
    N9InMemoryService.prototype.get = function (key) {
        try {
            return JSON.parse(this.cache[key]);
        }
        catch (e) {
            return null;
        }
    };
    N9InMemoryService.prototype.set = function (key, data) {
        if (data === undefined) {
            this.del(key);
            return;
        }
        try {
            this.cache[key] = JSON.stringify(data);
        }
        catch (e) { }
    };
    N9InMemoryService.prototype.del = function (key) {
        try {
            delete this.cache[key];
        }
        catch (e) { }
    };
    N9InMemoryService.prototype.clear = function () {
        try {
            this.cache = {};
        }
        catch (e) { }
    };
    return N9InMemoryService;
}());
N9InMemoryService = __decorate([
    core_1.Injectable()
], N9InMemoryService);
exports.N9InMemoryService = N9InMemoryService;
