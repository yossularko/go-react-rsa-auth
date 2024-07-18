package main

import (
	"fmt"
	"go-rsa-auth/utils"
)

var data = "bgvUqajQsLKtwPSMAov1afPhzV2KjIOdFHwZAGl0RX7ImwngvAqJypmi2MsQuodPEWLgnU/luamxp/A+pLOumKF8HUxhNsOZHg0nrtn4DJA1Z0PZVm+QeKiuhcod89BgRtuXnFIuS8FVdBdaHgrhqfnaWig0n3FyLJOPtQ8uwwMjvcEvGuVCuxW86AxnPRVHAP98fVuEpxEgg0AVmvKtIGk2oRUg4O+aFBT3sm8DmsVlRtQdXjj/bu+WgeJklrwiqVAVw+A7gyhksBXBYK0tn0Nl7Uirauoa9mvxtW2eT0KI3iGRmXvXmgmdUJP2MP+DtrcyX2SPh/OQMJ60MNxHGg=="

func main() {
	encrypted, err := utils.EncryptData("sate padang")
	if err != nil {
		panic(err)
	}
	fmt.Println("encrypted:", encrypted)

	decrypted, err := utils.DecryptData(data)
	if err != nil {
		panic(err)
	}
	fmt.Println("decrypted:", decrypted)
}
