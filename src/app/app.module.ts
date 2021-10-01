import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FelipeWalletComponent } from './felipe-wallet/felipe-wallet.component';
import { FelipeCurrencyComponent } from './felipe-currency/felipe-currency.component';

import { FelipeWalletService } from '././felipe-wallet.service';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'felipe-wallet', component: FelipeWalletComponent},
      {path: 'felipe-currency', component: FelipeCurrencyComponent}
    ]),
    ],
  
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    NavbarComponent, 
    HomeComponent,
    FelipeWalletComponent, 
    FelipeCurrencyComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: [
    FelipeWalletService
  ] 
})
export class AppModule { }
