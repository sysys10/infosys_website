export const convertMtoStr = (month: number): string => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
};

// dateUtils.ts

export const formatDate = (date: Date): string => {
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더합니다.
    const day = date.getDate();
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

    return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')} (${dayOfWeek})`;
};