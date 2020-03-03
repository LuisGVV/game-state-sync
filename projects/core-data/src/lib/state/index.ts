import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromEvents from './events/events.reducer';

export interface AppState {
    events: fromEvents.EventsState
}

export const reducers: ActionReducerMap<AppState> = {
    events: fromEvents.eventsReducer,
}

/**
 * EVENTS SELECTORS
 */

export const selectEventsState = createFeatureSelector<fromEvents.EventsState>('events');

export const selectEventIds = createSelector(selectEventsState, fromEvents.selectEventIds);

export const selectEventEntitites = createSelector(selectEventsState, fromEvents.selectEventEntities);

export const selectEventStatistics = createSelector(selectEventsState, fromEvents.getStats);

export const selectAllEvents = createSelector(selectEventsState, fromEvents.selectAllEvents);
