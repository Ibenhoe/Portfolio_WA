'use strict';


//Hfst 1 footer : Made by Iben Vanthournout


(function () {
    const naam_id = "Iben Vanthournout"; //Gebruik van const
    localStorage.setItem('naam_id', naam_id); // Gebruik van localStorage bron: https://www.w3schools.com/jsref/prop_win_localstorage.asp 
    const footer = document.getElementById('footer_2');
    footer.innerHTML = 'Made by ' + naam_id;}()); 





//Hfst 2 formulier kleuren
let kleuren = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black'];
let kleur = document.getElementById('kleur2');

//Hfst 2.1 kleur veranderen
kleur.addEventListener('input', function () { //Bron: https://www.w3schools.com/jsref/event_oninput.asp 
    for (let i = 0; i < kleuren.length; i++) {
        if (kleur.value == kleuren[i]) {
            kleur.style.color = kleuren[i];
            return;
        }
    }
});





//Hfst 3 formulier valideren
function validerenForm() {
    let naam = document.getElementById('naam').value;
    var achternaam = document.getElementById('achternaam').value;
    var email = document.getElementById('email').value;
    var kleur = document.getElementById('kleur2').value;
    var checkbox = document.getElementById('box-voorwaarden').checked;

    //Hfst 3.1 formulier valideren en indien nodig error tonen
    if (naam === '' || achternaam === '' || email === '' || kleur === '' || !checkbox) {
        alert('Vul alle velden in en vink de voorwaarden aan.');
    } else if (!emailValideren(email)) {
        alert('Voer een geldig e-mailadres in.');
    }else if (!kleuren.includes(kleur)) {
        alert('Voer een geldige kleur in.\nDe kleuren zijn: red, green, blue, yellow, orange, purple, pink, brown, black.');
        
    }
    else {
        alert('Formulier verzonden!');
        alert(`Welkom ${naam}` ); //Gebruik van Template literals
        naam.value = ''; // Leeg het tekstvak voor naam
        achternaam.value = ''; // Leeg het tekstvak voor achternaam
        email.value = ''; // Leeg het tekstvak voor e-mail
        kleur.value = ''; // Leeg het tekstvak voor kleur
        checkbox.checked = false; // Schakel het vinkje uit
    }

//Hfst 3.2 email valideren
    let emailValideren = (email) => { //arrow function
        var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;//Bron: https://www.w3resource.com/javascript/form/email-validation.php
        return reg.test(email);
    }
}





















  