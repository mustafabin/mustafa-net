import md5Hex from 'md5-hex';

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`What's is your aden net code? `, code => {
  console.log(`your code:  ${md5Hex.toString(code)}`);
  rl.close();
});
