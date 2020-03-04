/*
 * Public API Surface of core-data
 */

export { CoreDataModule } from './lib/core-data.module';
export { EventService } from './lib/event/event.service'

export { EventsFacade } from './lib/state/events/events.facade';
export { EventsEffects } from './lib/state/events/events.effects';

export { Event, EventStatistics } from './lib/event/event.model';
