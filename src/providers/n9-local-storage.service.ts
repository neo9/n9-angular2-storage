import { Injectable, Inject } from '@angular/core';
import { N9StorageService } from '../n9-storage.service';
import { windowProvider } from '../n9-window.provider';

@Injectable()
export class N9LocalStorageService implements N9StorageService {
  constructor( @Inject(windowProvider) private window: any) { }

  get(key: string): any {
    try {
      return JSON.parse(this.window.localStorage.getItem(key));
    } catch (e) {
      return null;
    }
  }

  set(key: string, data?: any) {
    if (data === undefined) {
      this.del(key);
      return;
    }
    try {
      this.window.localStorage.setItem(key, JSON.stringify(data));
    } catch (e) { }
  }

  del(key: string) {
    try {
      this.window.localStorage.removeItem(key);
    } catch (e) { }
  }

  clear() {
    try {
      this.window.localStorage.clear();
    } catch (e) { }
  }
}
