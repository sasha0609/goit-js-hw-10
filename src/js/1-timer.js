import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('[type="button"]');
const input = document.querySelector('#datetime-picker');
const value = document.querySelectorAll('.value');
let userSelectedDate = [];

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (selectedDates[0] < new Date()) {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: 'Please choose date in the future',
      });
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

flatpickr('#datetime-picker', options);

btn.addEventListener('click', event => {
  const repeatTime = setInterval(() => {
    event.preventDefault();
    let timeBeforeDate = userSelectedDate - new Date();
    input.disabled = true;

    if (timeBeforeDate < 1) {
      btn.disabled = true;
      input.disabled = false;
      clearInterval(repeatTime);
      return;
    }
    const timer = convertMs(timeBeforeDate);

    value[0].innerText = timer.days.toString().padStart(2, '0');
    value[1].innerText = timer.hours.toString().padStart(2, '0');
    value[2].innerText = timer.minutes.toString().padStart(2, '0');
    value[3].innerText = timer.seconds.toString().padStart(2, '0');
  }, 1000);
});
