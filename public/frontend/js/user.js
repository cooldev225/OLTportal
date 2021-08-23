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
        url: '/user/getDataTable',
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
          data: 'firstName',
          render: function (data, type, full, meta) {
            var $user_img = full['avatar'],
              $name = full['firstName'],
              $post = full['username'];
            if ($user_img) {
              var $output =
                '<img src="' + assetPath + 'images/avatars/' + $user_img + '" alt="Avatar" width="32" height="32">';
            } else {
              // For Avatar badge
              var stateNum = full['validate'];
              var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
              var $state = states[stateNum],
                $name = full['firstName'],
                $initials = $name.match(/\b\w/g) || [];
              $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
              $output = '<span class="avatar-content">' + $initials + '</span>';
            }

            var colorClass = $user_img === '' ? ' bg-light-' + $state + ' ' : '';
            // Creates full output for row
            var $row_output =
              '<div class="d-flex justify-content-left align-items-center">' +
              '<div class="avatar ' +
              colorClass +
              ' me-1">' +
              $output +
              '</div>' +
              '<div class="d-flex flex-column">' +
              '<span class="emp_name text-truncate fw-bold">' +
              $name +
              '</span>' +
              '<small class="emp_post text-truncate text-muted">' +
              $post +
              '</small>' +
              '</div>' +
              '</div>';
            return $row_output;
          }
        },
        { data: 'email' },
        { data: 'is_admin',render:function(data,type,full,meta){
          if(data==0)return '<span class="badge bg-primary">Subscriber</span>';
          else if(data==1)return '<span class="badge bg-success">Maintainer</span>';
          else return '<span class="badge bg-info">Administrator</span>';
        } },
        { data: 'last_login' },
        { data: 'validate',render:function(data,type,full,meta){
          if(data==0)return '<span class="badge bg-warning">Pending</span>';
          else if(data==1)return '<span class="badge bg-success">Activated</span>';
          else return '<span class="badge bg-danger">Disabled</span>';
        }},
        { 
          data: '',
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-flex">' +
              '<a href="/user/editUser/'+full['id']+'" class="item-edit">' +
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
    $('div.head-label').html('<h6 class="mb-0">User List</h6>');
  }
});

function deleteRow(id) {
  var form_data = new FormData();
  form_data.append('id',id);
  $.ajax({
      url: '/user/deleteUser',
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