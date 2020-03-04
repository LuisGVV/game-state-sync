import { Component, OnInit, OnDestroy } from '@angular/core';

import { EventService, Event, EventStatistics, EventsFacade } from 'projects/core-data/src/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  events$: Observable<Event[]>;
  eventStatistics$: Observable<EventStatistics>;

  displayedColumns: string[] = [
    'player_id',
    'coord_x',
    'coord_y',
    'action_name',
    'action_type',
    'action_value',
  ];

  constructor(
    private eventService: EventService,
    private eventsFacade: EventsFacade
  ) { }

  ngOnInit() {
    this.eventStatistics$ = this.eventsFacade.eventStatistics$;
    this.events$ = this.eventsFacade.events$;

    this.eventService.startSubscription();
  }

  ngOnDestroy() {
    this.eventService.stopSubscription();
  }
}
