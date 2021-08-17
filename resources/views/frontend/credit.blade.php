@extends('frontend.layouts.dashboard')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<div class="row">
    <div class="col-md-12 padding-0">
        <div class="right-panel">					
            <div class="tab-pane fade in active lp-new-ad-compaign padding-bottom-50" id="lp-listings">												
                <div class="clearfix lp-ad-step-two lp-ads-form-container" style="display: block;">
                    <div style="display:{{count($credits)?'block':'none'}};" class="panel with-nav-tabs panel-default lp-dashboard-tabs col-md-11 align-center" id="credit-table">                                            
                        <div class="lp-add-menu-outer clearfix">
                            <h5>Todos Credits</h5>
                            <button data-form="" class="lp-add-new-btn add-new-open-form credit-add-btn"><span><i class="fa fa-plus" aria-hidden="true"></i></span> Agregar Credit</button>
                        </div>
                        <div class="panel-body">
                            <div class="lp-main-title clearfix">
                                <div class="col-md-2"><p>Title</p></div>
                                <div class="col-md-2"><p>Credit</p></div>
                                <div class="col-md-4"><p>Start At</p></div>
                                <div class="col-md-2"><p>Created At</p></div>
                                <div class="col-md-2"><p>Status</p></div>
                            </div>
                            <div class="tab-content clearfix">
                                <div class="tab-pane fade in active" id="tab1default">
                                    @foreach($credits as $credit)
                                    <div class="lp-listing-outer-container clearfix lp-coupon-outer-container">
                                        <div class="col-md-2 lp-content-before-after">
                                            <div class="lp-deal-title">
                                                <p>{{$credit['history']->announcement->title}}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 lp-content-before-after">
                                            <div class="lp-announcement-title">
                                                <p>{{$credit['plan']['name']}} {{$credit['plan']['times']}}HR</p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 lp-content-before-after">
                                            <div class="lp-deal-title">
                                                <p>{{$credit['start_at_text']}}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 lp-content-before-after">
                                            <div class="lp-deal-title">
                                                <p>{{$credit['history']['created_at']}}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 lp-content-before-after">
                                            <div class="lp-deal-title">
                                                <p>{{$credit['status']}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display:{{count($credits)?'none':'block'}};" class="panel with-nav-tabs panel-default lp-dashboard-tabs col-md-12" id="credit-form">
                        <div>
                            <div class="lp-review-sorting clearfix">
                                <a href="#" class="lp-view-all-btn"><i class="fa fa-angle-left" aria-hidden="true"></i>Toda la campaña publicitaria</a>
                                <h5 class="margin-top-0 clearfix">Crear campaña publicitaria</h5>
                            </div>
                        </div>
                        <div class="col-md-9 lp-compaignForm-leftside">
                            <form id="lp-new-ad-compaignForm" method="POST" name="lp-new-ad-compaignForm" 
                            data-string="Minimum Budget Must Be Greater Then" 
                            data-type="adsperduration" 
                            data-tax-percent="0" data-camp-currency="$" 
                            data-userid="{{Auth::id()}}" 
                            action="">
                                <div class="panel-body margin-bottom-30 lpcamppadding0">
                                    <div class="lp-listing-selecter clearfix background-white">
                                        <div class="form-group col-sm-12 lp-ad-step-two-inner">
                                            <div class="lp-listing-selecter-content">
                                                <h5 class="lp-dashboard-top-label margin-bottom-15">
                                                    Announcement<span class="help-text">
                                                        <span class="camp-required">*</span>
                                                    </span>
                                                </h5>
                                                <div class="lp-listing-selecter-drop">
                                                    <select id="adid" name="lp_ads_for_listing" class="custom-form-control" data-metakey="" data-planmetakey="">
                                                        @foreach($announcements as $ann)
                                                        <option value="{{$ann['id']}}">{{$ann['title']}}</option>
                                                        @endforeach
                                                    </select>                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lp-listing-selecter clearfix background-white">
                                        @for($i=0;$i<count($creditplans);$i++)
                                        <div class="form-group col-sm-12 lp-ad-step-two-inner">
                                            <div class="lp-listing-selecter-content">
                                                <h5 class="lp-dashboard-top-label margin-bottom-10">
                                                    {{$creditplans[$i][0]['name']}}<span class="help-text">
                                                    <span class="help"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
                                                        <span class="help-tooltip">
                                                            <p>{{$creditplans[$i][0]['name']}}</p>
                                                        </span>
                                                    </span>
                                                </h5>
                                            </div>
                                            <div class="row">
                                                @foreach($creditplans[$i] as $p)
                                                <div class="col-sm-3">
                                                    <label for="plan-{{$p['id']}}" class="checkbox lp-camp-lbl">
                                                        <div class="lp-select-ad-place text-center">
                                                            <input id="plan-{{$p['id']}}"  
                                                                data-amount="0" 
                                                                data-id="{{$p['id']}}"  
                                                                data-gid="{{$i}}"  
                                                                data-times="{{$p['times']}}"
                                                                data-days="{{$p['days']}}"  
                                                                data-title="Spotlight"  
                                                                data-taxprice="0"  
                                                                data-orgprice="{{$p['credits']}}"  
                                                                data-price="{{$p['credits']}}"  
                                                                data-preview="/images/custom/preview_0{{$i}}.jpg" 
                                                                type="checkbox" name="lpadsoftype[]" class="searchtags">
                                                            <label></label>
                                                            <div class="lp-select-ad">
                                                                <div class="lp-ad-price-content text-center">
                                                                    <h5>
                                                                    @if($i==0)
                                                                    {{$p['days']}}Dias/{{$p['times']}}Hr
                                                                    @else    
                                                                    {{$p['times']}} HR
                                                                    @endif
                                                                        <span class="help-text">
                                                                            <span class="help"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
                                                                            <span class="help-tooltip">
                                                                                <p>Este plan para el anuncio en el primer lugar en la página de inicio</p>
                                                                            </span>
                                                                        </span>
                                                                    </h5>
                                                                </div>
                                                                <div class="lp-ad-location-image" data-toggle="modal" data-target="#ad_preview">
                                                                    <div class="lp-ad-location-image-overlay"><i class="fa fa-eye" aria-hidden="true"></i></div>
                                                                    <img data-model_img_src_ad="/images/custom/ads_camp_0{{$i}}.jpg" src="/images/custom/preview_0{{$i}}.png" />
                                                                </div>
                                                                <div class="lp-ad-price-content text-center">
                                                                    <button type="button">${{$p['credits']}}</button>
                                                                    @if($i==0)
                                                                    <h6>{{$p['days']}}Dias/{{$p['times']}}Hr</h6>
                                                                    @else
                                                                    <h6>Costo Por {{$p['times']}} HR</h6>
                                                                    @endif
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                @endforeach
                                                @if(($i==1||$i==2||$i==3))
                                                <div class="col-sm-12 start-time-{{$i}}">
                                                    <h5 class="lp-dashboard-top-label margin-bottom-10">Hora de inicio<span class="camp-required">*</span></h5>
                                                </div>
                                                @for($j=0;$j<$p['days'];$j++)
                                                <div class="col-sm-3 start-time-{{$i}}" style="margin-bottom: 10px;display:none;">
                                                    <div class="pos-relative credit" id="time-switch">
                                                        <span class="lp-field-icon">{{$j+1}} Dia  </span>
                                                        <input name="event-time" value="10" id="start_{{$i}}_{{$j}}" type="text" class="form-control datetimepicker1 lp-dashboard-text-field lp-pos-relative-input" placeholder=" Time">
                                                    </div>
                                                </div>
                                                @endfor
                                                @endif
                                            </div>
                                        </div>
                                        @endfor
                                    </div>
                                    <div id="ad_preview" class="modal fade margin-top-60" role="dialog">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-body text-center">
                                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    <img src="" alt="Preview" id="imgsrc">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--payment method-->
                                    <div class="lp-listing-selecter clearfix background-white">
                                        <div class="lp_payment_methods_ads lp-select-payement-outer">
                                            <div class="form-group col-sm-12">
                                                <h5 class="lp-dashboard-top-label margin-bottom-0">
                                                    Select a Payment Method<span class="help-text">
                                                        <span class="help"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
                                                        <span class="help-tooltip">
                                                            <p>Please Select Your Payment Method To Pay Ad Charges</p>
                                                        </span>
                                                        <span class="camp-required">*</span>
                                                    </span>
                                                </h5>
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="lp-payement-images">
                                                            <input class="radio_checked" type="radio" name="method" id="adPaypalOpt" value="paypal">
                                                            <label class="lp-lbl-with-radio"></label>
                                                            <label for="adPaypalOpt" class="lp-label-wrp">
                                                                <img src="/images/classic/paypal.png" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="lp-payement-images">
                                                            <input class="radio_checked" type="radio" name="method" id="adStripeOpt" value="stripe">
                                                            <label class="lp-lbl-with-radio"></label>
                                                            <label for="adStripeOpt" class="lp-label-wrp">
                                                                <img src="/images/classic/stripe.png" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="lp-payement-images">
                                                            <input class="radio_checked" type="radio" name="method" id="adWireOpt" value="wire">
                                                            <label class="lp-lbl-with-radio"></label>
                                                            <label for="adWireOpt" class="lp-label-wrp">
                                                                <img src="/images/classic/wire.png" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end payment method-->
                                        <input type="hidden" name="ads_days" value="0">
                                        <input type="hidden" name="ads_price" value="0">
                                        <input type="hidden" name="adsTypeval" value="byduration">
                                        <input type="hidden" name="currency" value="MXN">
                                        <input type="hidden" name="lp_ads_title" value="Campaign Payment">
                                        <input type="hidden" name="taxprice" value="">
                                        <input type="hidden" name="func" value="start ads">
                                    </div>
                                    <div class="lp-camp-bottom-secton clearfix">
                                        <div class="checkbox">
                                            <input id="lp-campaignTerms" name="lp-campaignTerms" type="checkbox" class="lp-campain-terms-cond" value="">
                                            <label for="lp-campaignTerms">
                                            Acepto que he revisado todos los detalles anteriores antes del procedimiento. Entiendo que la campaña publicitaria no se puede editar ni cancelar sin ponerme en contacto con el administrador del sitio.
                                            </label>
                                        </div>
                                        <div class="lp-menu-save-btns lp-save-btn-container background-white">
                                            <a href="" class="lp-unsaved-btn">Unsaved Event</a>
                                            <button type="button" class="lp-save-btn lp_campaign_paynow startpayforcampaignsss" disabled>
                                                <i class="fa fa-credit-card" aria-hidden="true">
                                                </i>Pay Now</button>
                                            <button class="lp-cancle-btn pull-right lp-margin-right-10">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-3 lp-compaignForm-righside">
                            <div class="lp-listing-selecter clearfix">
                                <div class="col-md-12">
                                    <div class="lp-listing-selecter-content">
                                        <h5>Resumen</h5>
                                    </div>
                                    <div class="row lp-camp-create-title">
                                        <div class="col-md-8">
                                            <h6>ARTICULO</h6>
                                        </div>
                                        <div class="col-md-4">
                                            <h6>MONTO</h6>
                                        </div>
                                    </div>
                                    <div class="row lp-camp-created-list">
                                        @for($i=0;$i<count($creditplans);$i++)
                                            @foreach($creditplans[$i] as $p)
                                            <div style="display:none;" class="col-md-8 lpcampain-{{$p['id']}}">
                                                <h6>
                                                    <!--<i class="fa fa-circle greencheck graycheck"></i>-->
                                                    {{$p['name']}} / {{$i==4?$p['days'].'DIAS':$p['times'].'HR'}}</h6>
                                            </div>
                                            <div style="display:none;" class="col-md-4 lpcampain-{{$p['id']}} lpcampain-{{$p['id']}}-price">
                                                <h6>${{$p['credits']}} <span class="lp-camp-typespan">MXN</span></h6>
                                            </div>
                                            @endforeach
                                        @endfor
                                    </div>
                                    <div class="lp-camp-border margin-bottom-20"></div>
                                    <div class="row lp-camp-created-list">
                                        <div class="col-md-8">
                                            <h5>Total</h5>
                                        </div>
                                        <div class="col-md-4 lp-cmp-alltotal">
                                            <h5>0</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>						
    </div>
</div>
<script>
jQuery(document).on('click', '.add-new-open-form.credit-add-btn',function(){
    jQuery( '#credit-table' ).fadeOut( "fast", function() {
        jQuery('#credit-form').fadeIn();
    });
});
jQuery(document).on('click', '.lp-view-all-btn',function(){
    jQuery( '#credit-form' ).fadeOut( "fast", function() {
        jQuery('#credit-table').fadeIn();
    });
});

</script>
@endsection