<div class="modal fade style2-popup-login" id="app-view-login-popup" role="dialog" style="overflow: visible !important; opacity: 1;">
    <div class="modal-dialog">                                                        
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <div class="login-form-pop-tabs clearfix">
                    <ul>
                        <li><a href="#" class="signInClick active">Sign In</a></li>
                        <li><a href="#" class="signUpClick">Sign Up</a></li>                                                                    
                    </ul>
                    <a class="md-close" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-close"></i></a>                                                                    
                </div>                                                                
            </div>
            <div class="modal-body">                                                                
                <div class="lp-border-radius-8 login-form-popup-outer">
                    <div class="siginincontainer2">
                        <form id="login" class="form-horizontal margin-top-30"  method="post" data-lp-recaptcha="" data-lp-recaptcha-sitekey="">
                            <p class="status"></p>
                            <div class="form-group">
                                <input type="text" class="form-control" id="lpusername" name="lpusername" placeholder="UserName/Email"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="lppassword" name="lppassword" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <div class="checkbox clearfix">
                                    <input id="check1" type="checkbox" name="remember" value="yes">
                                
                                    <a class="forgetPasswordClick pull-right" >Forgot Password</a>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Sign in" class="lp-secondary-btn width-full btn-first-hover" />
                            </div>
                            <input type="hidden" id="security" name="security" value="b387a31ac2" /><input type="hidden" name="_wp_http_referer" value="/" />							
                        </form>
                    </div>
                    <div class="siginupcontainer2">
                        <form id="register" class="form-horizontal margin-top-30"  method="post" data-lp-recaptcha="" data-lp-recaptcha-sitekey="">
                            <p class="note black-back-black">nota: tener estos datos verificados no significa que tenga una cuenta, hasta que publique un anuncio no se le asignará un nombre de usuario y contraseña</p>
                            <p class="status"></p>
                            <div class="form-group">
                                <lavel>país</lavel>								   
                                <select class="form-control" id="national">
                                    @foreach($nationals as $national)
                                    <option value="{{$national['id']}}">{{$national['name']}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">	
                                <lavel>Teléfono (10 dígitos)</lavel>								   
                                <input type="text" class="form-control" id="telephone" name="telephone"  placeholder="Número de teléfono"/>
                            </div>
                            <div class="form-group">							
                                <lavel>Correo electronico</lavel>					
                                <input type="email" class="form-control" id="email" name="email" placeholder="Correo electronico"/>
                            </div>
                            <div class="form-group">	
                                <input type="checkbox" class="form-control" id="smsallow" name="smsallow""/>
                                <div class="inline-lavel">
                                    <lavel>Acepto recibir comunicaciones por SMS.</lavel>								   									
                                </div>
                            </div>
                            <div class="form-group">
                                <input id="lp_usr_reg_btn" type="submit" value="Siguente paso" class="lp-secondary-btn width-full btn-first-hover" />
                            </div>
                            <input type="hidden" id="security2" name="security2" value="11ae3f07df" /><input type="hidden" name="_wp_http_referer" value="/" />							
                        </form>
                    </div>
                    <div class="forgetpasswordcontainer2">
                        <form class="form-horizontal margin-top-30" id="lp_forget_pass_form" action="#"  method="post">
                            <p class="status"></p>
                            <div class="form-group">
                                <input type="email" name="user_login" class="form-control" id="email3" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" value="Get New Password" class="lp-secondary-btn width-full btn-first-hover" />
                                <input type="hidden" id="security3" name="security3" value="28763ecba2" /><input type="hidden" name="_wp_http_referer" value="/" />								</div>
                        </form>
                        <div class="pop-form-bottom">
                            <div class="bottom-links">
                                <a class="cancelClick" >Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Login Popup -->	