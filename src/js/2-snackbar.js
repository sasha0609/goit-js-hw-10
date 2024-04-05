import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const delayInput = document.querySelector('[name ="delay"]');
const form = document.querySelector('.form');

form.addEventListener('submit', createPromise);
function createPromise(e) {
  e.preventDefault();
  const delay = Number(delayInput.value);
  const state = form.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise
    .then(delay =>
      iziToast.success({
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay} ms`,
      })
    )
    .catch(delay =>
      iziToast.error({
        position: 'topRight',
        message: `❌ Rejected promise in ${delay} ms`,
      })
    )
    .finally(() => {
      form.reset();
    });
}
