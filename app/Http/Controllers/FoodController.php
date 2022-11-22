<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Food;
use Intervention\Image\Facades\Image;

class FoodController extends Controller
{
    public function get_all_product() {
        $products = Food::all();
        return response()->json([
            'food' => $products
        ], 200);
    }

    public function add_product(Request $request){
        $product = new Food();

        $product->name = $request->name;
        $product->description = $request->description;
        if($request->photo!=""){
            $strpos = strpos($request->photo,';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->photo) -> resize(117, 100);
            $upload_path = public_path()."/upload/";
            $img->save($upload_path.$name);
            $product->photo = $name;
        } else {
            $product -> photo = "https://at06.mediawz.com/wp-content/uploads/2019/08/sweet-plum-pork-skewers-18101-1-2000x1200.jpeg";
        }
        // $product->photo = $name;
        $product->type = $request->type;
        $product->ingredient = $request->ingredient;
        $product->price = $request->price;
        $product->save();
    }

    public function get_edit_product($id) {
        $product = Food::find($id);
        return response()->json([
            'food' => $product
        ], 200);
    }

    public function update_product(Request $request, $id){
        $product = Food::find($id);

        $product->name = $request-> name;
        $product->description = $request-> description;

        if($product->photo != $request->photo){
            $strpos = strpos($request->photo, ';');
            $sub = substr($request->photo, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = time() . "." . $ex;
            $img = Image::make($request->photo)->resize(115, 100);
            $upload_path = public_path() . "/upload/";
            $image = $upload_path . $product->photo;
            $img->save($upload_path . $name);
            if (file_exists($image)) {
                @unlink($image);
            }
        } else {
            $name = $product->photo;
        }
        $product->photo = $name;
        $product->type = $request->type;
        $product->ingredient = $request->ingredient;
        $product->price = $request->price;
        $product->save();
    }


    public function delete_product($id){
        $product = Food::findOrFail($id);
        $image_path = public_path() . "/upload/";
        $image = $image_path . $product->photo;

        if (file_exists($image)) {
            @unlink($image);
        }
        $product->delete();
    }
}
