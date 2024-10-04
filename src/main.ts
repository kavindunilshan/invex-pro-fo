import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {provideAuth0} from "@auth0/auth0-angular";

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
  providers: [
    provideAuth0({
      domain: 'dev-c5ls7veng3ljfc5g.us.auth0.com',
      clientId: 'BrXpQ8T5kbczgBXZDujxeuMfeBnuiQeg',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
})
  .catch(err => console.error(err));
