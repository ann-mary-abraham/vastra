 //nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
userPopup.classList.toggle('hide');
})

window.onload = () =>{
    let user = JSON.parse(sessionStorage.user || null);
    if(user!= null){ 
        //implies user is logged in
        popuptext.innerHTML = 'log in as, ${user.Name}';
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click',() =>{
            sessionStorage.clear();
            location.reload();
        })
    }else{
        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click',() =>{
            location.href = '/login';
        })
    }
}