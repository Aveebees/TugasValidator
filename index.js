const validator = require('validator');
const readline = require('readline-sync');

const email = readline.question("Masukkan email: ");

const phone = readline.question("Masukkan nomor telp: ");

const isEmailValid = validator.isEmail(email);

const isPhoneValid = validator.isMobilePhone(phone, 'id-ID');

console.log("\nHasil Validasi:");
console.log(`Email: ${email} -> ${isEmailValid ? 
    "✅ Benar" :
    "❌ Tidak Valid"}`);
console.log(`Nomor Telepon: ${phone} -> ${isPhoneValid ? 
    "✅ Benar" : 
    "❌ Tidak Valid"}`);