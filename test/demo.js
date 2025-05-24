import { encryptWithMasterKey, decryptWithMasterKey } from '../src/index.js';

const masterKey = 'your_master_key';
const message = 'This is a secret.';

const encrypted = encryptWithMasterKey(message, masterKey);
const decrypted = decryptWithMasterKey(encrypted, masterKey);

console.log({ encrypted, decrypted });
