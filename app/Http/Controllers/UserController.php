<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    
    public function index()
    {
        $data=User::all();
        return $data;
    }

    
    public function create()
    {
        //
    }

    protected function saveImgBase64($param, $folder)
    {
        list($extension, $content) = explode(';', $param);
        $tmpExtension = explode('/', $extension);
        preg_match('/.([0-9]+) /', microtime(), $m);
        $fileName = sprintf('img%s%s.%s', date('YmdHis'), $m[1], $tmpExtension[1]);
        $content = explode(',', $content)[1];
        $storage = Storage::disk('public');
    
        $checkDirectory = $storage->exists($folder);
    
        if (!$checkDirectory) {
            $storage->makeDirectory($folder);
        }
    
        $storage->put($folder . '/' . $fileName, base64_decode($content), 'public');
    
        return $fileName;
    }
   

    public function store(Request $request)
    {
        $data = new User();
        $data->name = $request->name;
        $data->email = $request->email;
        $data->password = $request->password;
        $data->role = $request->role;
        $base64String=$request->image;
        $data-> image = $this->saveImgBase64($base64String, 'images');
        $data-> remember_token = $request->remember_token;
        $data->save();
        return $data;
    }

    
    public function show($id)
    {
        $data= User::find($id);
        return $data;
    }

    
    public function edit($id)
    {
        $data = User::find($id);
        return response()->json($data);
    }

    
    public function update(Request $request, $id)
    {
        $data = User::find($id);
        $data->name = $request->name;
        $data->email = $request->email;
        $data->password = $request->password;
        $data->role = $request->role;
        $base64String=$request->image;
        $data-> image = $this->saveImgBase64($base64String, 'images');
        $data-> remember_token = $request->remember_token;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = User::find($id);
        $data->delete();
    }
}
