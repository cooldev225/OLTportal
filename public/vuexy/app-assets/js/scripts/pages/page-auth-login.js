/*=========================================================================================
  File Name: form-validation.js
  Description: jquery bootstrap validation js
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: PIXINVENT
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(function () {
  'use strict';

  var pageLoginForm = $('.auth-login-form');

  // jQuery Validation
  // --------------------------------------------------------------------
  if (pageLoginForm.length) {
    pageLoginForm.validate({
      /*
      * ? To enable validation onkeyup
      onkeyup: function (element) {
        $(element).valid();
      },*/
      /*
      * ? To enable validation on focusout
      onfocusout: function (element) {
        $(element).valid();
      }, */
      rules: {
        'login-email': {
          required: true,
          email: true
        },
        'login-password': {
          required: true
        }
      }
    });
  }

  pageLoginForm.on('submit',function(e){
    e.preventDefault();
    var form_data = new FormData();
    form_data.append('username',$('#login-email').val());
    form_data.append('password',$('#login-password').val());
    $.ajax({
        url: '/login',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        dataType: "json",
        success: function (response) {
            if(!response.loggedin){
              $('.alert-danger').html(response.message);
              $('.alert-danger').fadeIn();
              $('.alert-normal').fadeOut();
            }else{
              $('.alert-danger').fadeOut();
              $('.alert-normal').fadeIn();
              location.href='/home';
            }
        },
        error: function (response) {

        }
    });
  });
});
