"use client";
import '../../assets/scss/section1.scss';
import right from '../../assets/imgs/home_img.png';
import Image from 'next/image';
export default function Section1() {
    return (
        <>
            <div className='Section1 mt-[80px]'>
                <div className='flex py-[30px] px-[100px]'>
                    <div className='w-1/2 mr-[10px]'>
                        <div className='text-[35px] font-bold text-[#c41d29] mt-[30px] mb-[16px]' >
                            Dẫn đầu giải pháp chuyển đổi số về quản lý khách hàng & vận hành doanh nghiệp
                        </div>
                        <div className='text-[20px] mb-[16px]'>
                            Nền tảng quản lý toàn diện với các dashboard hỗ trợ khách hàng và cung ứng nhận sự chất lượng cao.
                        </div>
                        <div className='Section1__btn px-[20px] py-[10px] rounded-[20px] font-bold bg-[#ff7f00] inline-block text-white'>
                            Đăng ký ngay!
                        </div>
                    </div>
                    <Image src={right} alt='Ảnh' />
                </div>
            </div>
        </>
    );
}