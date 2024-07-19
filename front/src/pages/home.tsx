import BgMain from "@/components/main/bgmain";
import { Calendar } from "@/components/calendar/Calendar";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

export default function Home() {
    type NoticeType = {
        id: number;
        title: string;
        desc: string;
        date: Date;
    }

    const [notices, setNotices] = useState<NoticeType[] | null>(null);

    useEffect(() => {
        fetchNotices();
    }, []);

    async function fetchNotices() {
        try {
            const response = await axios.get('http://localhost:3001/api/notice');
            setNotices(response.data);
        } catch (error) {
            console.error("공지사항을 불러오는 데 실패했습니다:", error);
        }
    }

    return (
        <main className="relative z-1 bg-gradient-to-r from-[#0E4A84] to-blue-200">
            <BgMain />
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-5xl text-white font-pretendard font-bold mb-12 text-center">공지사항</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {notices && notices.map((notice) => (
                        <div key={notice.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 border-t-4 border-[#0E4A84]">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[#0E4A84] mb-3 line-clamp-2">{notice.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{notice.desc}</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <FaCalendarAlt className="mr-2 text-[#0E4A84]" />
                                    {new Date(notice.date).toLocaleDateString('ko-KR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                            <div className="bg-gray-100 px-6 py-4">
                                <a href="#" className="text-[#0E4A84] font-semibold flex items-center justify-between hover:underline">
                                    자세히 보기
                                    <FaChevronRight />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {!notices && 
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
                    </div>
                }
            </div>
            <Calendar />
        </main>
    )
}