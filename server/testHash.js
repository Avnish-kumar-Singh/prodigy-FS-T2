const bcrypt = require('bcryptjs');

const passwordToHash = 'admin123'; // <- change this to your desired password

bcrypt.hash(passwordToHash, 10).then((hash) => {
  console.log('Hashed password:', hash);
});
