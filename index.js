const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const contacts = require('./contacts');

yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
      nama: { describe: 'Nama Lengkap', demandOption: true, type: 'string' },
      email: { describe: 'Email', demandOption: false, type: 'string' },
      nohp: { describe: 'Nomor Telepon', demandOption: true, type: 'string' },
    },
    handler(argv) {
      console.log('Menambahkan kontak:', argv.nama, argv.email, argv.nohp);
      contacts.simpanContact(argv.nama, argv.email, argv.nohp);
    },
  })
  .demandCommand()
  .parse();
