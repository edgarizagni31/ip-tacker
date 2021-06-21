function writeData(ip, location, timezone, isp) {
  document.getElementById('ip-address').innerHTML = ip;
  document.getElementById('location').innerHTML = location;
  document.getElementById('time-zone').innerHTML = `UTC ${timezone}`;
  document.getElementById('isp').innerHTML = isp;
}

export default writeData;
