import BgMain from "@/components/main/bgmain";
import { Calendar } from "@/components/calendar/Calendar";
import axios from "axios";
import { useEffect, useState } from "react";

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
        <main className="relative z-1 bg-hanyang-blue">
            <BgMain />
            <div className="w-full min-h-[80vh] bg-hanyang-blue p-20">
                <h2 className="text-4xl text-white font-pretendard font-bold mb-8">공지사항</h2>
                <div className="grid gap-6">
                    {notices && notices.map((notice) => (
                        <div key={notice.id} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{notice.title}</h3>
                            <p className="text-gray-600 mb-4">{notice.desc}</p>
                            <div className="text-sm text-gray-500">
                                {new Date(notice.date).toLocaleDateString('ko-KR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                {!notices && <p className="text-white text-center">공지사항을 불러오는 중...</p>}
            </div>
            <Calendar />
        </main>
    )
}