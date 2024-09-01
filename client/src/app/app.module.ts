import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { VinylListComponent } from './components/vinyl-list/vinyl-list.component';
import { provideHttpClient } from '@angular/common/http';
import { VinylService } from './services/vinyl.service';

@NgModule({
  declarations: [AppComponent, VinylListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    VinylService,
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
