@extends('frontend.layouts.dashboard_horizontal')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<!-- BEGIN: Content-->
<div class="app-content content ">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper container-xxl p-0">
        <div class="content-header row">
        </div>
        <div class="content-body">
            <section id="page-account-settings">
                <div class="row">
                    <div class="col-md-3 mb-2 mb-md-0">
                        <ul class="nav nav-pills flex-column nav-left config-submenu">
                            <li class="nav-item">
                                <!--
                                <a class="nav-link" id="account-pill-cli" data-bs-toggle="pill" href="javascript:;" aria-expanded="false">
                                    <i data-feather="terminal" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">Open OLT Cli</span>
                                </a>-->
                                <button type="button" class="btn btn-primary"><i data-feather="terminal" class="font-medium-3 me-1"></i>Open OLT Cli</button>
                            </li>
                            <li class="nav-item" style="margin-top:20px;">
                                <a class="nav-link {{$active==0?'active':''}}" id="account-pill-settings" data-bs-toggle="pill" href="#account-vertical-settings" aria-expanded="true">
                                    <i data-feather="settings" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold"><span class="fw-bold"> OLT Settings</span>
                                </a>
                            </li>
                            @if($current_permission[3][0])
                            <li class="nav-item">
                                <a class="nav-link {{$active==1?'active':''}}" id="account-pill-card" data-bs-toggle="pill" href="#account-vertical-card" aria-expanded="false">
                                    <i data-feather="credit-card" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">Cards</span>
                                </a>
                            </li>
                            @endif
                            @if($current_permission[4][0])
                            <li class="nav-item">
                                <a class="nav-link {{$active==2?'active':''}}" id="account-pill-pon" data-bs-toggle="pill" href="#account-vertical-pon" aria-expanded="false">
                                    <i data-feather="disc" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">PON</span>
                                </a>
                            </li>
                            @endif
                            @if($current_permission[5][0])
                            <li class="nav-item">
                                <a class="nav-link {{$active==3?'active':''}}" id="account-pill-uplink" data-bs-toggle="pill" href="#account-vertical-uplink" aria-expanded="false">
                                    <i data-feather="share-2" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">Uplink</span>
                                </a>
                            </li>
                            @endif
                            @if($current_permission[6][0])
                            <li class="nav-item">
                                <a class="nav-link {{$active==4?'active':''}}" id="account-pill-vlan" data-bs-toggle="pill" href="#account-vertical-vlan" aria-expanded="false">
                                    <i data-feather="info" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">VLAN</span>
                                </a>
                            </li>
                            @endif
                            @if($current_permission[9][0])
                            <li class="nav-item">
                                <a class="nav-link {{$active==5?'active':''}}" id="account-pill-onutype" data-bs-toggle="pill" href="#account-vertical-onutype" aria-expanded="false">
                                    <i data-feather="shuffle" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">ONU TYPE</span>
                                </a>
                            </li>
                            @endif
                            @if($current_permission[7][0])
                            <li class="nav-item">
                                <a class="nav-link {{$active==6?'active':''}}" id="account-pill-billing" data-bs-toggle="pill" href="#account-vertical-billing" aria-expanded="false">
                                    <i data-feather="shopping-cart" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">BILLING</span>
                                </a>
                            </li>
                            @endif
                            @if($current_permission[2][0])
                            <li class="nav-item">
                                <a class="nav-link {{$active==7?'active':''}}" id="account-pill-olt" data-bs-toggle="pill" href="#account-vertical-olt" aria-expanded="false">
                                    <i data-feather="layers" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">OLTs</span>
                                </a>
                            </li>
                            @endif
                            @if($current_permission[1][0])
                            <li class="nav-item">
                                <a class="nav-link" id="account-pill-vlan" href="/user" aria-expanded="false">
                                    <i data-feather="user" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">Users</span>
                                </a>
                            </li>
                            @endif
                        </ul>
                    </div>

                    <div class="col-md-9">
                        <div class="card">
                            <div class="card-body">
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane {{$active==0?'active':''}}" id="account-vertical-settings" aria-labelledby="account-pill-settings" aria-expanded="true">
                                        <div class="row">
                                            <div class="col-6">
                                                <form class="validate-form mt-2">
                                                    <input type="hidden" class="form-control" id="olt_id" value="{{$active_olt['id']}}"/>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label">Name</label>
                                                                <div style="padding: 10px 0px 10px 0px;"><span>{{$active_olt['name']}}</span></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label">IP Address</label>
                                                                <div style="padding: 10px 0px 10px 0px;"><span>{{$active_olt['ip']}}</span></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_telnet_port">Telnet Port</label>
                                                                <input type="number" class="form-control" id="olt_telnet_port" name="olt_telnet_port" value="{{$active_olt['telnet_port']}}" placeholder="port number"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_telnet_username">Telnet Username</label>
                                                                <input type="text" class="form-control" id="olt_telnet_username" name="olt_telnet_username" value="{{$active_olt['telnet_username']}}" placeholder="username"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_telnet_password">Telnet Password</label>
                                                                <input type="password" class="form-control" id="olt_telnet_password" name="olt_telnet_password" value="{{$active_olt['telnet_password']}}" placeholder="password" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_snmp_r">SNMP Read-Only Community</label>
                                                                <input type="text" class="form-control" id="olt_snmp_r" name="olt_snmp_r" value="{{$active_olt['snmp_r_community']}}" placeholder="Community" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_snmp_rw">SNMP Read-Write Community</label>
                                                                <input type="text" class="form-control" id="olt_snmp_rw" name="olt_snmp_rw" value="{{$active_olt['snmp_rw_community']}}" placeholder="Community" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_snmp_udp_port">SNMP UDP Port</label>
                                                                <input type="number" class="form-control" id="olt_snmp_udp_port" name="olt_snmp_udp_port" value="{{$active_olt['snmp_udp_port']}}" placeholder="port number" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_manufacturer">OLT Manufacturer</label>
                                                                <input type="text" class="form-control" id="olt_manufacturer" name="olt_manufacturer" value="{{$active_olt['manufacturer']}}" placeholder="manufacturer" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_model">Model</label>
                                                                <input type="text" class="form-control" id="olt_model" name="olt_model" value="{{$active_olt['model']}}" placeholder="model" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_version">Software Version</label>
                                                                <input type="text" class="form-control" id="olt_version" name="olt_version"  value="{{$active_olt['version']}}" placeholder="version" />
                                                            </div>
                                                        </div>
                                                        @if($current_permission[2][1])
                                                        <div class="col-12">
                                                            <button type="submit" class="btn btn-primary olt-save-submit mt-2 me-1">Save changes</button>
                                                            <button type="reset" class="btn btn-outline-secondary mt-2">Cancel</button>
                                                        </div>
                                                        @endif
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="col-6" style="text-align:center;">
                                                <div class="mt-2">
                                                    <img src="/images/olt.png" style="width:70%;"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane {{$active==1?'active':''}}" id="account-vertical-card" role="tabpanel" aria-labelledby="account-pill-card" aria-expanded="false">
                                        <table class="datatables-card table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>SLOT</th>
                                                    <th>TYPE</th>
                                                    <th>PORTS</th>
                                                    <th>STATUS</th>
                                                    <th>LAST UPDATE</th>
                                                    <th class="all">ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div class="tab-pane {{$active==2?'active':''}}" id="account-vertical-pon" role="tabpanel" aria-labelledby="account-pill-pon" aria-expanded="false">
                                        <table class="datatables-pon table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>PORT</th>
                                                    <th>ADMIN</th>
                                                    <th>STATUS</th>
                                                    <th>ONUS</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>TX POWER</th>
                                                    <th>LAST UPDATE</th>
                                                    <th class="all">ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div class="tab-pane {{$active==3?'active':''}}" id="account-vertical-uplink" role="tabpanel" aria-labelledby="account-pill-uplink" aria-expanded="false">
                                        <table class="datatables-uplink table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>PORT</th>
                                                    <th>ADMIN</th>
                                                    <th>STATUS</th>
                                                    <th>MTU</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>PVID</th>
                                                    <th>VLANS</th>
                                                    <th class="all">ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div class="tab-pane {{$active==4?'active':''}}" id="account-vertical-vlan" role="tabpanel" aria-labelledby="account-pill-vlan" aria-expanded="false">
                                        <table class="datatables-vlan table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>VLAN ID</th>
                                                    <th>DESCRIPTION</th>
                                                    <th class="all">ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div class="tab-pane {{$active==5?'active':''}}" id="account-vertical-onutype" role="tabpanel" aria-labelledby="account-pill-onutype" aria-expanded="false">
                                        <table class="datatables-onutype table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>NAME</th>
                                                    <th>CREATED AT</th>
                                                    <th class="all">ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div class="tab-pane {{$active==6?'active':''}}" id="account-vertical-billing" role="tabpanel" aria-labelledby="account-pill-billing" aria-expanded="false">
                                        <table class="datatables-billing table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>DAYS</th>
                                                    <th>CREATED AT</th>
                                                    <th>EXPIRE AT</th>
                                                    <th>STATUS</th>
                                                    <th class="all">ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div class="tab-pane {{$active==7?'active':''}}" id="account-vertical-olt" role="tabpanel" aria-labelledby="account-pill-olt" aria-expanded="false">
                                        <table class="datatables-olt table" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th class="all">NAME</th>
                                                    <th>IP</th>
                                                    <th>TELNET</th>
                                                    <th>SNMP</th>
                                                    <th>UDP PORT</th>
                                                    <th>MANUFACTURER</th>
                                                    <th>MODEL</th>
                                                    <th>VERSION</th>
                                                    <th>CREATED AT</th>
                                                    <th class="all">ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- / account setting page -->
        </div>
    </div>
