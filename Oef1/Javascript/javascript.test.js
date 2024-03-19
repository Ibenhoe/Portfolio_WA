// Test case 1: All fields are filled correctly
document.getElementById('naam').value = 'John';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe@example.com';
document.getElementById('kleur2').value = 'blue';
document.getElementById('box-voorwaarden').checked = true;
validerenForm(); // Expected output: Formulier verzonden!

// Test case 2: Missing required fields
document.getElementById('naam').value = '';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe@example.com';
document.getElementById('kleur2').value = 'blue';
document.getElementById('box-voorwaarden').checked = true;
validerenForm(); // Expected output: Vul alle velden in en vink de voorwaarden aan.

// Test case 3: Invalid email address
document.getElementById('naam').value = 'John';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe';
document.getElementById('kleur2').value = 'blue';
document.getElementById('box-voorwaarden').checked = true;
validerenForm(); // Expected output: Voer een geldig e-mailadres in.

// Test case 4: Invalid color
document.getElementById('naam').value = 'John';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe@example.com';
document.getElementById('kleur2').value = 'pinkish';
document.getElementById('box-voorwaarden').checked = true;
validerenForm(); // Expected output: Voer een geldige kleur in.

// Test case 5: Missing checkbox
document.getElementById('naam').value = 'John';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe@example.com';
document.getElementById('kleur2').value = 'blue';
document.getElementById('box-voorwaarden').checked = false;
validerenForm(); // Expected output: Vul alle velden in en vink de voorwaarden aan.// Test case 1: All fields are filled correctly
document.getElementById('naam').value = 'John';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe@example.com';
document.getElementById('kleur2').value = 'blue';
document.getElementById('box-voorwaarden').checked = true;
validerenForm(); // Expected output: Formulier verzonden!

// Test case 2: Missing required fields
document.getElementById('naam').value = '';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe@example.com';
document.getElementById('kleur2').value = 'blue';
document.getElementById('box-voorwaarden').checked = true;
validerenForm(); // Expected output: Vul alle velden in en vink de voorwaarden aan.

// Test case 3: Invalid email address
document.getElementById('naam').value = 'John';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe';
document.getElementById('kleur2').value = 'blue';
document.getElementById('box-voorwaarden').checked = true;
validerenForm(); // Expected output: Voer een geldig e-mailadres in.

// Test case 4: Invalid color
document.getElementById('naam').value = 'John';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe@example.com';
document.getElementById('kleur2').value = 'pinkish';
document.getElementById('box-voorwaarden').checked = true;
validerenForm(); // Expected output: Voer een geldige kleur in.

// Test case 5: Missing checkbox
document.getElementById('naam').value = 'John';
document.getElementById('achternaam').value = 'Doe';
document.getElementById('email').value = 'john.doe@example.com';
document.getElementById('kleur2').value = 'blue';
document.getElementById('box-voorwaarden').checked = false;
validerenForm(); // Expected output: Vul alle velden in en vink de voorwaarden aan.