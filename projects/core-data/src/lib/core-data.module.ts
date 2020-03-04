import { NgModule } from '@angular/core';
import { EventService } from './event/event.service';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [],
  imports: [
    StateModule
  ],
  exports: [],
  providers: [
    EventService,
  ]
})
export class CoreDataModule { }
