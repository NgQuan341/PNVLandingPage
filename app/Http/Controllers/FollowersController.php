<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Followers;
use Illuminate\Support\Facades\Storage;

class FollowersController extends Controller
{
    
    public function index()
    {
        $data=Followers::all();
        return $data;
    }

   
    public function create()
    {
        //
    }

   
    public function store(Request $request)
    {
        $data = new Followers();
        $data->name = $request->name;
        $data->email = $request->email;
        $data->save();
        return $data;
    }

    public function show($id)
    {
        $data= Followers::find($id);
        return $data;
    }

    public function edit($id)
    {
        $data = Followers::find($id);
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $data = Followers::find($id);
        $data->name = $request->name;
        $data->email = $request->email;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = Followers::find($id);
        $data->delete();
    }
}
