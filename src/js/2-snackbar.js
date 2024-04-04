import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submit = document.querySelector('[type="submit"]');
const delay = document.querySelector('[name ="delay"]');
const radioBtnPromise = document.querySelector('[name="state"]:checked');
const form = document.querySelector('.form');

submit.addEventListener('click', event => {
  event.preventDefault();

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioBtnPromise.checked) {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
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
  form.reset();
});
