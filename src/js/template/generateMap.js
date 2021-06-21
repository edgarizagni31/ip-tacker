import {
  icon,
  map,
  marker,
  tileLayer,
} from 'leaflet';

function generateMap(lat, lng) {
  document.getElementById('contentMap').innerHTML = "<div id='map' class='content-map__map'></div>";
  const myMap = map('map').setView([lat, lng], 10);
  const tileProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  tileLayer(tileProvider, {
    maxZoom: 10,
  }).addTo(myMap);

  marker([lat, lng]).addTo(myMap);
  icon({
    iconUrl: marker,
    iconSize: [46, 56],
    iconAnchor: [46, 80],
  });
}

export default generateMap;
