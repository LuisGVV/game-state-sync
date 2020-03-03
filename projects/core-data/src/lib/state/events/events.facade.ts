import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Event, EventStatistics } from '../../event/event.model';
import { EventsState } from './events.reducer';
import { selectAllEvents, selectEventStatistics } from '..';
import { MessageReceived } from './events.actions';

@Injectable({
    providedIn: 'root'
})
export class EventsFacade {
    events$: Observable<Event[]>;
    eventStatistics$: Observable<EventStatistics>;

    constructor(
        private store: Store<EventsState>
    ) {
        this.events$ = store.pipe(select(selectAllEvents));
        this.eventStatistics$ = store.pipe(select(selectEventStatistics))
    }

    addEvent(event) {
        this.store.dispatch(new MessageReceived(event));
    }
}