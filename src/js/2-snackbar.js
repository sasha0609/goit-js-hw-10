import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submit = document.querySelector('[type="submit"]');
const delay = document.querySelector('.delay');
const radioBtnPromise = document.querySelector('[name="state"]');

submit.addEventListener('click', event => {
  event.preventDefault();

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioBtnPromise.checked) {
        resolve(resolve);
      } else {
        reject(reject);
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
