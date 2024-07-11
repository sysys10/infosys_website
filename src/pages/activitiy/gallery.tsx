'use client'
import { GalleryItem } from '@/types/gallery';
import Modal from 'react-modal'
import Banner from '@/components/ui/banner';
import Card from '@/components/ui/card';
import { galleryModalSelectState, galleryModalState } from '@/atoms/atom';
import { useRecoilState } from 'recoil';
import { TfiClose } from "react-icons/tfi";

const galleryData: GalleryItem[] = [
  { id: 0, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: ["images/1.jpg", "images/2.jpg", "images/bg_1.jpg"] },
  { id: 1, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: ["images/2.jpg", "images/2.jpg", "images/bg_1.jpg"] },
  { id: 2, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: ["images/3.jpg", "images/2.jpg", "images/bg_1.jpg"] },
  { id: 3, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: ["images/2.jpg", "images/2.jpg", "images/bg_1.jpg"] },
  { id: 4, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: ["images/3.jpg", "images/2.jpg", "images/bg_1.jpg"] },
  { id: 5, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: ["images/1.jpg", "images/2.jpg", "images/bg_1.jpg"] },
  { id: 6, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: ["images/1.jpg", "images/2.jpg", "images/bg_1.jpg"] },
  { id: 7, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: ["images/1.jpg", "images/2.jpg", "images/bg_1.jpg"] },
  { id: 8, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: ["images/1.jpg", "images/2.jpg", "images/bg_1.jpg"] },
];

const Gallery: React.FC = () => {
  const [modalOpen, setModalOpen] = useRecoilState(galleryModalState)
  const [gallerySelect, setGallerySelect] = useRecoilState(galleryModalSelectState)
  const handleClick = (gallery: GalleryItem) => {
    setModalOpen(true);
    setGallerySelect(gallery);
  }
  return (
    <div className="bg-white w-full min-h-[150vh]">
      <Banner />
      <div className="m-auto mt-20 h-fit py-10 w-full mobile:w-[1000px] flex flex-col justify-center">
        <h1 className="m-auto font-extrabold text-4xl font-pretendard my-20 ">정시템 갤러리</h1>
        <div className='w-fit m-auto grid grid-cols-1 md:grid-cols-2 mobile:grid-cols-3 content gap-5 gap-x-10'>
          {galleryData.map((gallery, index) =>
          (
            <div key={`gallery-${index}`} onClick={() => { handleClick(gallery) }}>
              <Card gallery={gallery} />
            </div>
          ))}
        </div>
      </div>
      {
        gallerySelect && (
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => { setModalOpen(false) }}
            ariaHideApp={false}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                position: "absolute",
                top: "50%",
                left: "50%",
                maxWidth: "55.5rem",
                maxHeight: "45.5rem",
                transform: "translate(-50%, -45%)",
                borderRadius: 20,
              },
            }
            }
            className={"mobile:h-full h-4/5 mobile:w-full w-[96%] bg-white overflow-hidden outline-none"}
          >
            <div className='relative overflow-y-auto h-full px-8'>
              <div className='fixed mx-8 pb-4 pt-8 bg-white  flex flex-col gap-3 left-0 right-0 top-0 border-b border-b-gray-400 h-fit font-pretendard'>
                <div className='flex justify-between w-full items-center'> <h1 className='font-semibold text-xl mobile:text-3xl'>{gallerySelect.title}</h1> <TfiClose onClick={() => { setModalOpen(false) }} className='text-xl text-gray-500' /></div>
                <p className='text-[#747474] mt-1 font-light text-base'>{gallerySelect.date}</p>
              </div>
              <div className='mt-36'>
                <p className='min-h-20 h-fit w-full mt-4'>{gallerySelect.desc}</p>
                <div className='flex flex-col gap-y-2'>
                  {gallerySelect.imgurl.map((img: string, idx: number) => {
                    return (
                      <img key={`modalImg-${idx}`} className='rounded-2xl' src={`/assets/${img}`} alt='image' width={1000} height={100} />)
                  })}
                </div>
              </div>
            </div>
          </Modal>
        )
      }
    </div>
  );
}
export default Gallery;