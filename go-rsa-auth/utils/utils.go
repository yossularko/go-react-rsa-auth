package utils

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/base64"
	"encoding/pem"
	"os"
)

func EncryptData(data string) (string, error) {
	publicKeyData, err := os.ReadFile("public.pem")
	if err != nil {
		return "", err
	}

	block, _ := pem.Decode(publicKeyData)
	publicKey, err := x509.ParsePKIXPublicKey(block.Bytes)
	if err != nil {
		return "", err
	}

	pub := publicKey.(*rsa.PublicKey)
	encrypted, err := rsa.EncryptPKCS1v15(rand.Reader, pub, []byte(data))
	if err != nil {
		return "", err
	}

	encoded := base64.StdEncoding.EncodeToString(encrypted)

	return encoded, nil
}

func DecryptData(data string) (string, error) {
	privateKeyData, err := os.ReadFile("private.pem")
	if err != nil {
		return "", err
	}

	block, _ := pem.Decode(privateKeyData)
	privateKey, err := x509.ParsePKCS1PrivateKey(block.Bytes)
	if err != nil {
		return "", err
	}

	encryptedBytes, err := base64.StdEncoding.DecodeString(data)
	if err != nil {
		return "", err
	}

	decryptedBytes, err := rsa.DecryptPKCS1v15(rand.Reader, privateKey, encryptedBytes)
	if err != nil {
		return "", err
	}

	return string(decryptedBytes), nil
}
