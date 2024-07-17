
document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const message = document.querySelector('#message');

    if(!emailpattern.test(email)) { 
        message.style.display = 'block';
        message.innerText = "Please enter a valid email";
        resetemail();
        return;
    } else {
        message.style.display = 'none';
        thankyoumessage();
    } if(password.length < 8 || password.length > 15) {
        message.innerText = "Please Enter password which is 8 character long and shorter than 15";
        message.style.display = 'block';
        resetpass();
    } else {
        message.style.display = 'none';
        thankyoumessage();
        return;
    }

})


function resetemail() {
    email.value = null;
}
function resetpass() {
    password.value = null;
}
function thankyoumessage() {
    message.innerText = "You have been logged in sucessfully";
    message.style.display = 'block';
}