import JSEncrypt from "jsencrypt";

export const generatePrivateAndPublicKey = () => {
  const crypt = new JSEncrypt({ default_key_size: "2048" });
  const publicPrivateKey = {
    publicKey: crypt.getPublicKey(),
    privateKey: crypt.getPrivateKey(),
  };

  return publicPrivateKey;
};

export const encryptData = (data: string, publicKey: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);

  const encrypted = encrypt.encrypt(data);

  if (encrypted) {
    return encrypted;
  }

  return null;
};

export const decryptData = (data: string, privateKey: string) => {
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);

  const decrypted = decrypt.decrypt(data);

  if (decrypted) {
    return decrypted;
  }

  return null;
};
