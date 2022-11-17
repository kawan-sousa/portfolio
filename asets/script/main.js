//updates current year in footer alert
var
currentYear = new Date().getFullYear(),
copyAlertEl = document.querySelector('#ftr-copy-alert');

copyAlertEl.innerHTML = `&copy; 2022-${currentYear} kawandev.online - premium front end developer`;