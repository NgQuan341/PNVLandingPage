<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Campaigns;

class CampaignsController extends Controller
{
    public function index()
    {
        $data=Campaigns::all();
        return $data;
    }

   
    public function create()
    {
        //
    }
   
    public function store(Request $request)
    {
        $data = new Campaigns();
        $data->name = $request->name;
        $data->dateStart = $request->dateStart;
        $data->description = $request->description;
        $data->save();
        return $data;
    }

    public function show($id)
    {
        $data= Campaigns::find($id);
        return $data;
    }

    public function edit($id)
    {
        $data = Campaigns::find($id);
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $data = Campaigns::find($id);
        $data->name = $request->name;
        $data->dateStart = $request->dateStart;
        $data->description = $request->description;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = Campaigns::find($id);
        $data->delete();
    }
}
