<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrContent = [
            [
                "Lời kêu gọi donate",
                "Hãy chung tay cùng chúng tôi mang lại nhiều đóng góp hơn cho cộng đồng, chúng tôi rất cần sự tài trợ của các bạn!",
                "",
                true
            ],
            [
                "Giới thiệu",
                "Passerelles numériques (PN) là một tổ chức phi chính phủ
                của Pháp, được thành lập năm 2005 và đang hoạt động tại 3
                quốc gia châu Á: Campuchia, Philippines và Việt Nam. Với
                sứ mệnh là tạo điều kiện cho các thanh niên có hoàn cảnh
                khó khăn được học hành, được đào tạo chuyên môn và đào tạo
                kỹ năng trong lĩnh vực kỹ thuật số bằng cách phát huy tối
                đa tiềm năng cũng như sức mạnh ý chí của các em. Chúng tôi
                cũng nỗ lực giúp các em có việc làm nhằm giúp các em và
                gia đình thoát khỏi đói nghèo một cách bền vững, góp phần
                vào sự phát triển kinh tế xã hội chung của đất nước.Được
                thành lập từ năm 2010, Passerelles numériques Việt Nam
                (PNV) đã cung cấp chương trình đào tạo CNTT miễn phí về
                toàn bộ chi phí đào tạo, ăn ở và sinh hoạt kéo dài 3 năm
                với các chuyên ngành Kiểm thử Tự động, Thiết kế Web và Lập
                trình thiết bị di động cho các thanh niên có hoàn cảnh khó
                khăn ở 7 tỉnh miền Trung Việt Nam (Quảng Bình, Quảng Trị,
                Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định và Kon Tum) với
                hơn 50% là các sinh viên nữ.",
                "",
                false
            ],
            [
                "Video",
                "Hãy cùng nhìn lại những tác động xã hội PNV đã tạo ra trong vòng một thập kỷ qua nhé!",
                "http://youtu.be/3ocO3V0FhfU",
                false
            ]
        ];
        foreach($arrContent as $a){
            $content = new Content();
            $content->title =$a[0];
            $content->content = $a[1];
            $content->img = $a[2];
            $content->display = $a[3];
            $content->save();
        }
    }
}
