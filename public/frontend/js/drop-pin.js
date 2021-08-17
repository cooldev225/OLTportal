    var map;
    function lp_initialize_map() {
		if(jQuery('#lp-custom-latlong').length !=0 ){
			var clat;
			var clong;
			var myLatlng;
			
			clat = jQuery('body').data('defaultmaplat');
			clong = jQuery('body').data('defaultmaplot');
			if (jQuery("#latitude").length){
				if(document.getElementById("latitude").value!=''){
					clat = document.getElementById("latitude").value;
				}
			}
			if (jQuery("#longitude").length){
				if(document.getElementById("longitude").value!=''){
					clong = document.getElementById("longitude").value;
				}
			}

			if(clat && clong){
				myLatlng = new google.maps.LatLng(clat, clong);
			}
			else{
				myLatlng = new google.maps.LatLng(40.713956, -74.006653);
			}
			
			var myOptions = {
				zoom: 8,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			map = new google.maps.Map(document.getElementById("lp-custom-latlong"), myOptions);
			var marker = new google.maps.Marker({
				draggable: true,
				position: myLatlng,
				map: map,
				title: ""
			});
			google.maps.event.addListener(marker, 'dragend', function (event) {
				document.getElementById("latitude").value = event.latLng.lat();
				document.getElementById("longitude").value = event.latLng.lng();
			});
			
			// Create the DIV to hold the control and call the CenterControl()
			// constructor passing in this DIV.
			var centerControlDiv = document.createElement('div');
			var centerControl = new CenterControl(centerControlDiv, map, marker);

			centerControlDiv.index = 1;
			map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);
		}
    }
	google.maps.event.addDomListener(window, "load", lp_initialize_map());
	
	jQuery('#modal-doppin').on('shown.bs.modal', function () 
	{
		//google.maps.event.trigger(map, "resize");
		google.maps.event.addDomListener(window, "load", lp_initialize_map());
	});
	
	/* trigger click for custom lat and long toggle on submit page */
	jQuery(document).ready(function($){
		jQuery(".lp-coordinates a.googledroppin").on('click', function(){
			jQuery(".lp-coordinates a.googleAddressbtn").trigger('click');
		});
	})
	
	function CenterControl(controlDiv, map, marker) {
		
		var btitle = jQuery('#modal-doppin').data('lploctitlemap');

		// Set CSS for the control border.
		var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = '#fff';
		controlUI.style.border = '2px solid #fff';
		controlUI.style.borderRadius = '3px';
		controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
		controlUI.style.cursor = 'pointer';
		controlUI.style.marginBottom = '22px';
		controlUI.style.textAlign = 'center';
		controlUI.title = btitle;
		controlDiv.appendChild(controlUI);

		// Set CSS for the control interior.
		var controlText = document.createElement('div');
		controlText.style.color = 'rgb(25,25,25)';
		controlText.style.fontSize = '13px';
		controlText.style.lineHeight = '20px';
		controlText.style.paddingLeft = '5px';
		controlText.style.paddingRight = '5px';
		controlText.innerHTML = btitle;
		controlUI.appendChild(controlText);

		// Setup the click event listeners: simply set the map to Chicago.
		controlUI.addEventListener('click', function() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function (position) {
					var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					
					map.setCenter(pos);
					marker.setPosition(pos);
					document.getElementById("latitude").value = position.coords.latitude;
					document.getElementById("longitude").value = position.coords.longitude;
				})
			}
			
		});

	}

	