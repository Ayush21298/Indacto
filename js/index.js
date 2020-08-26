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
const signInButton = document.querySelector('.sign-in');

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
/*Button Actions */
signInButton.addEventListener("click", ()=> {
    creds = {}
    creds["username"] = document.querySelector('.username').value;
    creds["password"] = document.querySelector(".password-input").value;
    console.log(creds)
})
resetPasswordButton.addEventListener("click", ()=> {
    payload = {}
    payload["email"] = document.querySelector('.reset-email').value;
    console.log(payload);
})

/* Helpers */
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
document.querySelector('.slide-7-content').addEventListener("click", (e)=> {
    if(document.querySelector('.forgot-password') === e.target) {
        showForgotPassword();
    } else {
        if(forgotPasswordModal.contains(e.target) || forgotPasswordModal === e.target) {
        } else {
            hideForgotPassword();
        }
    }
})
const articleContainer = document.querySelector('.article-slides');
function getBlogs() {
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40indacto";
    fetch(url).then(data => data.json())
    .then(data => data.items)
    .then(items => {
        for(let idx=0;idx<items.length;idx++) {
            var item = items[idx];
            var blog = document.createElement("div");
            blog.setAttribute("class", "article swiper-slide");
            blog.addEventListener("click", ()=> {
                window.location.assign(item["guid"]);
            })
            blog.innerHTML = makeBlog(item["thumbnail"], item["title"], item["pubDate"].substring(0, 30)+"..", item["author"]);
            articleContainer.appendChild(blog);
        }
    })
}
function makeBlog(thumbnailSrc, title, subtitle, author) {
    return `
        <div class="article-content">
            <div class="article-img">
                <img src="${thumbnailSrc}" class="article-image">
            </div>
        <div class="article-text">
            <div class="article-title">
                ${title}
            </div>
            <div class="article-subtitle">
                ${subtitle}
            </div>
            <div class="article-author">
                ${author}
            </div>
        </div>
    `;
}
getBlogs();
/* Videos */
const videoBlock  = document.querySelector("#tutorial-video");
const phoneOutline = document.querySelector("#tutorial-phone");
const iosPlayButton = document.querySelector("#ios-tutorial-play");
const androidPlayButton = document.querySelector(".android-platform");
const playButton = document.querySelector(".play-button");
function playVideo(platform) {
    videoBlock.src = "iOS.mp4";
    phoneOutline.classList.add("hidden");
    playButton.classList.add("hidden");
    videoBlock.classList.remove("hidden");
    if(platform === "android") {
        videoBlock.src = "Android.mp4";
    }
    videoBlock.play();
}
function hideVideo() {
    videoBlock.pause();
    videoBlock.classList.add("hidden");
    playButton.classList.remove("hidden");
    phoneOutline.classList.remove("hidden");
}
// videoBlock.addEventListener('ended', ()=> {
//     hideVideo();
// })
// playButton.addEventListener("click", ()=>{
//     playVideo();
// })
// iosPlayButton.addEventListener("click", ()=> {
//     playVideo();
// })
// androidPlayButton.addEventListener("click",()=> {
//     playVideo("android");
// })
