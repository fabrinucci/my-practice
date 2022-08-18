const form = document.querySelector('#form');

const nameId = document.querySelector('#name');
const emailId = document.querySelector('#email');
const passwordId = document.querySelector('#password');
const paragraph = document.querySelector('#warnings');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  let warnings = '';
  let enter = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  paragraph.innerHTML = ''

  if( nameId.value.length <= 2 ) {
    warnings += `The name is not valid <br>`;
    enter = true;
  }

  if( !regexEmail.test(emailId.value) ) {
    warnings += `The email is not valid <br>`;
    enter = true;
  }

  if( passwordId.value.length < 8 ) {
    warnings += `Password is not valid <br>`;
    enter = true;
  }

  ( enter ) 
  ? ( paragraph.innerHTML = warnings ) 
  : ( paragraph.innerHTML = 'Send' );

}