// Navigation 
const hamMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".noti-chat");

hamMenu.addEventListener('click', () => {
    navBar.classList.toggle("change")
    hamMenu.classList.toggle("change")
});


// Error msg

function emailError() {
    const email = document.querySelector("#email")
    const errorEmailMsg = document.querySelector(".error-email")
    const exclamation = document.querySelector('.username')

    let errorEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    let message = []

    if (email.value.match(errorEmail)) {
        errorEmailMsg.style.display= "none"
        exclamation.style.setProperty("--display", 'block')
        exclamation.style.setProperty("--color-red", 'green')
    } else {
        errorEmailMsg.style.display = "block"
        exclamation.style.setProperty("--display", 'block')
    }
}

function pwError() {
    const password = document.querySelector("#pw")
    const errorPwMsg = document.querySelector(".error-pw")
    const pwClamation = document.querySelector('.password')

    let errorPw =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password.value.match(errorPw)) {
        errorPwMsg.style.display= "none"
        pwClamation.style.setProperty("--display", 'block')
        pwClamation.style.setProperty("--color-red", 'green')
    } else {
        errorPwMsg.style.display = "block"
        pwClamation.style.setProperty("--display", 'block')
    }
}

// Detect changed on input
    document.querySelector('.username')
    .addEventListener("input", (event) => exclamation.style.setProperty("--color-red", 'red'))

    document.querySelector('.password')
    .addEventListener("input", (event) => pwClamation.style.setProperty("--color-red", 'red'))

// Loader 
function loading(event) {
    // Display Loading element
    const btn = document.querySelector(".load")
    btn.innerHTML = "<div class='loader'></div>"

    if (email.value === ""  || pw.value === "") {
        btn.innerHTML = ""
        return false
    } 

//Can't Sign in without filed the form
    const loadingTime = setTimeout(() => {
        const email = document.querySelector("#email")
        const pw = document.querySelector("#pw")
        const incorrect = document.querySelector(".incorrect-pw")

        let errorPw =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        let errorEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailAccount = "zhaolusi@gmail.com"
        let pwAccount = "Sangzhi!181994"

        if (email.value.match(errorEmail) && pw.value.match(errorPw) && email.value.match(emailAccount) && pw.value.match(pwAccount)) {
            window.location = "main.html"
            window.clearTimeout(loadingTime);
        } else {
            alert("Please enter the correct Email/Password!")
            btn.innerHTML = "<div class='loader--hidden'></div>";
            return false
        }
    }, 5000) 


    return false
}