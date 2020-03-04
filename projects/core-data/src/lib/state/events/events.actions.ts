import { Action } from '@ngrx/store';
import { Event } from "../../event/event.model";

export enum EventsActionTypes {
    MessageReceived = '[Events] Message Received',
    AddEvent = '[Events] Add Data',
}

export class MessageReceived implements Action {
    readonly type = EventsActionTypes.MessageReceived;
    constructor (public payload: Event) {}
}

export class AddEvent implements Action {
    readonly type = EventsActionTypes.AddEvent;
    constructor (public payload: Event) {}
}

export type EventsActions = MessageReceived
    | AddEvent ; // To include other action types using `|`