'use client'
import React from "react";
import Modal from "react-modal";
import { CalendarSquare } from "./CalendarSquare";
import { CalendarModal } from "./CalendarModal";
import { useDays } from "@/hooks/useDays";
import { Events } from "@/types/calendar";
import './calendar.css'

interface CalendarDetailProps {
    date: Date;
    events: Events;
    closeModal: () => void;
    modalIsOpen: boolean;
    selectDate: any;
    onSelectDate: (date: number) => void;
}

export const CalendarDetail: React.FC<CalendarDetailProps> = ({
    date,
    events,
    closeModal,
    modalIsOpen,
    selectDate,
    onSelectDate,
}) => {
    const { yy, mm } = { yy: date.getFullYear(), mm: date.getMonth() };
    const days = useDays(yy, mm);

    return (
        <div className="w-full mt-4 max-w-[1120px] m-auto">
            <div className="mt-2 text-black w-full relative text-xs mobile:text-base z-10 border-black">
                <div className="border-y border-y-black leading-10 mb-3">
                    <div className="w-full flex text-center">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day,idx) => (
                            <span key={idx+200} className="flex-1">{day}</span>
                        ))}
                    </div>
                </div>
                <div className="w-full h-fit flex flex-wrap">
                    {days.map(d => (
                        <CalendarSquare 
                            key={`curMonth-${d}`} 
                            d={d} 
                            yy={yy} 
                            mm={mm} 
                            events={events} 
                            onSelectDate={onSelectDate} 
                        />
                    ))}
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="custom-overlay"
                className="custom-modal w-2/3 h-2/3 mobile:w-[540px] mobile:h-[700px] bg-white rounded-3xl"
                ariaHideApp={false}
            >
                <CalendarModal selectDate={selectDate} />
            </Modal>
        </div>
    );
};
