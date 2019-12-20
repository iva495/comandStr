let name= document.getElementById('name');
let email= document.getElementById('email');
let tel= document.getElementById('tel');
let url= document.getElementById('url');
const button= document.querySelector('.form__button');
let regexName = /^[А-Я]([А-Яа-яЁё](\-[А-Я])?[А-Яа-яЁё]*){2,19}$/gm;
let regexMail = /^[\w][\-\.\w]+@[\-\.\w]+\.[a-z]{2,}$/igm;
let regexTel = /(^(8|\+7)[0-9]{10}$)|(^\+7(\([0-9]{3}\))( )?[0-9]{3}\-[0-9]{2}\-[0-9]{2}$)|(^\+7( )[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}$)/gm;
let regexUrl = /^(http|https):\/((\/www\.)|(\/))(?:[a-z0-9_-]{1,32}@)?(([a-z0-9-]{2,128}\.)+([a-z]{2,6})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(:[0-9]{4})?([a-z 0-9 \/]{1,})?([#])?$/gm;

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
  