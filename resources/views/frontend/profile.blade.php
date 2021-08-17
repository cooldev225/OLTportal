@extends('frontend.layouts.dashboard')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<div class="row">
    <div class="col-md-12 padding-0">
        <div class="right-panel">					
            <div class="tab-pane fade in active" id="updateprofile">
                <div class="user-recent-listings-inner tab-pane fade in active lp-update-profile-container" id="inbox">
                    <div class="panel with-nav-tabs panel-default lp-dashboard-tabs col-md-12 lp-left-panel-height lp-update-profile">
                        <div class="tab-header lp-update-password-outer">
                            <h3>Update Profile Details</h3>
                        </div>
                        <div class="updateprofile-tab">
                            <input type="hidden" id="edit_userid" value="{{$user->id}}"/>
                            <div class="updateprofile-tab aligncenter">
                                <form class="form-horizontal" id="profileupdate" action="" method="POST" enctype="multipart/form-data" data-lp-recaptcha="" data-lp-recaptcha-sitekey="">
                                    <div class="page-innner-container padding-40 lp-border lp-border-radius-8">
                                        <div class="user-avatar-upload lp-border-bottom padding-bottom-45">
                                            <div class="user-avatar-preview avatar-circle">
                                                <img class="author-avatar" src="{{$user->avatar==null?'/images/default-avatar.png':'/v1/api/downloadFile?path='.$user->avatar}}" alt="userimg" />
                                            </div>
                                            <div class="user-avatar-description">
                                                <p class="paragraph-form">
                                                    Update your photo manually If the photo is not set the default Gravatar will be the same as your login email account<br>
                                                </p>
                                                <div class="upload-photo margin-top-25">
                                                    <span class="file-input file-upload-btn btn-first-hover btn-file">
                                                        Upload Photo&hellip; <input class="upload-author-image" type="file" accept="image/*" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-6">
                                                <label for="Fname">Nombre</label>
                                                <input value="{{$user->firstName}}" type="text" class="form-control" name="first_name" id="Fname" />
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="uemail">Email</label>
                                                <input value="{{$user->ac_email}}" type="email" class="form-control" name="email" id="email" placeholder="eg. example@gmal.com" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-6">
                                                <label for="address">Colonia(Google Map Location)</label>
                                                <input type="text" class="form-control" name="address" id="address" placeholder="Your Address (1st line)" value="{{$user->ac_address01}}">
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="phone">Teléfono</label>
                                                <input value="{{$user->ac_phone}}" type="text" class="form-control" name="phone" id="phone" placeholder="+00-12345-7890" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-4">
                                                <label for="address">Ciudad</label>
                                                <input disabled type="text" class="form-control" name="city" id="city" placeholder="Your City" value="{{$user->city_name->name}}">
                                            </div>
                                            <div class="col-sm-4">
                                                <label for="address">Estado</label>
                                                <input disabled type="text" class="form-control" name="state" id="state" placeholder="State" value="{{$user->state_name->name}}">
                                            </div>
                                            <div class="col-sm-4">
                                                <label for="address">País</label>
                                                <input disabled type="text" class="form-control" name="country" id="country" placeholder="Country" value="{{$user->country()->name}}" required>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label for="about">About</label>
                                                <textarea  class="form-control" name="desc" id="about" rows="8" placeholder="Write about youself">{{$user->ac_about}}</textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-6">
                                                <label for="facebook">Low Price</label>
                                                <input value="{{$user->low_price?$user->low_price:''}}" type="number" class="form-control" name="low_price" id="low_price" placeholder="enter low price" />
                                                </div>
                                            <div class="col-sm-6">
                                                <label for="facebook">High Price</label>
                                                <input value="{{$user->high_price?$user->high_price:''}}" type="number" class="form-control" name="high_price" id="high_price" placeholder="enter high price" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-6">
                                                <label for="facebook">Facebook</label>
                                                <input value="{{$user->ac_fb}}" type="text" class="form-control" name="facebook" id="facebook" placeholder="enter facebook profile url" />
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="twitter">Twitter</label>
                                                <input value="{{$user->ac_tw}}" type="text" class="form-control" name="twitter" id="twitter" placeholder="enter twitter profile url" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-6">
                                                <label for="linkedin">Fans</label>
                                                <input value="{{$user->ac_lk}}" type="text" class="form-control" name="linkedin" id="linkedin" placeholder="enter linkedin profile url" />
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="instagram">Sitio web personal</label>
                                                <input value="{{$user->ac_in}}" type="text" class="form-control" name="instagram" id="instagram" placeholder="enter instagram profile url" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-6">
                                                <input type="button" name="profileupdate" value="Update profile" class="lp-secondary-big-btn btn-first-hover profileupdate" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix margin-top-30"></div>
                                    <div class="tab-header lp-update-password-outer margin-top-30">
                                        <h3>Update Password</h3>
                                    </div>
                                    <div class="page-innner-container padding-40 lp-border lp-border-radius-8 margin-bottom-30">
                                        <div class="form-group">
                                            <div class="col-sm-6">
                                                <label for="npassword">New Password</label>
                                                <input type="password" class="form-control" name="pwd" id="npassword" placeholder="write new password" />
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="rnpassword">Repeat Password</label>
                                                <input type="password" class="form-control" name="confirm" id="rnpassword" placeholder="write again your new password" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <p class="paragraph-form">Enter same password in both fields Use an uppercase letter and a number for stronger password.</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <input type="button" name="profilepassupdate" value="Update password" class="lp-secondary-big-btn btn-first-hover profilepassupdate" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form class="form-horizontal" id="lp_delete_user_profile" action="" method="POST">
                                    <div class="form-group">
                                        <div class="col-sm-6 text-left">
                                            <button type="button" class="btn btn-success btn-sm" id="lp_profile_pdf"><i class="fa fa-download"></i> Download Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="lp_profile_for_pdf" style="display:none">
                            <h2 style="margin-left:500px">Datos de perfil</h2>
                            <ul class="list-group">
                                <li class="list-group-item">Nombre : {{$user->firstName}}</li>
                                <li class="list-group-item">Email : {{$user->ac_email}}</li>
                                <li class="list-group-item">Teléfono : {{$user->ac_phone}}</li>
                                <li class="list-group-item">Facebook : {{$user->ac_fb}}</li>
                                <li class="list-group-item">Twitter : {{$user->ac_tw}}</li>
                                <li class="list-group-item">Fans : {{$user->ac_lk}}</li>
                                <li class="list-group-item">Instagram : {{$user->ac_in}}</li>
                                <li class="list-group-item">Address : {{$user->ac_address01}}</li>
                                <li class="list-group-item">Acerca de : {{$user->ac_about}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>						
    </div>
</div>
<script>
function alertMsg(f,s){
    var msg='<div class="notification '+(f?'success':'error')+' clearfix">\
            <div class="noti-icon">	</div>\
            <p>'+s+'</p>\
        </div>';
    jQuery('.updateprofile-tab.aligncenter .notification').remove();
    if(s!=''){
        jQuery('.updateprofile-tab.aligncenter').prepend(msg);
        jQuery(window).scrollTop(0);
    }
} 
jQuery(document).on('change','.upload-author-image', function(e) {
    var $this=jQuery(this)[0];
    if ($this.files && $this.files[0]) {
        var FR = new FileReader();
        FR.addEventListener("load", function (e) {
            var fd = new FormData();
            fd.append('id',jQuery('#edit_userid').val());
            fd.append('avatar',$this.files[0]);
            jQuery.ajax({
                type: 'POST',
                dataType: 'json',
                contentType: false,
                processData: false,
                headers: {
                    'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
                },
                url: '/v1/api/setAvatar',
                data:fd,
                success: function( res )
                {
                    jQuery('.author-avatar').prop('src',e.target.result);
                }, 
                error: function( err )
                {
                    
                }
            });
        });
        FR.readAsDataURL($this.files[0]);
    }
});
jQuery(document).on('click','.profileupdate', function(e) {
    if(jQuery('#email').val()==''){
        alertMsg(false,'¡Se requiere Email!');
        return;
    }
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        headers: {
            'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
        },
        url: '/v1/api/updateProfile',
        data:{
            'id':jQuery('#edit_userid').val(),
            'firstName' : jQuery('#first_name').val(),
            'ac_email' : jQuery('#email').val(),
            'ac_phone' : jQuery('#phone').val(),
            'ac_address01' : jQuery('#address').val(),
            'ac_about' : jQuery('#about').val(),
            'ac_fb' : jQuery('#facebook').val(),
            'ac_tw' : jQuery('#twitter').val(),
            'ac_lk' : jQuery('#linkedin').val(),
            'ac_in' : jQuery('#instagram').val(),
            'ac_pt' : jQuery('#pinterest').val(),
            'low_price' : jQuery('#low_price').val(),
            'high_price' : jQuery('#high_price').val(),
        },
        success: function( res )
        {
            alertMsg(true,'Salvado exitoso!');
        }, 
        error: function( err )
        {
            
        }
    });
});
jQuery(document).on('click','.profilepassupdate', function(e) {
    if(jQuery('#npassword').val()==''){
        alertMsg(false,'¡Se requiere Nueva contraseña!');
        return;
    }
    if(jQuery('#npassword').val()!=jQuery('#rnpassword').val()){
        alertMsg(false,'Contraseña no coincide!');
        jQuery('#rnpassword').val('');
        jQuery('#npassword').val('');
        return;
    }
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        cache: false,
        headers: {
            'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
        },
        url: '/v1/api/updatePassword',
        data:{
            'id':jQuery('#edit_userid').val(),
            'password' : jQuery('#npassword').val(),
        },
        success: function( res )
        {
            alertMsg(true,'Salvado exitoso!');
        }, 
        error: function( err )
        {
            
        }
    });
});
</script>
@endsection