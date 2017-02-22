/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from './shared/shared.module';

import { EventService } from './events/shared/event.service';
import { HttpService } from './core/http.service'
import { VoteService } from './events/shared/vote.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        HttpModule,
        SharedModule
      ],
      providers: [
        EventService,
        HttpService,
        VoteService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
