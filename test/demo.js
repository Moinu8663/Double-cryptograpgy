import { encryptWithMasterKey, decryptWithMasterKey } from '../src/index.js';

const masterKey = 'your_master_key';
const message = "Moinuddin";
// 25;
// {
//     Name:"Moinuddin",
//     Age:25
// };

const encrypted = encryptWithMasterKey(message, masterKey);
const decrypted = decryptWithMasterKey(encrypted, masterKey);

console.log({ encrypted, decrypted });
