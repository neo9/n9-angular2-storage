"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var storage_1 = require("@ionic/storage");
var N9IonicStorageService = (function () {
    function N9IonicStorageService(ionicStorage) {
        this.ionicStorage = ionicStorage;
    }
    N9IonicStorageService.prototype.get = function (key) {
        return this.ionicStorage.get(key);
    };
    N9IonicStorageService.prototype.set = function (key, data) {
        return this.ionicStorage.set(key, data);
    };
    N9IonicStorageService.prototype.del = function (key) {
        return this.ionicStorage.remove(key);
    };
    N9IonicStorageService.prototype.clear = function () {
        return this.ionicStorage.clear();
    };
    N9IonicStorageService.prototype.forEach = function (fnc) {
        this.ionicStorage.forEach(fnc);
    };
    N9IonicStorageService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    N9IonicStorageService.ctorParameters = function () { return [
        { type: storage_1.Storage, },
    ]; };
    return N9IonicStorageService;
}());
exports.N9IonicStorageService = N9IonicStorageService;
