/* lp gps  */

var geocoderr;

function lpGetGpsLocName(lpcalback){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var clat = position.coords.latitude;
            var clong = position.coords.longitude;
            jpCodeLatLng(clat,clong, function(citynamevalue){
                lpcalback(citynamevalue);
            });
        });

    } else {
        alert("Geolocation is not supported by this browser.");
    }

}

function lpgeocodeinitialize() {
    geocoderr = new google.maps.Geocoder();
}

function jpCodeLatLng(lat, lng, lpcitycallback) {
    var geocoder, city, state, country;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat, lng);

    geocoder.geocode(
        {'latLng': latlng},
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                for (var ac = 0; ac < results[0].address_components.length; ac++) {
                    var component = results[0].address_components[ac];

                    switch(component.types[0]) {
                        case 'locality':
                            city = component.long_name;
                            break;
                        case 'administrative_area_level_1':
                            state = component.short_name;
                            break;
                        case 'country':

                            country = component.short_name;
                            break;
                    }
                };

                //lpcitycallback(state);
                //lpcitycallback(country);
                lpcitycallback(city);


            }
            else {
                console.log("Geocoder failed due to: " + status);
            }
        }
    );



}


/* test call */

jQuery(document).ready(function(){
    lpgeocodeinitialize();
});