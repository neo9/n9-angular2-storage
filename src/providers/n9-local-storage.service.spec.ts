import { N9LocalStorageService } from './n9-local-storage.service';

describe('LocalStorageStoreService', () => {
  let store: N9LocalStorageService;

  beforeEach(() => {
    store = new N9LocalStorageService(window);
    store.clear();
  });

  it('should be able to retrieve store data', () => {
    store.set('test', 'success');
    expect(store.get('test')).toBe('success');
  });

  it('should return undefined if no data found', () => {
    expect(store.get('test')).toBeNull();
  });

  it('should return undefined if set with undefined', () => {
    store.set('test', 'success');
    store.set('test', undefined);
    expect(store.get('test')).toBeNull();
  });

  it('should return undefined if data is removed', () => {
    store.set('test', 'success');
    store.del('test');
    expect(store.get('test')).toBeNull();
  });

  it('should return undefined if all data are cleared', () => {
    store.set('test', 'success');
    store.set('test2', 'success');
    store.clear().then();
    expect(store.get('test')).toBeNull();
    expect(store.get('test2')).toBeNull();
  });
});
