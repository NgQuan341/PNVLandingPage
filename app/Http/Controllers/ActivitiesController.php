<?php

namespace App\Http\Controllers;

use App\Models\Activities;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class ActivitiesController extends Controller
{
    
    public function index()
    {
        $data=Activities::all();
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
        $data = new Activities();
        $data->dexcription = $request->dexcription;
        $base64String=$request->image;
        $data-> image = $this->saveImgBase64($base64String, 'images');
        $data->type = $request->type;
        $data->save();
        return $data;
    }

    public function show($id)
    {
        $data= Activities::find($id);
        return $data;
    }

    public function edit($id)
    {
        $data = Activities::find($id);
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $data = Activities::find($id);
        $data->dexcription = $request->dexcription;
        $base64String=$request->image;
        $data-> image = $this->saveImgBase64($base64String, 'images');
        $data->type = $request->type;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = Activities::find($id);
        $data->delete();
    }
}
