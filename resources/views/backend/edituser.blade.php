@extends('backend.layouts.dashboard')
@inject('dateFormat', 'App\Services\DateService')
@section('content')

<!--begin::Entry-->
<div class="d-flex flex-column-fluid">
    <!--begin::Container-->
    <div class=" container ">
        <!--begin::Notice-->
        <?php if(isset($notification)){?>
        <div class="alert alert-custom alert-white alert-shadow fade show gutter-b" role="alert">
            <div class="alert-icon">
                <span class="svg-icon svg-icon-primary svg-icon-xl"><!--begin::Svg Icon | path:assets/media/svg/icons/Tools/Compass.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
	            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                <rect x="0" y="0" width="24" height="24"/>
	                <path d="M7.07744993,12.3040451 C7.72444571,13.0716094 8.54044565,13.6920474 9.46808594,14.1079953 L5,23 L4.5,18 L7.07744993,12.3040451 Z M14.5865511,14.2597864 C15.5319561,13.9019016 16.375416,13.3366121 17.0614026,12.6194459 L19.5,18 L19,23 L14.5865511,14.2597864 Z M12,3.55271368e-14 C12.8284271,3.53749572e-14 13.5,0.671572875 13.5,1.5 L13.5,4 L10.5,4 L10.5,1.5 C10.5,0.671572875 11.1715729,3.56793164e-14 12,3.55271368e-14 Z" fill="#000000" opacity="0.3"/>
	                <path d="M12,10 C13.1045695,10 14,9.1045695 14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 C10,9.1045695 10.8954305,10 12,10 Z M12,13 C9.23857625,13 7,10.7614237 7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,10.7614237 14.7614237,13 12,13 Z" fill="#000000" fill-rule="nonzero"/>
	            </g>
	        </svg><!--end::Svg Icon--></span>    </div>
            <div class="alert-text">
                <?php echo $notification;?>
            </div>
        </div>
    	<?php }?>
        <!--end::Notice-->
        <!--begin::Dashboard-->
        <!--begin::Row-->
        <div class="row">
            <!--begin:epg widget-->
            <div class="col-xxl-12 col-lg-12 mb-7">
                <div class="card card-custom">
                    <div class="card-header">
                        <h3 class="card-title">
                            User Detail
                        </h3>
                    </div>
                    <!--begin::Form-->
                    <form>
                        <div class="card-body">
                            <div class="form-group">
                                <img src="{{$user['covers']==null||$user['covers']==''?'/metronic/media/users/default.jpg':$user['covers']}}" style="width: 100px;">
                                <label>{{$user['uniqueId']}}</label>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    @if($numOfBoost>0)
                                    <div class="col-xxl-6 col-lg-6">
                                        <div class="card card-custom">
                                            <div class="card-header" style="min-height:40px;">
                                                <h3 class="card-title" style="font-weight:400;font-size: 12px;">
                                                    Boost History
                                                </h3>
                                            </div>
                                            <div class="timeline timeline-2">
                                                <div class="timeline-bar"></div>
                                                @php
                                                    $f=0;
                                                @endphp
                                                @foreach($boosthistory as $star)
                                                @php
                                                    $f=1-$f;
                                                @endphp
                                                <div class="timeline-item">
                                                    <div class="timeline-badge" style="{{$f?'':''}}"></div>
                                                    <div class="timeline-content d-flex align-items-center justify-content-between">
                                                        @if($f)
                                                        <span class="text-muted mr-3">
                                                            <span class="label label-inline label-light-primary font-weight-bolder" style="width:50px;">{{$star['stars']}}</span>
                                                            <span class="label label-inline" style="background-color: white;">
                                                            @for($i=0;$i<$star['stars'];$i++)
                                                            ⭐️
                                                            @endfor
                                                            </span>
                                                        </span>
                                                        <span class="text-muted text-right mr-4">{{$dateFormat->frandlyDate($star['created_at'])}}</span>
                                                        @else
                                                        <span class="text-muted mr-3">
                                                            <span class="label label-inline label-light-primary font-weight-bolder" style="width:50px;">{{$star['stars']}}</span>
                                                            <span class="label label-inline" style="background-color: #eceaf1;">
                                                            @for($i=0;$i<$star['stars'];$i++)
                                                            ⭐️
                                                            @endfor
                                                            </span>
                                                        </span>
                                                        <span class="text-right mr-4">{{$dateFormat->frandlyDate($star['created_at'])}}</span>
                                                        @endif
                                                    </div>
                                                </div>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                    @endif
                                    @if($numOfTransaction>0)
                                    <div class="col-xxl-6 col-lg-6">
                                        <div class="card card-custom">
                                            <div class="card-header" style="min-height:40px;">
                                                <h3 class="card-title" style="font-weight:400;font-size: 12px;">
                                                    Stars Bought History
                                                </h3>
                                            </div>
                                            <div class="timeline timeline-2">
                                                <div class="timeline-bar"></div>
                                                @php
                                                    $f=0;
                                                @endphp
                                                @foreach($transaction as $trans)
                                                @php
                                                    $f=1-$f;
                                                @endphp
                                                <div class="timeline-item">
                                                    <div class="timeline-badge" style="{{$f?'':''}}"></div>
                                                    <div class="timeline-content d-flex align-items-center justify-content-between">
                                                        @if($f)
                                                        <span class="text-muted mr-3">
                                                            {{$trans['packageName']}}
                                                        </span>
                                                        <span class="text-muted text-right mr-4">{{$dateFormat->frandlyDate($trans['created_at'])}}</span>
                                                        @else
                                                        <span class="text-muted mr-3">
                                                            {{$trans['packageName']}}
                                                        </span>
                                                        <span class="text-right mr-4">{{$dateFormat->frandlyDate($trans['created_at'])}}</span>
                                                        @endif
                                                    </div>
                                                </div>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                    @endif
                                </div>
                            </div>
                            <input class="form-control" type="hidden" value="{{$user['id']}}" id="edit_user_id"/>
                            <div class="form-group row">
                                <label for="example-search-input" class="col-2 col-form-label">Following: </label>
                                <div class="col-10">
                                    <input class="form-control" type="search" value="{{$user['following']}}" id="edit_user_following"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-search-input" class="col-2 col-form-label">Followers: </label>
                                <div class="col-10">
                                    <input class="form-control" type="search" value="{{$user['fans']}}" id="edit_user_fans"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-search-input" class="col-2 col-form-label">Likes: </label>
                                <div class="col-10">
                                    <input class="form-control" type="search" value="{{$user['heart']}}" id="edit_user_heart"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-search-input" class="col-2 col-form-label">Wallet: </label>
                                <div class="col-10">
                                    <input class="form-control" type="search" value="{{$user['stars']}}" id="edit_user_stars"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-search-input" class="col-2 col-form-label">Bought: </label>
                                <div class="col-10">
                                    <p class="form-control-plaintext text-muted">{{$numOfBoost}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="button" onclick="saveUser();" class="btn btn-primary mr-2">Save</button>
                            <button type="reset" class="btn btn-secondary">Cancel</button>
                        </div>
                    </form>
                    <!--end::Form-->
                </div>
            </div>
            <!--end:epg widget-->
		</div>
        <!--end::Row-->
        <!--end::Dashboard-->
    </div>
    <!--end::Container-->
</div>
<!--end::Entry-->


<script type="text/javascript" src="/backend/js/edituser.js"></script>
@endsection
