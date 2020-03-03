import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private pubNubAngular: PubNubAngular,
    // private eventsFacade: EventsFacade,
  ) {
    this.pubNubAngular = pubNubAngular;
  }

  startSubscription() {
    this.pubNubAngular.init({
      subscribeKey: 'sub-c-b1cadece-f0fa-11e3-928e-02ee2ddab7fe'
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
      message: function ({ message }) {
        console.log(message);
      }
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
