<?php

namespace Database\Seeders;

use App\Models\Campaigns;
use Illuminate\Database\Seeder;

class CampaignsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrCampaigns = [
            [
                'ITnuoiIT',
                'Bạn có biết, 50% quỹ hoạt động của PN đến từ trợ cấp của các tập đoàn lớn. 
                Với sự xuất hiện của COVID-19, 39,4% hộ nghèo tăng thêm so với trước khi đại dịch xảy ra, 
                85,7% các doanh nghiệp ở Việt Nam bị ảnh hưởng và phải cắt giảm chi phí bao gồm các khoản tài trợ từ thiện. 
                PNV không đứng ngoài khó khăn đó, tính đến tháng 5 năm 2021, tới 79% quỹ hoạt động của PNV còn THIẾU.',
                '2021-06-08',
                'https://www.passerellesnumeriques.org/vi/alettertoitengineers/'
            ]
        ];
        foreach($arrCampaigns as $a){
            $campaign = new Campaigns();
            $campaign->name =$a[0];
            $campaign->description = $a[1];
            $campaign->startDate = $a[2];
            $campaign->link = $a[3];
            $campaign->save();
        }
    }
}
