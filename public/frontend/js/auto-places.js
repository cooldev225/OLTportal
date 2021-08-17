function lpinitMapPlaces() {
    var myElem = document.getElementById('lp_listing_map');
    if (myElem === null) {} else {
        var map = new google.maps.Map(document.getElementById('lp_listing_map'), {
            center: {
                lat: -33.8688,
                lng: 151.2195
            },
            zoom: 13
        });
        var input = document.getElementById('lptitleGoogle');
        var autocomplete = new google.maps.places.Autocomplete(input);
        var service = new google.maps.places.PlacesService(map);
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                window.alert("No details available for input: '" + place.name + "'");
                return
            }
            place_id = place.place_id;
            service.getDetails({
                placeId: place_id
            }, function(place, status) {
				jQuery('input[name="postTitle"]').val(place.name);
				
				/* console.log(place.geometry.location.lat());
				console.log(place.geometry.location.lng()); */
				/* console.log(place.name);
                console.log(place); */
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location
                    });
                    if (!place.formatted_phone_number) {} else {
                        jQuery('input[name=phone]').val(place.formatted_phone_number)
                    }
                    var arrAddress = place.address_components;
                    var arrayLength = arrAddress.length;
                    if (arrAddress[1]) {
                        for (var i = 0; i < arrayLength; i++) {
                            if (arrAddress[i].types[0] === "locality") {
                                var city = arrAddress[i].short_name;
                                jQuery('input[name=locationn]').val(city);
                                jQuery('input[name=location]').val(city);
								jQuery('input[name=locationn]').data('isseleted', true);
                            }
                        }
                    }
                    if (!place.formatted_address) {} else {
                        jQuery('input[name=gAddress]').val(place.formatted_address);
                        jQuery('input[name=latitude]').val(place.geometry.location.lat());
                        jQuery('input[name=longitude]').val(place.geometry.location.lng());
						
                    }
                    if (!place.website) {} else {
                        jQuery('input[name=website]').val(place.website)
                    }
                    if (!place.types) {} else {
                        for (var i = 0, len = place.types.length; i < len; i++) {
                            var option = document.createElement("option");
                            if (place.types[i] == "point_of_interest") {} else if (place.types[i] == "establishment") {} else {
                                option.text = place.types[i];
                                option.value = place.types[i];
                                var attSelected = document.createAttribute("selected");
                                attSelected.value = "selected";
                                option.setAttributeNode(attSelected);
                                var select = document.getElementById("inputCategory");
                                select.appendChild(option)
                            }
                        }
                    }
                    if (!place.photos) {} else {
                        for (var i = 0, len = place.photos.length; i < len; i++) {
                            var imgURL = place.photos[i].getUrl({
                                'maxWidth': 500,
                                'maxHeight': 500
                            });
                            var output = document.getElementById("filediv");
                            var div = document.createElement("ul");
                            div.className = 'jFiler-items-list jFiler-items-grid grid' + i;
                            div.innerHTML = '<li class="jFiler-item">\
												<div class="jFiler-item-container">\
													<div class="jFiler-item-inner">\
														<div class="jFiler-item-thumb">\
															 <img  class="thumbnail" src="' + imgURL + '" title="' + place.name + '"/>\
														</div>\
													</div>\
												</div><a class="icon-jfi-trash jFiler-item-trash-action"><i class="fa fa-trash"></i></a>\
											</li>';
                            //output.insertBefore(div, null)
                        }
                    }
                }
            })
        })
    }
}
lpinitMapPlaces()