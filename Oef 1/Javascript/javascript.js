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
    var name = document.getElementById('naam').value;
    var lastName = document.getElementById('achternaam').value;
    var email = document.getElementById('email').value;
    var kleur = document.getElementById('kleur2').value;
    var checkbox = document.getElementById('box-voorwaarden').checked;

    if (name === '' || lastName === '' || email === '' || kleur === '' || !checkbox) {
        alert('Vul alle velden in en vink de voorwaarden aan.');
    } else if (!emailValideren(email)) {
        alert('Voer een geldig e-mailadres in.');
    } else {
        alert('Formulier verzonden!');}

function emailValideren(email) {
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return reg.test(email);
        }
    }
/*

document.addEventListener('submit', function (e) {
    var naam = document.getElementById('naam').value;
    var email = document.getElementById('email').value;
    var achternaam = document.getElementById('achternaam').value;
    var kleur = document.getElementById('kleur2').value;
    var checkbox = document.getElementById('box-voorwaarden').checked;


    if (naam == "") {
        alert("Naam is verplicht");
        return false;
    }else if (achternaam == "") {
        alert("Achternaam is verplicht");
        return false;
    } else if (!emailValideren(email)) {
        alert("Email is verplicht");
        return false;
    }else{
        alert("Formulier is verstuurd");
    }
});	





function emailValideren(email) {
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return reg.test(email);
}
    
*/
