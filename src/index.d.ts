export function encryptWithMasterKey(plaintext: string, masterKey: string): string;
export function decryptWithMasterKey(encryptedData: string, masterKey: string): string;
export function deriveTwoKeys(masterKey: string | Buffer): [Buffer, Buffer];
