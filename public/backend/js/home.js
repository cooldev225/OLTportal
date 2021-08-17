"use strict";

// Shared Colors Definition
const primary = '#6993FF';
const success = '#1BC5BD';
const info = '#8950FC';
const warning = '#FFA800';
const danger = '#F64E60';
var chart_pack,chart_boost,chart_users;
var KTApexChartsDemo = function () {
	// Private functions
	var _demo1 = function () {
		var options_pack={
			series: [{
				name: "Bought",
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148,1,1,1]
			}],
			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false
				}
			},
			dataLabels: { 	
				enabled: false
			},
			stroke: {
				curve: 'straight'
			},
			grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0.5
				},
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			},
			colors: [primary]
		};
		chart_pack = new ApexCharts(document.querySelector("#chart_1"), options_pack);
		chart_pack.render();
	}

	var _demo2 = function () {
		const apexChart = "#chart_2";
		var options = {
			series: [{
				name: 'series1',
				data: [31, 40, 28, 51, 42, 109, 100]
			}, {
				name: 'series2',
				data: [11, 32, 45, 32, 34, 52, 41]
			}],
			chart: {
				height: 350,
				type: 'area',
				zoom: {
					enabled: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'straight'
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				},
			},
			colors: [primary, success, info,warning,danger,primary, success, info,warning,danger,primary, success, info,warning,danger,primary, success, info,warning,danger,primary, success, info,warning,danger]
		};

		chart_boost = new ApexCharts(document.querySelector(apexChart), options);
		chart_boost.render();
	}

	var _demo3 = function () {
		const apexChart = "#chart_3";
		var options = {
			series: [{
				name: "Count of users",
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
			}],
			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false
				}
			},
			dataLabels: { 	
				enabled: false
			},
			stroke: {
				curve: 'straight'
			},
			grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0.5
				},
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			},
			colors: [primary]
		};

		chart_users = new ApexCharts(document.querySelector(apexChart), options);
		chart_users.render();
	}

	

	return {
		// public functions
		init: function () {
			_demo1();
			_demo2();
			_demo3();
		}
	};
}();

jQuery(document).ready(function () {
	$('#chart_pack_date').datepicker({
		rtl: KTUtil.isRTL(),
		todayHighlight: true,
		orientation: 'bottom left',
		format: "yyyy",
		viewMode: "years", 
		minViewMode: "years"
	});
	$('#chart_star_date').datepicker({
		rtl: KTUtil.isRTL(),
		todayHighlight: true,
		orientation: 'bottom left',
		format: "yyyy",
		viewMode: "years", 
		minViewMode: "years"
	});
	$('#chart_users_date').datepicker({
		rtl: KTUtil.isRTL(),
		todayHighlight: true,
		orientation: 'bottom left',
		format: "yyyy-mm",
		viewMode: "months", 
		minViewMode: "months"
	});
	KTApexChartsDemo.init();
	changePack();
	changeStar();
	changeUsers();
});
function changePack(){
	var form_data = new FormData();
    form_data.append('os',$('#chart_pack_os').val());
	form_data.append('pack',$('#chart_pack_name').val());
	form_data.append('date',$('#chart_pack_date').val());
	$.ajax({
        url: '/packs/getPackagesByYear',
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
            chart_pack.updateSeries([{
				name: "Bought",
				data: response,
			}]);
        },
        error: function (response) {

        }
    });
}
$('#chart_pack_os').on('change',function(){changePack();});
$('#chart_pack_name').on('change',function(){changePack();});
$('#chart_pack_date').on('change',function(){changePack();});
function changeStar(){
	var form_data = new FormData();
	form_data.append('star',$('#chart_star_name').val());
	form_data.append('date',$('#chart_star_date').val());
	$.ajax({
        url: '/boost/getBoostByYear',
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
			var data=new Array(response.length-1);
            for(var i=1;i<response.length;i++)data[i-1]={
				name: response[0][i-1],
				data: response[i],
			}
			chart_boost.updateSeries(data);
        },
        error: function (response) {

        }
    });
}
$('#chart_star_name').on('change',function(){changeStar();});
$('#chart_star_date').on('change',function(){changeStar();});
function changeUsers(){
	var form_data = new FormData();
	form_data.append('date',$('#chart_users_date').val());
	$.ajax({
        url: '/admin/users/getLastLoginByMonth',
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
			var data=new Array(response.length);
			for(var i=1;i<response.length;i++)data[i]=i+1;
			var options = {
				series: [{
					name: "Count of users",
					data: response
				}],
				chart: {
					height: 350,
					type: 'line',
					zoom: {
						enabled: false
					}
				},
				dataLabels: { 	
					enabled: false
				},
				stroke: {
					curve: 'straight'
				},
				grid: {
					row: {
						colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
						opacity: 0.5
					},
				},
				xaxis: {
					categories: data
				},
				colors: [primary]
			};
			chart_users.updateOptions(options);
        },
        error: function (response) {

        }
    });
}
$('#chart_users_date').on('change',function(){changeUsers();});