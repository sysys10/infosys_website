'use client'
import React, { useState } from "react";
import DetailCalendar from "@/components/calendar/detailCalendar";
import convertMtoStr from "@/utils/monthtostr"
import { Events,Event } from "@/types/calendarProps";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type selectEvent = {
    selectEvent: Event;
    setSelectEvent: Event;
}

const Calendar2 = () => {

    const [date, setDate] = useState(new Date());
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectEvent, setSelectEvent] = useState<selectEvent|null>(null);

    const events: Events = {
        2022: {},
        2023: {},
        2024: {
            0: {
                1: [{ title: "1월 1일이라는 뜻", startDate: 1, endDate: 1, desc: " " }],
            },
            6: {
                1: [
                    { title: "수강신청", startDate: 1, endDate: 3 , desc: " "},
                    { title: "이벤트 1", startDate: 1, endDate: 2 , desc: " "},
                ],
                2: [
                    { title: "수강신청", startDate: 1, endDate: 3, desc: " " },
                    { title: "이벤트 1", startDate: 1, endDate: 2 , desc: " "},
                ],
                3: [{ title: "수강신청", startDate: 1, endDate: 3 , desc: " "}, { title: "밥", startDate: 3, endDate: 5 , desc: " "}],
                5: [{ title: "웹사이트 회의", startDate: 5, endDate: 5 }],
                7: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 7, endDate: 7, desc: " " }],
                8: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 8, endDate: 10, desc: " " }],
                9: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 8, endDate: 10, desc: " " }],
                13: [{ title: "밥먹기", startDate: 13, endDate: 14 , desc: " "}],
                20: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 20, endDate: 23, desc: " " }],
                21: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 20, endDate: 23, desc: " " }],
                22: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 20, endDate: 23, desc: " " }],
                23: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 20, endDate: 23, desc: " " }],

                10: [{ title: "제 3차 공학대회의 정보시스템학과 어쩌구 저쩌구", startDate: 8, endDate: 10 , desc: " "}],
                31: [{ title: '밥먹기', startDate: 31, endDate: 31, desc: " " }]
            },
            7: {
                1: [{ title: "밥먹기", startDate: 1, endDate: 1 , desc: " "}],
            },

        },
        2025: {},
        2026: {},
        2027: {},
    };

    const yy: number = date.getFullYear();
    const mm: number = date.getMonth();
    const dd: number = date.getDate();
    const dayEvents = (events[yy] && events[yy][mm]?.[dd]) || [];

    const onPrevClick = () => {
        const yy: number = date.getFullYear();
        const mm: number = date.getMonth();
        setDate(new Date(yy, mm - 1, 1));
    };

    const onNextClick = () => {
        const yy: number = date.getFullYear();
        const mm: number = date.getMonth();
        setDate(new Date(yy, mm + 1, 1));
    };
    const onSelectEvent = (events:Event) => {
        setSelectEvent(events);
        setModalIsOpen(true);
    };
    function closeModal() {
        setModalIsOpen(false);
    }

    return (<div className="w-full bg-white h-screen pt-10">
        <div className="m-auto flex flex-col max-w-[1264px] w-full text-black px-8 font-pretendard mt-10">
            {/* <div className="my-4">
                <h2 className="text-5xl text-right">Calendar</h2>
            </div> */}
            <div className="flex justify-between w-full mobile:px-10 px-1">
                <div className="mobile:text-6xl text-5xl font-semibold">{convertMtoStr(mm)}</div>
                <div className="flex flex-col text-4xl">
                    <div className="flex ml-2"><MdArrowBack onClick={onPrevClick} /> <MdArrowForward onClick={onNextClick} /></div>
                    {yy}
                </div>
            </div>
            <DetailCalendar
                date={date}
                setDate={setDate}
                onSelectEvent={onSelectEvent}
                convertMtoStr={convertMtoStr}
                selectEvent={selectEvent}
                events={events}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
                yy={yy}
                mm={mm}
                dd={dd}
                dayEvents={dayEvents}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
            />
        </div>
    </div>)
}
export default Calendar2;