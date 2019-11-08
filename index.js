


function validation(){
var name = document.getElementById('email').value;
var number = document.getElementById('number').value;
var password = document.getElementById('password').value;
if(name=='')
{
  alert('required');
  return false;
}
