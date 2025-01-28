document.addEventListener('DOMContentLoaded', validateForm);

function validateForm() { 
    console.log('validateForm()');
    
    document.querySelector('#form').addEventListener('submit', (event) => {
        event.preventDefault();

    const nameRef = document.querySelector('#name').value
    const emailRef = document.querySelector('#mail').value
    const phoneRef = document.querySelector('#phone').value
    const msgRef = document.querySelector('#msg').value
    

    const parsedPhone = parseInt(phoneRef, 10);
    const checkboxRef = document.querySelector('#checkbox');

    /*const formInput = {
        name: nameRef,
        email: emailRef,
        phone: phoneRef,
        message: msgRef,
    };
    console.log(formInput);*/
    try {
        if(nameRef.length < 5 ) {
            throw new Error('Namnet måste bestå av minst 5 bokstäver!')
        } else if(emailRef === '' || phoneRef === '') {
            throw new Error('Du behöver fylla i antingen mail eller telefonnummer!')
        } else if(isNaN(parsedPhone)) {
            throw new Error('Fyll i ett giltigt telefonnummer!')
        } else if(msgRef === '') {
            throw new Error('Meddelande får inte vara tomt!')
        } else if (!checkboxRef.checked) {
            throw new Error('Var vänlig bocka i checkboxen!')
        }
        document.querySelector('#errorMsg').textContent = '';
        const message = msgRef;
        localStorage.setItem('message', message);
        console.log(message, 'sparades i localStorage');
        

        return true;
        
    } catch (error) {
        document.querySelector('#errorMsg').textContent = error.message;
        return false;
    }
})



}

function getMessageFromLocalStorage() {
    let localStorageRef = localStorage.getItem('message')
    console.log(localStorageRef);
    
}

getMessageFromLocalStorage();