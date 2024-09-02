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
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { LoginComponent } from './components/login/login.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { VinylDetailComponent } from './components/vinyl-detail/vinyl-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component'; // For ngModel

@NgModule({
  declarations: [
    AppComponent,
    VinylListComponent,
    SideBarComponent,
    SearchBarComponent,
    LoginStatusComponent,
    LoginComponent,
    CartStatusComponent,
    CartDetailsComponent,
    VinylDetailComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    VinylService,
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
