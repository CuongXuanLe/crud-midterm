<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;


class vp_food extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('food')->insert([
        //     [
        //         'name' => "Com sieu mai",
        //         'description' => "banh mi kẹp thịt heo viet nam",
        //         'ingredient' => "Xien thit lon",
        //         'image' => 'http://at06.chonweb.vn/wp-content/uploads/2019/08/xaxieu.jpg',
        //         'price' => 69000,
        //     ],
        //     [
        //         'name' => "Banh mi heo quay",
        //         'description' => "banh mi kẹp thịt heo viet nam",
        //         'ingredient' => "Xien thit lon",
        //         'image' => 'http://at06.chonweb.vn/wp-content/uploads/2019/08/no-cook-chicken-banh-mi_1980x1320-119440-1-150x150.jpg',
        //         'price' => 69000,
        //     ]
        // ]);
        $faker = Faker::create();

        for ($i = 0; $i <10; $i++){
            DB::table('food')->insert([
                    [
                        'name' => $faker->name,
                        'description' => $faker->realText,
                        'ingredient' => $faker->text,
                        'image' => 'http://at06.chonweb.vn/wp-content/uploads/2019/08/xaxieu.jpg',
                        'price' => $faker->randomNumber(),
                    ],
                    
                ]);
        }
    }
}
