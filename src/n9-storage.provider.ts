import { N9StorageService } from './n9-storage.service';
import { N9LocalStorageService } from './n9-local-storage.service';
import { N9InMemoryService } from './n9-in-memory.service';

export function storeFactory(): N9StorageService {
  if (window && window.localStorage) {
    try {
      window.localStorage.setItem('____test', 'success');
      window.localStorage.removeItem('____test');

      return new N9LocalStorageService(window);
    } catch (e) { }
  }

  return new N9InMemoryService();
}

export const N9StorageProvider = {
  provide: N9StorageService,
  useFactory: (storeFactory)
};
