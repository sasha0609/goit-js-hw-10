import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submit = document.querySelector('[type="submit"]');
const delay = document.querySelector('.delay');
const fulfilled = document.querySelector('.fulfilled');
const rejected = document.querySelector('.rejected');

submit.addEventListener('click', event => {
  event.preventDefault();

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilled.checked) {
        resolve('resolve');
        console.log('got it');
      } else if (rejected.checked) {
        reject('reject');
        console.log('nonono mister fish');
      }
    }, delay.value);
  })
    .then(() => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay.value}ms`,
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay.value}ms`,
        position: 'topRight',
      });
    });
});
