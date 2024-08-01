function task(){
    var jsname=document.registration.uname;
    var jsage=document.registration.uage;
    var jspincode=document.registration.upincode;
    var jspan=document.registration.upan;
    var jspassword=document.registration.upassword;
    var jsphone=document.registration.uphone;


    if(validate_name(jsname,8,10)){
        if(validate_age(jsage,0,99)){
            if(validate_pin(jspincode,6)){
                if(validate_pan(jspan,10)){
                    if(validate_pass(jspassword,10)){
                        if(validate_phone(jsphone,10)){
                            
                        }
                    }
                }
            }
        }
    }
}

function validate_name(jsname,mx,my){
    var namelen=jsname.value.length;
    if(namelen==0 || namelen<mx || namelen>my ){
        alert("Enter valid username");
        jsname.focus();
        return false;
    }
    return true;
}

function validate_age(jsage,mx1,my1){
    jsage=Number(jsage);
    if(jsage<mx1 || jsage>=my1){
        alert("Enter valid age");
        jsage.focus();
        return false;
    }
    return true;
}

function validate_pin(jspincode,max){
    jspincode=Number(jspincode);
    var pinlen=jspincode.value.length;
    if(pinlen>max||pinlen<max){
        alert("Enter 6 digit pincode");
        jspincode.focus();
        return false;
    }
    return true;
}

function validate_pan(jspan,panmax){
    var panlen=jspan.length;
    var alphanum=/^[0-9A-Z]+$/;
    if(jspan.value.match(alphanum)){
        return true;
    }
    else{
        alert("Enter 10 digit alphanumeric value");
        jspan.focus();
        return false;
    }
}

function validate_pass(jspassword,passmax){
    var passlen=jspassword.length;
    var letters=/^[\.A-Z]+[a-z0-9]+[\.@]+$/
    if(jspassword.value.match(letters)){
        return true;
    }
    else{
        alert("Enter valid password");
        jspassword.focus();
        return false;
    }
}

function validate_phone(jsphone,max)
{
    var phonelen=jsphone.length;
    if(phonelen>10||phonelen<10){
        alert("Enter 10 digits num");
        jsphone.focus();
        return false;
    }
    alert("Form submitted successfully");
    window.location.reload();
    return true;
}