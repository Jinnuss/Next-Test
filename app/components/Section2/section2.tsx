"use client";
import '../../assets/scss/section2.scss';
import Anh1 from '../../assets/imgs/seo-1.png';
import Anh2 from '../../assets/imgs/seo-2.png';
import Anh3 from '../../assets/imgs/seo-3.png';
import Anh4 from '../../assets/imgs/seo-4.png';
import Anh5 from '../../assets/imgs/seo-5.png';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import Image from 'next/image';

export default function Section2() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const getVisibleSlides = () => {
        const start = currentIndex;
        const end = start + 4;
        const visibleSlides = slides.slice(start, end);
        if (visibleSlides.length < 4) {
            visibleSlides.push(...slides.slice(0, 4 - visibleSlides.length));
        }
        return visibleSlides;
    };
    // const [index, setIndex] = useState(0);
    const slides = [
        { id: 1, img: Anh1, title: 'Tư vấn giải pháp pháp công nghệ', desc: 'Chúng tôi là đội ngũ chuyên gia công nghệ, cam kết mang đến cho doanh nghiệp của bạn những giải pháp đột phá và hiệu quả. Với tư vấn chúng tôi, bạn sẽ tiết kiệm được thời gian, công sức và tài nguyên.' },
        { id: 2, img: Anh2, title: 'Cung ứng nhân sự chất lượng', desc: 'Với dịch vụ cho thuê nhân sự ngắn hạn và trung hạn, chúng tôi đáp ứng nhanh chóng và linh hoạt cho các dự án và công việc tạm thời, giúp bạn tiết kiệm thời gian và chi phí tuyển dụng.' },
        { id: 3, img: Anh3, title: 'Phân phối các sản phẩm SaaS', desc: 'Chúng tôi là nhà phân phối hàng đầu các sản phẩm SaaS, cung cấp sự tiện ích và hiện đại cho doanh nghiệp. Bao gồm: Office 365, Power BI Service , Misa Vietnam , Amazon Web Services (AWS), Microsoft Azure.' },
        { id: 4, img: Anh4, title: 'Giải pháp công nghệ phần mềm', desc: 'Zenix 4.0- Giải pháp công nghệ phần mềm hàng đầu cho doanh nghiệp hiện đại. Với khả năng tùy chỉnh và mở rộng, sản phẩm Zenix 4.0 giúp tối ưu hoá hiệu quả quản lý doanh nghiệp.' },
        { id: 5, img: Anh5, title: 'Giải pháp tích hợp phần cứng', desc: 'Chúng tôi cung cấp giải pháp tích hợp phần cứng đáng tin cậy, giúp doanh nghiệp xây dựng hạ tầng công nghệ hiện đại và hiệu quả.Hãy để chúng tôi giúp bạn xây dựng cơ sở hạ tầng công nghệ mạnh mẽ, đáng tin cậy' }
    ];

    // const updateIndex = (newIndex: number) => {
    //     if (newIndex < 0) {
    //         newIndex = 0;
    //     } else if (newIndex >= slides.length - 2) {
    //         newIndex = slides.length - 3;
    //     }
    //     setIndex(newIndex);
    // };
    return (
        <>
            <div className='Section2 mt-[80px]'>
                <div className='py-[30px] px-[200px]'>
                    <div className='text-center text-[20px] font-bold mb-[16px]'>
                        Với <span className='text-[red]'>bộ giải pháp của MCI Solutions </span>
                        sẽ giúp hoàn thiện hoạt động chuyển đổi số cho doanh nghiệp phát triển thành
                        <span className='text-[red]'>doanh nghiệp số</span>, cho phép <span className='text-[orange]'>tự động hoá quy trình</span> kinh doanh đa kênh để bứt phá doanh số
                    </div>
                    <div className='text-center mb-[16px]'>
                        Trong chuyển đổi số, quan trọng nhất là xây dựng được một thương hiệu mạnh và một chiến thuật kinh doanh hợp lý, giúp công ty của bạn tiếp cận số lượng khách hàng số lượng lớn và sinh lời mạnh mẽ, chúng tôi sẽ giúp bạn:
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-between">
                <main className="w-full max-w-4xl mx-auto">
                    <div className="relative w-full">
                        <div className="flex overflow-hidden">
                            <div className="flex justify-between transition-transform duration-300 mb-[60px]">
                                {getVisibleSlides().map((slide) => (
                                    <div key={slide.id} className="lg:w-[215px] p-[10px] flex-shrink-0 Section2__slide relative">
                                        <div className='flex justify-center'> <Image src={slide.img} alt={slide.title} className="w-full h-auto w-[150px] h-[150px]" /> </div>
                                        <h3 className="text-lg font-semibold text-center">{slide.title}</h3>
                                        <p className="text-md text-[14px] text-[#707070] font-normal text-center pb-[20px]">{slide.desc}</p>
                                        <div className='absolute flex justify-center items-center bottom-[-25px] left-1/3 text-[red] Section2__icon' > <FaPlus /> </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={prev}
                            className="absolute top-1/2 left-[-100px]  transform -translate-y-1/2 left-0 text-[blue] text-[60px]"
                        >
                            <FaAngleLeft />
                        </button>
                        <button
                            onClick={next}
                            className="absolute top-1/2 right-[-100px]  transform -translate-y-1/2 right-0 text-[blue] text-[60px]"
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </main>
            </div>
            <div className='flex justify-center mb-[100px]'>
                <div className='Section2__btn text-[#dc4b20] font-bold border-solid border-[2px] border-[#dc4b20] px-[20px] py-[12px] rounded-[30px]'>Xem tất cả giải pháp</div>
            </div>
        </>
    );
}