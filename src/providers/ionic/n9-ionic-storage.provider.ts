import { Storage, StorageConfig, IonicStorageModule } from '@ionic/storage';

import { N9IonicStorageService } from './n9-ionic-storage.service';
import { N9StorageService } from '@neo9/n9-angular2-storage';
import {Provider} from "@angular/core";

export function storeFactory(storage: Storage): N9StorageService {
  return new N9IonicStorageService(storage);
}

export function getProviders(config?: StorageConfig): Provider[] {
  return IonicStorageModule.forRoot(config).providers;
}

export const N9IonicStorageProvider = {
  providers: getProviders,
  provide: N9StorageService,
  useFactory: (storeFactory),
  deps: [Storage]
};
