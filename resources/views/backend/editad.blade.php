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
        <div class="row">
            <div class="col-xxl-12 col-lg-12 mb-7">
                <div class="card card-custom card-sticky">
                    <div class="card-header flex-wrap border-0 pt-6 pb-0">
                        <div class="card-title">
                            <h3 class="card-label">
                                Review Information of Ad
                            </h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-7">
                            <input class="form-control" type="hidden" placeholder="id" value="{{$ad->id}}" id="edit_id">
                            <input class="form-control" type="hidden" placeholder="id" value="{{$ad->userid}}" id="edit_userid">
                            <div class="form-group row">
                                <div id="avatar_preview" class="fileinput" style="width:190px;margin-left:10px;">
                                    <img id="avatar_img" src="{{$avatar}}" class="fileinput-preview" style="width:190px;height:190px;" />
                                </div>
                                <div style="width: calc(100% - 200px);padding: 0px 11px;">
                                    <div class="form-group row" style="margin-bottom: 0px;">
                                        <label for="example-search-input" class="col-2 col-form-label">Username</label>
                                        <div class="col-4">
                                            <input type="text" class="form-control" disabled value="{{$ad->user->username}}" id="edit_username" />
                                        </div>
                                        <label for="example-search-input" class="col-2 col-form-label">Email <span class="text-danger">*</span></label>
                                        <div class="col-4">
                                            <input type="text" class="form-control" disabled value="{{$ad->user->email}}" id="edit_email" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label for="example-search-input" class="col-2 col-form-label"></label>
                                        <label for="example-search-input" class="col-4 col-form-label">Password: {{$ad->user->password}}</label>
                                    </div>
                                    <div class="form-group row">
                                        <label for="example-search-input" class="col-2 col-form-label">Nombre</label>
                                        <div class="col-4">
                                            <input type="text" class="form-control" disabled value="{{$ad->user->firstName}}" id="edit_firstname"/>
                                        </div>
                                        <label for="example-search-input" class="col-2 col-form-label">Teléfono<span class="text-danger">*</span></label>
                                        <div class="col-4">
                                            <input type="text" class="form-control" disabled value="{{$ad->user->phone_mobile}}" id="edit_phone_mobile" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="example-search-input" class="col-2 col-form-label">National</label>
                                        <div class="col-4">
                                            <input type="text" class="form-control" disabled value="{{$ad->national()->name}}" id="edit_national" />
                                        </div>
                                        <label for="example-search-input" class="col-4 col-form-label" id="edit_smsallow">{{$ad->user->smsallow?'Allow sms':'No needed sms'}}</label>
                                    </div>
                                </div>                    
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label">Titulo</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" disabled value="{{$ad->title}}" id="edit_title"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label">Categoría</label>
                                <div class="col-4">
                                    <input type="text" class="form-control" disabled value="{{$ad->category_name->name}}" id="edit_category"/>
                                </div>
                                <label class="col-2 col-form-label">Estado</label>
                                <div class="col-4">
                                    <input type="text" class="form-control" disabled value="{{$ad->state_name->name}}" id="edit_state"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label">Ciudad</label>
                                <div class="col-4">
                                    <input type="text" class="form-control" disabled value="{{$ad->city_name->name}}" id="edit_city"/>
                                </div>
                                <label class="col-2 col-form-label">Barrio / Distrito / Colonia</label>
                                <div class="col-4">
                                    <input type="text" class="form-control" disabled value="{{$ad->street}}" id="edit_street"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label">Descripción</label>
                                <div class="col-10">
                                    <textarea class="form-control" id="edit_description">{{$ad->description}}</textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="checkbox-inline" style="margin-right: 25px;">
                                    <label class="checkbox checkbox-outline checkbox-outline-2x checkbox-primary">
                                        <input type="checkbox" {{$ad->emailable?'checked="checked"':''}} disabled>
                                        <span></span>Deseo que me puedan contactar por email
                                    </label>
                                </div>
                                <div class="checkbox-inline" style="margin-right: 25px;">
                                    <label class="checkbox checkbox-outline checkbox-outline-2x checkbox-primary">
                                        <input type="checkbox" {{$ad->callable?'checked="checked"':''}} disabled>
                                        <span></span>Deseo que el teléfono se vea en mi anuncio
                                    </label>
                                </div>
                                <div class="checkbox-inline">
                                    <label class="checkbox checkbox-outline checkbox-outline-2x checkbox-primary">
                                        <input type="checkbox" {{$ad->whatsable?'checked="checked"':''}} disabled>
                                        <span></span>Deseo que el whatsapp se vea en mi anuncio
                                    </label>
                                </div>
                            </div>
                            <div class="form-group row">
                                @foreach($files as $file)
                                <div class="col-4">
                                    <img style="width:100%;max-height:300px;cursor:pointer;" src="data:image/png;base64,{{$file['body']}}" onclick="window.open('/v1/api/downloadFile?path={{$file['path']}}');">
                                </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>

        @if($ad->stage==1||$ad->stage==2||$ad->stage==3)
        <div class="row">
            <div class="col-xxl-12 col-lg-12 mb-7">
                <div class="card card-custom card-sticky">
                    <div class="card-header flex-wrap border-0 pt-6 pb-0">
                        <div class="card-title">
                            <h3 class="card-label">
                                Approve/Reject the information 
                            </h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-7">
                            @if($ad->stage<2)
                            <div class="form-group row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">Phrase:</label>
                                        <div class="col-10">
                                        <input type="text" class="form-control" value="tabu guide" id="edit_phrase"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">Email Body:</label>
                                        <div class="col-10">
                                            <textarea class="form-control" id="edit_kycbody" rows="10">Hola, gracias por enviarnos su publicación, la hemos revisado y estamos a un paso de completar el proceso de verificación, es necesario corroborar que es propietari@ del material previamente cargado.  
                                _KYC_UPLOAD_LINK_?
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row" style="text-align:right;display: flow-root;">
                                        <button trye="button" class="btn btn-primary mr-4" onclick="sendKYClink();">Send Link</button>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">Reason:</label>
                                        <div class="col-10">
                                            <textarea class="form-control" id="edit_rejectreason" rows="13"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row" style="text-align:right;display: flow-root;">
                                        <button trye="button" class="btn btn-danger mr-4" onclick="sendReject();">Send Reject</button>
                                    </div>
                                </div>
                            </div>
                            @elseif($ad->stage==2)
                            <div class="form-group row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">Phrase:</label>
                                        <div class="col-10">
                                        <input type="text" class="form-control" value="{{$states[2]->params}}" disabled id="edit_phrase"/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">Email Body:</label>
                                        <div class="col-10">
                                            <textarea class="form-control" id="edit_kycbody" disabled rows="10">{{$states[2]->body}}</textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row" style="text-align:right;display: flow-root;">
                                        <button trye="button" disabled class="btn btn-primary mr-4" onclick="sendKYClink();">Sent Link</button>
                                    </div>
                                </div>
                            </div>
                            @elseif($ad->stage==3)
                            <div class="form-group row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">Reason:</label>
                                        <div class="col-10">
                                            <textarea class="form-control" id="edit_rejectreason" disabled rows="13">{{$states[3]->body}}</textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row" style="text-align:right;display: flow-root;">
                                        <button trye="button" class="btn btn-danger mr-4" onclick="sendReject();" disabled>Send Reject</button>
                                    </div>
                                </div>
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endif

        @if($ad->stage>1&&$ad->stage!=3)
        <div class="row">
            <div class="col-xxl-12 col-lg-12 mb-7">
                <div class="card card-custom card-sticky">
                    <div class="card-header flex-wrap border-0 pt-6 pb-0">
                        <div class="card-title">
                            <h3 class="card-label">
                                Approve/Reject the KYC photo 
                            </h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-7">
                            @if($ad->stage==2)  
                            <div class="form-group row">
                                <div class="col-6">
                                    Waiting for user KYC photo...
                                </div>
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">Reason:</label>
                                        <div class="col-10">
                                            <textarea class="form-control" id="edit_rejectkycreason" rows="13"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row" style="text-align:right;display: flow-root;">
                                        <button trye="button" class="btn btn-danger mr-4" onclick="sendInvalid();">Send Invalid</button>
                                    </div>
                                </div>
                            </div>
                            @elseif($ad->stage==4)
                            <div class="form-group row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <img src="/v1/api/downloadFile?path={{$states[4]->body}}" style="max-width:100%;">
                                    </div>
                                    <div class="form-group row" style="text-align:right;display: flow-root;">
                                        <button trye="button" class="btn btn-primary mr-4" onclick="approveKYC();">Approve KYC</button>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">Reason:</label>
                                        <div class="col-10">
                                            <textarea class="form-control" id="edit_rejectkycreason" rows="13"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row" style="text-align:right;display: flow-root;">
                                        <button trye="button" class="btn btn-danger mr-4" onclick="sendInvalid();">Send Invalid</button>
                                    </div>
                                </div>
                            </div>
                            @elseif($ad->stage==5)
                            <div class="form-group row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <img src="/v1/api/downloadFile?path={{$states[4]->body}}" style="max-width:100%;">
                                    </div>
                                    <div class="form-group row" style="text-align:right;display: flow-root;">
                                        <button trye="button" class="btn btn-primary mr-4" disabled>Approved KYC</button>
                                    </div>
                                </div>
                            </div>
                            @elseif($ad->stage==6)
                            <div class="form-group row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">Reason:</label>
                                        <div class="col-10">
                                            <textarea class="form-control" id="edit_rejectkycreason" disabled rows="13">{{$states[6]->body}}</textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row" style="text-align:right;display: flow-root;">
                                        <button trye="button" class="btn btn-danger mr-4" disabled>Invalid KYC</button>
                                    </div>
                                </div>
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endif
    </div>
</div>
<script type="text/javascript" src="/backend/js/editad.js"></script>
@endsection
