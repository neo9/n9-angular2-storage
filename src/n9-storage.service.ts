export abstract class N9StorageService {
  abstract get(key: string): Promise<any>;

  abstract set(key: string, data?: any): Promise<void>;

  abstract del(key: string): Promise<void>;

  abstract clear(): Promise<void>;

  abstract forEach(fnc: any): void;
}
