let pass = document.getElementById("pass")              /*Checks whether passwords match*/
let rep_pass = document.getElementById("rep-pass");

function validatePassword(){
  if(pass.value != rep_pass.value) {
    rep_pass.setCustomValidity("Passwords Don't Match");
  } else {
    rep_pass.setCustomValidity('');
  }
}

pass.onchange = validatePassword;
rep_pass.onkeyup = validatePassword;