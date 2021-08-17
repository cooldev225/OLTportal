<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\Announcement;
class CreditHistory extends Model
{
    protected $table = 'credit_histories';
    protected $fillable = [
        'id','userid','adid', 'plans', 'amount','method', 'created_by', 'updated_by', 'created_at', 'updated_at'
    ];
    public function user()
    {
        return $this->belongsTo(User::class,'userid');
    }
    public function announcement()
    {
        return $this->belongsTo(Announcement::class,'adid');
    }
}
