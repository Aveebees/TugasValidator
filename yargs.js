
const contacts = require('./contacts');

const yargs = require('yargs');

yargs.command({
      command: 'add',
      describe: 'Menambahkan Kontak Baru',
      builder: {
            nama: {
                  describe: 'Nama Lengkap',
                  demandOption: true,
                  type: 'string'
            },
            email: {
                  describe: 'Email',
                  demandOption: false,
                  type: 'string'
            },
            nohp: {
                  describe: 'Nomor Handphone',
                  demandOption: true,
                  type: 'string'
            },
      },
      handler(argv) {
            contacts.simpanContact(argv.nama, argv.email, argv.nohp);
      },
});
yargs.parse();