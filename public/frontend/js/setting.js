var dt_card_table = $('.datatables-card'),
dt_pon_table = $('.datatables-pon'),
dt_uplink_table = $('.datatables-uplink'),
dt_vlan_table = $('.datatables-vlan'),
dt_onutype_table = $('.datatables-onutype'),
dt_billing_table = $('.datatables-billing'),
dt_olt_table = $('.datatables-olt'),
assetPath = '/vuexy/app-assets/',
dt_card=null,
dt_pon=null,
dt_uplink=null,
dt_vlan=null;
dt_onutype=null;
dt_billing=null;
dt_olt=null;
$(window).on('load', function () {
  'use strict';
  if ($('body').attr('data-framework') === 'laravel') {
    assetPath = $('body').attr('data-asset-path');
  }
  //card
  if (dt_card_table.length) {
    dt_card = dt_card_table.DataTable({
      ajax: {
        url: '/setting/getCardDataTable',
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
        { data: 'slot' },
        { data: 'type' },
        { data: 'port' },
        {
            data: 'status',
            render: function(data, type, full, meta){
                if(data==0)return 'ok';
                else if(data==1)return 'running';

            }
        },
        { data: 'updated_at', render:function(data,type,full,meta){return getCommonFormatDate(data);}},
        { 
          data: '',
          render: function (data, type, full, meta) {
            return (
                '<div class="d-inline-flex">' +
                '<a class="pe-1 dropdown-toggle hide-arrow text-primary" data-bs-toggle="dropdown">' +
                feather.icons['more-vertical'].toSvg({ class: 'font-small-4' }) +
                '</a>' +
                '<div class="dropdown-menu dropdown-menu-end">' +
                '<a href="javascript:;" onclick="actionCardRow('+full['id']+',\'Reboot\');" class="dropdown-item">' +
                //feather.icons['file-text'].toSvg({ class: 'me-50 font-small-4' }) +
                'Reboot</a>' +
                '<a href="javascript:;" onclick="actionCardRow('+full['id']+',\'Authorize\');" class="dropdown-item">' +
                'Authorize</a>' +
                '<a href="javascript:;" onclick="actionCardRow('+full['id']+',\'Unauthorize\');" class="dropdown-item delete-record">' +
                'Unauthorize</a>' +
                '<a href="javascript:;" onclick="actionCardRow('+full['id']+',\'Reset\');" class="dropdown-item delete-record">' +
                'Reset</a>' +
                '</div>' +
                '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-card" onclick="\
                  $(\'#edit_card_id\').val('+full['id']+');\
                  $(\'#edit_card_slot\').val(\''+full['slot']+'\');\
                  $(\'#edit_card_type\').val(\''+full['type']+'\');\
                  $(\'#edit_card_port\').val(\''+full['port']+'\');\
                " class="item-edit">' +
                feather.icons['edit'].toSvg({ class: 'font-small-4' }) +
                '</a>'+
                '<a href="javascript:;" onclick="deleteCardRow('+full['id']+');" class="delete-record" style="margin-left:8px;">' +
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
          text: feather.icons['plus'].toSvg({ class: 'me-50 font-small-4' }) + 'Create New',
          className: 'create-new btn btn-primary',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#modals-slide-card',
            'id':'add_card_button'
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
    $('#account-vertical-card div.head-label').html('<h6 class="mb-0">OLT Cards</h6>');
  }

  //pon
  if (dt_pon_table.length) {
    dt_pon = dt_pon_table.DataTable({
      ajax: {
        url: '/setting/getPonDataTable',
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
        { data: 'port' },
        { data: 'admin' },
        {
            data: 'status',
            render: function(data, type, full, meta){
                if(data==0)return '<span class="badge bg-success">UP</span>';
                else if(data==1)return '<span class="badge bg-danger">DOWN</span>';


            }
        },
        { data: 'onu' },
        { data: 'description' },
        { data: 'power' },
        { data: 'updated_at', render:function(data,type,full,meta){return getCommonFormatDate(data);}},
        { 
          data: '',
          render: function (data, type, full, meta) {
            return (
                '<div class="d-inline-flex">' +
                '<a class="pe-1 dropdown-toggle hide-arrow text-primary" data-bs-toggle="dropdown">' +
                feather.icons['more-vertical'].toSvg({ class: 'font-small-4' }) +
                '</a>' +
                '<div class="dropdown-menu dropdown-menu-end">' +
                '<a href="javascript:;" onclick="actionPonRow('+full['id']+',\'Disable\');" class="dropdown-item">' +
                'Disable</a>' +
                '<a href="javascript:;" onclick="actionPonRow('+full['id']+',\'Reboot\');" class="dropdown-item">' +
                'Reboot All ONUs</a>' +
                '</div>' +
                '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-pon" onclick="\
                  $(\'#edit_pon_id\').val('+full['id']+');\
                  $(\'#edit_pon_port\').val(\''+full['port']+'\');\
                  $(\'#edit_pon_admin\').val(\''+full['admin']+'\');\
                  $(\'#edit_pon_status\').val(\''+full['status']+'\');\
                  $(\'#edit_pon_onu\').val(\''+full['onu']+'\');\
                  $(\'#edit_pon_description\').val(\''+full['description']+'\');\
                  $(\'#edit_pon_power\').val(\''+full['power']+'\');\
                " class="item-edit">' +
                feather.icons['edit'].toSvg({ class: 'font-small-4' }) +
                '</a>'+
                '<a href="javascript:;" onclick="deletePonRow('+full['id']+');" class="delete-record" style="margin-left:8px;">' +
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
          text: feather.icons['plus'].toSvg({ class: 'me-50 font-small-4' }) + 'Create New',
          className: 'create-new btn btn-primary',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#modals-slide-pon',
            'id':'add_pon_button'
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
    $('#account-vertical-pon div.head-label').html('<h6 class="mb-0">OLT PONs</h6>');
  }

  //uplink
  if (dt_uplink_table.length) {
    dt_uplink = dt_uplink_table.DataTable({
      ajax: {
        url: '/setting/getUplinkDataTable',
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
        { data: 'port' },
        { data: 'admin' },
        {
            data: 'status',
            render: function(data, type, full, meta){
                if(data==0)return '<span class="badge bg-success">UP TAG FULL</span>';
                else if(data==1)return '<span class="badge bg-danger">DOWN</span>';
            }
        },
        { data: 'mtu' },
        { data: 'description' },
        { data: 'pvid' },
        { data: 'vlan' },
        { 
          data: '',
          render: function (data, type, full, meta) {
            return (
                '<div class="d-inline-flex">' +
                '<a class="pe-1 dropdown-toggle hide-arrow text-primary" data-bs-toggle="dropdown">' +
                feather.icons['more-vertical'].toSvg({ class: 'font-small-4' }) +
                '</a>' +
                '<div class="dropdown-menu dropdown-menu-end">' +
                '<a href="javascript:;" onclick="actionUplinkRow('+full['id']+',\'Disable\');" class="dropdown-item">' +
                'Disable</a>' +
                '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-uplink" onclick="\
                  $(\'#edit_uplink_id\').val('+full['id']+');\
                  $(\'#edit_uplink_port\').val(\''+full['port']+'\');\
                  $(\'#edit_uplink_admin\').val(\''+full['admin']+'\');\
                  $(\'#edit_uplink_status\').val(\''+full['status']+'\');\
                  $(\'#edit_uplink_mtu\').val(\''+full['mtu']+'\');\
                  $(\'#edit_uplink_description\').val(\''+full['description']+'\');\
                  $(\'#edit_uplink_pvid\').val(\''+full['pvid']+'\');\
                  $(\'#edit_uplink_vlan\').val(\''+full['vlan']+'\');\
                " class="dropdown-item">' +
                'Edit Config</a>' +
                '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-uplink" onclick="\
                  $(\'#edit_uplink_id\').val('+full['id']+');\
                  $(\'#edit_uplink_port\').val(\''+full['port']+'\');\
                  $(\'#edit_uplink_admin\').val(\''+full['admin']+'\');\
                  $(\'#edit_uplink_status\').val(\''+full['status']+'\');\
                  $(\'#edit_uplink_mtu\').val(\''+full['mtu']+'\');\
                  $(\'#edit_uplink_description\').val(\''+full['description']+'\');\
                  $(\'#edit_uplink_pvid\').val(\''+full['pvid']+'\');\
                  $(\'#edit_uplink_vlan\').val(\''+full['vlan']+'\');\
                " class="dropdown-item delete-record">' +
                'Set Vlan</a>' +
                '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-uplink" onclick="\
                  $(\'#edit_uplink_id\').val('+full['id']+');\
                  $(\'#edit_uplink_port\').val(\''+full['port']+'\');\
                  $(\'#edit_uplink_admin\').val(\''+full['admin']+'\');\
                  $(\'#edit_uplink_status\').val(\''+full['status']+'\');\
                  $(\'#edit_uplink_mtu\').val(\''+full['mtu']+'\');\
                  $(\'#edit_uplink_description\').val(\''+full['description']+'\');\
                  $(\'#edit_uplink_pvid\').val(\''+full['pvid']+'\');\
                  $(\'#edit_uplink_vlan\').val(\''+full['vlan']+'\');\
                " class="dropdown-item delete-record">' +
                'Set PVID</a>' +
                '</div>' +
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
          text: feather.icons['plus'].toSvg({ class: 'me-50 font-small-4' }) + 'Create New',
          className: 'create-new btn btn-primary',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#modals-slide-uplink',
            'id':'add_uplink_button'
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
    $('#account-vertical-uplink div.head-label').html('<h6 class="mb-0">Uplink Status</h6>');
  }

  //vlan
  if (dt_vlan_table.length) {
    dt_vlan = dt_vlan_table.DataTable({
      ajax: {
        url: '/setting/getVlanDataTable',
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
        { data: 'vlan_id' },
        { data: 'description' },
        { 
          data: '',
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-flex">' +
              '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-vlan" onclick="\
                $(\'#edit_vlan_id\').val('+full['id']+');\
                $(\'#edit_vlan_vid\').val(\''+full['vlan_id']+'\');\
                $(\'#edit_vlan_description\').val(\''+full['description']+'\');\
              " class="item-edit">' +
              feather.icons['edit'].toSvg({ class: 'font-small-4' }) +
              '</a>'+
              '<a href="javascript:;" onclick="deleteVlanRow('+full['id']+');" class="delete-record" style="margin-left:8px;">' +
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
          text: feather.icons['plus'].toSvg({ class: 'me-50 font-small-4' }) + 'Create New',
          className: 'create-new btn btn-primary',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#modals-slide-vlan',
            'id':'add_vlan_button'
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
    $('#account-vertical-vlan div.head-label').html('<h6 class="mb-0">OLT VLANs</h6>');
  }

  //onutype
  if (dt_onutype_table.length) {
    dt_onutype = dt_onutype_table.DataTable({
      ajax: {
        url: '/setting/getOnutypeDataTable',
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
        { data: 'name' },
        { data: 'created_at',render:function(data){return getCommonFormatDate(data);}},
        { 
          data: '',
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-flex">' +
              '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-onutype" onclick="\
                $(\'#edit_onutype_id\').val('+full['id']+');\
                $(\'#edit_onutype_name\').val(\''+full['name']+'\');\
              " class="item-edit">' +
              feather.icons['edit'].toSvg({ class: 'font-small-4' }) +
              '</a>'+
              '<a href="javascript:;" onclick="deleteOnutypeRow('+full['id']+');" class="delete-record" style="margin-left:8px;">' +
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
          text: feather.icons['plus'].toSvg({ class: 'me-50 font-small-4' }) + 'Create Onu Type',
          className: 'create-new btn btn-primary',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#modals-slide-onutype',
            'id':'add_onutype_button'
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
              return 'Details of ' + data['name'];
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
    $('#account-vertical-onutype div.head-label').html('<h6 class="mb-0">Onu Type</h6>');
  }

  //olt
  if (dt_billing_table.length) {
    dt_billing = dt_billing_table.DataTable({
      ajax: {
        url: '/setting/getBillingDataTable',
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
        //{ data: 'olt' },
        { data: 'days' },
        { data: 'createdat'},
        { data: 'expire' },
        { data: 'status',render:function(data){if(data==0)return 'Pending';else if(data==1) return 'Accepted';else return 'Rejected';} },
        { 
          data: '',
          render: function (data, type, full, meta) {
            if(full['status'])return '';
            return (
              '<div class="d-inline-flex">' +
              '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-billing" onclick="\
                $(\'#edit_billing_id\').val('+full['id']+');\
                $(\'#edit_billing_name\').val(\''+full['name']+'\');\
              " class="item-edit">' +
              feather.icons['edit'].toSvg({ class: 'font-small-4' }) +
              '</a>'+
              '<a href="javascript:;" onclick="deleteBillingRow('+full['id']+');" class="delete-record" style="margin-left:8px;">' +
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
          text: feather.icons['plus'].toSvg({ class: 'me-50 font-small-4' }) + 'Create Billing',
          className: 'create-new btn btn-primary',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#modals-slide-billing',
            'id':'add_billing_button'
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
              return 'Details of ' + data['name'];
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
    $('#account-vertical-billing div.head-label').html('<h6 class="mb-0">Billing</h6>');
  }

  //olt
  if (dt_olt_table.length) {
    dt_olt = dt_olt_table.DataTable({
      ajax: {
        url: '/setting/getOltDataTable',
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
        { data: 'name' },
        { data: 'ip' },
        { data: 'telnet_port', render: function (data, type, full, meta) {
          return (
            '<span class="badge rounded-pill badge-light-primary">' +
            full['telnet_username'] +
            '</span><div style="padding: 0.1rem 0.5rem;font-size:10px;">Port: '+full['telnet_port']+'</div>'
          );
        }},
        { data: 'snmp_r_community', render: function (data, type, full, meta) {
          return (
            '<div style="padding: 0.1rem 0.5rem;font-size:10px;">Read-Only: '+full['snmp_r_community']+'</div><div style="padding: 0.1rem 0.5rem;font-size:10px;">Read-Write: '+full['snmp_rw_community']+'</div>'
          );
        }},
        { data: 'snmp_udp_port' },
        { data: 'manufacturer'},
        { data: 'model'},
        { data: 'version' },
        { data: 'created_at',render:function(data){return getCommonFormatDate(data);}},
        { 
          data: '',
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-flex">' +
              '<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#modals-slide-olt" onclick="\
                $(\'#edit_olt_id\').val('+full['id']+');\
                $(\'#edit_olt_name\').val(\''+full['name']+'\');\
                $(\'#edit_olt_ip\').val(\''+full['ip']+'\');\
              " class="item-edit">' +
              feather.icons['edit'].toSvg({ class: 'font-small-4' }) +
              '</a>'+
              '<a href="javascript:;" onclick="deleteOltRow('+full['id']+');" class="delete-record" style="margin-left:8px;">' +
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
          text: feather.icons['plus'].toSvg({ class: 'me-50 font-small-4' }) + 'Create OLT',
          className: 'create-new btn btn-primary',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#modals-slide-olt',
            'id':'add_olt_button'
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
              return 'Details of ' + data['name'];
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
    }).columns.adjust()
    .responsive.recalc();;
    $('#account-vertical-olt div.head-label').html('<h6 class="mb-0">OLT</h6>');
  }
  $('.data-card-submit').on('click',function(){
    var $id = $('#edit_card_id').val(),
    $slot = $('#edit_card_slot').val(),
    $type = $('#edit_card_type').val(),
    $port = $('#edit_card_port').val();
    if($slot==''){$('#edit_card_slot').focus();return;}
    if($type==''){$('#edit_card_type').focus();return;}
    if($port==''){$('#edit_card_port').focus();return;}
    var form_data = new FormData();
    form_data.append('id',$id);
    form_data.append('slot',$slot);
    form_data.append('type',$type);
    form_data.append('port',$port);
    form_data.append('olt_id',$('#active_olt_id').val());
    $.ajax({
        url: '/setting/saveCard',
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
          dt_card.ajax.reload();
          $('.data-cancel').trigger('click');
        },
        error: function (response) {
        }
    });
  });
  $('.data-pon-submit').on('click',function(){
    var $id = $('#edit_pon_id').val(),
    $port = $('#edit_pon_port').val(),
    $admin = $('#edit_pon_admin').val(),
    $status = $('#edit_pon_status').val(),
    $onu = $('#edit_pon_onu').val(),
    $description = $('#edit_pon_description').val(),
    $power = $('#edit_pon_power').val();
    if($port==''){$('#edit_pon_port').focus();return;}
    if($onu==''){$('#edit_pon_onu').focus();return;}
    var form_data = new FormData();
    form_data.append('id',$id);
    form_data.append('port',$port);
    form_data.append('admin',$admin);
    form_data.append('status',$status);
    form_data.append('onu',$onu);
    form_data.append('description',$description);
    form_data.append('power',$power);
    form_data.append('olt_id',$('#active_olt_id').val());
    $.ajax({
        url: '/setting/savePon',
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
          dt_pon.ajax.reload();
          $('.data-cancel').trigger('click');
        },
        error: function (response) {
        }
    });
  });
  $('.data-uplink-submit').on('click',function(){
    var $id = $('#edit_uplink_id').val(),
    $port = $('#edit_uplink_port').val(),
    $admin = $('#edit_uplink_admin').val(),
    $status = $('#edit_uplink_status').val(),
    $mtu = $('#edit_uplink_mtu').val(),
    $description = $('#edit_uplink_description').val(),
    $pvid = $('#edit_uplink_pvid').val(),
    $vlan = $('#edit_uplink_vlan').val();
    if($port==''){$('#edit_uplink_port').focus();return;}
    var form_data = new FormData();
    form_data.append('id',$id);
    form_data.append('port',$port);
    form_data.append('admin',$admin);
    form_data.append('status',$status);
    form_data.append('mtu',$mtu);
    form_data.append('description',$description);
    form_data.append('pvid',$pvid);
    form_data.append('vlan',$vlan);
    form_data.append('olt_id',$('#active_olt_id').val());
    $.ajax({
        url: '/setting/saveUplink',
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
          dt_uplink.ajax.reload();
          $('.data-cancel').trigger('click');
        },
        error: function (response) {
        }
    });
  });
  $('.data-vlan-submit').on('click',function(){
    var $id = $('#edit_vlan_id').val(),
    $vlan_id = $('#edit_vlan_vid').val(),
    $description = $('#edit_vlan_description').val();
    if($vlan_id==''){$('#edit_vlan_vid').focus();return;}
    var form_data = new FormData();
    form_data.append('id',$id);
    form_data.append('vlan_id',$vlan_id);
    form_data.append('description',$description);
    form_data.append('olt_id',$('#active_olt_id').val());
    $.ajax({
        url: '/setting/saveVlan',
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
          dt_vlan.ajax.reload();
          $('.data-cancel').trigger('click');
        },
        error: function (response) {
        }
    });
  });
  $('.data-onutype-submit').on('click',function(){
    var $id = $('#edit_onutype_id').val(),
      $name = $('#edit_onutype_name').val();
    if($name==''){$('#edit_onutype_name').focus();return;}
    var form_data = new FormData();
    form_data.append('id',$id);
    form_data.append('name',$name);
    $.ajax({
        url: '/setting/saveOnutype',
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
          dt_onutype.ajax.reload();
          $('.data-cancel').trigger('click');
        },
        error: function (response) {
        }
    });
  });

  $('.data-billing-submit').on('click',function(){
    var $id = $('#edit_billing_id').val(),
      $days = $('#edit_billing_days').val();
    if($days==''){$('#edit_billing_days').focus();return;}
    var form_data = new FormData();
    form_data.append('id',$id);
    form_data.append('days',$days);
    form_data.append('olt_id',$('#active_olt_id').val());
    $.ajax({
        url: '/setting/saveBilling',
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
          dt_billing.ajax.reload();
          $('.data-cancel').trigger('click');
        },
        error: function (response) {
        }
    });
  });

  $('.olt-save-submit').on('click',function(e){
    e.preventDefault();
    var $id = $('#olt_id').val(),
    $telnet_port = $('#olt_telnet_port').val(),
    $telnet_username = $('#olt_telnet_username').val(),
    $telnet_password = $('#olt_telnet_password').val(),
    $snmp_r_community = $('#olt_snmp_r').val(),
    $snmp_rw_community = $('#olt_snmp_rw').val(),
    $snmp_udp_port = $('#olt_snmp_udp_port').val(),
    $manufacturer = $('#olt_manufacturer').val(),
    $model = $('#olt_model').val(),
    $version = $('#olt_version').val();
    var form_data = new FormData();
    form_data.append('id',$id);
    form_data.append('telnet_port',$telnet_port);
    form_data.append('telnet_username',$telnet_username);
    form_data.append('telnet_password',$telnet_password);
    form_data.append('snmp_r_community',$snmp_r_community);
    form_data.append('snmp_rw_community',$snmp_rw_community);
    form_data.append('snmp_udp_port',$snmp_udp_port);
    form_data.append('manufacturer',$manufacturer);
    form_data.append('model',$model);
    form_data.append('version',$version);
    $.ajax({
        url: '/setting/saveOlt',
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
          location.href='/setting';
        },
        error: function (response) {
        }
    });
  });
  $('.data-olt-submit').on('click',function(){
    var $id = $('#edit_olt_id').val(),
    $name = $('#edit_olt_name').val(),
    $ip = $('#edit_olt_ip').val();
      if($name==''){$('#edit_olt_name').focus();return;}
      if($ip==''){$('#edit_olt_ip').focus();return;}
    var form_data = new FormData();
    form_data.append('id',$id);
    form_data.append('name',$name);
    form_data.append('ip',$ip);
    $.ajax({
        url: '/setting/saveOlt',
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
          dt_olt.ajax.reload();
          $('.data-cancel').trigger('click');
          location.href='/setting?a=7';
        },
        error: function (response) {
        }
    });
  });

  $('#add_onutype_button').on('click',function(){
    $('#edit_onutype_id').val(0);
    $('#edit_onutype_name').val('');
  });
  $('#add_billing_button').on('click',function(){
    $('#edit_billing_id').val(0);
    $('#edit_billing_name').val('');
  });
  $('#add_olt_button').on('click',function(){
    $('#edit_olt_id').val(0);
    $('#edit_olt_name').val('');
    $('#edit_olt_ip').val('');
  });
  $('#edit_onutype_name').on('keydown',function(e){
    if(e.keyCode==13){
      e.preventDefault();return false;
    }
  });
  $('#edit_billing_days').on('keydown',function(e){
    if(e.keyCode==13){
      e.preventDefault();return false;
    }
  });
  $('#edit_olt_name').on('keydown',function(e){
    if(e.keyCode==13){
      e.preventDefault();return false;
    }
  });
});
function deleteCardRow(id){
  var form_data = new FormData();
  form_data.append('id',id);
  $.ajax({
      url: '/setting/deleteCard',
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
        dt_card.ajax.reload();
      },
      error: function (response) {

      }
  });
}
function actionCardRow(id,action){
  var form_data = new FormData();
  form_data.append('id',id);
  form_data.append('action',action);
  $.ajax({
      url: '/setting/actionCard',
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
        dt_card.ajax.reload();
      },
      error: function (response) {

      }
  });
}
function deletePonRow(id){
  var form_data = new FormData();
  form_data.append('id',id);
  $.ajax({
      url: '/setting/deletePon',
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
        dt_pon.ajax.reload();
      },
      error: function (response) {

      }
  });
}
function actionPonRow(id,action){
  var form_data = new FormData();
  form_data.append('id',id);
  form_data.append('action',action);
  $.ajax({
      url: '/setting/actionPon',
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
        dt_pon.ajax.reload();
      },
      error: function (response) {

      }
  });
}
function deleteUplinkRow(id){
  var form_data = new FormData();
  form_data.append('id',id);
  $.ajax({
      url: '/setting/deleteUplink',
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
        dt_uplink.ajax.reload();
      },
      error: function (response) {

      }
  });
}
function actionUplinkRow(id,action){
  var form_data = new FormData();
  form_data.append('id',id);
  form_data.append('action',action);
  $.ajax({
      url: '/setting/actionUplink',
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
        dt_card.ajax.reload();
      },
      error: function (response) {

      }
  });
}
function deleteVlanRow(id){
  var form_data = new FormData();
  form_data.append('id',id);
  $.ajax({
      url: '/setting/deleteVlan',
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
        dt_vlan.ajax.reload();
      },
      error: function (response) {

      }
  });
}
function deleteOnutypeRow(id){
  var form_data = new FormData();
  form_data.append('id',id);
  $.ajax({
      url: '/setting/deleteOnutype',
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
        dt_onutype.ajax.reload();
      },
      error: function (response) {

      }
  });
}
function deleteBillingRow(id){
  var form_data = new FormData();
  form_data.append('id',id);
  $.ajax({
      url: '/setting/deleteBilling',
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
        dt_billing.ajax.reload();
      },
      error: function (response) {

      }
  });
}
function deleteOltRow(id){
  var form_data = new FormData();
  form_data.append('id',id);
  $.ajax({
      url: '/setting/deleteOlt',
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
        dt_olt.ajax.reload();
        //window.location.reload(true);
        location.href='/setting?a=7';
      },
      error: function (response) {

      }
  });
}