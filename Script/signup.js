document.querySelector("#form").addEventListener("submit",myForm);

    var signUparr= JSON.parse(localStorage.getItem("signup")) || [];

    function myForm(event){
        event.preventDefault();
        var signupobj={
        user: document.querySelector("#username").value,
        email :document.querySelector("#email").value,
        pass:document.querySelector("#password").value,
            
            password:document.querySelector("#password").value,
        };

        signUparr.push(signupobj);

         console.log(signUparr);


 localStorage.setItem("signup",JSON.stringify(signUparr));

//  next login page
 document.querySelector("input[type='submit']").addEventListener("click",function(){

   window.location.href="login.html"
 });


 };
