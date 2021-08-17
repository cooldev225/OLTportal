<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\LastLogin;
use Illuminate\Support\Facades\Auth;
use App\Models\CreditPlan;
class CreditsController extends Controller
{
    public function __construct()
    {
    }
    public function index(Request $request)
    {
        return view('backend.credits',[
            
        ]);
    }
    public function getCreditsDataTable(Request $request){
        $query=CreditPlan::select()->orderBy('groups');
        $rows=$query->get();
        $params['pagination']['total']=count($rows);
        $params['pagination']['page']=$request->input('pagination.page');
        $params['pagination']['perpage']=$request->input('pagination.perpage');
		$params['pagination']['pages']=round($params['pagination']['total']/$params['pagination']['perpage'])+($params['pagination']['total']%$params['pagination']['perpage']<5?1:0);
        $params['sort']['field']=$request->input('sort.field');
        $params['sort']['sort']=$request->input('sort.sort');
        if(
            count($rows)&&isset($params['sort']['field'])&&isset($params['sort']['sort'])&&(
                $params['sort']['field']=='name'||
                $params['sort']['field']=='credits'||
                $params['sort']['field']=='created_at'))
        {
            //$query=$query->orderBy("{$params['sort']['field']}","{$params['sort']['sort']}");
        }
        $res['data']=$query->orderBy('groups')
            ->skip(($params['pagination']['page']-1)*$params['pagination']['perpage'])
            ->take($params['pagination']['perpage'])
            ->get();

		//for($i=0;$i<count($res['data']);$i++) {
		//}
        $res['meta']=$params['pagination'];
        return $res;
    }
}
