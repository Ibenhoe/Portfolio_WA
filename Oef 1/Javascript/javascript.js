'use strict';


let kleuren = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black'];



let kleur = document.getElementById('kleur2');

kleur.addEventListener('input', function () {
    for (let i = 0; i < kleuren.length; i++) {
        if (kleur.value == kleuren[i]) {
            kleur.style.color = kleuren[i];
            return;
        }
        

    }
    
});


function validerenForm() {
    var naam = document.getElementById('naam').value;
    var achternaam = document.getElementById('achternaam').value;
    var email = document.getElementById('email').value;
    var kleur = document.getElementById('kleur2').value;
    var checkbox = document.getElementById('box-voorwaarden').checked;

    if (naam === '' || achternaam === '' || email === '' || kleur === '' || !checkbox) {
        alert('Vul alle velden in en vink de voorwaarden aan.');
    } else if (!emailValideren(email)) {
        alert('Voer een geldig e-mailadres in.');
    }else if (!kleuren.includes(kleur)) {
        alert('Voer een geldige kleur in.\nDe kleuren zijn: red, green, blue, yellow, orange, purple, pink, brown, black.');
        
    }
    else {
        alert('Formulier verzonden!');
        naam = '';
        achternaam = '';
        email = '';
        kleur = '';
        checkbox = false;

    }


function emailValideren(email) {
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return reg.test(email);
        }
    }



