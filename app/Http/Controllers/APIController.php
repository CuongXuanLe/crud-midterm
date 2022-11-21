<?php



namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class APIController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = Food::all();
        return response()->json($product);
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
            $product -> photo = "image.png";
        }
        $product->photo = $name;
        $product->type = $request->type;
        $product->ingredient = $request->ingredient;
        $product->price = $request->price;
        $product->save();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

