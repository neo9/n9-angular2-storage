import { Injectable } from '@angular/core';
import { N9StorageService } from './n9-storage.service';

@Injectable()
export class N9InMemoryService implements N9StorageService {
  private cache: any;

  constructor() {
    this.cache = {};
  }

  get(key: string): Promise<any> {
    try {
      return Promise.resolve(JSON.parse(this.cache[key]));
    } catch (e) {
      return Promise.resolve(null);
    }
  }

  set(key: string, data?: any): Promise<any> {
    if (data === undefined) {
      this.del(key);
      return Promise.resolve();
    }
    try {
      this.cache[key] = JSON.stringify(data);
    } catch (e) { }

    return Promise.resolve();
  }

  del(key: string): Promise<void> {
    try {
      delete this.cache[key];
    } catch (e) { }

    return Promise.resolve();
  }

  clear() {
    try {
      this.cache = {};
    } catch (e) { }

    return Promise.resolve();
  }

  forEach(fnc) {
    Object.keys(this.cache).forEach((key) => {
      fnc(this.cache[key], key);
    });
  }
}
