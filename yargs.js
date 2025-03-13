const contacts = require('./contacts');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        nohp: {
            describe: 'Nomor Telepon',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.nohp); // Urutan diperbaiki
    },  
})
.demandCommand(); // Panggilan diperbaiki

yargs.parse();
