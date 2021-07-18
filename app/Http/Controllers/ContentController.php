<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    
    public function index()
    {
        $data=Content::all();
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
        $data = new Content();
        $data->title = $request->title;
        $data->content = $request->content;
        $base64String=$request->image;
        $data-> image = $this->saveImgBase64($base64String, 'images');
        $data->display = $request->display;
        $data->save();
        return $data;
    }

    public function show($id)
    {
        $data= Content::find($id);
        return $data;
    }

    public function edit($id)
    {
        $data = Content::find($id);
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $data = Content::find($id);
        $data->title = $request->title;
        $data->content = $request->content;
        $base64String=$request->image;
        $data-> image = $this->saveImgBase64($base64String, 'images');
        $data->display = $request->display;
        $data->save();
        return $data;
    }

    public function destroy($id)
    {
        $data = Content::find($id);
        $data->delete();
    }
}
