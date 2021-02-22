import { TestBed } from '@angular/core/testing';

import { CalendarItemDialogService } from './calendar-item-dialog.service';

describe('CalendarItemDialogService', () => {
  let service: CalendarItemDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarItemDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
