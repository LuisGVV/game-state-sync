import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { EventsActionTypes } from './events.actions';
import { EventService } from '../../event/event.service';
 
@Injectable()
export class EventsEffects {
 
  @Effect()
  messageReceived$ = this.actions$
    .pipe(
      ofType(EventsActionTypes.MessageReceived),
    //   mergeMap(() => this.moviesService.getAll()
    //     .pipe(
    //       map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
    //       catchError(() => EMPTY)
    //     ))
    //   )
    )
 
  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) {}
}