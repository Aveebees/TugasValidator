const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// Membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const pertanyaan1 = () => {
    return new Promise((resolve,reject) => {
        rl.question('Masukkan nama anda: ', (nama) => {
            resolve(nama);
        });
    });
};
const pertanyaan2 = () => {
    return new Promise((resolve,reject) => {
        rl.question('Masukkan no HP anda: ', (nohp) => {
            resolve(nohp);
        });
    });
};
const pertanyaan3 = () => {
    return new Promise((resolve,reject) => {
        rl.question('Masukkan alamat anda: ', (alamat) => {
            resolve(alamat);
        });
    });
};
const pertanyaan4 = () => {
    return new Promise((resolve,reject) => {
        rl.question('Masukkan email anda: ', (email) => {
            resolve(email);
        });
    });
};

const main = async () => {
    const nama = await pertanyaan1();
    const nohp = await pertanyaan2();
    const alamat = await pertanyaan3();
    const email = await pertanyaan4();

    const kontak = { nama, nohp, alamat, email };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const kontaks = JSON.parse(file);
    kontaks.push(kontak);
    fs.writeFileSync('data/contacts.json', JSON.stringify(kontaks, null, 2));

    console.log(`Terima kasih sudah mengisi data anda`);
    rl.close();
};

main();
