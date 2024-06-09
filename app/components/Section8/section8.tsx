"use client";
import '../../assets/scss/section8.scss';
import right from '../../assets/imgs/trend-img.png';
import image from '../../assets/imgs/avatar.jpg';
import Image from 'next/image';
import { IoPersonCircleSharp } from "react-icons/io5";
export default function Section8() {
    return (
        <>
            <div className='Section8 mt-[80px] py-[30px] px-[100px] mb-[100px]'>
                <div className='grid lg:grid-cols-2 gap-2' >
                    <div className=' mr-[10px]'>
                        <div className='inline-flex justify-center items-center Section8__btn1 px-[20px] mt-[20px] py-[10px] rounded-[20px] inline-block text-[#cb2a27]'>
                            <IoPersonCircleSharp className='text-[30px] mr-[10px]' /> XU THẾ TẤT YẾU
                        </div>
                        <div className='text-[30px] font-bold text-[#bf1937] mt-[30px]  mb-[16px]' >
                            Đồng hành xu thế chuyển đổi số cho doanh nghiệp cả nước.
                        </div>
                        <div className='mb-[16px]'>
                            Liên hệ ngay với chúng tôi qua số hotline <span className='text-[#bf1937] font-bold'>  093.414.6016</span> để được hướng dẫn.
                        </div>
                        <div className='mb-[16px]'>
                            Chúng tôi trân trọng và rất hân hạnh được phục vụ!
                        </div>
                        <div className='flex'>
                            <div className='w-[50px] h-[50px]'>
                                <Image className='Section8__img' src={image} alt='...' />
                            </div>
                            <div className='w-[50px] h-[50px] ml-[-25px]'>
                                <Image className='Section8__img' src={image} alt='...' />
                            </div>
                            <div className='w-[50px] h-[50px] ml-[-25px]'>
                                <Image className='Section8__img' src={image} alt='...' />
                            </div>
                            <div className='w-[50px] h-[50px] ml-[-25px]'>
                                <Image className='Section8__img' src={image} alt='...' />
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image className='Section8__imgright' src={right} alt='Ảnh' />
                    </div>
                </div>
            </div>
        </>
    );
}