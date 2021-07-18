<?php

namespace App\Http\Controllers;

use App\Models\Notifications;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    public function index()
    {
        $data=Notifications::all();
        return $data;
    }

   
    public function create()
    {
        //
    }
   
    public function store(Request $request)
    {
        $data = new Notifications();
        $data->title = $request->title;
        $data->typeID = $request->typeID;
        $data->description = $request->description;
        $data->save();
        return $data;
    }

    public function show($id)
    {
        $data= Notifications::find($id);
        return $data;
    }

    public function edit($id)
    {
        $data = Notifications::find($id);
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $data = Notifications::find($id);
        $data->title = $request->title;
        $data->typeID = $request->typeID;
        $data->description = $request->description;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = Notifications::find($id);
        $data->delete();
    }
}
