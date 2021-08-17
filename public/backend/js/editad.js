jQuery(document).ready(function() {
    $('#edit_description').each(function(){
        $this=$(this);
        $this.val(unescape($this.val()).replace('v1/api/downloadFile','/v1/api/downloadFile'));
    });
    tinymce.init({
        selector: '#edit_description',
        entity_encoding : "raw",
        menubar: false,
        toolbar: false,
        toolbar_item_size: "small",
        statusbar: false,
        readonly :1
    });
});
function sendKYClink(){
    var form_data = new FormData();
    form_data.append('userid',$('#edit_userid').val());
    form_data.append('adid',$('#edit_id').val());
    form_data.append('phrase',$('#edit_phrase').val());
    form_data.append('body',$('#edit_kycbody').val());
    edit_kycbody
    $.ajax({
        url: '/admin/ads/sendkyclink',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        dataType: "html",
        success: function (response) {
            location.reload();
        },
        error: function (response) {

        }
    });
}
function sendReject(){
    var form_data = new FormData();
    form_data.append('userid',$('#edit_userid').val());
    form_data.append('adid',$('#edit_id').val());
    form_data.append('reason',$('#edit_rejectreason').val());
    edit_kycbody
    $.ajax({
        url: '/admin/ads/rejectAd',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        dataType: "html",
        success: function (response) {
            location.reload();
        },
        error: function (response) {

        }
    });
}
function approveKYC(){
    var form_data = new FormData();
    form_data.append('userid',$('#edit_userid').val());
    form_data.append('adid',$('#edit_id').val());
    $.ajax({
        url: '/admin/ads/approveAd',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        dataType: "html",
        success: function (response) {
            location.reload();
        },
        error: function (response) {

        }
    });
}
function sendInvalid(){
    var form_data = new FormData();
    form_data.append('userid',$('#edit_userid').val());
    form_data.append('adid',$('#edit_id').val());
    form_data.append('reason',$('#edit_rejectkycreason').val());
    edit_kycbody
    $.ajax({
        url: '/admin/ads/invalidAd',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        dataType: "html",
        success: function (response) {
            location.reload();
        },
        error: function (response) {

        }
    });
}