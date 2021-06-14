function navSlide() {
    const top = document.querySelector(".top");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    top.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        top.classList.toggle("toggle");
    });
    
}

navSlide();
window.onload=pageLoad;
function pageLoad(){
    var contactForm = document.getElementByClass("wrapper");
    wrapper.onsubmit= validate;
}
function validate(){
    var check = true;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mail = document.getElementById("email").value;
    var phone = document.getElementById("phonenumber").value;
    var password = document.getElementById("password").value;
    var gender=document.getElementById("gender").value;
        if(gender == ""){
        alert('Gender is required !');
        check= false;
    }

    
    if(fname == ""){
        alert('First name is required !');
        check= false;
    }
     if(lname == ""){
        alert('Last name is required !');
        check= false;
    }
    
    if(mail == ""){
        alert('E-mail is required !');
        check= false;
    }

        if (phone == "") {

        alert('Phone is required !');
    }

    if(password == ""){
        alert('Password is required !');
        check= false;
    }
    
    if (!fname.match(/^[A-Za-z ]+$/)){ //space------------------------------
        alert("only letters or space allowed in name field");
        check= false;
    }
    if (!lname.match(/^[A-Za-z ]+$/)){ //space------------------------------
        alert("only letters or space allowed in name field");
        check= false;
    }
    if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
        alert("Email is Not Valid");
        check=false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
        alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
        check=false;
    }
    
   // if (!phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)){
        if (!phone.match(/^[0-9]{11}$/)){

        alert("Phone is not valid");
        check=false;
    }

    return check;


}
