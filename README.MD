# n9-angular2-storage

## Installation

To install this library, run:

```bash
$ npm install n9-angular2-storage --save
```

## Usage For angular2 APP

from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { N9StorageModule } from 'n9-angular2-storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify the library as an import
    N9StorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage For Ionic2 APP

The N9IonicStorageProvider using the @ionic/storage module.
You can pass the storage configuration of ionic storage into the N9IonicStorageProvider.providers()

from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { N9StorageModule, N9IonicStorageProvider } from 'n9-angular2-storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify the library as an import
    N9StorageModule.forRoot({
				loader: N9IonicStorageProvider,
				providers: N9IonicStorageProvider.providers()
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Gaetan SENN](mailto:gaetan.senn@gmail.com)
