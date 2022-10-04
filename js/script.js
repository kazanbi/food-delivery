const eye = document.querySelector('.uil-eye'),
      pass = document.querySelector('#password');

eye.addEventListener("click", function(e) {
    if(pass.type === "password"){
        pass.type = "text";
    }
    else{
        pass.type = "password";
    }
});