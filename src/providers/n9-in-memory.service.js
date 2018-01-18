"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var N9InMemoryService = (function () {
    function N9InMemoryService() {
        this.cache = {};
    }
    N9InMemoryService.prototype.get = function (key) {
        try {
            return Promise.resolve(JSON.parse(this.cache[key]));
        }
        catch (e) {
            return Promise.resolve(null);
        }
    };
    N9InMemoryService.prototype.set = function (key, data) {
        if (data === undefined) {
            this.del(key);
            return Promise.resolve();
        }
        try {
            this.cache[key] = JSON.stringify(data);
        }
        catch (e) { }
        return Promise.resolve();
    };
    N9InMemoryService.prototype.del = function (key) {
        try {
            delete this.cache[key];
        }
        catch (e) { }
        return Promise.resolve();
    };
    N9InMemoryService.prototype.clear = function () {
        try {
            this.cache = {};
        }
        catch (e) { }
        return Promise.resolve();
    };
    N9InMemoryService.prototype.forEach = function (fnc) {
        var _this = this;
        Object.keys(this.cache).forEach(function (key) {
            fnc(_this.cache[key], key);
        });
    };
    N9InMemoryService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    N9InMemoryService.ctorParameters = function () { return []; };
    return N9InMemoryService;
}());
exports.N9InMemoryService = N9InMemoryService;
