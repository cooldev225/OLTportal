var dt_basic_table = $('.datatables-basic'),
assetPath = '/vuexy/app-assets/',
dt_basic=null;
$(window).on('load', function () {
  'use strict';
  if ($('body').attr('data-framework') === 'laravel') {
    assetPath = $('body').attr('data-asset-path');
  }
  if (dt_basic_table.length) {
    dt_basic = dt_basic_table.DataTable({
      ajax: {
        url: '/onu/getDataTable',
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        type: 'POST',
        data: {
          olt_id:$('#active_olt_id').val()
        }
      },
      "serverSide": true,
      "processing": true,
      columns: [
        { title:'ID', data: 'id',visible:false },
        { 
          data: 'status',
          render: function (data, type, full, meta) {
            return (
              full['status']==0?
              feather.icons['power'].toSvg({ class: 'font-small-4', style: 'color:#28c76f;font-weight:bold;' })
              :full['status']==1?
              feather.icons['power'].toSvg({ class: 'font-small-4', style: 'color:#ea5455;font-weight:bold;' })
              :full['status']==2?
              feather.icons['power'].toSvg({ class: 'font-small-4', style: 'color:#7367f0;font-weight:bold;' })
              :full['status']==3?
              feather.icons['power'].toSvg({ class: 'font-small-4', style: 'color:#ff9f43;font-weight:bold;' })
              :
              feather.icons['power'].toSvg({ class: 'font-small-4', style: 'color:#82868b;font-weight:bold;' })
            );
          }
        },
        { data: 'serial' },
        { data: 'name'},
        { 
          data: 'onu',
          render: function (data, type, full, meta) {
            return (
              full['slots']+'/'+full['pon']+':'+full['onu']
            );
          }
        },
        { 
          data: 'signal1' ,
          render: function (data, type, full, meta) {
            return (
              (eval(full['signal1'])+eval(full['signal2']))/2
            );
          }

        },
        { data: 'vlan'},
        { 
          data: '',visible: $pp[8][1]?true:false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-flex">' +
              '<a href="/onu/editOnu/'+full['id']+'" class="item-edit">' +
              feather.icons['edit'].toSvg({ class: 'font-small-4' }) +
              '</a>'+
              '</div>'
            );
          }
        }
      ],
      order: [[2, 'desc']],
      dom: '<"card-header border-bottom p-1"<"head-label"><"dt-action-buttons text-end"B>><"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
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
          className: 'btn btn-outline-primary dropdown-toggle me-2 filter-btn-group',
          text: 'All',
          buttons: [
            {
              text: 'Online',
              className: 'dropdown-item',
              attr: {
                'onclick':'filterAction(0);',
              },
            },
            {
              text: 'All',
              className: 'dropdown-item',
              attr: {
                'onclick':'filterAction(1);',
              },
            },
            {
              text: 'Offline',
              className: 'dropdown-item',
              attr: {
                'onclick':'filterAction(2);',
              },
            },
            {
              text: 'LoS',
              className: 'dropdown-item',
              attr: {
                'onclick':'filterAction(3);',
              },
            },
            {
              text: 'Disabled',
              className: 'dropdown-item',
              attr: {
                'onclick':'filterAction(4);',
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
    $('div.head-label').html('<h6 class="mb-0">Waiting Authorization</h6>');
  }
  $('#add_button').on('click',function(){
    $('#edit_id').val(0),
    $('#edit_serial').val(''),
    $('#edit_desc').val(''),
    $('#edit_slot').val(''),
    $('#edit_pon').val('');
  });
  $('.data-submit---------------------------------------------------------------').on('click', function () {
    var $id = $('#edit_id').val(),
      $serial = $('#edit_serial').val(),
      $desc = $('#edit_desc').val(),
      $slot = $('#edit_slot').val(),
      $pon = $('#edit_pon').val();
    if($serial==''){$('#edit_serial').focus();return;}
    if($desc==''){$('#edit_desc').focus();return;}
    if($slot==''){$('#edit_slot').focus();return;}
    if($pon==''){$('#edit_pon').focus();return;}
    var form_data = new FormData();
    form_data.append('id',$id);
    form_data.append('serial',$serial);
    form_data.append('desc',$desc);
    form_data.append('slot',$slot);
    form_data.append('pon',$pon);
    $.ajax({
        url: '/waiting/saveSlot',
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
          dt_basic.ajax.reload();
          $('.data-cancel').trigger('click');
        },
        error: function (response) {
        }
    });
  });
});
function filterAction(i){
  if(i==0){
    $('.filter-btn-group span').html('Online');
    dt_basic.ajax.url('/onu/getDataTable?status=0').load();
  }else if(i==1){
    $('.filter-btn-group span').html('All');
    dt_basic.ajax.url('/onu/getDataTable?status=').load();
  }else if(i==2){
    $('.filter-btn-group span').html('Offline');
    dt_basic.ajax.url('/onu/getDataTable?status=1').load();
  }else if(i==3){
    $('.filter-btn-group span').html('LoS');
    dt_basic.ajax.url('/onu/getDataTable?status=2').load();
  }else if(i==4){
    $('.filter-btn-group span').html('Disabled');
    dt_basic.ajax.url('/onu/getDataTable?status=3').load();
  }
  $('.dt-buttons.d-inline-flex .dt-button-collection').remove();
}