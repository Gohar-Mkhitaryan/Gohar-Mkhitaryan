function myFunc(){
    const corect = /^[0-9A-Za-z\s\-]+$/;
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if(user === ""){
        document.getElementById("message").innerHTML="Please fill Username";
        return false;
    }
    else{
        document.getElementById("message").innerHTML="";
    }
    if(user.length<3){
        document.getElementById('message').innerHTML="Username must be 3 charecters";
        return false;
    }
    else{
        document.getElementById("message").innerHTML="";
    }
    if(user.length>20){
        document.getElementById('message').innerHTML="Username must be less than 20 charecter";
        return false;
    }
    else{
        document.getElementById("message").innerHTML="";
    }

    if(user.match(corect)){
       document.getElementById("message").innerHTML="";
    }
    else{
         document.getElementById('message').innerHTML="Only alphabets and numbers are allowed";
        return false;
    }


    if(pass.length<8){
        document.getElementById('message1').innerHTML="Password must be 8 charecter";
        return false;
    }
    else{
        document.getElementById("message1").innerHTML="";
    }
    if(pass.length > 16){
        document.getElementById('message1').innerHTML="Password must be less than 16 charecter";
        return false;
    }
    else{
        document.getElementById("message1").innerHTML="";
    }

    const corect1 = /\d/g;
    if (!corect1.test(pass)) {
      document.getElementById('message1').innerHTML ="Password should contain at least one digit";
      return false;
    }
    else{
        document.getElementById("message1").innerHTML="";
    }

    const corect2 = /^(?=.*[a-z]).*$/;
    if (!corect2.test(pass)) {
      document.getElementById('message1').innerHTML ='Password should contain at least one lower case';
      return false;
    }
    else{
        document.getElementById("message1").innerHTML="";
    }
  
    const corect3 = /^(?=.*[A-Z]).*$/;
    if (!corect3.test(pw)) {
      document.getElementById('message1').innerHTML ='Password should contain at least one upper case';
      return false;
    }
    else{
        document.getElementById("message1").innerHTML="";
    }
    const corect4 = /[^a-zA-Zа-яА-Я\u0561-\u0587\u0531-\u0556-]+/g;
    if (!corect4.test(pass)) {
      document.getElementById("message1").innerHTML = 'Password should not be Latin, Armenian or Russion';
      return false;
    } else {
        document.getElementById("message1").innerHTML="";
    }

    const corect5 = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!corect5.test(pass)) {
      document.getElementById('message1').innerHTML ='Password should contain at least one Special symbol';
      return false;
    }
    else {
        document.getElementById("message1").innerHTML="";
    }
   
    if (pass === document.getElementById('user').value) {
      document.getElementById('message1').innerHTML ='Pleace fill the new password! It should not be the usename';
      return false;
    }
  else{
      return true;
  }
  
}

