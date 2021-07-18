<?php

namespace Database\Seeders;

use App\Models\Sharing;
use Illuminate\Database\Seeder;

class SharingSeeder extends Seeder
{
    
    public function run()
    {
        $arrSharing = [
            [
                'PN Việt Nam - Ngôi nhà thứ hai của tôi, cũng là một bước ngoặt lớn trong cuộc đời tôi, nơi đã mở ra một cánh cửa mới và cho tôi một hành trang vững chắc cho sự nghiệp của mình. Khi còn ở phổ thông, tôi thậm chí còn không biết công nghệ thông tin là gì. Chính tình cảm ấm áp và sự hỗ trợ nhiệt tình từ các thầy cô và tất cả thành viên ở PN Việt Nam đã giúp tôi lớn lên từng ngày. Giờ đây, tôi tiếp tục thăng tiến trong sự nghiệp với một công việc ổn định tại một công ty công nghệ thông tin ở Đà Nẵng - nơi mà tôi hằng mơ ước.',
                'Anh_Dien.png',
                'VÕ MÃ ĐIỀN',
                'Cựu sinh viên PNV, khóa 2016, Lập trình viên Phần mềm, FPT Software'
            ],
            [
                'PN Việt Nam đến như một phép màu. Chúng em là khóa đầu tiên của chương trình đào tạo mới kéo dài 3 năm. Chúng em đã có nhiều thời gian hơn để tìm hiểu các công nghệ tiên tiến mà các công ty cần, cũng như cải thiện khả năng tiếng Anh và kĩ năng mềm của mình – những hành trang cần thiết trên con đường sự nghiệp. Chúng em được học cách trở thành một thành viên có giá trị trong nhóm, một nhà lãnh đạo tài tình, hoặc thậm chí là một doanh nhân thành công. Và hơn hết, học phần Chuyên môn hóa và kỳ thực tập cuối cùng chính là cơ hội để em tăng khả năng được tuyển dụng của mình một cách đáng kinh ngạc. Bây giờ, em rất tự hào khi nói rằng em đã có thể chăm sóc cho bản thân và gia đình. Em cảm thấy có thêm động lực để cống hiến cho cộng đồng bằng cách tham gia Hội Cựu sinh viên PN Việt Nam và các hoạt động xã hội khác.',
                'Anh_Cuong.jpg',
                'NGUYỄN HỮU CƯỜNG',
                'Cựu sinh viên PNV, khóa 2019, Lập trình viên full stack, mgm technology partners'
            ],
            [
                'Mặc dù đậu được đại học, nhưng em nghĩ hoàn cảnh của em sẽ không đi học được tới nơi tới chốn nên em vào PN. Hồi đó đậu PN, em vui lắm! Khi em đậu đại học em không thấy vui bằng PN. Vào học là em thấy là mình chọn đúng trường rồi! Ngày trước, tiếng Anh của em là nói không được luôn. Vào PN, em nói được tiếng Anh, nghe được tiếng Anh. Khi mà em học ở PN, em thấy giáo viên hỗ trợ em hết cái tâm. Kiểu mình có 5 thì giáo viên muốn mình phát triển lên 7, 8 hoặc có thể 10.',
                'Chi_Quyen.jpg',
                'TRẦN THỊ QUYÊN',
                'Cựu sinh viên PNV, khóa 2020, Lập trình viên Backend, Enouvo IT Solutions'
            ]
        ];
        foreach($arrSharing as $a){
            $sharing = new Sharing();
            $sharing->content =$a[0];
            $sharing->img = $a[1];
            $sharing->name = $a[2];
            $sharing->description = $a[3];
            $sharing->save();
        }
    }
}
