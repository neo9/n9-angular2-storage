import { Storage, StorageConfig } from '@ionic/storage';

import { N9IonicStorageService } from './providers/n9-ionic-storage.service';
import { N9StorageService } from './n9-storage.service';

declare const require: any;

export function storeFactory(storage: Storage): N9StorageService {
  return new N9IonicStorageService(storage);
}

export function getProviders(config?: StorageConfig) {
  const ionicStorageModule = require('@ionic/storage').IonicStorageModule;

  return ionicStorageModule.forRoot(config).providers;
}

export const N9IonicStorageProvider = {
  providers: getProviders,
  provide: N9StorageService,
  useFactory: (storeFactory),
  deps: [Storage]
};
