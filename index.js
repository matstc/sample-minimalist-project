import moment from './node_modules/moment/moment.js';
import datePrinter from './datePrinter.js';
import css from './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  let time = moment().format('dddd hh:mm');
  document.querySelector('.content').textContent = datePrinter(time);
})
