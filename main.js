$(document).ready(function () {

    var x = document.getElementById("localarea");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + " & zoom = 14 & size = 400 x300 & sensor = false & key = YOUR_: KEY ";
        document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
    }
});




//css width scales with number of elements
//data structure



document.getElementById("wrap").addEventListener("mouseover", function () {

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
}


var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}
