$(document).ready(function () {

});




// make css width scales with number of elements
// make data structure



/*document.getElementById("wrap").addEventListener("mouseover", function () {
    mousemoveWrap(true);
});
document.getElementById("wrap").addEventListener("mouseout", function () {
    mousemoveWrap(false);
});



function mousemoveWrap(isOnDiv) {
    if (isOnDiv === true) {
        console.log(isOnDiv);
        var docWidth = $('body').width(),
            $wrap = $('#wrap'),
            $images = $('#wrap'),
            slidesWidth = $wrap.width();

        $(window).on('resize', function () {
            docWidth = $('body').width();
            slidesWidth = $wrap.width();
        });

        $("#wrap").mousemove(function (e) {
            var mouseX = e.pageX,
                offset = mouseX / docWidth * slidesWidth - mouseX / 2;

            $images.css({
                '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
                'transform': 'translate3d(' + -offset + 'px,0,0)'
            });
        });
    } else {
        console.log(isOnDiv);
    }
}*/


// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -30.397,
            lng: 150.644
        },
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
