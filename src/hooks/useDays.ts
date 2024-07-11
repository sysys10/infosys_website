import { useMemo } from 'react';

export const useDays = (yy: number, mm: number) => {
    return useMemo(() => {
        const firstDay = new Date(yy, mm, 1).getDay();
        const daysInMonth = new Date(yy, mm + 1, 0).getDate();
        const days: number[] = [];
        
        for (let i = firstDay - 1; i >= 0; i--) {
            days.push(-i);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        let nextMonthDay = 1;
        while (days.length % 7 !== 0) {
            days.push(daysInMonth + nextMonthDay);
            nextMonthDay++;
        }
        return days;
    }, [yy, mm]);
};