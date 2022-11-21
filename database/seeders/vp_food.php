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
        DB::table('food')->insert([
            [
                'name' => "Com sieu mai",
                'description' => "banh mi kẹp thịt heo viet nam",
                'price' => 69000,
                'photo' => 'http://at06.chonweb.vn/wp-content/uploads/2019/08/xaxieu.jpg',
                'type' => "Com",
                'ingredient' => "Xien thit lon",
            ],
            [
                'name' => "Banh mi heo quay",
                'description' => "banh mi kẹp thịt heo viet nam",
                'price' => 15000,
                'photo' => 'http://at06.chonweb.vn/wp-content/uploads/2019/08/xaxieu.jpg',
                'type' => "banh mi",
                'ingredient' => "Xien thit lon",
            ],
            [
                'name' => "com ga",
                'description' => "banh mi kẹp thịt heo viet nam",
                'price' => 15000,
                'photo' => 'http://at06.chonweb.vn/wp-content/uploads/2019/08/xaxieu.jpg',
                'type' => "com",
                'ingredient' => "Xien thit lon",
            ],
            [
                'name' => "Banh mi cha",
                'description' => "banh mi kẹp thịt heo viet nam",
                'price' => 15000,
                'photo' => 'http://at06.chonweb.vn/wp-content/uploads/2019/08/xaxieu.jpg',
                'type' => "banh mi",
                'ingredient' => "Xien thit lon",
            ]
        ]);
        // $faker = Faker::create();

        // for ($i = 0; $i <10; $i++){
        //     DB::table('food')->insert([
        //             [
        //                 'name' => $faker->name,
        //                 'description' => $faker->realText,
        //                 'price' => $faker->randomNumber(),
        //                 'photo' => 'http://at06.chonweb.vn/wp-content/uploads/2019/08/xaxieu.jpg',
        //                 'type' => $faker->text,
        //                 'ingredient' => $faker->text,
                        
                        
                        
        //             ],
                    
        //         ]);
        // }
    }
}
