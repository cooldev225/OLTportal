@extends('frontend.layouts.dashboard')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<div class="row">
    <div class="col-md-12 padding-0">
        <div class="right-panel">					
            <div class="lp-notifaction-area lp-notifaction-error" data-error-msg="Something went wrong!">
                <div class="lp-notifaction-area-outer">
                    <div class="lp-notifi-icons"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE2SURBVFhH7dhBaoQwFMZxoZu5w5ygPc7AlF6gF5gLtbNpwVVn7LKQMG4b3c9ZCp1E3jdEEI1JnnGRP7h5Iv4wKmiRy+U8qkT7Wkn1VpblA43Yqn7abSWb+luqRxpNZ3D6oP+zUO+cSIPT57jqc/1p4I7G0xmUwXEibdxJ/j7T2D1OZDAOcSD7y9ruaexfTGR0HIqBZMOhECQ7DvkgF8OhOcjFccgFmQyHxpDJcWgIuRoc6iFl87kqHOqunFQfBtltQr3QrnVkLWsHxHLT7rTZ95y5cvflXgNy6IHo3ZNCHZMhx55WQh6TIV1eJcmQLji0OHIODi2G9MEhdmQIDrEhY+BQdGRMHIqG5MChYKSNC/puHSkIqQ+qOXGoh5TqQOPpvi7N06x/JQF1SI0TQmxolMvl3CuKG6LJpCW33jxQAAAAAElFTkSuQmCC"></div>
                    <div class="lp-notifaction-inner">
                        <h4></h4>
                        <p></p>
                    </div>
                </div>
            </div>
            
            <!-- Modal -->
            <div class="modal fade" id="dashboard-delete-modal" tabindex="-1" role="dialog" aria-labelledby="dashboard-delete-modal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                        ¿Estás segura de que quieres eliminar?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary dashboard-confirm-del-btn">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade in active lp-announcement-form padding-bottom-30" id="lp-announcement-form">
            
                <div style="display:none;" class="alert-ann-verification-message clearfix lp-dashboard-panel-outer lp-new-dashboard-panel-outer lp-left-panel-height lp-ads-form-container col-md-11">
                    <div class="notices-area">
                        <div class="notice warning">
                            
                            <div class="notice-icon">
                                <i class="fa fa-exclamation-triangle"></i>
                            </div>
                            <div class="notice-text">
                                <h2><span>agradecemos su preferencia, en este momento su anuncio se encuentra en revisión, pronto le llegará un correo con instrucciones de confirmación, si no le llega el correo porfavor cheque su bandeja de spam</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="clearfix lp-ad-step-two lp-ads-form-container" style="display: block;">
                    <div style="display:{{count($announcements)&&$actived_ad==null?'block':'none'}}" class="panel with-nav-tabs panel-default lp-dashboard-tabs col-md-11 align-center" id="announcements-table">                                            
                        <div class="lp-add-menu-outer clearfix">
                            <h5>Todos Announcements</h5>
                            @if($user->validate)
                            <button data-form="announcements" class="lp-add-new-btn add-new-open-form"><span><i class="fa fa-plus" aria-hidden="true"></i></span> Agregar nuevo</button>
                            @endif
                        </div>
                        <div class="panel-body">
                            <div class="lp-main-title clearfix">
                                <div class="col-md-5"><p>Titulo</p></div>
                                <div class="col-md-2"><p>Categoria</p></div>
                                <div class="col-md-3"><p>Localización</p></div>
                                <div class="col-md-2"><p class="text-center">On/off</p></div>
                            </div>
                            <div class="tab-content clearfix">
                                <div class="tab-pane fade in active" id="tab1default">
                                    @foreach($announcements as $ann)
                                    <div class="lp-listing-outer-container clearfix lp-coupon-outer-container {{$ann->stage<2?'pending':''}}">
                                        <div class="col-md-5 lp-content-before-after" data-content="Call to action title">
                                            <div class="lp-announcement-title">
                                                <p>{{$ann->title}}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 lp-content-before-after">
                                            <div class="lp-deal-title">
                                                <p>{{$ann->category_name->name}}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3 lp-content-before-after">
                                            <div class="lp-deal-title">
                                                <p>{{$ann->address()}}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 text-center lp-content-before-after" data-content="On/Off">
                                            <div class="clearfix">
                                                <div class="lp-invoices-all-stats-on-off lp-display-inline">
                                                    <h5 class="clearfix">
                                                        <label class="switch pull-left">
                                                            <input data-annID="{{$ann->id}}" {{$ann->active?'checked':''}} data-status="active" class="form-control switch-checkbox on-off-ann" type="checkbox" >
                                                            <div class="slider round"></div>
                                                        </label>
                                                    </h5>
                                                </div>
                                                <div class="lp-display-inline lp-pull-left-new">
                                                        <a class="ann-edit-" href="/ads?a={{$ann->id}}" data-targetid="{{$ann->id}}" data-annID="{{$ann->id}}" data-uid="{{Auth::id()}}">
                                                            <i class="fa fa-pencil-square-o"></i> <span>   Ver</span>
                                                        </a>
                                                            <!--<li><a class="ann-delet{{$ann->stage<2?'able':'e'}}" href="#" data-annID="{{$ann->id}}"><i class="fa fa-trash-o"></i><span>Borrar</span></a></li>-->
                                                </div>
                                            </div>
                                        </div>
                                        <div style="display: none;" id="update-wrap-{{$ann->id}}" class="panel with-nav-tabs panel-default lp-dashboard-tabs lp-left-panel-height margin-top-30">
                                            <div class="lp-coupns-form-outer">
                                                <div class="lp-voupon-box">
                                                    <form class="lp-coupons-form-inner">
                                                        <div class="lp-coupon-box-row">
                                                            <div class="form-group">
                                                                <label class="lp-dashboard-top-label" for="announcements-message">Descripción<span class="lp-requires-filed">*</span>
                                                                </label>
                                                                <textarea class="form-control lp-dashboard-des-field"   
                                                                        name="detail_description"
                                                                        placeholder="">{{$ann->description}}</textarea>
                                                                
                                                            </div>
                                                            <div class="form-group">
                                                            <button class="lp-coupns-btns pull-right mt-10 cancel-update">Cancelar</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display:{{count($announcements)&&$actived_ad==null?'none':'block'}}" class="panel with-nav-tabs panel-default lp-dashboard-tabs col-md-11 align-center" id="announcements-form-toggle">
                        <div class="lp-review-sorting clearfix">
                            @if($user->validate)
                            <a href="javascript:;" class="lp-view-all-btn"><i class="fa fa-angle-left" aria-hidden="true"></i> Todos Announcements</a>
                            @endif
                            <h5 class="margin-top-0 clearfix">Publicar Announcements</h5>
                        </div>
                        <div class="lp-coupns-form-outer">
                            <div class="lp-coupons-form-inner">
                                <form class="lp-add-announcement-form">
                                    <input id="edit_id" value="{{$actived_ad==null?0:$actived_ad->id}}" type="hidden"/>
                                    <input id="edit_national" value="{{$user->national}}" type="hidden"/>
                                    <div class="lp-coupon-box-row">
                                        <div class="form-group">
                                            <label class="lp-dashboard-top-label" for="edit_title" style="display: inherit;">Titulo<span class="lp-requires-filed">*</span>
                                                <span style="color: #7f7f7f;font-size: 12px;font-weight: 400;float: right;">Elegir un titulo llamativo que no se repita en otros.</span>
                                            </label>
                                            <input type="text" class="form-control lp-dashboard-text-field"
                                                value="{{$actived_ad==null?'':$actived_ad->title}}"
                                                name="edit_title" id="edit_title"
                                                placeholder="Necesario. Pon un título llamativo. Mínimo 40 caracteres"/>
                                        </div>
                                    </div>
                                    <div class="lp-coupon-box-row">
                                        <div class="form-group select2-dash">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label  class="lp-dashboard-left-label" for="announcements-listing">Categoría<span class="lp-requires-filed">*</span></label>
                                                </div>
                                                <div class="col-md-6"> <!--announcements-listing-->                                  <span style="color: #7f7f7f;font-size: 13px;font-weight: 400;float: right;margin-bottom: 10px;">Poner el anuncio en la categoria adecuada.</span>
                                                    <select id="edit_category" name="edit_category" class="form-control " data-metakey="announcment" data-planmetakey="">
                                                        <option value="0">Elige categoría</option> 
                                                        @foreach($categories as $cat)
                                                        <option value="{{$cat['id']}}" data-disable="no" {{$actived_ad!=null&&$actived_ad->category==$cat['id']?'selected':''}}>{{$cat['name']}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lp-coupon-box-row">
                                        <div class="form-group select2-dash">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label  class="lp-dashboard-left-label" for="edit_city">Estado<span class="lp-requires-filed">*</span></label>
                                                </div>
                                                <div class="col-md-6">   
                                                    <input type="hidden" id="edit_state_selected" value="{{$actived_ad==null?0:$actived_ad->state}}"/>                                 
                                                    <select id="edit_state" name="edit_state" class="form-control " data-metakey="announcment" data-planmetakey="">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lp-coupon-box-row">
                                        <div class="form-group select2-dash">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label  class="lp-dashboard-left-label" for="edit_city">Ciudad<span class="lp-requires-filed">*</span></label>
                                                </div>
                                                <div class="col-md-6">   
                                                    <input type="hidden" id="edit_city_selected" value="{{$actived_ad==null?0:$actived_ad->city}}"/>                                                                  
                                                    <select id="edit_city" name="edit_city" class="form-control select2-class" data-metakey="announcment" data-planmetakey="">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lp-coupon-box-row">
                                        <div class="form-group">
                                            <label class="lp-dashboard-top-label" for="edit_title">Barrio / Distrito / Colonia</label>
                                            <input type="text" class="form-control lp-dashboard-text-field"
                                                value="{{$actived_ad==null?'':$actived_ad->street}}"
                                                name="edit_street" id="edit_street"
                                                placeholder="Opcional"/>
                                        </div>
                                    </div>
                                    <div class="lp-coupon-box-row">
                                        <div class="form-group">
                                            <label class="lp-dashboard-top-label" for="announcements-message">Descripción<span class="lp-requires-filed">*</span>
                                                <div>
                                                    <p><i class="fa fa-check" aria-hidden="true"></i><span style="color:#7f7f7f;font-size: 13px;font-weight: 400;margin-top: 10px;margin-left:10px;">Publicar anuncios originales, NO repitas textos,
                                                    </spen><span style="color:red;">O SERAN ELIMINADOS.</span></p>
                                                </div>
                                            </label>
                                            <textarea class="form-control lp-dashboard-des-field"   
                                                name="edit_description"
                                                id="edit_description"
                                                placeholder="">{{$actived_ad==null?'':$actived_ad->description}}</textarea>
                                        </div>
                                    </div>
                                    <div class="lp-coupon-box-row lp-save-btn-container">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="form-group col-sm-12 clearfix">
                                                    <a href="" class="lp-unsaved-btn">Unsaved Event</a>
                                                    <button type="button" id="ad-announcement-btn" data-form="announcements" data-uid="{{Auth::id()}}" class="lp-coupns-btns pull-right ">Próximo Paso</button>
                                                    <button type="button" data-cancel="announcements" id="cancelLpAnnouncment" class="lp-coupns-btns cancel-ad-new-btn pull-right lp-margin-right-10 ">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div style="display:none" class="panel with-nav-tabs panel-default lp-dashboard-tabs col-md-11 align-center" id="announcements-form-toggle-end">
                        <div class="lp-review-sorting clearfix">
                            @if($user->validate)
                            <a href="javascript:;" class="lp-view-all-btn"><i class="fa fa-angle-left" aria-hidden="true"></i> Todos Announcements</a>
                            @endif
                            <h5 class="margin-top-0 clearfix">Publicar Announcements</h5>
                        </div>
                        <div class="lp-coupns-form-outer">
                            <div class="lp-coupons-form-inner">
                                <form class="lp-add-announcement-form-end" data-uid="{{Auth::id()}}">
                                    <div class="lp-coupon-box-row ann-confirm-form">
                                        <div class="form-group">
                                            <label class="lp-dashboard-top-label" for="" style="display: inherit;">
                                            Email {{$user->email}}
                                            </label>                                        
                                        </div>
                                        <div class="form-group">
                                            <label class="lp-dashboard-top-label" for="edit_emailable" style="display: inherit;">
                                            <input type="checkbox" id="edit_emailable" {{$actived_ad!=null&&$actived_ad->emailable?' checked':''}}/> Deseo que me puedan contactar por email
                                            </label>                                        
                                        </div>
                                        <div class="form-group">
                                            <label class="lp-dashboard-top-label" for="edit_callable" style="display: inherit;">
                                            <input type="checkbox" id="edit_callable" {{$actived_ad!=null&&$actived_ad->callable?' checked':''}}/> Deseo que el teléfono {{$user->phone_mobile}} se vea en mi anuncio
                                            </label>                                        
                                        </div>
                                        <div class="form-group">
                                            <label class="lp-dashboard-top-label" for="edit_whatsable" style="display: inherit;">
                                            <input type="checkbox" id="edit_whatsable" {{$actived_ad!=null&&$actived_ad->whatsable?' checked':''}}/> Deseo que el whatsapp se vea en mi anuncio
                                            </label>                                        
                                        </div>
                                        <div class="form-group">
                                            <p><i class="fa fa-check" aria-hidden="true"></i><span style="color: #7f7f7f;font-size: 13px;font-weight: 400;margin-top: 10px;margin-left:10px;">Poner fotos para que tu anuncio tenga más éxito.</span></p>
                                                <p><i class="fa fa-check" aria-hidden="true"></i><span style="color: #7f7f7f;font-size: 13px;font-weight: 400;margin-top: 10px;margin-left:10px;">Importante: revisar que tu teléfono sea el correcto.</span></p>
                                        </div>
                                        <div class="form-group">
                                            <div class="dropzone dz-clickable" id="dropzoneForm"></div>
                                        </div>
                                        <div class="form-group" style="margin-top:20px;">
                                            <label class="lp-dashboard-top-label" for="edit_accept" style="display: inherit;">
                                            <input type="checkbox" id="edit_accept"/> Soy mayor de edad. Acepto la <span class="lp-requires-filed">politica de privacidad</span> y <span class="lp-requires-filed">condiciones de uso</span> de adultguia.com
                                            </label>                                        
                                        </div>
                                        <div class="form-group">
                                            <label class="lp-dashboard-top-label" for="edit_agree" style="display: inherit;">
                                            <input type="checkbox" id="edit_agree"/> Declaro que soy completamente independiente, pongo este anuncio por cuenta propia, ofrezco mis servicios de acompañamiento libremente y por mi propia elección. Soy consciente de la ley de mi pais, no soy agencia, ni club, ni intermediario, mi anuncio es personal y no anuncio otras chicas en el mismo. Entiendo que cualquier anuncio contrario a la ley será borrado.
                                            </label>                                        
                                        </div>
                                    </div>
                                    <div class="lp-coupon-box-row lp-save-btn-container">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="form-group col-sm-12 clearfix">
                                                    <a href="" class="lp-unsaved-btn">Unsaved Event</a>
                                                    <button type="button" id="ad-announcement-btn-end" data-form="announcements" data-uid="{{Auth::id()}}" class="lp-coupns-btns pull-right ">guardar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
</div>
            </div>														
        </div>						
    </div>
</div>
<style>
.tox.tox-tinymce{
    height:450px!important;
}
.tox-tinymce .tox-toolbar__group:nth-child(2) {

}
</style>
<script>
jQuery(document).ready(function () {
    jQuery('#announcements-table .add-new-open-form').click(function (e) {
        e.preventDefault();
        var targetForm  =   '#'+jQuery(this).data('form')+'-form-toggle';
        jQuery(targetForm).fadeIn("fast", function () {
            jQuery( "#announcements-table" ).fadeOut();
        });
    });
});

jQuery(document).on('click', '.lp-view-all-btn', function (e) {
    e.preventDefault();
    location.href="/ads";
    return;
    jQuery( '#announcements-form-toggle' ).fadeOut( "fast", function() {
        jQuery( '#announcements-form-toggle-end' ).fadeOut( "fast", function() {
            jQuery('#announcements-table').fadeIn();
        });
    });
});
</script>
@endsection