</div>
<div class="modal modal-slide-in fade" id="modals-slide-card">
    <div class="modal-dialog sidebar-sm">
        <form class="add-new-record modal-content pt-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
            <div class="modal-header mb-1">
                <h5 class="modal-title" id="exampleModalLabel">Card Record</h5>
            </div>
            <input type="hidden" class="form-control" id="edit_card_id"/>
            <div class="modal-body flex-grow-1">
                <div class="mb-1">
                    <label class="form-label" for="edit_card_slot">Slot</label>
                    <input type="number" class="form-control" id="edit_card_slot" />
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_card_type">Type</label>
                    <input type="text" class="form-control" id="edit_card_type"/>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_card_port">Port</label>
                    <input type="text" class="form-control" id="edit_card_port"/>
                </div>
                <button type="button" class="btn btn-primary data-card-submit me-1">Submit</button>
                <button type="reset" class="btn btn-outline-secondary data-cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </div>
</div>
<div class="modal modal-slide-in fade" id="modals-slide-pon">
    <div class="modal-dialog sidebar-sm">
        <form class="add-new-record modal-content pt-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
            <div class="modal-header mb-1">
                <h5 class="modal-title" id="exampleModalLabel">PON Record</h5>
            </div>
            <input type="hidden" class="form-control" id="edit_pon_id"/>
            <div class="modal-body flex-grow-1">
                <div class="mb-1">
                    <label class="form-label" for="edit_pon_port">Port</label>
                    <input type="text" class="form-control" id="edit_pon_port"/>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_pon_admin">Admin</label>
                    <select class="form-select" id="edit_pon_admin">
                        <option>Enable</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_pon_status">Status</label>
                    <select class="form-select" id="edit_pon_status">
                        <option value="0">UP</option>
                        <option value="1">DOWN</option>
                    </select>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_pon_onu">Onu</label>
                    <input type="text" class="form-control" id="edit_pon_onu"/>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_pon_description">Description</label>
                    <input type="text" class="form-control" id="edit_pon_description"/>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_pon_power">Power</label>
                    <input type="text" class="form-control" id="edit_pon_power"/>
                </div>
                <button type="button" class="btn btn-primary data-pon-submit me-1">Submit</button>
                <button type="reset" class="btn btn-outline-secondary data-cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </div>
