@extends('frontend.layouts.dashboard_horizontal')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<!-- BEGIN: Content-->
<div class="app-content content ">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper container-xxl p-0">
        <div class="content-body">
             <!-- Basic table -->
            <section id="basic-datatable">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <table class="datatables-basic table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>STATUS</th>
                                        <th>SN/MAC</th>
                                        <th>NAME</th>
                                        <th>SLOT/PON:ONU</th>
                                        <th>TYPE</th>
                                        <th>SIGNAL</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <!--/ Basic table -->
        </div>
    </div>
</div>
<!-- END: Content-->

<script type="text/javascript" src="/frontend/js/onu.js"></script>
@endsection
