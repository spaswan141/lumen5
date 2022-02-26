var reGuser=JSON.parse(localStorage.getItem("signup"));

console.log(reGuser);

document.querySelector("#form").addEventListener("submit",detailsubmit);

// use new way
var form=document.querySelector("#form");
// find value to use form.id.value


function detailsubmit(){
event.preventDefault();

var email=form.email.value;
var pass=form.password.value;


var flag=false;
for(var i=0;i<reGuser.length;i++){
if(reGuser[i].email==email && reGuser[i].pass==pass){
flag=true;
}
}
if(flag==true){
console.log("login Success");
alert("Login Success");
window.location.href="";
}

else{
    console.log("login fail");
    alert("Login Fail");
}


};

