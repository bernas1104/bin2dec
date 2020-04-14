export default function renderAlert(baseExample) {
  if(!document.querySelector('.alert')){
    let alertDanger = document.createElement('div');
    let alertWarning = document.createElement('div');

    alertDanger.classList.add('alert', 'danger');
    alertWarning.classList.add('alert', 'warning');

    let smallDanger = document.createElement('small');
    let smallWarning = document.createElement('small');

    smallDanger.innerText = '* Input number must follow the input base';
    smallWarning.innerText = baseExample;

    alertDanger.appendChild(smallDanger);
    alertWarning.appendChild(smallWarning);

    let userInput = document.querySelector('.user-input');
    userInput.style.maxHeight = '200px';
    userInput.append(alertDanger, alertWarning);

    setTimeout(() => {
      alertDanger.style.opacity = 0;
      alertWarning.style.opacity = 0;
      userInput.style.maxHeight = '30px';
    }, 2000);

    setTimeout(() => {
      alertDanger.remove();
      alertWarning.remove();
    }, 2500);
  }
}