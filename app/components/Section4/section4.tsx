import '../../assets/scss/section4.scss';
import icon1 from '../../assets/imgs/1.svg';
import icon2 from '../../assets/imgs/2.svg';
import icon3 from '../../assets/imgs/3.svg';
import icon4 from '../../assets/imgs/4.svg';
import icon5 from '../../assets/imgs/5.svg';
import icon6 from '../../assets/imgs/6.svg';
import icon7 from '../../assets/imgs/7.svg';
import icon8 from '../../assets/imgs/8.svg';
import icon9 from '../../assets/imgs/9.svg';
import icon10 from '../../assets/imgs/10.svg';
import { FaMicrophone } from "react-icons/fa";
import Image from 'next/image';
export default function Section4() {
    return (
        <>
            <div className='Section4 py-[30px] px-[100px]'>
                <div className='flex justify-center'>
                    <div className='inline-flex justify-center items-center Section4__btn1 px-[20px] mt-[20px] py-[10px] rounded-[20px] inline-block text-[#cb2a27]'>
                        <div className='w-[25px] h-[25px] rounded-[25px] bg-[#cb2a27] flex justify-center items-center text-white mr-[10px]'><FaMicrophone /></div>
                        LĨNH VỰC, NGÀNH NGHỀ
                    </div>
                </div>
                <div className='text-center my-[20px] text-[30px] text-white font-bold'>Các ngành nghề sử dụng giải pháp của MCI Solution </div>
                <div className='flex justify-center'>
                    <div className='text-center text-white max-w-[500px] mb-[16px]'> Các giải pháp của MCI Solution phù hợp với nhiều lĩnh vực trong đời sống kinh tế – xã hội, trong đó phải kể đến: </div>
                </div>
                <div className='grid sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5  gap-5' >
                    <div className='bg-white text-center Section4__icon  sm:col-span-2 md:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px] Section4__img' src={icon1} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> CNTT - Truyền thông</div>
                    </div>
                    <div className='bg-white text-center Section4__icon sm:col-span-2 md:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px]' src={icon2} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> Giáo dục - Đào tạo</div>
                    </div>
                    <div className='bg-white text-center Section4__icon sm:col-span-2 md:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px] Section4__img' src={icon3} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> Bất động sản</div>
                    </div>
                    <div className='bg-white text-center Section4__icon sm:col-span-3 md:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px] Section4__img' src={icon4} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> Hỗ trợ tư vấn</div>
                    </div>
                    <div className='bg-white text-center Section4__icon sm:col-span-3 md:col-span-4 lg:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px] Section4__img' src={icon5} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> Bán lẻ - thương mại</div>
                    </div>
                    <div className='bg-white text-center Section4__icon sm:col-span-2 md:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px] Section4__img' src={icon6} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> Vận tải - kho bãi</div>
                    </div>
                    <div className='bg-white text-center Section4__icon sm:col-span-2 md:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px] Section4__img' src={icon7} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> du lich - giải trí</div>
                    </div>
                    <div className='bg-white text-center Section4__icon sm:col-span-2 md:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px] Section4__img' src={icon8} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> Y tế</div>
                    </div>
                    <div className='bg-white text-center Section4__icon sm:col-span-3 md:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px] Section4__img' src={icon9} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> Spa - làm đẹp</div>
                    </div>
                    <div className='bg-white text-center Section4__icon sm:col-span-3 md:col-span-4 lg:col-span-1'>
                        <div className='flex justify-center'>
                            <Image className='w-[95px] h-[95px] Section4__img' src={icon10} alt='...' />
                        </div>
                        <div className='mt-[10px] font-bold'> Giao dịch - thanh toán</div>
                    </div>
                </div>
            </div>
        </>
    )
}