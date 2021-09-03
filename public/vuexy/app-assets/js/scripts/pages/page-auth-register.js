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

  var pageResetForm = $('.auth-register-form');

  // jQuery Validation
  // --------------------------------------------------------------------
  if (pageResetForm.length) {
    pageResetForm.validate({
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
        'firstName': {
          required: true
        },
        'cnpj': {
          required: true,
        },
        'email': {
          required: true,
          email: true
        },
        'phone': {
          required: true
        },'privacy-policy': {
          required: true
        }
      }
    });
  }

  pageResetForm.on('submit',function(e){
    e.preventDefault();
    var form_data = new FormData();
    form_data.append('firstName',$('#firstName').val());
    form_data.append('cnpj',$('#cnpj').val());
    form_data.append('email',$('#email').val());
    form_data.append('phone',$('#phone').val());
    $.ajax({
        url: '/register',
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
            }else{alert('We have sent your password, please check your mailbox.');
              $('.alert-danger').fadeOut();
              $('.alert-normal').fadeIn();
              location.href='/login';
            }
        },
        error: function (response) {

        }
    });
  });
});
