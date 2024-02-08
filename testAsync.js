import CryptoJs from "crypto-js";
export function encryptedMessage(message, key, callback) {
  const encryptedMessage = CryptoJs.AES.encrypt(message, key).toString();
}

export function encryptedMessagePromise(message, key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptedMessage = CryptoJs.AES.encrypt(message, key).toString();
      if (encryptedMessage) {
        resolve(encryptedMessage);
      } else {
        reject(new Error("Failed to encrypt message"));
      }
    }, 2000);
  });
}
