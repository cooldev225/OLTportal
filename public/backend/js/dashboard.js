function readNitification(id){
    var form_data = new FormData();
    form_data.append('id',id);
    $.ajax({
        url: '/notify/read',
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
