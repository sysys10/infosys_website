'use client'
import { CalendarDetailProps } from "@/types/CalendarProps";
import React from "react";
import Modal from "react-modal";
import MotionEvent from '@/components/ui/motionEvent';
import '@/components/calendar/calendar.css'

const CalendarDetail = ({
    events,
    closeModal,
    modalIsOpen,
    onSelectEvent,
    selectModal,
    yy,
    mm,
}: CalendarDetailProps) => {
    
    const firstDay = new Date(yy, mm, 1).getDay();
    const daysInMonth = new Date(yy, mm + 1, 0).getDate();
    const lastMonth = new Date(yy, mm, 0).getDate();



    const generateDays = () => {
        const days = [];
        for (let i = 0; i < firstDay; i++) {
            const d = lastMonth - i + 1;
            const dayEvents = events[yy]?.[mm - 1]?.[d] || [];
            days.push(
                <div key={`prevMonth-${i}`}
                    className={`cursor-pointer h-36 pt-2 w-[14.2857142857%]`}
                >
                    <div className="h-full w-full flex flex-col items-center">
                        <div className="border-b-gray-400 border-b w-[98%] text-center text-gray-500">{d}</div>
                        <div className="w-full h-full text-sm font-pretendard mt-1 relative">
                            {dayEvents.map((event, index) => {
                                return (<div
                                    key={`events-${index}`}
                                    className="h-5 bg-[aliceblue] mt-1 px-4 overflow-visible"
                                    style={{
                                        width: '100%',
                                        position: 'relative',
                                    }}
                                >
                                    {event.startDate === d && event.title}
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            )
        }
        for (let d = 1; d <= daysInMonth; d++) {
            const dayEvents = events[yy]?.[mm]?.[d] || [];
            const zIndex = daysInMonth - d;
            const eventDay = new Date(yy, mm, d).getDay();
            days.push(
                <div
                    key={`curMonth-${d}`}
                    className="cursor-pointer h-36 pt-2  w-[14.2857142857%]"
                    style={{ zIndex }}
                >
                    <div className="h-full w-full flex flex-col items-center">
                        <div className="border-b-gray-400 border-b w-[98%] text-center">{d}</div>
                        <div className="w-full h-full text-xs mobile:text-sm font-pretendard mt-1 relative">
                            {dayEvents.map((event, index) => {
                                const eventLength = event.endDate - event.startDate + 1;
                                if (eventDay + eventLength > 7) {
                                    return (
                                        <MotionEvent
                                            key={`events-${d}-${index}`}
                                            className="h-5 bg-[aliceblue] mt-1 px-4 overflow-visible rounded-l-lg truncate"
                                            style={{
                                                width: '100%',
                                                position: 'relative',
                                                zIndex
                                            }}
                                            onClick={() => { onSelectEvent(event); console.log('a')}}

                                        >
                                            <p className="truncate"> {event.startDate === d && event.title}</p>
                                        </MotionEvent>
                                    );
                                } else if (d === event.startDate) {
                                    return (
                                        <MotionEvent
                                            key={`events-${d}-${index}`}
                                            className="h-5 bg-orange-300 mt-1 px-4 overflow-visible rounded-lg flex items-center"
                                            style={{
                                                width: `${(event.endDate - event.startDate + 1) * 100}%`,
                                                position: 'relative',
                                                zIndex
                                            }}
                                            onClick={() => { onSelectEvent(event); console.log('a')}}

                                        >
                                            <p className="truncate"> {event.startDate === d && event.title}</p>
                                        </MotionEvent>
                                    );
                                }
                                else if (eventDay === 0) {
                                    return (
                                        <MotionEvent
                                            key={`events-${d}-${index}`}
                                            className="h-5 bg-[aliceblue] mt-1 px-4 overflow-visible rounded-lg truncate flex items-center"
                                            style={{
                                                width: `${(event.endDate - d + 1) * 100}%`,
                                                position: 'relative',
                                                zIndex
                                            }}
                                            onClick={() => { onSelectEvent(event); console.log('a')}}
                                        >
                                            <p className="truncate"> {event.title}</p>

                                        </MotionEvent>
                                    );
                                } else return (
                                    <div key={`events-${d}-${index}`}
                                        className="h-5 mt-1"></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        }
        const lastCalendar = 7 - (days.length % 7);
        //마지막달 몇개까지 보이게할지
        for (let d = 1; d <= lastCalendar; d++) {
            let dayEvents;
            //12월인가 아닌가 생각
            if (mm !== 11) {
                dayEvents = events[yy]?.[mm + 1]?.[d] || [];
            } else dayEvents = events[yy]?.[mm + 1]?.[d] || [];

            days.push(
                <div key={`nextMonth-${d}`}
                    className={`cursor-pointer h-36 pt-2 w-[14.2857142857%]`}
                >
                    <div className="h-full w-full flex flex-col items-center">
                        <div className="border-b-gray-400 border-b w-[98%] text-center text-gray-500">{d}</div>
                        <div className="w-full h-full text-xs mobile:text-sm font-pretendard mt-1 relative">
                            {dayEvents.map((event, index) => {
                                return (
                                    <MotionEvent
                                        key={`events-${index}`}
                                        className="h-5 bg-[aliceblue] mt-1 px-4 overflow-visible flex items-center"
                                        style={{
                                            width: '100%',
                                            position: 'relative',
                                        }}
                                    >
                                        <p className="truncate"> {event.startDate === d && event.title}</p>
                                    </MotionEvent>)
                            })}
                        </div>
                    </div>
                </div>
            )
        }
        return days;
    };

    const renderWeeks = () => {
        const days = generateDays();

        const weeks:any= [];

        let week: JSX.Element[] = [];
        days.forEach((day, index) => {
            week.push(day);
            if (week.length === 7) {
                weeks.push(<div className="w-full flex" key={`week-${index}`}>{week}</div>);
                week = [];
            }
        });
        return weeks;
    };

    return (
        <div className="w-full mt-4 max-w-[1120px] m-auto">
            <div className="mt-2 text-black w-full relative z-10 border-black">
                <div className="border-y border-y-black leading-10 mb-3">
                    <div className="w-full flex text-center">
                        <span className="flex-1">S</span>
                        <span className="flex-1">M</span>
                        <span className="flex-1">T</span>
                        <span className="flex-1">W</span>
                        <span className="flex-1">T</span>
                        <span className="flex-1">F</span>
                        <span className="flex-1">S</span>
                    </div>
                </div>
                <div className="w-full h-fit">{renderWeeks()}</div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="custom-overlay"
                className="custom-modal"
                ariaHideApp={false}
            >
                <div>{selectModal?.title}{selectModal?.startDate}{selectModal?.endDate}{selectModal?.desc} </div>
            </Modal>
        </div>
    );
};

export default CalendarDetail;
