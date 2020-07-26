var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
var slides = document.querySelectorAll('.container');
var navBar = document.querySelector('.nav-bar');
const navItems = document.querySelectorAll('.nav-item');
const passwordBox = document.querySelector('.password-container-group');
const passwordError = document.querySelector('.error-span');
const forgotPasswordModal = document.querySelector('.reset-password-container');
const resetPasswordButton = document.querySelector('.reset-button');
const resetSuccess = document.querySelector('.reset-successfull');
window.onload = () => {
    window.setInterval(()=>{
        highlightNavbar(getActiveSlide());
    }, 500)
}

function getActiveSlide()  {
    for(var idx = 0; idx < slides.length; idx ++) {
        var bot = slides[idx].getBoundingClientRect().bottom;
        if(bot >  navBar.clientHeight) {
            return idx;
        }
    }
}
function highlightNavbar(x) {
    for(var idx = 1; idx < navItems.length - 1; idx++ ) {
        navItems[idx].classList.remove('nav-item-active');
        if( x <= 1) {
            navItems[1].classList.add('nav-item-active');
        } else if (idx === x ) {
            navItems[idx].classList.add('nav-item-active');
        }    
    }
}
function showPasswordError() {
    passwordBox.style.border = "1px solid #ff4646";
    passwordError.style.opacity = "100%";
}
function hidePasswordError() {
    passwordBox.style.border = "0";
    passwordError.style.opacity = "0%";
}
function showForgotPassword() {
    forgotPasswordModal.style.height="53vh";
}
function hideForgotPassword() {
    forgotPasswordModal.style.height="0";
}
function resetPasswordSuccessful() {
    resetPasswordButton.style.height = "0";
    resetPasswordButton.style.margin = "0";
    resetSuccess.style.height = "auto";
}