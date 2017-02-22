import { EventOption } from './event-option.model';
import { EventType } from './event-type.model';

export class Event {
  id: string;
  creatorUserId: string;
  eventTypeId: number;
  comment: string;
  duration: number;
  privacyId: number;
  countryId: number;
  eventOptions: EventOption[];
  isOnline: boolean;
  isUserPremium: boolean;
  creationDate: Date;
  endDate: Date;
  userIds: string[];
  isGlobal: boolean;
}
