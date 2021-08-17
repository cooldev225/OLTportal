var data_table=null;
function datatableInit(){
    data_table=$('#kt_datatable').KTDatatable({
        data: {
            type: 'remote',
            source: {
                read: {
                    url: '/admin/credit/getCreditsDataTable',
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
                field: 'name',
                title: 'Kind',
            },
            {
                field: 'days',
                title: 'DIAS',
            },
            {
                field: 'times',
                title: 'Hours',
            },
            {
                field: 'credits',
                title: 'Credits',
            } 
        ],
        translate: trans_pagination,
    });
}
jQuery(document).ready(function() {
    datatableInit();
});