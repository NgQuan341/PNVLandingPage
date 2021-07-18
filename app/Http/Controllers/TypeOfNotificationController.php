<?php

namespace App\Http\Controllers;

use App\Models\TypeOfNotification;
use Illuminate\Http\Request;

class TypeOfNotificationController extends Controller
{
    
    public function index()
    {
        $data=TypeOfNotification::all();
        return $data;
    }

   
    public function create()
    {
        //
    }
   
    public function store(Request $request)
    {
        $data = new TypeOfNotification();
        $data->title = $request->title;
        $data->save();
        return $data;
    }

    public function show($id)
    {
        $data= TypeOfNotification::find($id);
        return $data;
    }

    public function edit($id)
    {
        $data = TypeOfNotification::find($id);
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $data = TypeOfNotification::find($id);
        $data->title = $request->title;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = TypeOfNotification::find($id);
        $data->delete();
    }
}
