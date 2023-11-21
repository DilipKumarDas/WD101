const email=document.getElementById("email");
email.addEventListener('input',() => validate(email));
function validate(element){
  if(element.validity.typeMismatch){
    element.setCustomValidity("email in incorrect format");
    element.reportValidity();
  }
  else
    element.setCustomValidity('');
}
