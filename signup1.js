// SELECTING ALL TEXT ELEMENTS
var email = document.forms['vform']['email'];
var phone = document.forms['vform']['phone'];
var password = document.forms['vform']['pass'];


// SELECTING ALL ERROR DISPLAY ELEMENTS
var email_error = document.getElementById('email_error');
var phone_error = document.getElementById('phone_error');
var pass_error = document.getElementById('pass_error');

// SETTING ALL EVENT LISTENERS
email.addEventListener('blur', emailVerify, true);
phone.addEventListener('blur', phoneVerify, true);
pass.addEventListener('blur', passVerify, true);


// validation function
function Validate() {
  // validate username
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }

  // validate phone
  if (phone.value == "") {
    phone.style.border = "1px solid red";
    document.getElementById('phone').style.color = "red";
    phone_error.textContent = "Phone number is required";
    phone.focus();
    return false;
  }
  // validate password
  if (pass.value == "") {
    pass.style.border = "1px solid red";
    document.getElementById('pass').style.color = "red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }

// event handler functions
function emailVerify() {
  if (email.value != "") {
   email.style.border = "none";
   document.getElementById('email').style.color = "#5e6e66";
   email_error.innerHTML = "";
   return true;
  }
}
function phoneVerify() {
  if (phone.value != "") {
  	phone.style.border = "1px solid #5e6e66";
  	document.getElementById('phone').style.color = "#5e6e66";
  	phone_error.innerHTML = "";
  	return true;
  }
}
function passwordVerify() {
  if (pass.value != "") {
  	pass.style.border = "1px solid #5e6e66";
  	document.getElementById('pass').style.color = "#5e6e66";
  	pass_error.innerHTML = "";
  	return true;
  }
