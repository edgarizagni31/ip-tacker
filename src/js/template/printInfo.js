import writeData from './writeData';
import generateMap from './generateMap';

function printInfo(res) {
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

  writeData(ip, city, timezone, isp);
  generateMap(lat, lng);
}

export default printInfo;
