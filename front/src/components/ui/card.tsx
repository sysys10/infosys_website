'use client'
import MotionUp from "@/components/ui/motionup";
import * as React from 'react';

interface GalleryItem {
    id: number;
    title: string;
    date: string;
    imgurl: string[];
}
interface GalleryProps {
    gallery: GalleryItem;
}

const Card: React.FC<GalleryProps> = ({ gallery }) => {

    return (
        <MotionUp className="m-auto bg-cover w-[18.5rem] h-[18.5rem] flex flex-col justify-between bg-[#D9D9D9] rounded-2xl shadow-md" style={{ backgroundImage: `url(/assets/${gallery.imgurl[0]})` }}>
            <div></div>
            <div className="h-20 w-full rounded-2xl bg-white flex flex-col p-4 font-pretendard">
                <p className="font-bold">{gallery.title}</p>
                <p className="text-xs text-[#6B7280]">{gallery.date}</p>
            </div>
        </MotionUp>
    );
}

export default Card;
