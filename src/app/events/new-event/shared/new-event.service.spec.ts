/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewEventService } from './new-event.service';

describe('NewEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewEventService]
    });
  });

  it('should ...', inject([NewEventService], (service: NewEventService) => {
    expect(service).toBeTruthy();
  }));
});
