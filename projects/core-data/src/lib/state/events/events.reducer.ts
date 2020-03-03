import { Event, EventStatistics } from '../../event/event.model';
import { EventsActionTypes } from './events.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const initialEvents: Event[] = [
    {
        player_id: 0,
        coord_x: 0,
        coord_y: 0,
        action_name: 'Heal',
        action_type: 'Instant',
        action_value: 0,
    },
    {
        player_id: 0,
        coord_x: 0,
        coord_y: 0,
        action_name: 'Over 9000',
        action_type: 'Instant',
        action_value: 0,
    },
    {
        player_id: 0,
        coord_x: 0,
        coord_y: 0,
        action_name: 'Curaga',
        action_type: 'AoE',
        action_value: 0,
    },
];

// Shape of State:
export interface EventsState extends EntityState<Event> {
    stats: EventStatistics | null,
}

// Create entity adapter:
export const adapter: EntityAdapter<Event> = createEntityAdapter<Event>();

// Define an initial state:
export const initialState: EventsState = adapter.getInitialState({
    stats: null
});

// A simple reducer
export function eventsReducer(state: EventsState = initialState, action): EventsState {
    switch (action.type) {
        case EventsActionTypes.MessageReceived:
            let newEventState = adapter.addOne(action.payload, state);
            // The following can be improved or abstracted into another function
            let sumX = Object.keys(newEventState.entities).map(k => newEventState.entities[k].coord_x).reduce((previous, current) => current += previous);
            let avgX = sumX / Object.keys(newEventState.entities).length;
            let sumY = Object.keys(newEventState.entities).map(k => newEventState.entities[k].coord_y).reduce((previous, current) => current += previous);
            let avgY = sumY / Object.keys(newEventState.entities).length;
            newEventState.stats.average_coord_x = avgX;
            newEventState.stats.average_coord_y = avgY;
            return newEventState;
        default:
            return state;
    }
}

// Export selectors

// Selectors
export const getStats = (state: EventsState) => state.stats;

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

export const selectEventIds = selectIds;
export const selectEventEntities = selectEntities;
export const selectAllEvents = selectAll;