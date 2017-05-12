import { OpaqueToken } from '@angular/core';

export function windowFactory() {
  return window;
}

export const windowToken = new OpaqueToken('window');
export const windowProvider = {
  provide: windowToken,
  useFactory: windowFactory
};
