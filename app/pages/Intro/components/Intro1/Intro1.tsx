import Image from "next/image";
import Transform from '../../../../assets/imgs/transforming_story_celebration.svg';
import './section1Intro.scss';
export default function Intro1() {
    return (
        <>
            <div className="Section1 bg-[white] mt-[80px]">
                <div className="py-[80px] px-[100px]">
                    <div className="grid lg:grid-cols-2 gap-2">
                        <div>
                            <div className="text-[40px] font-bold mb-[16px]">
                                Người tiên phong đào tạo công nghệ và dữ liệu tại Việt Nam
                            </div>

                            <div className="text-[#212529] text-[16px]">
                                Chúng tôi đào tạo những con người thời đại số của tương lai - sinh viên, những người trẻ mới vào nghề, du học sinh hãy những người đã có nhiều kinh nghiệm nhưng vẫn mong muốn học hỏi thêm. Chương trình của chúng tôi đã thổi hồn cho đam mê cháy bỏng, đam mê suốt đời cho công nghệ và học tập. Mục tiêu lớn của chúng tôi là kết nối những nhân tài tại Việt Nam, các tổ chức và nguồn lực đào tạo nhằm đẩy mạnh việc phát triển bản thân, thăng tiến con đường nghề nghiệp và thúc đẩy các đối tác của chúng tôi tiến xa và nhanh hơn nữa.
                            </div>
                        </div>
                        <div>
                            <Image className="Section1__img w-[516px] rounded-[20px]" src={Transform} alt='...' />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}