
export type Event = {
  title: string;
  startDate: Date;
  endDate: Date;
  color: number;
  desc?: string;
};
type MonthlyEvents = {
  [day: number]: Event[];
};
type YearlyEvents = {
  [month: number]: MonthlyEvents;
};
export type Events = {
  [year: number]: YearlyEvents;
};

export type CalendarDetailProps = {
  date: Date;
  events: Events;
  yy: number;
  mm: number;
  dd: number;
};

export type selectEvent = {
  selectEvent: Event;
  setSelectEvent: Event;
};
