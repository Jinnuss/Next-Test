import icon1 from '../../assets/imgs/knowledge1.png';
import icon2 from '../../assets/imgs/knowledge2.png';
import icon3 from '../../assets/imgs/knowledge3.png';
import icon4 from '../../assets/imgs/knowledge4.png';
import icon5 from '../../assets/imgs/knowledge5.png';
import icon6 from '../../assets/imgs/knowledge6.png';
import Sbt from '../Section6Bottom/S6Bt';
import Image from "next/image";
import '../../assets/scss/section6.scss';
export default function Section6() {
    return (
        <>
            <div>
                <div className='Section6 py-[30px] px-[100px]'>
                    <div className='text-center text-[30px] font-bold text-[#dc4b20] mt-[10px]  mb-[30px]'> Chia sẻ kiến thức với chúng tôi</div>
                    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-3' >
                        <div className='bg-white Section6__icon '>
                            <div className='flex'>
                                <Image className='Section6__img' src={icon1} alt='...' />
                            </div>
                            <Sbt />
                            <div className='Section6__icon__btn inline-block text-[#dc4b20] font-bold border-solid border-[2px] border-[#dc4b20] px-[20px] py-[12px] rounded-[30px]'>Tìm hiểu thêm</div>
                        </div>
                        <div className='bg-white Section6__icon'>
                            <div className='flex'>
                                <Image className='Section6__img' src={icon2} alt='...' />
                            </div>
                            <Sbt />
                            <div className='Section6__icon__btn inline-block text-[#dc4b20] font-bold border-solid border-[2px] border-[#dc4b20] px-[20px] py-[12px] rounded-[30px]'>Tìm hiểu thêm</div>
                        </div>
                        <div className='bg-white Section6__icon'>
                            <div className='flex'>
                                <Image className='Section6__img' src={icon3} alt='...' />
                            </div>
                            <Sbt />
                            <div className='Section6__icon__btn inline-block text-[#dc4b20] font-bold border-solid border-[2px] border-[#dc4b20] px-[20px] py-[12px] rounded-[30px]'>Tìm hiểu thêm</div>
                        </div>
                        <div className='bg-white Section6__icon'>
                            <div className='flex'>
                                <Image className='Section6__img' src={icon4} alt='...' />
                            </div>
                            <Sbt />
                            <div className='Section6__icon__btn inline-block text-[#dc4b20] font-bold border-solid border-[2px] border-[#dc4b20] px-[20px] py-[12px] rounded-[30px]'>Tìm hiểu thêm</div>
                        </div>
                        <div className='bg-white Section6__icon'>
                            <div className='flex'>
                                <Image className='Section6__img' src={icon5} alt='...' />
                            </div>
                            <Sbt />
                            <div className='Section6__icon__btn inline-block text-[#dc4b20] font-bold border-solid border-[2px] border-[#dc4b20] px-[20px] py-[12px] rounded-[30px]'>Tìm hiểu thêm</div>
                        </div>
                        <div className='bg-white Section6__icon'>
                            <div className='flex'>
                                <Image className='Section6__img' src={icon6} alt='...' />
                            </div>
                            <Sbt />
                            <div className='Section6__icon__btn inline-block text-[#dc4b20] font-bold border-solid border-[2px] border-[#dc4b20] px-[20px] py-[12px] rounded-[30px]'>Tìm hiểu thêm</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}