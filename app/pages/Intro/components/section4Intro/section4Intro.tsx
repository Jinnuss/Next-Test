import './section4Intro.scss';
import anh1 from '../../../../assets/imgs/intro-1.png';
import anh2 from '../../../../assets/imgs/intro-2.jpg';
import anh3 from '../../../../assets/imgs/intro-3.jpg';
import Image from 'next/image';
export default function Section4Intro() {
    return (
        <>
            <div className="Section4 bg-[white]">
                <div className="py-[20px] px-[100px] mb-[40px]">
                    <div className="text-center text-[40px] font-bold mb-[40px]">Bản tin nổi bật</div>
                    <div className='grid lg:grid-cols-3 gap-3'>
                        <div className='Section4__item'>
                            <Image className='Section4__img' src={anh1} alt='...' />
                            <div className='mt-[10px] mb-[5px] text-center '>
                                Kiến thức chuyển đổi số
                            </div>
                            <div className='mb-[10px] text-center '>
                                June 10, 2024, 8:08 p.m.
                            </div>
                            <div className='h-[145px] font-bold text-[24px] mb-[20px]'>
                                CRM MARKETING LÀ GÌ? CRM GIÚP PHÂN PHỐI CHIẾN DỊCH MARKETING HIỆU QUẢ NHƯ THẾ NÀO?
                            </div>
                            <div className=''>
                                Ngày nay, việc quản lý bán hàng đòi hỏi sự chính xác, linh hoạt và hiệu quả. Để đáp ứng những yêu cầu này, các doanh nghiệp cần một giải pháp quản lý bán hàng toàn diện và tích hợp. Phần mềm quản lý Bán hàng ERP (Enterprise Resource Planning) ra đời như một công cụ không thể thiếu, giúp doanh nghiệp tối ưu hóa quy trình bán hàng, tăng cường tương tác với khách hàng và nâng cao hiệu suất kinh doanh.
                            </div>
                            <div className='Section4__btn'>
                                Read the story
                            </div>
                        </div>
                        <div className='Section4__item'>
                            <Image className='Section4__img' src={anh2} alt='...' />
                            <div className='mt-[10px] mb-[5px] text-center '>
                                Kiến thức chuyển đổi số
                            </div>
                            <div className='mb-[10px] text-center '>
                                June 10, 2024, 8:06 p.m.
                            </div>
                            <div className='h-[145px] font-bold text-[24px] mb-[20px]'>
                                TOP 1 GIẢI PHÁP PHẦN MỀM QUẢN LÝ BÁN HÀNG ERP CHUYÊN NGHIỆP
                            </div>
                            <div className=''>
                                Ngày nay, việc quản lý bán hàng đòi hỏi sự chính xác, linh hoạt và hiệu quả. Để đáp ứng những yêu cầu này, các doanh nghiệp cần một giải pháp quản lý bán hàng toàn diện và tích hợp. Phần mềm quản lý Bán hàng ERP (Enterprise Resource Planning) ra đời như một công cụ không thể thiếu, giúp doanh nghiệp tối ưu hóa quy trình bán hàng, tăng cường tương tác với khách hàng và nâng cao hiệu suất kinh doanh.
                            </div>
                            <div className='Section4__btn'>
                                Read the story
                            </div>
                        </div>
                        <div className='Section4__item'>
                            <Image className='Section4__img' src={anh3} alt='...' />
                            <div className='mt-[10px] mb-[5px] text-center '>
                                Kiến thức chuyển đổi số
                            </div>
                            <div className='mb-[10px] text-center '>
                                June 10, 2024, 8:03 p.m.
                            </div>
                            <div className='h-[145px] font-bold text-[24px] mb-[20px]'>
                                PHẦN MỀM QUẢN LÝ NHÂN LỰC (HRM): GIẢI PHÁP HIỆU QUẢ CHO DOANH NGHIỆP
                            </div>
                            <div className=''>
                                Phần mềm quản lý nguồn nhân lực (HRM – Human Resource Management software) là một loại phần mềm được thiết kế giúp các tổ chức quản lý và tổ chức liên quan nắm bắt thông tin nhân sự của họ một cách hiệu quả. Điều này bao gồm quản lý thông tin cá nhân của nhân viên, quản lý thời gian làm việc và chấm công, đánh giá hiệu suất, quản lý quy trình tuyển dụng và đào tạo, cũng như quản lý các chính sách và quy định nhân sự.
                            </div>
                            <div className='Section4__btn'>
                                Read the story
                            </div>
                        </div>
                    </div>
                    <div className="text-[40px] font-bold my-[40px] text-center">Liên hệ chúng tôi</div>
                    <div className=''>
                        <div className='grid lg: grid-cols-2 gap-2'>
                            <div className='text-[24px]'>
                                <div className='font-bold mb-[10px] '>Hà nội</div>
                                <div className='mb-[20px]'>Văn phòng Tầng 6, Số 5, Ngách 23, Ngõ 165 Thái Hà, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='Section4__btn1 mb-[20px] text-[24px]'>
                                    See more map
                                </div>
                            </div>
                        </div>
                        <div className='grid lg: grid-cols-2 gap-2'>
                            <div className='text-[24px]'>
                                <div className='mb-[10px] font-bold'>Hồ Chí Minh</div>
                                <div className='mb-[20px]'>Văn phòng Tầng 4, 13 Cao Thắng, Phường 2, Quận 3, Thành Phố Hồ Chí Minh</div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='Section4__btn1 mb-[20px] text-[24px]'>
                                    See more map
                                </div>
                            </div>
                        </div>
                        <div className='grid lg: grid-cols-2 gap-2'>

                            <div className='text-[24px]'>
                                <div className='mb-[10px] font-bold'>Email </div>
                                <div className='mb-[20px]'>cskh@mcivietnam.com</div>
                            </div>
                            <div className='flex justify-center items-center'>

                                <div className='text-[24px]'>
                                    <div className='mb-[10px] font-bold text-end' >Hotline </div>
                                    <div>024 7106 8368</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <form>
                        <label className='mb-[20px]' htmlFor="#name">Name</label>
                        <input className='mb-[20px]' type="text" placeholder='Enter name' required id='name' />
                        <label className='mb-[20px]' htmlFor="#company">Company</label>
                        <input className='mb-[20px]' type="text" placeholder='Enter Company' required id='company' />
                        <label className='mb-[20px]' htmlFor="#mail">Email address </label>
                        <input className='mb-[20px]' type="text" placeholder='Enter email' required id='mail' />
                        <label className='mb-[20px]' htmlFor="">Message</label>
                        <textarea className='mb-[20px]' rows={5} />
                        <div className='mb-[20px]'>Xác nhận bạn không phải là robot </div>
                        <button className='Section4__btn1 mb-[20px] text-[24px]'>
                            Gửi thông tin
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}