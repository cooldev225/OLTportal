<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class CreditPlan extends Model
{
    protected $fillable = [
        'id','groups', 'name', 'days','times', 'credits', 'amount', 'created_by', 'updated_by', 'created_at', 'updated_at'
    ];
}
