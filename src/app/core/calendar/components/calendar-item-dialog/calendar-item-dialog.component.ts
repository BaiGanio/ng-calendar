import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CalendarItemDialogService } from '@calendar/services/calendar-item-dialog.service';
import { IDaySchedule } from '@core/calendar/models/calendar.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar-item-dialog',
  templateUrl: './calendar-item-dialog.component.html',
  styleUrls: ['./calendar-item-dialog.component.scss']
})
export class CalendarItemDialogComponent implements OnInit {
  public daySchedule$: Observable<IDaySchedule>;

  constructor(private _calendarItemDialogService: CalendarItemDialogService, private _elementRef: ElementRef) { }

  public ngOnInit(): void {
    this.daySchedule$ = this._calendarItemDialogService['_dayScheduleChangeSubject$'];
  }

  @HostListener('document:click', ['$event'])
  public handleClickOutsideElement($event: MouseEvent) {
    if (this._elementRef.nativeElement.contains($event.target)) {
      this._calendarItemDialogService.close();
    }
  }

  public handleDialogClose() {
    this._calendarItemDialogService.close();
  }
}
