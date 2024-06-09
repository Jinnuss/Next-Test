import '../../assets/scss/section7.scss';
export default function Section7() {
    return (
        <>
            <div className='Section7 py-[30px] px-[100px] mb-[100px]'>
                <div className='grid lg:grid-cols-2 gap-2' >
                    <div className=' Section6__left col-span-1 text-white'>
                        <div className="font-bold text-[35px] mb-[16px]">
                            Doanh nghiệp của bạn đã sẵn sàng chuyển đổi tốt hơn?
                        </div>
                        <div className="text-[15px] mb-[16px]">
                            Ứng dụng công nghệ tự động hàng đầu ngay bây giờ cùng chuyên gia của chúng tôi!
                        </div>
                        <div className='flex justify-between'>
                            <div className='px-[20px] mt-[20px] py-[10px] rounded-[20px] font-bold inline-block bg-white text-black'>
                                Chat với chuyên gia tư vấn
                            </div>
                            <div className='Section7__btn px-[20px] mt-[20px] py-[10px] rounded-[20px] font-bold inline-block text-white'>
                                Gọi miễn phí qua internet
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}