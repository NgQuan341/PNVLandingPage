<?php

namespace Database\Seeders;

use App\Models\Timeline;
use Illuminate\Database\Seeder;

class TimelineSeeder extends Seeder
{
    
    public function run()
    {
        $arrTimeLine = [
            [
                '2010',
                'PNV chính thức đi vào hoạt động tại Đà Nẵng với 30 sinh viên.',
                ''
            ],
            [
                '2012',
                'Khóa đầu tiên tốt nghiệp với 27 sinh viên.',
                ''
            ],
            [
                '2013',
                'Triển khai 2 chuyên ngành: Phát triển Phần mềm [DeV] và Phát triển Web & Kiểm thử [WeB]. WeB thay thế cho chuyên ngành cũ là Quản trị Mạng & Hệ thống [SNA].',
                ''
            ],
            [
                '2014',
                'PNV trở thành một tổ chức hoạt động độc lập.',
                ''
            ],
            [
                '2015',
                'PNV kỉ niệm 5 năm hoạt động.',
                ''
            ],
            [
                '2016',
                'Kết hợp đào tạo cùng trường Cao đẳng Kĩ thuật Đà Nẵng [nay là Đại học Kỹ thuật Sư phạm – Đại học Đà Nẵng].',
                ''
            ],
            [
                '2017',
                'Hợp tác với trường Cao đẳng Nghề Đà Nẵng để tiến hành chương trình đào tạo 3 năm với 3 chuyên ngành: Kiểm thử Tự động, Thiết kế Web và Lập trình thiết bị di động.',
                ''
            ],
            [
                '2020',
                'PNV kỉ niệm 10 năm hoạt động.',
                ''
            ]
        ];
        foreach($arrTimeLine as $a){
            $sharing = new Timeline();
            $sharing->year =$a[0];
            $sharing->content = $a[1];
            $sharing->img = $a[2];
            $sharing->save();
        }
    }
}
