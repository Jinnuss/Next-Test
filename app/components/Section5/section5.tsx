"use client";
import '../../assets/scss/section5.scss';
import left from '../../assets/imgs/advance.png';
import Image from 'next/image';
import { IoPersonCircleSharp, IoPerson } from "react-icons/io5";
import { FaPaperclip, FaRegCircleCheck, FaGear } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";

import { FaShieldAlt } from "react-icons/fa";
export default function Section5() {
    return (
        <>
            <div className='Section5 mt-[10px]'>
                <div className='flex py-[40px] px-[100px]'>
                    <div className='w-1/2 mr-[20px]'>
                        <div className='inline-flex justify-center items-center Section5__btn1 px-[20px] mt-[20px] py-[10px] rounded-[30px] inline-block text-[#cb2a27]'>
                            <IoPersonCircleSharp className='text-[30px] mr-[10px] ' /> ĐIỂM MẠNH CỦA MCI SOLUTIONS
                        </div>
                        <div className='text-[30px] font-bold text-[#dc4b20] mt-[10px]  mb-[16px]' >
                            MCI Solutions khác biệt và vượt trội
                        </div>
                        <div className='mb-[16px]'>
                            MCI Solution tự tin là một trong các công ty hàng đầu trong lĩnh vực giải pháp phầm mềm và tích hợp phần cứng, có năng lực cạnh tranh trên khu vực và thị trường quốc tế.
                        </div>
                        <div>
                            <Image className='Section5__img' src={left} alt='Ảnh' />
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 w-1/2' >
                        <div className='bg-white Section5__icon  sm:col-span-2 md:col-span-1'>
                            <div className='flex justify-left'>
                                <IoPerson className='text-[30px] mr-[10px] text-[#dc4b20]' />
                            </div>
                            <p className='font-bold text-[#dc4b20] mt-[10px]  mb-[16px]' >
                                200++ Chuyên gia thực chiến về khoa học dữ liệu, Information Technology,
                            </p>
                            <p>
                                và tư vấn chiến lược giải pháp doanh nghiệp.
                            </p>
                        </div>
                        <div className='bg-white Section5__icon  sm:col-span-2 md:col-span-1'>
                            <div className='flex justify-left'>
                                <FaShieldAlt className='text-[30px] mr-[10px] text-[#dc4b20]' />
                            </div>
                            <p className='font-bold text-[#dc4b20] mt-[10px]  mb-[16px]' >
                                Công nghệ bảo mật dữ liệu hàng đầu từ MCI Solution –
                            </p>
                            <p>
                                Đối tác chiến lược của các nhà cung cấp hạ tầng đám mây Việt Nam top đầu Việt Nam
                            </p>
                        </div>
                        <div className='bg-white Section5__icon  sm:col-span-2 md:col-span-1'>
                            <div className='flex justify-left'>
                                <FaPaperclip className='text-[30px] mr-[10px] text-[#dc4b20]' />
                            </div>
                            <p className='font-bold mt-[10px]  mb-[16px]' >
                                Hệ sinh thái đa kết nối, đồng bộ dữ liệu trong bộ giải pháp 5.0
                            </p>
                            <p>
                                , sẵn sàng tích hợp các công cụ chuyên biệt của bên thứ 3 để phục vụ theo đặc thù doanh nghiệp
                            </p>
                        </div>
                        <div className='bg-white Section5__icon  sm:col-span-2 md:col-span-1'>
                            <div className='flex justify-left'>
                                <FaRegCircleCheck className='text-[30px] mr-[10px] text-[#dc4b20]' />
                            </div>
                            <p className='font-bold mt-[10px]  mb-[16px]' >
                                Năng lực công nghệ cao dựa trên nền tảng công nghệ tích lũy nhiều năm
                            </p>
                            <p>
                                của MCI Solutions – đơn vị tiên phong trong lĩnh vực công nghệ, truyền thông tại Việt Nam
                            </p>
                        </div>
                        <div className='bg-white Section5__icon  sm:col-span-2 md:col-span-1'>
                            <div className='flex justify-left'>
                                <FaGear className='text-[30px] mr-[10px] text-[#dc4b20]' />
                            </div>
                            <p className='font-bold mt-[10px]  mb-[16px]' >
                                Phần mềm thân thiện, vận hành tinh gọn,
                            </p>
                            <p>
                                mọi nhân sự đều dễ dàng sử dụng, hỗ trợ đa ngôn ngữ
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='inline-flex justify-center items-center Section5__btn1 px-[20px] mt-[20px] mb-[30px] py-[10px] rounded-[20px] text-[#cb2a27]'>
                        <div className='w-[25px] h-[25px] rounded-[25px] bg-[#cb2a27] flex justify-center items-center text-white mr-[10px]'><FaQuestion />
                        </div>
                        HÔM NAY CÓ GÌ
                    </div>
                </div>
            </div>
        </>
    );
}