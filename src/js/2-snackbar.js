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
      } else if (rejected.checked) {
        reject('reject');
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
// function someFunction() {
//   console.log('import');
// }
