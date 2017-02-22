import { EventOption } from '../../shared/event-option.model';
import { EventType } from '../../shared/event-type.model';
import { ActionReducer, Action } from '@ngrx/store';
import { Event } from '../../shared/event.model';
import { FriendService } from '../../../friends/shared/friend.service';

export interface newEventModel {
  eventOptions: EventOption[];
  eventTypeId: number,
  duration: number,
  comment: string,
  privacyId: number,
  isGlobal: boolean,
  id: string,
  userIds: string[],
  counter: number
}

let blankState: newEventModel = {
  eventOptions: [],
  eventTypeId: null,
  duration: 1440,
  comment: '',
  privacyId: 0,
  isGlobal: false,
  id: '',
  userIds: [],
  counter: 0
}

let initialState: newEventModel = {
  eventOptions: [],
  eventTypeId: null,
  duration: 1440,
  comment: '',
  privacyId: 0,
  isGlobal: false,
  id: '',
  userIds: [],
  counter: 0
}

export const newEvent: ActionReducer<newEventModel> = (state: newEventModel = initialState, action: Action) => {
  // return new state
  switch (action.type) {
    case 'GET_EVENT':
      return action.payload
    case 'UPDATE_EVENT':
      return Object.assign({}, action.payload, { counter: action.payload.counter + 1 })
    case 'RESET_EVENT':
      return Object.assign({}, initialState);
    default:
      return state;
  }
}
