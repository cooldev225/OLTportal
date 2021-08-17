function isValidateEditUserModal(){
    var reg = /^\d+$/;
    if($('#edit_user_following').val()==''){
        $('#edit_user_following').focus();
        return false;
    }
    if($('#edit_user_fans').val()==''){
        $('#edit_user_fans').focus();
        return false;
    }
    if($('#edit_user_heart').val()==''){
        $('#edit_user_heart').focus();
        return false;
    }
    if($('#edit_user_stars').val()==''){
        $('#edit_user_stars').focus();
        return false;
    }
    //if($('#edit_group_alert_01').val()==''||!reg.test($('#edit_group_alert_01').val())){
    return true;
}
function saveUser(){
    if(!isValidateEditUserModal())return;
    var form_data = new FormData();
    form_data.append('id',$('#edit_user_id').val());
    form_data.append('following',$('#edit_user_following').val());
    form_data.append('fans',$('#edit_user_fans').val());
    form_data.append('heart',$('#edit_user_heart').val());
    form_data.append('stars',$('#edit_user_stars').val());
    $.ajax({
        url: '/admin/users/saveUser',
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
            location.href='/users';
        },
        error: function (response) {

        }
    });
}