</div>
<div class="modal modal-slide-in fade" id="modals-slide-uplink">
    <div class="modal-dialog sidebar-sm">
        <form class="add-new-record modal-content pt-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
            <div class="modal-header mb-1">
                <h5 class="modal-title" id="exampleModalLabel">Uplink Record</h5>
            </div>
            <input type="hidden" class="form-control" id="edit_uplink_id"/>
            <div class="modal-body flex-grow-1">
                <div class="mb-1">
                    <label class="form-label" for="edit_uplink_port">Port</label>
                    <input type="text" class="form-control" id="edit_uplink_port"/>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_uplink_admin">Admin</label>
                    <select class="form-select" id="edit_uplink_admin">
                        <option>Enable</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_uplink_status">Status</label>
                    <select class="form-select" id="edit_uplink_status">
                        <option value="0">UP TAG FULL</option>
                        <option value="1">DOWN</option>
                    </select>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_uplink_admin">MTU</label>
                    <input type="text" class="form-control" id="edit_uplink_mtu"/>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_uplink_description">Description</label>
                    <input type="text" class="form-control" id="edit_uplink_description"/>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_uplink_pvid">PVID</label>
                    <input type="text" class="form-control" id="edit_uplink_pvid"/>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_uplink_vlan">VLAN</label>
                    <input type="text" class="form-control" id="edit_uplink_vlan"/>
                </div>
                <button type="button" class="btn btn-primary data-uplink-submit me-1">Submit</button>
                <button type="reset" class="btn btn-outline-secondary data-cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </div>
