"use client";
import logo from '../../assets/imgs/logo.png';
import Image from 'next/image';
import { FaAngleDown } from "react-icons/fa";
import Link from 'next/link';
export default function Header() {
    const handleClick = () => {
        const options = document.getElementById('Options');
        options?.classList.toggle('show');
    }
    return (
        <>
            <div className="header flex justify-between py-[8px] shadow-lg">
                <Link href={'/'} className="px-[20px]">
                    <Image className='w-[300px]' src={logo} alt='Ảnh ' />
                </Link>
                <div className='flex mr-[50px]'>
                    <div className='flex'>
                        <Link href='/pages/Intro' className='item p-[8px]'>
                            Giới thiệu
                        </Link>
                        <div className='item py-[8px] pl-[8px] flex relative' onClick={handleClick}>
                            Giải pháp <FaAngleDown className='pt-[8px] text-[20px]' />
                            <div id='Options' className='Options border-solid border-[1px] border-black rounded-[10px] absolute w-[270px] top-[80px] right-[-170px] bg-white font-normal' >
                                <div className='itemOption p-[10px]'>
                                    Chuyển đổi số doanh nghiệp
                                </div>
                                <div className='itemOption p-[10px]'>
                                    Thiết kế ứng dụng di động
                                </div>
                                <div className='itemOption p-[10px]'>
                                    Trường học số, trung tâm số
                                </div>
                                <div className='itemOption p-[10px]'>
                                    Tiếp thị bán hàng kỹ thuật số
                                </div>
                                <div className='itemOption p-[10px]'>
                                    Phân tích, xử lý dữ liệu lớn
                                </div>
                                <div className='itemOption p-[10px]'>
                                    Trí tuệ nhân tạo AI, học máy
                                </div>
                                <div className='itemOption p-[10px]'>
                                    Kết nối API bên thứ 3
                                </div>
                                <div className='itemOption p-[10px] font-bold'>
                                    Tất cả
                                </div>
                            </div>
                        </div>
                        <Link href='/pages/BaiViet' className='item p-[8px]'>
                            Bài viết
                        </Link>

                        <Link href='/pages/Videos' className='item p-[8px]'>
                            Videos
                        </Link>
                        <Link href='/pages/TuyenDung' className='item p-[8px]'>
                            Tuyển dụng
                        </Link>
                        <Link href='/pages/dangnhap' className='item p-[8px]'>
                            Đăng nhập
                        </Link>
                    </div>
                    <div className='mt-[14px] rounded-[30px] phone flex'>
                        093.414.6016
                    </div>

                </div>
            </div>
        </>
    )
}