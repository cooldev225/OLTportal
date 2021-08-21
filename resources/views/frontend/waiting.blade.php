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
                                        <th>SERIAL</th>
                                        <th>SLOT</th>
                                        <th>PON</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- Modal to add new record -->
                <div class="modal modal-slide-in fade" id="modals-slide-in">
                    <div class="modal-dialog sidebar-sm">
                        <form class="add-new-record modal-content pt-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                            <div class="modal-header mb-1">
                                <h5 class="modal-title" id="exampleModalLabel">New Record</h5>
                            </div>
                            <input type="hidden" class="form-control" id="edit_id" placeholder="id" aria-label="ID" />
                            <div class="modal-body flex-grow-1">
                                <div class="mb-1">
                                    <label class="form-label" for="edit_serial">Serial</label>
                                    <input type="text" class="form-control" id="edit_serial" placeholder="Serial" aria-label="Serial" />
                                </div>
                                <div class="mb-1">
                                    <label class="form-label" for="edit_desc">MAC</label>
                                    <input type="text" id="edit_desc" class="form-control" placeholder="Description" aria-label="Description" />
                                </div>
                                <div class="mb-1">
                                    <label class="form-label" for="edit_slot">Slot</label>
                                    <input type="number" id="edit_slot" class="form-control" placeholder="Slot" aria-label="Slot" />
                                </div>
                                <div class="mb-1">
                                    <label class="form-label" for="edit_pon">PON</label>
                                    <input type="number" class="form-control" id="edit_pon" placeholder="PON" aria-label="Pon" />
                                </div>
                                <button type="button" class="btn btn-primary data-submit me-1">Submit</button>
                                <button type="reset" class="btn btn-outline-secondary data-cancel" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <!--/ Basic table -->
        </div>
    </div>
</div>
<!-- END: Content-->

<script type="text/javascript" src="/frontend/js/waiting.js"></script>
@endsection
