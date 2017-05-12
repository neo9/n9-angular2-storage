"use strict";
exports.__esModule = true;
var n9_local_storage_service_1 = require("./n9-local-storage.service");
describe('LocalStorageStoreService', function () {
    var store;
    beforeEach(function () {
        store = new n9_local_storage_service_1.N9LocalStorageService(window);
        store.clear();
    });
    it('should be able to retrieve store data', function () {
        store.set('test', 'success');
        expect(store.get('test')).toBe('success');
    });
    it('should return undefined if no data found', function () {
        expect(store.get('test')).toBeNull();
    });
    it('should return undefined if set with undefined', function () {
        store.set('test', 'success');
        store.set('test', undefined);
        expect(store.get('test')).toBeNull();
    });
    it('should return undefined if data is removed', function () {
        store.set('test', 'success');
        store.del('test');
        expect(store.get('test')).toBeNull();
    });
    it('should return undefined if all data are cleared', function () {
        store.set('test', 'success');
        store.set('test2', 'success');
        store.clear();
        expect(store.get('test')).toBeNull();
        expect(store.get('test2')).toBeNull();
    });
});
