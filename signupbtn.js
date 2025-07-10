let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.signinbtn');
let namefield = document.querySelector('.namefield');
let tittle = document.querySelector('.tittle');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signinbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '0';
    tittle.innerHTML = 'Sign In';
    text.innerHTML = 'Forget Password?';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    underline.style.transform = 'translateX(50px)';

})
signupbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '60px';
    tittle.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';

})