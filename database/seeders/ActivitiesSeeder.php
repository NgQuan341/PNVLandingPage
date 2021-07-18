<?php

namespace Database\Seeders;

use App\Models\Activities;
use Illuminate\Database\Seeder;

class ActivitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrActivities = [
            [
                'chay_dua.jpg',
                'Các bạn đang rất hăng hái trong trò chạy đua.',
                1
            ],
            [
                'G-Force.jpg',
                'Được dướng dẫn và hỗ trợ của các bạn tình nguyện viên đến từ trung tâm thể hình G-Force và Stephanie.',
               1
            ],
            [
                'huong_dan.jpg',
                'Tình nguyện viên đang hướng dẫn sinh viên các bài tập.',
                1
            ],
            [
                'keo_co.jpg',
                'Bốn đội đang rất căng thẳng nhỉ.',
                1
            ],
            [
                'keo_co_2.jpg',
                'Các bạn quyết tâm kéo đến cùng.',
                1
            ],
            [
                'tap_the_duc.jpg',
                'Tập thể dục nào.',
                1
            ]
        ];
        foreach($arrActivities as $a){
            $activities = new Activities();
            $activities->img =$a[0];
            $activities->description = $a[1];
            $activities->type_id = $a[2];
            $activities->save();
        }
    }
}
