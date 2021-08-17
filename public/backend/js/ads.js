var data_table=null;
function datatableInit(){
    data_table=$('#kt_datatable').KTDatatable({
        data: {
            type: 'remote',
            source: {
                read: {
                    url: '/admin/ads/getAdsDataTable',
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
                width:10,
            },
            {
                field: 'username',
                title: 'username',
                width:160,
                template: function (row, index) {
                    return '\
                        <div class="d-flex align-items-center">\
                            <div class="symbol symbol-40 symbol-sm flex-shrink-0">\
                                <img src="../../images/default-avatar.png" onload="'+(row.avatar!=null?setImgAvatar($(this),row.avatar):'')+';" alt="photo">\
                            </div>\
                            <div class="ml-4">\
                                <div class="text-dark-75 font-weight-bolder font-size-lg mb-0">'+row.email + '</div>\
                                <a href="#" class="text-muted font-weight-bold text-hover-primary">'+ row.phone_mobile + '</a>\
                            </div>\
                        </div>\
                    ';
                }
            },
            {
                field: 'title',
                title: 'title',
                width:200,
                template: function(row) {
                    return getLimitText(row.title,50);
                }
            },
            {
                field: 'category',
                title: 'cat',
                width:100,
                template: function(row) {
                    return '\
                        <span>\
                            <div class="font-weight-bolder font-size-lg mb-0">' + row.categoryname + '</div>\
                            <div class="font-weight-bold text-muted">' + row.countryname + '</div>\
                        </span>\
                    ';
                }
            },{
                field: 'state',
                title: 'State/City',
                template: function(row) {
                    return '\
                        <span>\
                            <div class="font-weight-bolder font-size-lg mb-0">' + row.statename + '</div>\
                            <div class="font-weight-bold text-muted">' + row.cityname + '</div>\
                        </span>\
                    ';
                }
            },{
                field: 'street',
                title: 'street',
                template: function(row) {
                    return row.street;
                }
            },
            {
                field: 'stage',
                title: 'status',
                autoHide: false,
                template: function (row) {
                    return row.stage<2?'New ads':
                        row.stage==2?'Waiting KYC':
                        row.stage==3?'Rejected Ad':
                        row.stage==4?'Uploaed KYC':
                        row.stage==5?'Approved':
                        row.stage==6?'Invalid Ad':'None';
                },
            },
            {
                field: 'created_at',
                title: 'Created at',
                template: function (row) {
                    return getJustDateWIthYear(row.created_at);
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
                        <a href="/admin/ads/'+row.id+'" class="btn btn-sm btn-clean btn-icon" title="Edit user">\
                            <span class="svg-icon svg-icon-md"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "></path><rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"></rect></g></svg></span>\
                        </a>'+
                        '<a onclick="javascript:confirm(\'Are you sure to delete a Ad?\')?deleteAd(\'' + row.id + '\'):\'\';" class="btn btn-sm btn-clean btn-icon mr-2" title="Reset password">\
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
function deleteAd(id){
    var form_data = new FormData();
    form_data.append('id',id);
    $.ajax({
        url: '/v1/api/deleteAd',
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
            data_table.reload();
        },
        error: function (response) {

        }
    });
}
