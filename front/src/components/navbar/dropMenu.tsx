import { Link } from "react-router-dom";
import "./navbar.css";
type DropMenuProps = {
  nav_bg: string;
  navRef: any;
}
const DropMenu = ({ nav_bg, navRef }:DropMenuProps) => {
  return (
    <div className={`nav_drop ${nav_bg}`} >
      <div className="max-w-[1280px] w-full h-full m-auto flex justify-end">
        <div
          onMouseEnter={() => {
            navRef.current[0].classList.add("active");
          }}
          onMouseLeave={() => {
            navRef.current[0].classList.remove("active");
          }}
          className="aboutDrop h-full w-[160px] pt-[15px] font-pretendard"
        >
          <ul className="flex h-[100px] w-[160px] flex-col items-center gap-2 border-r pl-10 border-r-gray-300 border-opacity-20 ">
            <Link
              to="/about"
              className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200"
            >
              소개
            </Link>
            <Link
              to="/about/organization"
              className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200"
            >
              조직도
            </Link>
            <Link
              to="/about/contact"
              className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div
          onMouseEnter={() => {
            navRef.current[1].classList.add("active");
          }}
          onMouseLeave={() => {
            navRef.current[1].classList.remove("active");
          }}
          className="h-full w-[160px] noticeDrop pt-[15px]"
        >
          <ul className="flex h-[100px] w-[160px] flex-col items-center gap-2 border-r pl-10 border-r-gray-300 border-opacity-20">
            <Link to="/notice" className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              공지사항
            </Link>
          
            <Link to="/notice/settlement" className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              결산안
            </Link>
            <Link to="/notice/faq" className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              FAQ
            </Link>
          </ul>
        </div>
        <div
          onMouseEnter={() => {
            navRef.current[2].classList.add("active");
          }}
          onMouseLeave={() => {
            navRef.current[2].classList.remove("active");
          }}
          className="h-full w-[160px] activityDrop pt-[15px]"
        >
          <ul className="flex h-[100px] w-[160px] flex-col items-center gap-2 border-r pl-10 border-r-gray-300 border-opacity-20">
            <Link to={"/activity/gallery"} className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              갤러리
            </Link>
            <Link to={"/activity/calendar"} className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              캘린더
            </Link>
          </ul>
        </div>
        <div
          onMouseEnter={() => {
            navRef.current[3].classList.add("active");
          }}
          onMouseLeave={() => {
            navRef.current[3].classList.remove("active");
          }}
          className="h-full w-[160px] wikiDrop pt-[15px]"
        >
          <ul className="flex h-[100px] w-[160px] flex-col items-center gap-2 border-r pl-10 border-r-gray-300 border-opacity-20">
            <Link to={"/wiki/lecture"} className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              리얼 강의평
            </Link>
            <Link to={"/wiki/lecturetips"} className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              꿀교양
            </Link>
            <Link to={"/wiki/restaurant"} className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              맛집
            </Link>
            <Link to={"/wiki/tips"} className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              새내기 TIPS
            </Link>
          </ul>
        </div>
        <div
          onMouseEnter={() => {
            navRef.current[4].classList.add("active");
          }}
          onMouseLeave={() => {
            navRef.current[4].classList.remove("active");
          }}
          className="h-full w-[160px] wikiDrop pt-[15px]"
        >
          <ul className="flex h-[100px] w-[160px] flex-col items-center gap-2 pl-10 border-opacity-20">
            <Link to={"/login"} className="w-[160px] flex flex-col justify-center text-sm font-light hover:cursor-pointer hover:drop-shadow-white-lg transition-all duration-200">
              로그인
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DropMenu;
