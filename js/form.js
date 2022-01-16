//redirect to home page if user logged in
window.onload = () =>{
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken,user.email)){
            location.replace('/');
        }
    }
} 

const loader = document.querySelector('.loader');

//select inputs
const submitBtn = document.querySelector('.submit-btn');
const Name = document.querySelector('#Name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click',() =>{
    if(Name != null){ //signup page
    if(Name.value.length<3){
        showAlert('Name must be 3 letters long');
    } else if(!email.value.length){
        showAlert('enter your email');
    } else if(password.value.length<8){
        showAlert('password should be atleast 8 characters');
    } else if(number.value.length<10){
        showAlert('enter your phone number');
    } else if(!Number(number.value)){
        showAlert('invalid number');
    } else if(number.value.length < 10){
        showAlert('invalid number');
    } else if(!tac.checked){
        showAlert('you must agree to our terms and conditions');
    } else{
        //submit form
        loader.style.display = 'block';
        sendData('/signup', {
            Name: Name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller:false
        })
    }
    }else{
        //login page
        if(!email.value.length || !password.value.length){
            showAlert('fill all the inputs');
        }else{
            loader.style.display = 'block';
            sendData('/login', {
            email: email.value,
            password: password.value,
            })
        }
    }
})
