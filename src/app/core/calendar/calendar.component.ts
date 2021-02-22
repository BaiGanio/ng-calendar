import { Component, Input, OnInit } from '@angular/core';
import { IDaySchedule, IMeetingResponse } from '@calendar/models/calendar.interface';
import { CalendarService } from '@calendar/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public monthlySchedules: IDaySchedule[];
  public daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  @Input()
  public startDate: Date = new Date();

  public currentDate: Date;

  constructor(private _calendarService: CalendarService) { }

  public ngOnInit(): void {
    const currentYear = this.startDate.getFullYear();
    const currentMonth = this.startDate.getMonth();

    this._initializeMonthlySchedulesForMonth(currentYear, currentMonth);

    this.currentDate = this.startDate;
  }

  public prevMonthClickHandler() {
    let currentYear = this.currentDate.getFullYear();
    let currentMonth = this.currentDate.getMonth();

    currentMonth -= 1;
    if (currentMonth < 0) {
      currentYear -= 1;
      currentMonth = 11;
    }

    this._initializeMonthlySchedulesForMonth(currentYear, currentMonth);

    this.currentDate = new Date(currentYear, currentMonth);
  }

  public nextMonthClickHandler() {
    let currentYear = this.currentDate.getFullYear();
    let currentMonth = this.currentDate.getMonth();

    currentMonth += 1;
    if (currentMonth > 11) {
      currentYear += 1;
      currentMonth = 0;
    }

    this._initializeMonthlySchedulesForMonth(currentYear, currentMonth);

    this.currentDate = new Date(currentYear, currentMonth);
  }

  public todayClickHandler() {
    const todayDate = new Date();

    let currentYear = todayDate.getFullYear();
    let currentMonth = todayDate.getMonth();

    this._initializeMonthlySchedulesForMonth(currentYear, currentMonth);

    this.currentDate = todayDate;
  }

  public trackByFunc = (index: number, item: IDaySchedule) => item.date;

  private _initializeMonthlySchedulesForMonth(currentYear: number, currentMonth: number): void {
    this._calendarService
      .fetchMeetings(currentYear, currentMonth)
      .subscribe(({ meetingRooms, meetings }: IMeetingResponse) => {
        const daysInMonth = this._getDaysInMoth(currentYear, currentMonth);

        const monthlyScheduleSlots = Array.from(Array(daysInMonth).keys()).map(i => ({
          date: new Date(currentYear, currentMonth, i + 1),
          meetings: []
        }));

        if (meetingRooms.length && meetings.length) {
          for (let i = 0; i < meetings.length; i++) {
            const meeting = meetings[i];
            const monthlyScheduleSlotsIndex = meeting.start.getDate() - 1;

            monthlyScheduleSlots[monthlyScheduleSlotsIndex].meetings.push(meeting);
          }
        }

        monthlyScheduleSlots.forEach((m) => m.meetings.sort((a, b) => {
          return a.start.getTime() - b.start.getTime();
        }));

        console.log(monthlyScheduleSlots);
        this.monthlySchedules = monthlyScheduleSlots;
      });
  }

  private _getDaysInMoth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
}
