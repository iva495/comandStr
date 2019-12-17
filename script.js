let name= document.getElementById('name');
let email= document.getElementById('email');
let tel= document.getElementById('tel');
let url= document.getElementById('url');
const button= document.querySelector('.form__button');
let regexName = /^[А-Я][А-Яа-яЁё\-]{2,19}$/gm;
let regexMail = /[\-\.\w]+@[\-\.\w]+\.[a-z]{2,5}/igm;
let regexTel = /^(8|\+7)[ ]?\(?\d{3}\)?[\- ]?[\d\- ]{7,10}$/gm;
let regexUrl = /^(http|https):\/\/(?:[a-z0-9_-]{1,32}(?:[a-z0-9_-]{1,32})?@)?(([a-z0-9-]{1,128}\.)+([a-z\.]{2,6})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ '\"&]*)?$/gm;

function reg(rgxp) {
    if (!rgxp.test(String.fromCharCode(event.charCode))) {
      console.error('not allowed char');
      setTimeout(function() {
        console.clear();
      }, 3000);
      event.preventDefault();
    }
  }
  button.addEventListener('click', function(){
  reg(regexName);
  reg(regexMail);
  reg(regexTel);
  reg(regexUrl);});
  