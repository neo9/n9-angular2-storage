import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { N9StorageService } from '../n9-storage.service';

@Injectable()
export class N9IonicStorageService implements N9StorageService {
  constructor(private ionicStorage: Storage) { }

  get(key: string): Promise<void> {
    return this.ionicStorage.get(key);
  }

  set(key: string, data?: any): Promise<void> {
    return this.ionicStorage.set(key, data);
  }

  del(key: string): Promise<void> {
    return this.ionicStorage.remove(key);
  }

  clear(): Promise<void> {
    return this.ionicStorage.clear();
  }

  forEach(fnc) {
    this.ionicStorage.forEach(fnc);
  }
}
