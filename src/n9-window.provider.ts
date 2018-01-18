import { InjectionToken } from '@angular/core';

export function windowFactory() {
  return window;
}

export const windowToken = new InjectionToken<any>('window');
export const windowProvider = {
  provide: windowToken,
  useFactory: windowFactory
};
