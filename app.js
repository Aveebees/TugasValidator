// const fs = require('fs');

// const perintah = process.argv[2];
// const nama = process.argv[3];
// const nohp = process.argv[4];
// const email = process.argv[5];
// const alamat = process.argv[6];

// if(perintah === 'tambah'){
//     const kontak = {nama, nohp, email, alamat};
//     const file = fs.readFileSync('data/contacts.json', 'utf-8');
//     const kontaks = JSON.parse(file);
//     kontaks.push(kontak);
//     fs.writeFileSync('data/contacts.json',JSON.stringify(kontaks, null, 2));
//     console.log(`Terima kasih sudah mengisi data anda`);
// }else{
//     console.log(`Perintah ${process.argv[2]} tidak dikenali`)
// }

const yargs = require("yargs");
yargs.command(
    'add',
    'Menambahkan kontak baru',
    () => {},
    (argv) => {
        console.log(argv.nama);
    }
);
yargs.parse();