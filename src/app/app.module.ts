import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from 'projects/material/src/index';
import { CoreDataModule, EventsEffects } from 'projects/core-data/src/index';

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
    EffectsModule.forRoot([
      EventsEffects
    ]),
  ],
  providers: [
    PubNubAngular
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
