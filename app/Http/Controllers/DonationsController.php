<?php

namespace App\Http\Controllers;

use App\Models\Donations;
use Illuminate\Http\Request;

class DonationsController extends Controller
{
    
    public function index()
    {
        $data=Donations::all();
        return $data;
    }

   
    public function create()
    {
        //
    }
   
    public function store(Request $request)
    {
        $data = new Donations();
        $data->campaignID = $request->campaignID;
        $data->donerID = $request->donerID;
        $data->Notes = $request->Notes;
        $data->amount = $request->amount;
        $data->date = $request->date;
        $data->save();
        return $data;
    }

    public function show($id)
    {
        $data= Donations::find($id);
        return $data;
    }

    public function edit($id)
    {
        $data = Donations::find($id);
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $data = Donations::find($id);
        $data->campaignID = $request->campaignID;
        $data->donerID = $request->donerID;
        $data->Notes = $request->Notes;
        $data->amount = $request->amount;
        $data->date = $request->date;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = Donations::find($id);
        $data->delete();
    }
}
