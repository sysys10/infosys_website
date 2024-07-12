import { Event } from "@/types/calendar";
import { FaCaretDown } from "react-icons/fa";
import { formatDate } from "@/utils/dateUtils"
export const CalendarModal = ({ selectDate }: { selectDate: Event[] | null }) => {
    console.log(selectDate)
    const descs = document.querySelectorAll(".desc");
    function onDownClick(i: number) {
        descs[i].classList.remove("max-h-0")
        descs[i].classList.add("max-h-80");
    }
    return (
        <div className="w-full h-full flex flex-col p-4">
            {selectDate?.map((v, i) => {

                return (
                    <div className="flex flex-col">
                        <div className="flex-col mobile:flex mt-4 justify-between font-pretendard">
                            <div className="flex text-xl flex-1 mr-2 border-r border-r-gray-300">
                                <FaCaretDown className="animate-bounce mt-2" onClick={() => { onDownClick(i) }} />
                                <p className="ml-4">{v.title}</p>
                            </div>
                            <p className="text-lg">{formatDate(v.startDate)} ~ {formatDate(v.endDate)}</p>
                        </div>
                        <div className="desc max-h-0 h-full overflow-hidden transition-all ml-10">{v.desc}</div>
                    </div>
                )
            })}
        </div>)
}

