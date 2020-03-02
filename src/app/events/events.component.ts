import { Component, OnInit, OnDestroy } from '@angular/core';

import { EventService } from '@gameStateSync/core-data';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.eventService.startSubscription();
    setTimeout(() => {
      this.eventService.stopSubscription();
    }, 10000);
  }

  ngOnDestroy() {
    this.eventService.stopSubscription();
  }
}
