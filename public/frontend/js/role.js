var dt_basic_table = $('.datatables-basic'),
assetPath = '/vuexy/app-assets/',
role_id=0,
dt_basic=null;
$(window).on('load', function () {
  'use strict';
  if ($('body').attr('data-framework') === 'laravel') {
    assetPath = $('body').attr('data-asset-path');
  }
  if (dt_basic_table.length) {
    dt_basic = dt_basic_table.DataTable({
      ajax: {
        url: '/role/getDataTable?olt_id='+$('#active_olt_id').val()+'&role=0',
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        type: 'POST',
        data: {
        }
      },
      "serverSide": true,
      "processing": true,
      columns: [
        { data: 'num' },
        { data: 'name' },
        { data: 'read' ,render:function(data,type,full){
          return '<div class="form-check">\
                    <input type="checkbox" onchange="setRole('+full['id']+',0);" class="form-check-input" id="chk_'+full['id']+'_0" '+(data?'checked':'')+' />\
                    <label class="form-check-label" for="chk_'+full['id']+'_0"></label>\
                </div>';
        }},
        { data: 'write' ,render:function(data,type,full){
          return '<div class="form-check">\
                    <input type="checkbox" onchange="setRole('+full['id']+',1);" class="form-check-input" id="chk_'+full['id']+'_1" '+(data?'checked':'')+' />\
                    <label class="form-check-label" for="chk_'+full['id']+'_1"></label>\
                </div>';
        }},
        { data: 'create' ,render:function(data,type,full){
          return '<div class="form-check">\
                    <input type="checkbox" onchange="setRole('+full['id']+',2);" class="form-check-input" id="chk_'+full['id']+'_2" '+(data?'checked':'')+' />\
                    <label class="form-check-label" for="chk_'+full['id']+'_2"></label>\
                </div>';
        }},
        { data: 'delete' ,render:function(data,type,full){
          return '<div class="form-check">\
                    <input type="checkbox" onchange="setRole('+full['id']+',3);" class="form-check-input" id="chk_'+full['id']+'_3" '+(data?'checked':'')+' />\
                    <label class="form-check-label" for="chk_'+full['id']+'_3"></label>\
                </div>';
        }},
      ],
      order: [[2, 'desc']],
      dom: '<"card-header border-bottom p-1"<"head-label"><"dt-action-buttons text-end"B>><"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 25,
      lengthMenu: [7, 10, 25, 50, 75, 100],
      buttons: [
        {
          extend: 'collection',
          className: 'btn btn-outline-secondary dropdown-toggle me-2',
          text: feather.icons['share'].toSvg({ class: 'font-small-4 me-50' }) + 'Export',
          buttons: [
            {
              extend: 'print',
              text: feather.icons['printer'].toSvg({ class: 'font-small-4 me-50' }) + 'Print',
              className: 'dropdown-item',
              exportOptions: { columns: [0, 1, 2, 3] }
            },
            {
              extend: 'csv',
              text: feather.icons['file-text'].toSvg({ class: 'font-small-4 me-50' }) + 'Csv',
              className: 'dropdown-item',
              exportOptions: { columns: [0, 1, 2, 3] }
            },
            {
              extend: 'excel',
              text: feather.icons['file'].toSvg({ class: 'font-small-4 me-50' }) + 'Excel',
              className: 'dropdown-item',
              exportOptions: { columns: [0, 1, 2, 3] }
            },
            {
              extend: 'pdf',
              text: feather.icons['clipboard'].toSvg({ class: 'font-small-4 me-50' }) + 'Pdf',
              className: 'dropdown-item',
              exportOptions: { columns: [0, 1, 2, 3] }
            },
            {
              extend: 'copy',
              text: feather.icons['copy'].toSvg({ class: 'font-small-4 me-50' }) + 'Copy',
              className: 'dropdown-item',
              exportOptions: { columns: [0, 1, 2, 3] }
            }
          ],
          init: function (api, node, config) {
            $(node).removeClass('btn-secondary');
            $(node).parent().removeClass('btn-group');
            setTimeout(function () {
              $(node).closest('.dt-buttons').removeClass('btn-group').addClass('d-inline-flex');
            }, 50);
          }
        },
        {
          extend: 'collection',
          className: 'btn btn-outline-info dropdown-toggle me-2 filter-btn-group',
          text: 'Subscriber',
          buttons: [
            {
              text: 'Subscriber',
              className: 'dropdown-item',
              attr: {
                'onclick':'SelectRoleAction(0);',
              },
            },
            {
              text: 'Maintainer',
              className: 'dropdown-item',
              attr: {
                'onclick':'SelectRoleAction(1);',
              },
            },
            {
              text: 'Administrator',
              className: 'dropdown-item',
              attr: {
                'onclick':'SelectRoleAction(2);',
              },
            },
          ],
        },
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['serial'];
            }
          }),
          type: 'column',
          renderer: $.fn.dataTable.Responsive.renderer.tableAll({
            tableClass: 'table'
          })
        }
      },
      language: {
        paginate: {
          previous: '&nbsp;',
          next: '&nbsp;'
        }
      }
    });
    $('div.head-label').html('<h6 class="mb-0">Permission Setting</h6>');
  }
});
function setRole(p,r){
    var form_data = new FormData();
    form_data.append('page_id',p);
    form_data.append('role_id',role_id);
    form_data.append('action_id',r);
    form_data.append('action_val',$('#chk_'+p+'_'+r).prop('checked')?1:0);
    $.ajax({
        url: '/role/savePermission',
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
          dt_basic.ajax.url('/role/getDataTable?olt_id='+$('#active_olt_id').val()+'&role='+role_id).load();
        },
        error: function (response) {
        }
    });
}
function SelectRoleAction(i){
  role_id=i;
  if(i==0){
    $('.filter-btn-group span').html('Subscriber');
    dt_basic.ajax.url('/role/getDataTable?olt_id='+$('#active_olt_id').val()+'&role=0').load();
  }else if(i==1){
    $('.filter-btn-group span').html('Maintainer');
    dt_basic.ajax.url('/role/getDataTable?olt_id='+$('#active_olt_id').val()+'&role=1').load();
  }else if(i==2){
    $('.filter-btn-group span').html('Administrator');
    dt_basic.ajax.url('/role/getDataTable?olt_id='+$('#active_olt_id').val()+'&role=2').load();
  }
  $('.dt-buttons.d-inline-flex .dt-button-collection').remove();
}