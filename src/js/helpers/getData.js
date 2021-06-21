async function getData(ip) {
  const apiKey = 'at_AVUmlSQY4Ko4SYuvwi4eXDkaXc1Zw';
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

export default getData;
