import { Action } from '@ngrx/store';
import { Event } from "../../event/event.model";

export enum EventsActionTypes {
    MessageReceived = '[Events] Message Received'
}

export class MessageReceived implements Action {
    readonly type = EventsActionTypes.MessageReceived;
    constructor (public payload: Event) {}
}

export type EventsActions = MessageReceived; // To include other action types using `|`