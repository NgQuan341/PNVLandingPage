<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ActivitiesTypeSeeder::class);
        $this->call(ActivitiesSeeder::class);
        $this->call(CampaignsSeeder::class);
        $this->call(ContentSeeder::class);
        $this->call(CountriesSeeder::class);
        $this->call(PartnersSeeder::class);
        $this->call(SharingSeeder::class);
        $this->call(TimelineSeeder::class);
        $this->call(UsersSeeder::class);
        
    }
}
