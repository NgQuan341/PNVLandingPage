<?php

namespace Database\Seeders;

use App\Models\TypeOfActivities;
use Illuminate\Database\Seeder;

class ActivitiesTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrActivitiesType = [
            [
                'Hoạt động ngoài bãi biển',
                '2021-03-30'
            ],
            [
                'Pitching Contest',
                '2020-12-08'
            ]
        ];
        foreach($arrActivitiesType as $a){
            $activitiestype = new TypeOfActivities();
            $activitiestype->type =$a[0];
            $activitiestype->date = $a[1];
            $activitiestype->save();
        }
    }
}
