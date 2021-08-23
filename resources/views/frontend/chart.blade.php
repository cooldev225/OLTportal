@extends('frontend.layouts.dashboard_horizontal')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/vendors/css/charts/apexcharts.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/vendors/css/extensions/toastr.min.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/pages/dashboard-ecommerce.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/plugins/charts/chart-apex.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/plugins/extensions/ext-component-toastr.css">
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css">
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
            <section id="dashboard-ecommerce" style="max-width: 1024px;margin: auto;">
                <div class="row match-height">
                    <!-- Statistics Card -->
                    <div class="col-xl-12 col-md-12 col-12">
                        <div class="d-flex flex-row" style="padding:0px 0px 20px 10px;">
                            <div style="padding-top: 10px;" class="me-2">
                                <i data-feather='bar-chart-2'></i>
                                <span class="text-primary">Charts For</span>
                            </div>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <input type="radio" class="btn-check" name="btn_charts" id="btn_uplink" autocomplete="off" checked/>
                                <label class="btn btn-outline-primary" for="btn_uplink">Uplink</label>

                                <input type="radio" class="btn-check" name="btn_charts" id="btn_pon" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btn_pon">Pon</label>

                                <input type="radio" class="btn-check" name="btn_charts" id="btn_traffic" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btn_traffic">Traffic</label>

                                <input type="radio" class="btn-check" name="btn_charts" id="btn_signal" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btn_signal">Signal</label>
                            </div>
                        </div>
                    </div>
                    <!--/ Statistics Card -->
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card card-charts chart-uplink">
                            <div class="card-header d-flex justify-content-between align-items-baseline flex-sm-row flex-column">
                                <h4 class="card-title">OLT Uplink Bandwidth usage</h4>
                                <div class="header-right d-flex align-items-center mt-sm-0 mt-1">
                                    <label class="form-label me-1" style="font-size:17px;" for="sel_interface">Interface</label>
                                    <select class="form-select form-select-lg" id="sel_interface">
                                        <option selected>XFP1</option>
                                        <option>XFP2</option>
                                        <option>XFP3</option>
                                    </select>
                                </div>
                                <div class="header-right d-flex align-items-center mt-sm-0 mt-1">
                                    <i data-feather="calendar"></i>
                                    <input type="text" class="form-control flat-picker-uplink border-0 shadow-none bg-transparent pe-0" placeholder="YYYY-MM-DD" />
                                </div>
                            </div>
                            <div class="card-body">
                                <canvas class="line-area-chart-ex-uplink chartjs" data-height="450" style="height:555px;"></canvas>
                            </div>
                        </div>
                        <div class="card card-charts chart-pon">
                            <div class="card-header d-flex justify-content-between align-items-baseline flex-sm-row flex-column">
                                <h4 class="card-title">OLT PON Bandwidth usage</h4>
                                <div class="header-right d-flex align-items-center mt-sm-0 mt-1">
                                    <label class="form-label me-1" style="font-size:17px;" for="sel_interface">Slot</label>
                                    <select class="form-select form-select-lg" id="sel_interface">
                                        @for($i=1;$i<4;$i++)
                                        <option>{{$i}}</option>
                                        @endfor
                                    </select>
                                </div>
                                <div class="header-right d-flex align-items-center mt-sm-0 mt-1">
                                    <label class="form-label me-1" style="font-size:17px;" for="sel_interface">PON</label>
                                    <select class="form-select form-select-lg" id="sel_interface">
                                        @for($i=1;$i<31;$i++)
                                        <option>{{$i}}</option>
                                        @endfor
                                    </select>
                                </div>
                                <div class="header-right d-flex align-items-center mt-sm-0 mt-1">
                                    <i data-feather="calendar"></i>
                                    <input type="text" class="form-control flat-picker-pon border-0 shadow-none bg-transparent pe-0" placeholder="YYYY-MM-DD" />
                                </div>
                            </div>
                            <div class="card-body">
                                <canvas class="line-area-chart-ex-pon chartjs" data-height="450" style="height:555px;"></canvas>
                            </div>
                        </div>
                        <div class="card card-charts chart-traffic">
                            <div class="card-header d-flex justify-content-between align-items-baseline flex-sm-row flex-column">
                                <h4 class="card-title">OLT Traffic</h4>
                                <div class="header-right d-flex align-items-center mt-sm-0 mt-1">
                                    <i data-feather="calendar"></i>
                                    <input type="text" class="form-control flat-picker-traffic border-0 shadow-none bg-transparent pe-0" placeholder="YYYY-MM-DD" />
                                </div>
                            </div>
                            <div class="card-body">
                                <canvas class="line-area-chart-ex-traffic chartjs" data-height="450" style="height:555px;"></canvas>
                            </div>
                        </div>
                        <div class="card card-charts chart-signal">
                            <div class="card-header d-flex justify-content-between align-items-baseline flex-sm-row flex-column">
                                <h4 class="card-title">OLT Signal</h4>
                                <div class="header-right d-flex align-items-center mt-sm-0 mt-1">
                                    <i data-feather="calendar"></i>
                                    <input type="text" class="form-control flat-picker-signal border-0 shadow-none bg-transparent pe-0" placeholder="YYYY-MM-DD" />
                                </div>
                            </div>
                            <div class="card-body">
                                <canvas class="line-area-chart-ex-signal chartjs" data-height="450" style="height:555px;"></canvas>
                            </div>
                        </div>
                    </div>
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
<script src="/vuexy/app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js"></script>
<script src="/vuexy/app-assets/vendors/js/extensions/toastr.min.js"></script>
<!-- END: Page Vendor JS-->

<script type="text/javascript" src="/frontend/js/chart.js"></script>
@endsection
