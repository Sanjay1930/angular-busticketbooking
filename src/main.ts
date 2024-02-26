import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/App.MainModule';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
