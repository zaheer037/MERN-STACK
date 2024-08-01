function formValidation(){
    var uemail=document.registration.uemailid;
    var passid=document.registration.upassid;


    if(ValidateEmail(uemail,10,15)){
        if(passid_validation(passid,8,12)){
            if(validate_checkbox(checkbox)){

            }
        }
    }
    return false;
}




function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
alert("submitted form successfully");
window.location.reload();
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
// function validate_checkbox(checkbox){
//     var x=0;
//     if(checkbox.checked){
//         x++;
//     }
//     if(x==0){
//         alert("select checkbox");
//     }
//     else{
//         alert("Submitted form succesfully");
//         window.location.reload();
//         return true;
//     }
// }