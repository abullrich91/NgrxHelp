import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Event } from '../../../events/shared/event.model';
import { EventOption } from '../../../events/shared/event-option.model';
import { newEvent, newEventModel } from './new-event.reducer';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/find';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NewEventService {
  public newEvent$: Observable<newEventModel>;

  constructor(private store: Store<newEventModel>) {
    this.newEvent$ = this.store.select('newEvent');
  }

  getEvent(event) {
    return this.store.dispatch({
      type: 'GET_EVENT',
      payload: event
    })
  }

  updateEvent(event) {
    return this.store.dispatch({
      type: 'UPDATE_EVENT',
      payload: event
    })
  }

  resetEvent() {
    return this.store.dispatch({
      type: 'RESET_EVENT',
    })
  }

}
