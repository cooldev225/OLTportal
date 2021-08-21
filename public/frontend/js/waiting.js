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
        url: '/waiting/getDataTable',
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
        { title:'ID', data: 'id',visible:false },
        { 
          data: 'serial',
          render: function (data, type, full, meta) {
            return (
              '<span class="badge rounded-pill badge-light-primary">' +
              data +
              '</span><div style="padding: 0.1rem 0.5rem;font-size:10px;">'+full['desc']+'</div>'
            );
          }
        },
        { data: 'slot' },
        { data: 'pon' },
        { 
          data: '',
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-flex">' +
              '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-in" onclick="\
                $(\'#edit_id\').val('+full['id']+');\
                $(\'#edit_serial\').val(\''+full['serial']+'\');\
                $(\'#edit_desc\').val(\''+full['desc']+'\');\
                $(\'#edit_slot\').val(\''+full['slot']+'\');\
                $(\'#edit_pon\').val(\''+full['pon']+'\');\
              " class="item-edit">' +
              feather.icons['edit'].toSvg({ class: 'font-small-4' }) +
              '</a>'+
              '<a href="javascript:;" onclick="deleteRow('+full['id']+');" class="delete-record" style="margin-left:8px;">' +
              feather.icons['trash-2'].toSvg({ class: 'font-small-4 me-50' }) +
              '</a>' +
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
          text: feather.icons['plus'].toSvg({ class: 'me-50 font-small-4' }) + 'Add New Record',
          className: 'create-new btn btn-primary',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#modals-slide-in',
            'id':'add_button'
          },
          init: function (api, node, config) {
            $(node).removeClass('btn-secondary');
          },
        }
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
  $('.data-submit').on('click', function () {
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

function deleteRow(id) {
  var form_data = new FormData();
  form_data.append('id',id);
  $.ajax({
      url: '/waiting/deleteSlot',
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
      },
      error: function (response) {

      }
  });
}