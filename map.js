var map;
var grupo;
var pontos;
var markers;
$(document).ready(function () {
    
    map = new L.Map("myMap", { center: [36.2048, 138.2529], zoom: 5 }); // Coordenadas para centralizar o mapa no Japão
    var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    var osmAttrib = "Map data OpenStreetMap contributors";
    var osm = new L.TileLayer(osmUrl, { attribution: osmAttrib });
    map.addLayer(osm);

    pontos = [
        { coords: [35.082395, 137.156249], label: "Toyota&emsp;&emsp;&emsp;&emsp;&emsp;", image: "images/emblema_toyota.jpg"},
        { coords: [36.497963, 140.191585], label: "Nissan&emsp;&emsp;&emsp;&emsp;&emsp;", image: "images/emblema_nissan.jpeg" },
        { coords: [35.5471, 140.2142], label: "Honda&emsp;&emsp;&emsp;&emsp;&emsp;", image: "images/emblema_honda.png" },
        { coords: [34.378571, 132.504018], label: "Mazda&emsp;&emsp;&emsp;&emsp;&emsp;", image: "images/emblema_mazda.png" },
    ];

    markers = [];
    pontos.forEach(function (ponto) {
        var marker = L.marker(ponto.coords).bindPopup(ponto.label + "<br>  <img src='"+ponto.image+"' style='max-width:100px;max-height:80px;width: auto;height: auto;'>");
        marker.addTo(map);

        marker.on('click', function () {
            map.panTo(marker.getLatLng());
        });

        markers.push(marker);
    });

    grupo = new L.featureGroup(markers);

    map.fitBounds(grupo.getBounds());
    $('#myMap').hide();
    // Adiciona um botão de recentrar ao mapa
    L.Control.Recentrar = L.Control.extend({
        options: {
            position: 'topright'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control-recentrar');
            container.innerHTML = '<button onclick="recentrarMapa()">Recentrar</button>';
            return container;
        }
    });

    L.control.recentrar = function (opts) {
        return new L.Control.Recentrar(opts);
    }

    L.control.recentrar({ position: 'topright' }).addTo(map);


    $('#scroller a').on('shown.bs.tab', function (e) {
        if (e.target.hash === "#menu2") {
            $('#myMap').show();
        } else {
            $('#myMap').hide();
        }
    });

});

// Função para recentrar o mapa
function recentrarMapa() {
    map.fitBounds(grupo.getBounds());
}
function clickMap(index) {
    if (index >= 0 && index < pontos.length) {
        var ponto = pontos[index];

        // Find the marker associated with the point
        var clickedMarker;
        markers.forEach(function (marker) {
            if (marker.getLatLng().equals(L.latLng(ponto.coords))) {
                clickedMarker = marker;
            }
        });

        if (clickedMarker) {
            // Open the popup
            clickedMarker.openPopup();

            // Recentre the map to the clicked marker's position
            map.panTo(clickedMarker.getLatLng());
        }
    }
}