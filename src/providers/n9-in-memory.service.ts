import { Injectable } from '@angular/core';
import { N9StorageService } from '../n9-storage.service';

@Injectable()
export class N9InMemoryService implements N9StorageService {
  private cache: any;

  constructor() {
    this.cache = {};
  }

  get(key: string): any {
    try {
      return JSON.parse(this.cache[key]);
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
      this.cache[key] = JSON.stringify(data);
    } catch (e) { }
  }

  del(key: string) {
    try {
      delete this.cache[key];
    } catch (e) { }
  }

  clear() {
    try {
      this.cache = {};
    } catch (e) { }
  }
}
