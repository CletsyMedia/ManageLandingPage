/*=============Change Background===============*/ 
const header = document.querySelector("header");
window.onscroll=()=>{
    header.classList.toggle('scrollHeader', window.scrollY > 0)
}



const hamburger = document.querySelector(".hamburger");
const MenuClose = document.querySelector(".menuClose");
const navMenu = document.querySelector("nav");

hamburger.onclick=()=>{
    hamburger.style.display="none";
    MenuClose.classList.add('closeX');
    navMenu.classList.add("active");
}
MenuClose.onclick=()=>{
    hamburger.style.display="block";
    MenuClose.classList.remove('closeX');
    navMenu.classList.remove("active");
}

// Validating email
const errMsg = document.querySelector(".error");
const mailColor = document.getElementById("mailInfo")
validateMail=()=>{
    let mailInfo = document.getElementById("mailInfo").value;
    if(mailInfo.length == 0){
        errMsg.innerText = "Email can't be empty!";
        mailColor.style.border="1px solid hsl(12, 88%, 59%)";
        return false
    }
    if(!mailInfo.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errMsg.innerText = "Please insert a valid email";
        return false;
    }
    errMsg.innerText = "Email is valid!"
    errMsg.style.color="hsl(154, 59%, 51%)"
    mailColor.style.border="1px solid hsl(154, 59%, 51%)";
    return true;
}

const formSubmit = document.getElementById("form");
formSubmit.addEventListener('submit', event =>{
    if(!validateMail()){
        event.preventDefault()
        return false;
    }
})


