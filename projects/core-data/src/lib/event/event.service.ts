import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

import { EventsFacade } from '../state/events/events.facade';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private pubNubAngular: PubNubAngular,
    private eventsFacade: EventsFacade,
  ) {
    this.pubNubAngular = pubNubAngular;
  }

  startSubscription() {
    this.pubNubAngular.init({
      subscribeKey: 'sub-c-b1cadece-f0fa-11e3-928e-02ee2ddab7fe' // TO-DO: move this to an environment variable?
    });

    this.pubNubAngular.addListener({
      status: function (st) {
        if (st.category === "PNUnknownCategory") {
          var newState = {
            new: 'error'
          };
          this.pubNubAngular.setState({
            state: newState
          },
            function (_status) {
              console.log(st.errorData.message);
            });
        }
      },
      message: _.partialRight(
        function ({ message }, eventsFacade: EventsFacade) {
          eventsFacade.addEvent(message);
        },
        this.eventsFacade
      )
    });

    this.pubNubAngular.subscribe({
      channels: ['pubnub-game-state']
    });

    console.log('Started Subscription');
  }

  stopSubscription() {
    this.pubNubAngular.unsubscribe({
      channels: ['pubnub-game-state']
    });
  }

}
