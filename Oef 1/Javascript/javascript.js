let kleuren = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black'];



let kleur = document.getElementById('kleur2');

kleur.addEventListener('input', function () {
    for (let i = 0; i < kleuren.length; i++) {
        if (kleur.value == kleuren[i]) {
            kleur.style.color = kleuren[i];
        }
        

    }
    
});

    
    

