import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDaySchedule } from '../models/calendar.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarItemDialogService {
  private _dayScheduleChangeSubject$: BehaviorSubject<IDaySchedule> =
    new BehaviorSubject<IDaySchedule>(null); 

  constructor() { }

  public open(daySchedule: IDaySchedule): void {
    this._dayScheduleChangeSubject$.next(daySchedule);
  }

  public close(): void {
    this._dayScheduleChangeSubject$.next(null);
  }
}
