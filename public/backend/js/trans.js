var data_table=null;
function datatableInit(){
    data_table=$('#kt_datatable').KTDatatable({
        data: {
            type: 'remote',
            source: {
                read: {
                    url: '/admin/trans/getTransDataTable',
                    headers: {
                        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                    },
                    params:{
                        parent:0,
                    }
                },
            },
            pageSize: 10,
            serverPaging: true,
            serverFiltering: false,
            serverSorting: true
        },
        layout: {
            scroll: true,
            footer: true,
        },
        sortable: true,
        pagination: true,

        search: {
            input: $('#kt_datatable_search_query'),
            key: 'generalSearch'
        },

        // columns definition
        columns:
        [
            {
                field: 'id',
                title: '',
                template: function (row,index) {
                    return index+1;
                },
                width:40,
            },
            {
                field: 'username',
                title: 'username',
                template: function (row, index) {
                    return row.email;
                }
            },
            {
                field: 'name',
                title: 'Credit',
                template: function (row, index) {
                    return row.name;
                },
            },
            {
                field: 'times',
                title: 'Hours',
            },
            {
                field: 'start_date',
                title: 'Start',
            },
            {
                field: 'start_hours',
                title: 'Start Hour',
            },
            {
                field: 'status',
                title: 'status',
            },
            {
                field: 'amount',
                title: 'Amount',
            },
        ],
        translate: trans_pagination,
    });
}
jQuery(document).ready(function() {
    datatableInit();
});
function resetPassword(id){
    var form_data = new FormData();
    form_data.append('id',id);
    form_data.append('password','tempP@ss123');
    $.ajax({
        headers: {
            'X-CSRF-Token': jQuery('meta[name="csrf-token"]').attr('content')
        },
        url: '/v1/api/updatePassword',
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        dataType: "json",
        success: function( res )
        {
        }, 
        error: function( err )
        {
            
        }
    });
}
function deleteUser(id){
    var form_data = new FormData();
    form_data.append('id',id);
    $.ajax({
        url: '/admin/users/deleteUser',
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
            if(response.msg=='exist_ad'){
                alert('System can\'t delete this user because there are Ad. Please delete Ad of this user first.');
                return;
            }
            data_table.reload();
        },
        error: function (response) {

        }
    });
}
