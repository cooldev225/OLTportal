$(window).on('load', function () {
    var changePicture = $('#change-picture'),
    userAvatar = $('.user-avatar');
  // Change user profile picture
  if (changePicture.length) {
    $(changePicture).on('change', function (e) {
      var reader = new FileReader(),
        files = e.target.files;
        reader.onload = function () {
        if (userAvatar.length) {
          userAvatar.attr('src', reader.result);
        }
      };
      reader.readAsDataURL(files[0]);
    });
  }
    $('.btn-submit').on('click',function(e){
        e.preventDefault();
        var form_data = new FormData();
        form_data.append('id',$('#userid').val());
        form_data.append('username',$('#username').val());
        form_data.append('firstName',$('#name').val());
        form_data.append('email',$('#email').val());
        form_data.append('validate',$('#status').val());
        form_data.append('is_admin',$('#role').val());
        form_data.append('ac_about',$('#company').val());
        form_data.append('avatar',$('#change-picture')[0].files && $('#change-picture')[0].files[0]?$('#change-picture')[0].files[0]:null);
        $.ajax({
            url: '/user/saveUser',
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
                //location.reload();
            },
            error: function (response) {

            }
        });
    });
});