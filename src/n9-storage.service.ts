export abstract class N9StorageService {
  abstract get(key: string): any;

  abstract set(key: string, data?: any): void;

  abstract del(key: string): void;

  abstract clear(): Promise<void>;

  abstract forEach(fnc: any): void;
}
