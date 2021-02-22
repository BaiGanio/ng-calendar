export interface IDaySchedule {
    date: Date;
    meetings: IMeeting[]
}

export interface IMeeting {
    name: string;
    start: Date;
    end: Date;
    meetingRoom: string;
    participants: string[];
}

export interface IMeetingResponse {
    meetingRooms: string[];
    meetings: IMeeting[];
}