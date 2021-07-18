<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contries;

class CountriesController extends Controller
{
    
    public function index()
    {
        $data=Contries::all();
        return $data;
    }

   
    public function create()
    {
        //
    }
   
    public function store(Request $request)
    {
        $data = new Contries();
        $data->country_name = $request->country_name;
        $data->country_code = $request->country_code;
        $data->phone_code = $request->phone_code;
        $data->save();
        return $data;
    }

    public function show($id)
    {
        $data= Contries::find($id);
        return $data;
    }

    public function edit($id)
    {
        $data = Contries::find($id);
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $data = Contries::find($id);
        $data->country_name = $request->country_name;
        $data->country_code = $request->country_code;
        $data->phone_code = $request->phone_code;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = Contries::find($id);
        $data->delete();
    }
}
