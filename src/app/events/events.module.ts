import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { MaterialModule } from '@gameStateSync/material';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
  ],
  declarations: [
    EventsComponent
  ],
})
export class EventsModule { }
