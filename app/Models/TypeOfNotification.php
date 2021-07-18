<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeOfNotification extends Model
{
    use HasFactory;
    protected $table='type_of_notification';
    public $timestamps = false;

}