</div>
<div class="modal modal-slide-in fade" id="modals-slide-vlan">
    <div class="modal-dialog sidebar-sm">
        <form class="add-new-record modal-content pt-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
            <div class="modal-header mb-1">
                <h5 class="modal-title" id="exampleModalLabel">VLAN Record</h5>
            </div>
            <input type="hidden" class="form-control" id="edit_vlan_id"/>
            <div class="modal-body flex-grow-1">
                <div class="mb-1">
                    <label class="form-label" for="edit_vlan_vid">VLAN ID</label>
                    <input type="text" class="form-control" id="edit_vlan_vid"/>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_vlan_description">Description</label>
                    <input type="text" class="form-control" id="edit_vlan_description"/>
                </div>
                <button type="button" class="btn btn-primary data-vlan-submit me-1">Submit</button>
                <button type="reset" class="btn btn-outline-secondary data-cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </div>
</div>
<div class="modal modal-slide-in fade" id="modals-slide-olt">
    <div class="modal-dialog sidebar-sm">
        <form class="add-new-record modal-content pt-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
            <div class="modal-header mb-1">
                <h5 class="modal-title" id="exampleModalLabel">OLT Record</h5>
            </div>
            <input type="hidden" class="form-control" id="edit_olt_id" placeholder="id" aria-label="ID" />
            <div class="modal-body flex-grow-1">
                <div class="mb-1">
                    <label class="form-label" for="edit_olt_name">Name</label>
                    <input type="text" class="form-control" id="edit_olt_name" placeholder="Name" aria-label="Name" />
                </div>
                <div class="mb-1">
                    <label class="form-label" for="edit_olt_ip">IP address</label>
                    <input type="text" class="form-control" id="edit_olt_ip" placeholder="IP Address" aria-label="IP" />
                </div>
                <button type="button" class="btn btn-primary data-olt-submit me-1">Submit</button>
                <button type="reset" class="btn btn-outline-secondary data-cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </div>
</div>
<div class="modal modal-slide-in fade" id="modals-slide-onutype">
    <div class="modal-dialog sidebar-sm">
        <form class="add-new-record modal-content pt-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
            <div class="modal-header mb-1">
                <h5 class="modal-title" id="exampleModalLabel">One Type Record</h5>
            </div>
            <input type="hidden" class="form-control" id="edit_onutype_id" placeholder="id" aria-label="ID" />
            <div class="modal-body flex-grow-1">
                <div class="mb-1">
                    <label class="form-label" for="edit_onutype_name">Name</label>
                    <input type="text" class="form-control" id="edit_onutype_name" placeholder="Name" aria-label="Name" />
                </div>
                <button type="button" class="btn btn-primary data-onutype-submit me-1">Submit</button>
                <button type="reset" class="btn btn-outline-secondary data-cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </div>
</div>
<div class="modal modal-slide-in fade" id="modals-slide-billing">
    <div class="modal-dialog sidebar-sm">
        <form class="add-new-record modal-content pt-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
            <div class="modal-header mb-1">
                <h5 class="modal-title" id="exampleModalLabel">Billing Record</h5>
            </div>
            <input type="hidden" class="form-control" id="edit_billing_id" placeholder="id" aria-label="ID" />
            <div class="modal-body flex-grow-1">
                <div class="mb-1">
                    <label class="form-label" for="edit_billing_days">Days</label>
                    <input type="number" class="form-control" id="edit_billing_days"/>
                </div>
                <button type="button" class="btn btn-primary data-billing-submit me-1">Submit</button>
                <button type="reset" class="btn btn-outline-secondary data-cancel" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </div>
</div>
<!-- END: Content-->
<script type="text/javascript" src="/frontend/js/setting.js"></script>
@endsection
