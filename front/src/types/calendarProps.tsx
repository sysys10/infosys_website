export type Event = {
    title: string;
    startDate: number;
  endDate: number;
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
  setDate: (date: Date) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onDateClick: (day: number) => void;
  onSelectEvent: (event:Event ) => void;
  convertMtoStr: (month: number) => string;
  selectModal: Event | null;
  events: {
      [year: number]: {
          [month: number]: {
              [day: number]: {
                  title: string;
                  startDate: number;
                  endDate: number;
              }[];
          };
      };
  };
  closeModal: () => void;
  modalIsOpen: boolean;
  yy: number;
  mm: number;
  dd: number;
  dayEvents: {
      title: string;
      startDate: number;
      endDate: number;
  }[];
};