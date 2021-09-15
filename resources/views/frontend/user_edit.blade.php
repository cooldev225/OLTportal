@extends('frontend.layouts.dashboard_horizontal')
@inject('dateFormat', 'App\Services\DateService')
@section('content')
<link rel="stylesheet" type="text/css" href="/vuexy/app-assets/css/pages/page-profile.css">
<!-- BEGIN: Content-->
<div class="app-content content onu-edit">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper container-xxl p-0">
        <div class="content-header row">
        </div>
        <div class="content-body">
            <!-- users edit start -->
            <section class="app-user-edit">
                <div class="card">
                    <div class="card-body">
                        <div class="tab-content">
                            <!-- Account Tab starts -->
                            <div class="tab-pane active" id="account" aria-labelledby="account-tab" role="tabpanel">
                                <!-- users edit start -->
                                <div class="d-flex mb-2">
                                    <img src="{{$user['avatar']==null||$user['avatar']==''?'/images/default-avatar.png':'/v1/api/downloadFile?path='.$user['avatar']}}" alt="users avatar" class="user-avatar users-avatar-shadow rounded me-2 my-25 cursor-pointer" height="90" width="90" >
                                    <div class="mt-50">
                                        <h4>{{$user->firstName}}</h4>
                                        <div class="col-12 d-flex mt-1 px-0">
                                            <label class="btn btn-outline-primary me-75 mb-0" for="change-picture">
                                                <span class="d-none d-sm-block">Change</span>
                                                <input class="form-control" type="file" id="change-picture" hidden accept="image/png, image/jpeg, image/jpg" />
                                                <span class="d-block d-sm-none">
                                                    <i class="me-0" data-feather="edit"></i>
                                                </span>
                                            </label>
                                            <button class="btn btn-outline-secondary d-block d-sm-none">
                                                <i class="me-0" data-feather="trash-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- users edit ends -->
                                <!-- users edit account form start -->
                                <form class="form-validate">
                                    <input type="hidden" class="form-control" id="userid" value="{{$user->id}}"/>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="mb-1">
                                                <label class="form-label" for="username">Username</label>
                                                <input type="text" class="form-control" placeholder="Username" disabled value="{{$user->username}}" name="username" id="username" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-1">
                                                <label class="form-label" for="name">Name</label>
                                                <input type="text" class="form-control" placeholder="Name" value="{{$user->firstName}}" name="name" id="name" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-1">
                                                <label class="form-label" for="email">E-mail</label>
                                                <input type="email" class="form-control" placeholder="Email" value="{{$user->email}}" name="email" id="email" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-1">
                                                <label class="form-label" for="status">Status</label>
                                                <select class="form-select" id="status">
                                                    <option value="1" {{$user->validate==1?'selected':''}}>Activated</option>
                                                    <option value="0" {{$user->validate==0?'selected':''}}>Pending</option>
                                                    <option value="2" {{$user->validate==2?'selected':''}}>Deactivated</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-1">
                                                <label class="form-label" for="role">Role</label>
                                                <select class="form-select" id="role">
                                                    <option value="0" {{$user->is_admin==0?'selected':''}}>Subscriber</option>
                                                    <option value="1" {{$user->is_admin==1?'selected':''}}>Maintainer</option>
                                                    <option value="2" {{$user->is_admin==2?'selected':''}}>Administrator</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-1">
                                                <label class="form-label" for="company">Company</label>
                                                <input type="text" class="form-control" value="" placeholder="Company name" id="company" />
                                            </div>
                                        </div>
                                        <!--
                                        <div class="col-12">
                                            <div class="table-responsive border rounded mt-1">
                                                <h6 class="py-1 mx-1 mb-0 font-medium-2">
                                                    <i data-feather="lock" class="font-medium-3 me-25"></i>
                                                    <span class="align-middle">Permission</span>
                                                </h6>
                                                <table class="table table-striped table-borderless">
                                                    <thead class="table-light">
                                                        <tr>
                                                            <th>Module</th>
                                                            <th>Read</th>
                                                            <th>Write</th>
                                                            <th>Create</th>
                                                            <th>Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>OLT Configuration</td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="admin-read" checked />
                                                                    <label class="form-check-label" for="admin-read"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="admin-write" />
                                                                    <label class="form-check-label" for="admin-write"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="admin-create" />
                                                                    <label class="form-check-label" for="admin-create"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="admin-delete" />
                                                                    <label class="form-check-label" for="admin-delete"></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>PON Configuration</td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="staff-read" />
                                                                    <label class="form-check-label" for="staff-read"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="staff-write" checked />
                                                                    <label class="form-check-label" for="staff-write"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="staff-create" />
                                                                    <label class="form-check-label" for="staff-create"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="staff-delete" />
                                                                    <label class="form-check-label" for="staff-delete"></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Uplink Configuration</td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="author-read" checked />
                                                                    <label class="form-check-label" for="author-read"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="author-write" />
                                                                    <label class="form-check-label" for="author-write"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="author-create" checked />
                                                                    <label class="form-check-label" for="author-create"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="author-delete" />
                                                                    <label class="form-check-label" for="author-delete"></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>VLAN Configuration</td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="contributor-read" />
                                                                    <label class="form-check-label" for="contributor-read"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="contributor-write" />
                                                                    <label class="form-check-label" for="contributor-write"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="contributor-create" />
                                                                    <label class="form-check-label" for="contributor-create"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-check">
                                                                    <input type="checkbox" class="form-check-input" id="contributor-delete" />
                                                                    <label class="form-check-label" for="contributor-delete"></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>-->
                                        <div class="col-12 d-flex flex-sm-row flex-column mt-2">
                                            <button type="button" class="btn btn-primary btn-submit mb-1 mb-sm-0 me-0 me-sm-1">Save Changes</button>
                                            <button type="reset" class="btn btn-outline-secondary">Reset</button>
                                        </div>
                                    </div>
                                </form>
                                <!-- users edit account form ends -->
                            </div>
                            <!-- Account Tab ends -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- users edit ends -->
        </div>
    </div>
</div>
<!-- END: Content-->

<script type="text/javascript" src="/frontend/js/user_edit.js"></script>
@endsection
