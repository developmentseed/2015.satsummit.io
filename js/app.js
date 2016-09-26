
$(window).scroll(function() {
    if ($(".navbar").offset().top > 300) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// map
L.mapbox.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q';
var map = L.mapbox.map('map', 'mslee.927e8fd9').setView([38.8956264,-77.0216026], 13);
map.scrollWheelZoom.disable();

L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [
          -77.0216026,
          38.8956264
        ]
    },
    properties: {
        title: 'District Architecture Center',
        description: '421 7th St NW, Washington, DC 20004',
        'marker-size': 'large',
        'marker-color': '#ffffff',
        'marker-symbol': 'town-hall'
    }
}).addTo(map);
