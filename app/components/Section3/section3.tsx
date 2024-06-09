"use client";
import '../../assets/scss/section3.scss';
import right from '../../assets/imgs/about.png';
import Image from 'next/image';
import { IoPersonCircleSharp } from "react-icons/io5";
export default function Section3() {
    return (
        <>
            <div className='Section3 mt-[80px]'>
                <div className='flex py-[30px] px-[100px]'>
                    <div className='w-1/2 mr-[10px]'>
                        <div className='inline-flex justify-center items-center Section3__btn1 px-[20px] mt-[20px] py-[10px] rounded-[20px] inline-block text-[#cb2a27]'>
                            <IoPersonCircleSharp className='text-[30px] mr-[10px]' /> ABOUT US
                        </div>
                        <div className='text-[50px] font-bold text-[#dc4b20] mt-[10px]  mb-[16px]' >
                            MCI Solutions
                        </div>
                        <div className='mb-[16px]'>
                            MCI solutions đã và đang khẳng định vị thế trên thị trường nội địa và hướng tới thị trường khu vực, quốc tế thông qua những hoạt động kinh doanh chủ lực như:
                        </div>
                        <div className='mb-[16px] font-bold'>
                            Giải pháp công nghệ phần mềm, Phân phối các sản phẩm SaaS, Giải pháp tích hợp phần cứng và Cung ứng nhân sự chất lượng
                        </div>
                        <div className='Section3__btn px-[20px] mt-[20px] py-[10px] rounded-[20px] font-bold inline-block text-white'>
                            Xem chi tiết
                        </div>
                    </div>
                    <Image src={right} alt='Ảnh' />
                </div>
            </div>
        </>
    );
}