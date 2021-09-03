@extends('frontend.layouts.dashboard_horizontal')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/vendors/css/charts/apexcharts.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/vendors/css/extensions/toastr.min.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/pages/dashboard-ecommerce.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/plugins/charts/chart-apex.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/plugins/extensions/ext-component-toastr.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/plugins/forms/pickers/form-flat-pickr.css">
<!-- BEGIN: Content-->
<div class="app-content content ">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper container-xxl p-0">
        <div class="content-header row">
        </div>
        <div class="content-body">
            <!-- Dashboard Ecommerce Starts -->
            <section id="dashboard-ecommerce">
                <div class="row match-height">
                    <!-- Statistics Card -->
                    <div class="col-xl-12 col-md-12 col-12">
                        <div class="card card-statistics">
                            <div class="card-header">
                                <h4 class="card-title">OLT: OLT_One Uptiome: 110d</h4>
                                <div class="d-flex align-items-center">
                                    <p class="card-text font-small-2 me-25 mb-0">Updated 1 month ago</p>
                                </div>
                            </div>
                            <div class="card-body statistics-body">
                                <div class="row">
                                    <div class="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                                        <div class="d-flex flex-row">
                                            <div class="avatar bg-light-primary me-2">
                                                <div class="avatar-content">
                                                    <img src="/images/waiting.png" class="avatar-icon" style="width: 100%;height: 100%;"/>
                                                </div>
                                            </div>
                                            <div class="my-auto">
                                                <h4 class="fw-bolder mb-0">10</h4>
                                                <p class="card-text font-small-3 mb-0">Waiting Authorization</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                                        <div class="d-flex flex-row">
                                            <div class="avatar bg-light-info me-2">
                                                <div class="avatar-content">
                                                    <img src="/images/online.png" class="avatar-icon" style="width: 100%;height: 100%;"/>
                                                </div>
                                            </div>
                                            <div class="my-auto">
                                                <h4 class="fw-bolder mb-0">1234</h4>
                                                <p class="card-text font-small-3 mb-0">Online</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                                        <div class="d-flex flex-row">
                                            <div class="avatar bg-light-danger me-2">
                                                <div class="avatar-content">
                                                    <img src="/images/offline.png" class="avatar-icon" style="width: 100%;height: 100%;"/>
                                                </div>
                                            </div>
                                            <div class="my-auto">
                                                <h4 class="fw-bolder mb-0">5</h4>
                                                <p class="card-text font-small-3 mb-0">Offline</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-6 col-12">
                                        <div class="d-flex flex-row">
                                            <div class="avatar bg-light-success me-2">
                                                <div class="avatar-content">
                                                    <img src="/images/lowsignal.png" class="avatar-icon" style="width: 100%;height: 100%;"/>
                                                </div>
                                            </div>
                                            <div class="my-auto">
                                                <h4 class="fw-bolder mb-0">-</h4>
                                                <p class="card-text font-small-3 mb-0">Low Signal</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/ Statistics Card -->
                </div>

                <div class="row">
                    <div class="col-xl-8 col-md-8 col-12">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between align-items-baseline flex-sm-row flex-column">
                                <h4 class="card-title">OLT Uplink Bandwidth usage</h4>
                                <div class="header-right d-flex align-items-center mt-sm-0 mt-1">
                                    <i data-feather="calendar"></i>
                                    <input type="text" class="form-control flat-picker border-0 shadow-none bg-transparent pe-0" placeholder="YYYY-MM-DD" />
                                </div>
                            </div>
                            <div class="card-body">
                                <canvas class="line-area-chart-ex chartjs" data-height="450" style="height:555px;"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- Goal Overview Card -->
                    <div class="col-xl-4 col-md-4 col-12">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h4 class="card-title">CPU Temperature</h4>
                                <i data-feather="help-circle" class="font-medium-3 text-muted cursor-pointer"></i>
                            </div>
                            <div class="card-body p-0">
                                <div id="goal-overview-radial-bar-chart" class="my-2"></div>
                                <div class="row border-top border-bottom text-center mx-0">
                                    <div class="col-6 border-end py-1">
                                        <p class="card-text text-muted mb-0">Best</p>
                                        <h3 class="fw-bolder mb-0">32º</h3>
                                    </div>
                                    <div class="col-6 py-1">
                                        <p class="card-text text-muted mb-0">Worst</p>
                                        <h3 class="fw-bolder mb-0">79º</h3>
                                    </div>
                                </div>
                                <div class="card card-browser-states">
                                    <div class="card-header">
                                        <div>
                                            <p class="card-text font-small-2">TOP 3 Worst Slots Temperature</p>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="browser-states">
                                            <div class="d-flex">
                                                <h6 class="align-self-center mb-0">Slot 9</h6>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div class="fw-bold text-body-heading me-1">57º</div>
                                                <div id="browser-state-chart-primary"></div>
                                            </div>
                                        </div>
                                        <div class="browser-states">
                                            <div class="d-flex">
                                                <h6 class="align-self-center mb-0">Slot 12</h6>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div class="fw-bold text-body-heading me-1">49º</div>
                                                <div id="browser-state-chart-warning"></div>
                                            </div>
                                        </div>
                                        <div class="browser-states">
                                            <div class="d-flex">
                                                <h6 class="align-self-center mb-0">Slot 1</h6>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div class="fw-bold text-body-heading me-1">45º</div>
                                                <div id="browser-state-chart-secondary"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/ Goal Overview Card -->
                </div>
            </section>
            <!-- Dashboard Ecommerce ends -->
        </div>
    </div>
</div>
<!-- END: Content-->

<!-- BEGIN: Page Vendor JS-->
<script src="/vuexy/app-assets/vendors/js/charts/chart.min.js"></script>
<script src="/vuexy/app-assets/vendors/js/charts/apexcharts.min.js"></script>
<script src="/vuexy/app-assets/vendors/js/extensions/toastr.min.js"></script>
<!-- END: Page Vendor JS-->

<script type="text/javascript" src="/frontend/js/home.js"></script>
@endsection
