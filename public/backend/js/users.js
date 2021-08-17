var data_table=null;
function datatableInit(){
    data_table=$('#kt_datatable').KTDatatable({
        data: {
            type: 'remote',
            source: {
                read: {
                    url: '/admin/users/getUsersDataTable',
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
                    return '\
                        <div class="d-flex align-items-center">\
                            <div class="symbol symbol-40 symbol-sm flex-shrink-0">\
                                <img src="../../images/default-avatar.png" onload="'+(row.avatar!=null?setImgAvatar($(this),row.avatar):'')+';" alt="photo">\
                            </div>\
                            <div class="ml-4">\
                                <div class="text-dark-75 font-weight-bolder font-size-lg mb-0">'+(row.fullName==' '?'No Name':row.fullName) + '</div>\
                                <a href="#" class="text-muted font-weight-bold text-hover-primary">'+ row.country + '</a>\
                            </div>\
                        </div>\
                    ';
                }
            },
            {
                field: 'email',
                title: 'email',
                template: function (row, index) {
                    return '\
                        <span>\
                            <div class="font-weight-bolder font-size-lg mb-0">' + row.email + '</div>\
                            <div class="font-weight-bold text-muted">' + row.username + '%</div>\
                        </span>\
                    ';
                },
            },
            {
                field: 'phone_mobile',
                title: 'phone',
                template: function (row, index) {
                    return '\
                        <span>\
                            <div class="font-weight-bolder font-size-lg mb-0">' + row.phone_mobile + '</div>\
                            <div class="font-weight-bold text-muted">' + (row.sms_allow?'sms':'') + '</div>\
                        </span>\
                    ';
                },
            },
            {
                field: 'validate',
                title: 'status',
                template: function (row) {
                    return '\
                        <span>\
                            <div class="font-weight-bolder font-size-lg mb-0">' + (row.validate==0?'New user':row.validate==1?'Activated':'Rejected') + '</div>\
                            <div class="font-weight-bold text-muted">' + getJustDateWIthYear(row.updated_at) + '</div>\
                        </span>\
                    ';
                },
            },
            {
                field: 'city_name',
                title: 'Estado',
                template: function (row) {
                    return '\
                        <span>\
                            <div class="font-weight-bolder font-size-lg mb-0">' + row.state + '</div>\
                            <div class="font-weight-bold text-muted">' + row.city + '</div>\
                        </span>\
                    ';
                },
            },
            {
                field: 'ac_address01',
                title: 'Colonia',
            },
            {
                field: 'ac_fb',
                title: 'Facebook',
            },
            {
                field: 'ac_tw',
                title: 'Twitter',
            },
            {
                field: 'ac_lk',
                title: 'Fans',
            },
            {
                field: 'ac_in',
                title: 'Sitio personal',
            },
            {
                field: 'low_price',
                title: 'Low price',
            },
            {
                field: 'high_price',
                title: 'High price',
            },
            {
                field: 'ac_about',
                title: 'About me',
                autoHide: true,
                template: function (row) {
                    return row.ac_about;
                },
            },
            {
                field: 'actions',
                title: 'Actions',
                sortable: false,
                overflow: 'visible',
                autoHide: false,
                //width: 140,
                template: function (row) {
                    return $("#managepermission").val() == "false" ? '':'\
                        <div class="dropdown dropdown-inline">\
                        <a onclick="javascript:confirm(\'Are you sure to change user password as default (tempP@ss123)?\')?resetPassword(\'' + row.id + '\'):\'\';" class="btn btn-sm btn-clean btn-icon mr-2" title="Reset password">\
                            <span class="svg-icon svg-icon-md"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M10.9,2 C11.4522847,2 11.9,2.44771525 11.9,3 C11.9,3.55228475 11.4522847,4 10.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,16 C20,15.4477153 20.4477153,15 21,15 C21.5522847,15 22,15.4477153 22,16 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L10.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/><path d="M24.0690576,13.8973499 C24.0690576,13.1346331 24.2324969,10.1246259 21.8580869,7.73659596 C20.2600137,6.12944276 17.8683518,5.85068794 15.0081639,5.72356847 L15.0081639,1.83791555 C15.0081639,1.42370199 14.6723775,1.08791555 14.2581639,1.08791555 C14.0718537,1.08791555 13.892213,1.15726043 13.7542266,1.28244533 L7.24606818,7.18681951 C6.93929045,7.46513642 6.9162184,7.93944934 7.1945353,8.24622707 C7.20914339,8.26232899 7.22444472,8.27778811 7.24039592,8.29256062 L13.7485543,14.3198102 C14.0524605,14.6012598 14.5269852,14.5830551 14.8084348,14.2791489 C14.9368329,14.140506 15.0081639,13.9585047 15.0081639,13.7695393 L15.0081639,9.90761477 C16.8241562,9.95755456 18.1177196,10.0730665 19.2929978,10.4469645 C20.9778605,10.9829796 22.2816185,12.4994368 23.2042718,14.996336 L23.2043032,14.9963244 C23.313119,15.2908036 23.5938372,15.4863432 23.9077781,15.4863432 L24.0735976,15.4863432 C24.0735976,15.0278051 24.0690576,14.3014082 24.0690576,13.8973499 Z" fill="#000000" fill-rule="nonzero" transform="translate(15.536799, 8.287129) scale(-1, 1) translate(-15.536799, -8.287129) "/></g></svg><!--end::Svg Icon--></span>\
                        </a > '+
                        '<a onclick="javascript:confirm(\'Are you sure to delete a user?\')?deleteUser(\'' + row.id + '\'):\'\';" class="btn btn-sm btn-clean btn-icon mr-2" title="Delet User">\
                            <span class="svg-icon svg-icon-md" style="margin-top: -5px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"></path><path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"></path></g></svg></span>\
                        </a>'+
                        '</div>\
                    ';
                },
            } 
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
