import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EventOption } from '../../../events/shared/event-option.model';
import { Store } from '@ngrx/store';
import { Event } from '../../shared/event.model';
import { NewEventService } from '../shared/new-event.service';
import { EventService } from '../../shared/event.service';
import { EventType } from '../../shared/event-type.model';
import { FriendService } from '../../../friends/shared/friend.service';

@Component({
  selector: 'app-event-metadata',
  templateUrl: './event-metadata.component.html',
  styleUrls: ['../../../events/new-event/new-event.component.css']
})
export class EventMetadataComponent implements OnInit {

  private event;
  private eventTypes = [];
  public form: FormGroup;
  private durationArray = [];
  private fakePrivacyId;
  private privacyError = false;

  constructor(
    private _store: Store<any>,
    private formBuilder: FormBuilder,
    private router: Router,
    private newEventService: NewEventService,
    private eventService: EventService,
    private friendService: FriendService
  ) {
    _store.select('newEvent').subscribe(newEvent => {
      this.event = newEvent;
      console.log('#############################');
      console.log('EventOptions: ' + this.event.eventOptions.length);
      console.log('EventType: ' + this.event.eventTypeId);
      console.log('Duration: ' + this.event.duration);
      console.log('Comment: ' + this.event.comment);
      console.log('Friends: ' + this.event.userIds.length);
      console.log('Privacy: ' + this.event.privacyId);
      console.log('Global: ' + this.event.isGlobal);
      console.log('Counter: ' + this.event.counter);
    })
  }

  ngOnInit() {
    this.fakePrivacyId = this.event.privacyId === 0 ? false : true;
    this.initForm(this.event);
    // TODO deshardcodear countryId
    this.eventTypes = [{ id: 0, description: 'Hi' }, { id: 1, description: 'how' }];
    this.durationArray = [{ duration: 1 }, { duration: 2 }, { duration: 3 }];
  }

  initForm(event: Event) {
    this.form = this.formBuilder.group({
      eventTypeId: [event.eventTypeId, Validators.required],
      duration: [event.duration, Validators.required],
      comment: [event.comment, Validators.maxLength(80)],
      privacyId: new FormControl({ value: this.fakePrivacyId, disabled: !this.hasFriends() }),
      isGlobal: [event.isGlobal]
    })
  }

  setIsGlobal(option) {
    this.event.isGlobal = !this.event.isGlobal;
  }

  setPrivacyId(e) {
    if (this.hasFriends()) {
      this.fakePrivacyId = !this.fakePrivacyId;
    } else {
      this.privacyError = true;
    }
  }

  hasFriends() {
    // TODO deshardcodear userId
    return this.friendService.getFriends('58aaf6304fabf427e0acc08d').length > 0;
  }

  next() {
    for (let value in this.form.value) {
      this.event[value] = this.form.value[value];
    }
    this.event.privacyId = this.event.privacyId ? 1 : 0;
    this.newEventService.updateEvent(this.event);
    this.newEventService.updateEvent(this.event);
    if (this.event.privacyId === 1) {
      this.router.navigateByUrl('events/new-event/choose-friends');
    } else {
      this.router.navigateByUrl('events/vote-events');
    }
  }

  back() {
    this.newEventService.updateEvent(this.event);
    this.router.navigateByUrl('events/new-event/upload-images');
  }

  reset() {
    this.newEventService.resetEvent();
  }

}
