# double-seed-encryption

🔐 Double-layer AES-256 encryption and decryption with keys derived from a single master key using HKDF.

## Features

- Derives two AES-256 keys using HKDF from a single master key
- Performs two-layer encryption/decryption using AES-256-CBC
- Accepts **string**, **JSON object**, or **number** as input

---

## Installation

```bash
npm i double-cryptograpgy

## Example

import { encryptWithMasterKey, decryptWithMasterKey } from 'double-cryptograpgy';

const masterKey = 'my-super-secret-password';

// Encrypting a string
const encryptedString = encryptWithMasterKey('hello world', masterKey);
const decryptedString = decryptWithMasterKey(encryptedString, masterKey);
console.log(decryptedString); // "hello world"

// Encrypting a number
const encryptedNumber = encryptWithMasterKey(12345, masterKey);
const decryptedNumber = decryptWithMasterKey(encryptedNumber, masterKey);
console.log(decryptedNumber); // "12345"

// Encrypting a JSON object
const user = { id: 1, name: 'Alice' };
const encryptedJson = encryptWithMasterKey(user, masterKey);
const decryptedJson = decryptWithMasterKey(encryptedJson, masterKey);
console.log(decryptedJson); // { id: 1, name: 'Alice' }
