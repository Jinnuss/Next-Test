import logo from '../../assets/imgs/logo.png';
import Image from 'next/image';
import '../../assets/scss/footer.scss';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Header from '../Header/header';
import Link from 'next/link';



export default function Footer() {
    return (
        <>
            <div className='Footer'>
                <div className='grid lg:grid-cols-3 gap-3' >
                    <div className='Footer__logo'>
                        <Image src={logo} alt='...' />
                        <div className='text-center text-[#db4922] text-[16px] font-bold mb-[16px]'>
                            Công ty cổ phần Giải Pháp doanh nghiệp MCI Solutions
                        </div>
                        <div className='text-center text-[#95a5a6] text-[13px] mb-[16px]'>
                            <div className='inline-flex items-center '>
                                <FaMapMarkerAlt className='inline-block' />
                            </div>
                            Tầng 5 tòa Starcity, Số 23 Lê Văn Lương, Phường Nhân Chính, Quận Thanh Xuân, Thành Phố Hà Nội
                        </div>
                    </div>
                    <div>
                        <div className='text-[#db4922] text-[16px] font-bold mb-[20px]'>Hỗ trợ khác hàng </div>
                        <div className='text-[14px] font-bold mb-[20px]'>Hotline Sale Saletech & Martech </div>
                        <div className='text-[14px] text-[#95a5a6] mb-[5px]'>CEO: 093.414.6016 </div>
                        <div className='text-[14px] text-[#95a5a6] mb-[20px]'>CTO: 098.252.1378 </div>
                        <div className='text-[14px] font-bold mb-[20px]'>Email sale </div>
                        <div className='text-[14px] text-[#95a5a6] mb-[20px]'>sonnc@mcisolutions.com.vn</div>
                        <div className='text-[14px] font-bold mb-[20px]'>Kết nối với chúng tôi </div>
                        <div className='flex'>
                            <div className='w-[40px] h-[40px] Footer__icon bg-[blue] flex justify-center items-center mr-[10px] text-[20px] text-[white]'>
                                <FaFacebookF />
                            </div>
                            <div className='w-[40px] h-[40px] Footer__icon bg-[black] flex justify-center items-center mr-[10px] text-[20px] text-[white]'>
                                <CiMail />
                            </div>
                            <div className='w-[40px] h-[40px] Footer__icon bg-[green] flex justify-center items-center mr-[10px] text-[20px] text-[white]'>
                                <FaPhone />
                            </div>
                            <div className='w-[40px] h-[40px] Footer__icon bg-[red] flex justify-center items-center mr-[10px] text-[20px] text-[white]'>
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-[#db4922] text-[16px] font-bold mb-[20px]'>Chính sách và quy định chung </div>
                        <a href='#' className='block Footer__link text-[14px] text-[#95a5a6] ml-[20px] mb-[5px]'>Chính sách bảo vệ thông tin cá nhân</a>
                        <a href='#' className='block Footer__link text-[14px] text-[#95a5a6] ml-[20px] mb-[5px]'>Điều khoản sử dụng</a>
                        <a href='#' className='block Footer__link text-[14px] text-[#95a5a6] ml-[20px] mb-[5px]'>Quyền và nghĩa vụ</a>
                        <a href='#' className='block Footer__link text-[14px] text-[#95a5a6] ml-[20px] mb-[5px]'>Phương thức thanh toán</a>
                        <a href='#' className='block Footer__link text-[14px] text-[#95a5a6] ml-[20px] mb-[5px]'>Chính sách bảo hành</a>
                        <a href='#' className='block Footer__link text-[14px] text-[#95a5a6] ml-[20px] mb-[5px]'>Chính sách Email Marketing</a>
                        <a href='#' className='block Footer__link text-[14px] text-[#95a5a6] ml-[20px] mb-[5px]'>Chính sách hỗ trợ khách hàng</a>
                        <a href='#' className='block Footer__link text-[14px] text-[#95a5a6] ml-[20px] mb-[5px]'>Liên hệ</a>
                    </div>
                </div>
            </div>
            <div className='text-center my-[50px] font-bold'>
                Copyright © 2023 MCI Solutions
            </div>
        </>
    )
}