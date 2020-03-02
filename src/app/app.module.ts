import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@gameStateSync/material';
import { CoreDataModule } from '@gameStateSync/core-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PubNubAngular } from 'pubnub-angular2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreDataModule,
    MaterialModule,
  ],
  providers: [
    PubNubAngular
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
