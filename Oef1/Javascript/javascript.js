
'use strict';


//Hfst 1 footer : Made by Iben Vanthournout


(function () {
    const naam_id = "Iben Vanthournout"; //Gebruik van const
    localStorage.setItem('naam_id', naam_id); // Gebruik van localStorage bron: https://www.w3schools.com/jsref/prop_win_localstorage.asp 
    const footer = document.getElementById('footer_2');
    footer.innerHTML = 'Made by ' + naam_id;
    
    }()); 





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

let emailValideren = (email) => { 
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;//Bron: https://www.w3resource.com/javascript/form/email-validation.php
    return reg.test(email);
}




function validerenForm() {
    const inputs = [
        document.getElementById('naam'),
        document.getElementById('achternaam'),
        document.getElementById('email'),
        document.getElementById('kleur2')
    ];

    const { value: naam } = inputs.find(input => input.id === 'naam') || {};
    const { value: achternaam } = inputs.find(input => input.id === 'achternaam') || {};
    const { value: email } = inputs.find(input => input.id === 'email') || {};
    const { value: kleur } = inputs.find(input => input.id === 'kleur2') || {};

    const { checked: checkbox } = document.getElementById('box-voorwaarden');

    const kleuren = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black'];

    // Rest-operator om de variabelen te verzamelen
    const velden = [naam, achternaam, email, kleur];
    
    //Hfst 3.1 formulier valideren en indien nodig error tonen
    if (velden.some(field => field === '') || !checkbox) {
        alert('Vul alle velden in en vink de voorwaarden aan.');
    } else if (!emailValideren(email)) {
        alert('Voer een geldig e-mailadres in.');
    } else if (!kleuren.includes(kleur)) {
        alert('Voer een geldige kleur in.\nDe kleuren zijn: red, green, blue, yellow, orange, purple, pink, brown, black.');
    } else {
        alert('Formulier verzonden!');
        alert(`Welkom ${naam}` ); //Gebruik van Template literals
        
        // Spread-operator om het object te maken
        const persoon = { naam, achternaam, email, kleur };
        
        const persoonJSON = JSON.stringify(persoon);
        
        localStorage.setItem('persoon', persoonJSON);
        inputs.forEach(input => input.value = '');
        window.location.href = 'profiel.html';
    }
}



