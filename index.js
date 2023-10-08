var pwd=document.getElementById('password');
var cPwd=document.getElementById('confirmpassword');
var alert=document.getElementById('mismatch');

function validate(){
    var attr='border: 2px solid red;';
    var attr2='border: 2px solid yellow;';
if(pwd.value!=cPwd.value){
    cPwd.setAttribute('style', attr);
    alert.innerHTML="Password doesn't match";
}
else{
    cPwd.setAttribute('style',attr2);
    alert.innerHTML="";
}

}



