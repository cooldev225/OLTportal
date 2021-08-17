@extends('frontend.layouts.dashboard')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<div class="row">
                <div style="padding-top: 0px;padding-bottom: 0px;" class="alert-ann-verification-message clearfix lp-dashboard-panel-outer lp-new-dashboard-panel-outer lp-left-panel-height lp-ads-form-container col-md-11">
                    <div class="notices-area">
                        <div class="notice info">
                            <!--<a href="#" class="close"><i class="fa fa-times"></i></a>-->
                            <div class="notice-icon">
                                <i class="fa fa-info-circle"></i>
                            </div>
                            <div class="notice-text" style="padding: 10px 25px 6px 80px">
                                <h2><span>Favor de subir una fotografía de cuerpo completo y la cara expuesta sosteniendo una hoja con la frase escrita “guía tabu” la fotografía tiene que coincidir con el entorno y la ropa de las fotos previamente cargadas al anuncio.
<br>Esta fotografía NO SERÁ PÚBLICA y sólo será utilizada con fines de validación, nuestra prioridad es la seguridad de nuestros usuarios, de esta manera evitamos el robo de identidad por parte de terceros y que alguien más lucre con su imagen.</span>
                            </h2>
                            </div>
                        </div>
                    </div>
                </div>

    <div class="col-md-12 padding-10">
        <div class="right-panel kyc-upload">					
            <div class="preview-pl">
                <img src="" id="preview_img"/>
                <div class="status">
                    <label></label>
                </div>
            </div>
            <div class="form-group col-sm-12 clearfix button-pl">
                <button type="button" id="kyc_upload_btn" data-ann="{{$ann}}" data-uid="{{Auth::id()}}" onclick="uploadKYCphoto();" class="lp-coupns-btns pull-right">Upload</button>
                <div class="select">
                    
                    <button  class="lp-coupns-btns pull-right lp-margin-right-10">Select</button>	
                    <input type="file" id="kyc_upload_file"/>
                </div>
            </div>
        </div>						
    </div>
</div>
@endsection