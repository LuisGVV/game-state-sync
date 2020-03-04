import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap, mapTo } from 'rxjs/operators';

import { Event } from '../../event/event.model';
import { EventsActionTypes, AddEvent, MessageReceived } from './events.actions';
import { EventService } from '../../event/event.service';

@Injectable()
export class EventsEffects {

  @Effect()
  messageReceived$ = this.actions$
    .pipe(
      ofType(EventsActionTypes.MessageReceived),
      // tap( (payload)=> console.log(payload))
      mergeMap((action: MessageReceived) => of(new AddEvent(action.payload)))
    )


  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) { }
}