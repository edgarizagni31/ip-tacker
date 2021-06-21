import getData from './js/helpers/getData';
import printInfo from './js/template/printInfo';

import './style/normalize.css';
import './style/style.css';

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const regexIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipValue = document.getElementById('ip').value;
  const data = getData(ipValue);

  if (regexIp.test(ipValue)) {
    data.then((res) => {
      printInfo(res);
    }).catch((err) => {
      // eslint-disable-next-line no-alert
      alert(err);
    });
  } else {
    // eslint-disable-next-line no-alert
    alert('Dirreción ip incorrecta');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const data = getData('8.8.8.8');

  data.then((res) => {
    printInfo(res);
  }).catch((err) => {
    // eslint-disable-next-line no-alert
    alert(err);
  });
});
