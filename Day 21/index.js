function Validate(){
    var day = document.getElementById("day").value;
    var call = document.getElementById("call").value;
    var msg = document.getElementById("msg").value;
    var data = document.getElementById("data").value;
    if(dayValidate(day)){
        if(callValidate(call)){
            if(msgValidate(msg)){
                if(dataValidate(data)){
                    
                }
            } 
        }
    }
    return false;
}

function dayValidate(day){
    if(day>84){
        alert("Your plan expired.Kindly recharge.");
        return false;
    }
    else{
        document.write((84-day)+" days left for expire"+"<br/>");
        return true;
    }
}
function callValidate(call){
    call=Number(call);
    if(call>3000){
        document.write("call could not be connected.Kindly top-up"+"<br/>");
        return false;
        
    }
    document.write("yet to call "+(3000-call)+"<br/>");
        return true;
    
}
function msgValidate(msg){
    if(msg>100){
        document.write("msg failed"+"<br/>");
        return false;
       
    }
    document.write("yet to msg "+(100-msg)+"<br/>");
       return true;
}
function dataValidate(data){
    if(data>2){
        document.write("speed reduced bcs of exceed ur limit"+"<br/>");
        return false;
        
     }
     document.write("yet to data use "+(2-data)+"<br/>");
        return true;
}

