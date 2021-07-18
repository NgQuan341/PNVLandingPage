<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeOfActivities extends Model
{
    use HasFactory;
    protected $table='type_of_activities';
    public $timestamps = false;
}
