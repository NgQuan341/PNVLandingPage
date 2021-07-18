<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    
    public function run()
    {
        $arrTimeLine = [
            [
                'admin',
            'admin@gmail.com',
            '12345',
            'admin'
            ]
        ];
        foreach($arrTimeLine as $a){
            $sharing = new User();
            $sharing->name =$a[0];
            $sharing->email = $a[1];
            $sharing->password =bcrypt($a[2]);
            $sharing->role = $a[3];
            $sharing->save();
        }
    }
}
