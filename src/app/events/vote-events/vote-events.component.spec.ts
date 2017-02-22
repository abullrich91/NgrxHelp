/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoteEventsComponent } from './vote-events.component';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { EventHandlerService } from '../../core/event-handler.service';
import { EventService } from '../../events/shared/event.service'
import { HttpService } from '../../core/http.service';
import { VoteService } from '../../events/shared/vote.service';
import { HttpModule } from '@angular/http';

describe('VoteEventsComponent', () => {
  let component: VoteEventsComponent;
  let fixture: ComponentFixture<VoteEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteEventsComponent ],
      imports: [
        HttpModule,
        InfiniteScrollModule
      ],
      providers: [
        EventHandlerService,
        EventService,
        HttpService,
        VoteService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
