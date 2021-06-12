import {
  icon,
  map,
  marker,
  tileLayer,
} from 'leaflet';

import './style/normalize.css';
import './style/style.css';

async function getData(ip) {
  const { apiKey } = process.env;
  const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`;
  let data;

  try {
    const response = await fetch(url);
    data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

function generateTemplate(ip, location, timezone, isp) {
  document.getElementById('ip-address').innerHTML = ip;
  document.getElementById('location').innerHTML = location;
  document.getElementById('time-zone').innerHTML = `UTC ${timezone}`;
  document.getElementById('isp').innerHTML = isp;
}

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

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const ipValue = document.getElementById('ip').value;
  const data = getData(ipValue);

  data.then((res) => {
    const {
      ip,
      location: {
        city,
        timezone,
        lat,
        lng,
      },
      isp,
    } = res;

    generateTemplate(ip, city, timezone, isp);
    generateMap(lat, lng);
  }).catch((err) => {
    // eslint-disable-next-line no-alert
    alert(err);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const data = getData('8.8.8.8');
  data.then((res) => {
    const {
      ip,
      location: {
        city,
        timezone,
        lat,
        lng,
      },
      isp,
    } = res;

    generateTemplate(ip, city, timezone, isp);
    generateMap(lat, lng);
  }).catch((err) => {
    // eslint-disable-next-line no-alert
    alert(err);
  });
});
