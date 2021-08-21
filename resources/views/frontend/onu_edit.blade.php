@extends('frontend.layouts.dashboard_horizontal')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/pages/page-profile.css">
<!-- BEGIN: Content-->
<div class="app-content content onu-edit">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper container-xxl p-0">
        <div id="user-profile">
            <div class="row">
                <div class="col-12">
                    <div class="card profile-header mb-2">
                        <!-- profile cover photo -->
                        <img class="card-img-top" src="/images/onu_bg.png" alt="User Profile Image" />
                        <!--/ profile cover photo -->
                        <div class="position-relative">
                            <!-- profile picture -->
                            <div class="profile-img-container d-flex align-items-center">
                                <div class="profile-img" style="border-radius: 50%!important;">
                                    <img src="/images/onu.png" class="rounded img-fluid" alt="Card image" style="border-radius: 50%!important;"/>
                                </div>
                                <!-- profile title -->
                                <div class="profile-title ms-3">
                                    <h2 class="text-white">{{$onu->name}}</h2>
                                    <p class="text-white">Mode: Router</p>
                                </div>
                            </div>
                        </div>

                        <!-- tabs pill -->
                        <div class="profile-header-nav">
                            <!-- navbar -->
                            <nav class="navbar navbar-expand-md navbar-light justify-content-end justify-content-md-between w-100">
                                <button class="btn btn-icon navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i data-feather="align-justify" class="font-medium-5"></i>
                                </button>

                                <!-- collapse  -->
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div class="profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0">
                                        <button type="button" class="btn btn-flat-{{$onu->status==0?'success':($onu->status==1?'danger':($onu->status==2?'primary':($onu->status==3?'warning':'secondary')))}} active">
                                            <span>{{$onu->status==0?'Online':($onu->status==1?'Offline':($onu->status==2?'LoS':($onu->status==3?'Disabled':'None')))}}</span>
                                        </button>
                                        <!-- edit button -->
                                        <div class="navbar-container main-menu-content" data-menu="menu-container">
                                        <ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
                                            <li class="dropdown nav-item active" data-menu="dropdown">
                                                <a class="dropdown-toggle nav-link d-flex align-items-center" href="javascript:;" data-bs-toggle="dropdown">
                                                    <i data-feather="settings"></i><span class="ms-1">OLT_One</span></a>
                                                <ul class="dropdown-menu" data-bs-popper="none" style="min-width: 138px;">
                                                    <li data-menu="">
                                                        <a class="dropdown-item d-flex align-items-center" href="javascript:;" data-bs-toggle=""><i data-feather="activity"></i><span>OLT_One</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                                <!--/ collapse  -->
                            </nav>
                            <!--/ navbar -->
                        </div>
                        <section id="">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card" style="padding:20px;">
                                        <table class="table" >
                                            <tr>
                                                <td style="text-align:center;">
                                                    <span class="font-small-1">ONU/OLT Rx signal</span>
                                                    <div style="margin-top:5px;">
                                                        <a href="javascript:;">
                                                            <span>{{$onu->signal1}}dbBm/{{$onu->signal2}}dbBm</span>
                                                        </a>
                                                        <i data-feather="file-text"></i>
                                                    </div>
                                                </td>
                                                <td style="text-align:center;">
                                                    <span>VLAN</span>
                                                    <div style="margin-top:5px;">
                                                        <a href="javascript:;">
                                                            <span>{{$onu->vlan}}</span>
                                                        </a>
                                                        <i data-feather="settings"></i>
                                                    </div>
                                                </td>
                                                <td style="text-align:center;">
                                                    <span>PPPoE/Password</span>
                                                    <div style="margin-top:5px;">
                                                        <a href="javascript:;">
                                                            <span>{{$onu->ppp1}} / {{$onu->ppp2}}</span>
                                                        </a>
                                                        <i data-feather="settings"></i>
                                                    </div>
                                                </td>
                                                <td style="text-align:center;">
                                                    <span>ONU Type</span>
                                                    <div style="margin-top:5px;">
                                                        <a href="javascript:;">
                                                            <span>{{$onu->type}}</span>
                                                        </a>
                                                        <i data-feather="settings"></i>
                                                    </div>
                                                </td>
                                                <td style="text-align:center;">
                                                    <span>Authorization date</span>
                                                    <div style="margin-top:5px;">
                                                        <a href="javascript:;">
                                                            <span>{{$slot->created_at}}</span>
                                                        </a>
                                                        <i data-feather="file-text"></i>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="card">
                        <div class="d-flex flex-row" style="padding:30px 20px;">
                            <div class="my-auto" style="width:100%;">
                                <h4 class="fw-bolder mb-0">{{$slot->serial}}</h4>
                                <p class="card-text font-small-1 mb-0">Serial</p>
                            </div>
                            <div class="avatar bg-light-primary">
                                <button type="button" class="btn btn-icon btn-icon rounded-circle btn-flat-primary active">
                                    <i data-feather="cpu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <div class="d-flex flex-row" style="padding:30px 20px;">
                            <div class="my-auto" style="width:100%;">
                                <h4 class="fw-bolder mb-0">{{$slot->slot}}</h4>
                                <p class="card-text font-small-1 mb-0">Slot</p>
                            </div>
                            <div class="avatar bg-light-primary">
                                <button type="button" class="btn btn-icon btn-icon rounded-circle btn-flat-success active">
                                    <i data-feather='server'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <div class="d-flex flex-row" style="padding:30px 20px;">
                            <div class="my-auto" style="width:100%;">
                                <h4 class="fw-bolder mb-0">{{$slot->pon}}</h4>
                                <p class="card-text font-small-1 mb-0">PON</p>
                            </div>
                            <div class="avatar bg-light-primary">
                                <button type="button" class="btn btn-icon btn-icon rounded-circle btn-flat-danger active">
                                    <i data-feather="disc"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <div class="d-flex flex-row" style="padding:30px 20px;">
                            <div class="my-auto" style="width:100%;">
                                <h4 class="fw-bolder mb-0">{{$onu->onu}}</h4>
                                <p class="card-text font-small-1 mb-0">ONU ID</p>
                            </div>
                            <div class="avatar bg-light-primary">
                                <button type="button" class="btn btn-icon btn-icon rounded-circle btn-flat-warning active">
                                    <i data-feather='align-left'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END: Content-->

<script type="text/javascript" src="/frontend/js/onu_edit.js"></script>
@endsection
