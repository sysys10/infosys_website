import React from 'react';
import { MotionEvent } from '@/components/ui/motionEvent';
import { Events } from '@/types/calendar';
import { barColor } from '@/constants/colors';

interface CalendarSquareProps {
    d: number;
    yy: number;
    mm: number;
    events: Events;
    onSelectDate: (d: number) => void;
}

export const CalendarSquare: React.FC<CalendarSquareProps> = React.memo(({ d, yy, mm, events, onSelectDate }) => {
    const Day = new Date(yy, mm, d).getDay();
    const daysInMonth = new Date(yy, mm + 1, 0).getDate();
    const lastMonth = new Date(yy, mm, 0).getDate();

    if (1 <= d && d <= daysInMonth) {
        const dayEvents = events[yy]?.[mm]?.[d] || [];

        return (
            <div className="cursor-pointer flex flex-col items-center h-36 pt-2 w-[14.2857142857%]" onClick={() => onSelectDate(d)}>
                <div className="border-b-gray-400 border-b w-[98%] text-center">{d}</div>
                <div className="w-full h-full flex flex-col text-sm font-pretendard relative">
                    {dayEvents.map((event, index) => {
                        const startDate = event.startDate.getDate();
                        const endDate = event.endDate.getDate();
                        const eventFlag = d === startDate ? 1 : Day === 0 ? 2 : 3;
                        const eventLength = endDate - d + 1;

                        return (
                            <MotionEvent
                                key={`events-${index}`}
                                className="h-5 mt-1 md:text-sm text-xs items-center flex px-1 md:px-3 text-nowrap overflow-visible rounded-md relative truncate"
                                style={{
                                    backgroundColor: eventFlag !== 3 ? barColor[event.color] : undefined,
                                    width: `${eventFlag === 1 ? (Math.min(7 - Day, eventLength)) * 100 : eventFlag === 2 ? (Math.min(7 - Day, eventLength)) * 100 : 100}%`,
                                    zIndex: `${-d}`,
                                }}
                            >
                                {(startDate === d || Day === 0) && event.title}
                            </MotionEvent>
                        )
                    })}
                </div>
            </div>
        )
    } else
        if (d < 1) {
            const dd = lastMonth + d
            const dayEvents = events[yy]?.[mm - 1]?.[dd] || [];

            return (
                <div
                    className={`cursor-pointer h-36 flex flex-col items-center pt-2 w-[14.2857142857%]`}
                >
                    <div className="border-b-gray-400 border-b w-[98%] text-center text-gray-600">{dd}</div>
                </div>
            )
        } else {
            const dd = d - daysInMonth;
            return (<div
                className={`cursor-pointer flex flex-col items-center h-36 pt-2 w-[14.2857142857%]`}
            >
                <div className="border-b-gray-400 border-b w-[98%] text-center text-gray-500">{d - daysInMonth}</div>
                <div className="w-full h-full text-xs mobile:text-sm font-pretendard relative">
                </div>
            </div>)

        }

});