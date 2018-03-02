import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { N9StorageProvider } from './n9-storage.provider';
import { windowProvider } from './n9-window.provider';

export * from './n9-storage.service';

export interface N9StorageModuleConfig {
  loader?: Provider;
  providers?: Provider[];
}

@NgModule()
export class N9StorageModule {
  static forRoot(config?: N9StorageModuleConfig): ModuleWithProviders {
    return {
      ngModule: N9StorageModule,
      providers: [
        windowProvider,
        ...((config && config.providers) || []),
        (config && config.loader) || N9StorageProvider
      ]
    };
  }
}
