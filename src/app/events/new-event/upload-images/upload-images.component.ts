import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventOption } from '../../../events/shared/event-option.model';
import { Store } from '@ngrx/store';
import { NewEventService } from '../shared/new-event.service';
import { Event } from '../../../events/shared/event.model';
import { FriendService } from '../../../friends/shared/friend.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['../../../events/new-event/new-event.component.css']
})
export class UploadImagesComponent implements OnInit {
  form: FormGroup;
  private event;
  private images = [];

  constructor(
    private _store: Store<any>,
    private formBuilder: FormBuilder,
    private router: Router,
    private newEventService: NewEventService,
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
    this.initForm(this.event);
    if (this.event.counter === 0) {
      let friends = this.friendService.getFriends('58aaf6304fabf427e0acc08d');
      for (let friend in friends) {
        this.event.userIds.push(friends[friend]['id']);
      }
    }
  }

  initForm(event: Event) {
    this.images.push({ imageUrl: 'test0', voteCount: 0 });
    this.images.push({ imageUrl: 'test1', voteCount: 0 });
    this.images.push({ imageUrl: 'test2', voteCount: 0 });
    this.images.push({ imageUrl: 'test3', voteCount: 0 });
    this.form = this.formBuilder.group({
      firstImage: [this.event.length > 0 ? this.event.eventOption[0].imageUrl : null],
      secondImage: [this.event.length > 0 ? this.event.eventOption[1].imageUrl : null],
      thirdImage: [this.event.length > 0 ? this.event.eventOption[2].imageUrl : null],
      fourthImage: [this.event.length > 0 ? this.event.eventOption[3].imageUrl : null],
    })
  }

  next() {
    this.event.eventOptions = this.images;
    this.newEventService.updateEvent(this.event);
    this.router.navigateByUrl('events/new-event/event-info');
  }

}
