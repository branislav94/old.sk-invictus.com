var myCenter = new google.maps.LatLng(44.8119702, 20.5223020);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControl: false,
        streetViewControl: false,
        scrollwheel: false,
        styles: [
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                { "color": "#bf1c22" },
                { "lightness": 25 }
            ]},
          {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
              { "color": "#bf1c22" },
              { "lightness": 45 }
            ]},
          {
            "featureType": "landscape.natural",
            "elementType": "geometry.stroke",
            "stylers": [
              { "color": "#bf1c22" }, 
              { "lightness": 65 }
            ]}
        ]
        };

//                    stylers:[ {
//                        gamma: 0.90
//                    }
//                    ,
//                    {
//                        hue: "#00ffe6"
//                    }
//                    ,
//                    {
//                        invert_lightness: false
//                    }
//                    ,
//                    {
//                        lightness: 2
//                    }
//                    ,
//                    {
//                        saturation: -150
//                    }
//                    ,
//                    {
//                        visibility: "on"
//                    }
//                    ]
//
//            }
//            ;



        var map = new google.maps.Map(document.getElementById("map-canvas"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            icon: 'http://emendistudio.com/invictus/img/invictus-map-marker.png'
        });
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
            content: '<p><img class="google-map-logo" src="http://emendistudio.com/invictus/img/invictus-contact-logo.png" /><br /><strong>Invictus Sportski klub</strong><br>Mirijevski bulevar 5a/b, <br /> 11060 Beograd<br /></p>'
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
    google.maps.event.addDomListener(window, 'resize', initialize);