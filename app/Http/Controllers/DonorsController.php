<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donors;
use Illuminate\Support\Facades\Storage;

class DonorsController extends Controller
{
    
    public function index()
    {
        $data=Donors::all();
        return $data;
    }

    
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $data = new Donors();
        $data->firstname = $request->firstname;
        $data->lastname = $request->lastname;
        $data->organization = $request->organization;
        $data->organization_name = $request->organization_name;
        $data->city = $request->city;
        $data->zip = $request->zip;
        $data->countryID = $request->countryID;
        $data->email = $request->email;
        $data->phone = $request->phone;
        $data->day_of_birth = $request->day_of_birth;
        $data-> address = $request->address;
        $data->save();
        return $data;
    }

    
    public function show($id)
    {
        $data= Donors::find($id);
        return $data;
    }

    
    public function edit($id)
    {
        $data = Donors::find($id);
        return response()->json($data);
    }

    
    public function update(Request $request, $id)
    {
        $data = Donors::find($id);
        $data->firstname = $request->firstname;
        $data->lastname = $request->lastname;
        $data->organization = $request->organization;
        $data->organization_name = $request->organization_name;
        $data->city = $request->city;
        $data->zip = $request->zip;
        $data->countryID = $request->countryID;
        $data->email = $request->email;
        $data->phone = $request->phone;
        $data->day_of_birth = $request->day_of_birth;
        $data-> address = $request->address;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = Donors::find($id);
        $data->delete();
    }
}
