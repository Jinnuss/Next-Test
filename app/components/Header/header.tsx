import logo from '../../assets/imgs/logo.png';
import Image from 'next/image';
import { FaAngleDown } from "react-icons/fa";
import Link from 'next/link';
export default function Header() {
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
                        <Link href='/pages/solution' className='item py-[8px] pl-[8px] flex'>
                            Giải pháp <FaAngleDown className='pt-[8px] text-[20px]' />
                        </Link>
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