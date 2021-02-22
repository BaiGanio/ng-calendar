import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IDaySchedule } from '@core/calendar/models/calendar.interface';
import { CalendarItemDialogService } from '@core/calendar/services/calendar-item-dialog.service';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss']
})
export class CalendarItemComponent {
  @Input()
  public schedule: IDaySchedule;

  constructor(private _calendarItemDialogService: CalendarItemDialogService) {
  }

  @HostListener('click', ['$event'])
  public handleCalendarItemClick($event: MouseEvent) {
    this._calendarItemDialogService.open(this.schedule);
  }
}
