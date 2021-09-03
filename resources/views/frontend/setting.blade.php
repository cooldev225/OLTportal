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
                            <li class="nav-item">
                                <a class="nav-link {{$active==1?'active':''}}" id="account-pill-card" data-bs-toggle="pill" href="#account-vertical-card" aria-expanded="false">
                                    <i data-feather="credit-card" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">Cards</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{$active==2?'active':''}}" id="account-pill-pon" data-bs-toggle="pill" href="#account-vertical-pon" aria-expanded="false">
                                    <i data-feather="disc" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">PON</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{$active==3?'active':''}}" id="account-pill-uplink" data-bs-toggle="pill" href="#account-vertical-uplink" aria-expanded="false">
                                    <i data-feather="share-2" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">Uplink</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{$active==4?'active':''}}" id="account-pill-vlan" data-bs-toggle="pill" href="#account-vertical-vlan" aria-expanded="false">
                                    <i data-feather="info" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">VLAN</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{$active==4?'active':''}}" id="account-pill-vlan" data-bs-toggle="pill" href="#account-vertical-vlan" aria-expanded="false">
                                    <i data-feather="info" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">ONU TYPE</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{$active==4?'active':''}}" id="account-pill-vlan" data-bs-toggle="pill" href="#account-vertical-vlan" aria-expanded="false">
                                    <i data-feather="info" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">BILLING</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{$active==4?'active':''}}" id="account-pill-vlan" data-bs-toggle="pill" href="#account-vertical-vlan" aria-expanded="false">
                                    <i data-feather="info" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">OLTs</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="account-pill-vlan" href="/user" aria-expanded="false">
                                    <i data-feather="user" class="font-medium-3 me-1"></i>
                                    <span class="fw-bold">Users</span>
                                </a>
                            </li>
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
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label">Name</label>
                                                                <div style="padding: 10px 0px 10px 0px;"><span>OLT_One</span></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label">IP Address</label>
                                                                <div style="padding: 10px 0px 10px 0px;"><span>85.192.132.25</span></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_telnet_port">Telnet Port</label>
                                                                <input type="number" class="form-control" id="olt_telnet_port" name="olt_telnet_port" value="8721" placeholder="port number"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_telnet_username">Telnet Username</label>
                                                                <input type="text" class="form-control" id="olt_telnet_username" name="olt_telnet_username" value="admin" placeholder="username"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_telnet_password">Telnet Password</label>
                                                                <input type="password" class="form-control" id="olt_telnet_password" name="olt_telnet_password" value="123456" placeholder="password" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_snmp_r">SNMP Read-Only Community</label>
                                                                <input type="text" class="form-control" id="olt_snmp_r" name="olt_snmp_r" value="" placeholder="Community" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_snmp_rw">SNMP Read-Write Community</label>
                                                                <input type="text" class="form-control" id="olt_snmp_rw" name="olt_snmp_rw" value="" placeholder="Community" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_snmp_udp_port">SNMP UDP Port</label>
                                                                <input type="number" class="form-control" id="olt_snmp_udp_port" name="olt_snmp_udp_port" placeholder="port number" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_manufacturer">OLT Manufacturer</label>
                                                                <input type="text" class="form-control" id="olt_manufacturer" name="olt_manufacturer" value="" placeholder="manufacturer" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_model">Model</label>
                                                                <input type="text" class="form-control" id="olt_model" name="olt_model" value="" placeholder="model" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-1">
                                                                <label class="form-label" for="olt_version">Software Version</label>
                                                                <input type="text" class="form-control" id="olt_version" name="olt_version"  value="" placeholder="version" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <button type="submit" class="btn btn-primary mt-2 me-1">Save changes</button>
                                                            <button type="reset" class="btn btn-outline-secondary mt-2">Cancel</button>
                                                        </div>
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
                                                    <th>ACTION</th>
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
                                                    <th>ACTION</th>
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
                                                    <th>ACTION</th>
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
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div class="tab-pane {{$active==5?'active':''}}" id="account-vertical-onutype" role="tabpanel" aria-labelledby="account-pill-vlan" aria-expanded="false">
                                        <table class="datatables-vlan table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>VLAN ID</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div class="tab-pane {{$active==6?'active':''}}" id="account-vertical-billing" role="tabpanel" aria-labelledby="account-pill-vlan" aria-expanded="false">
                                        <table class="datatables-vlan table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>VLAN ID</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div class="tab-pane {{$active==7?'active':''}}" id="account-vertical-olt" role="tabpanel" aria-labelledby="account-pill-vlan" aria-expanded="false">
                                        <table class="datatables-vlan table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>VLAN ID</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>ACTION</th>
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
<!-- END: Content-->
<script type="text/javascript" src="/frontend/js/setting.js"></script>
@endsection
