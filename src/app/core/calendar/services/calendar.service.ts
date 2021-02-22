import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMeeting, IMeetingResponse } from '../models/calendar.interface';
import meetingResponse from '@calendar/mock/meetings.json';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor() { }

  //INFO(PPavlov): We assume this call is made once for each month
  public fetchMeetings(year: number, month: number,): Observable<IMeetingResponse> {
    if (year === 2020 && month === 6) {
      return of({
        meetingRooms: meetingResponse.meetingRooms,
        meetings: meetingResponse.meetings.map(({ name, start, end, meetingRoom, participants }) => ({
          name,
          start: new Date(start),
          end: new Date(end),
          meetingRoom,
          participants
        }))
      } as IMeetingResponse)
    } else {
      return of({
        meetings: [],
        meetingRooms: []
      });
    }
  }
}
