import ButtonGetKey from "@/components/ButtonGetKey";
import { privateKey, publicKey } from "@/utils/keyExample";
import { decryptData, encryptData } from "@/utils/myFunc";

const data =
  "BhapnFyj+Z8zU7hHzHEq7zxfaH/R6xpysX2AvhSnQZEb6eXyTjV6YdDBMuc4pgnCo2v/FvAsiSO9ncr5PoEo1pr3l+EONMiIkQyPIP4Wrrd080SdPaxTyJf/MHkz7igivUg95SgLSpX3eu1XRuweEJua2sDcHebw2csCnX0WexgPITaH/8ElOaNAgZTLOhgfaddHwc1ytssPXKCXcPmN3fCXYEVyEUuU6eXlr/CQef/QvqSGHeU0yMNzG7+Q9pJJpoKuT1i24EGmF9SMtivQ+AXIns8Ji5kPh/SUtDzX+4HLQOFBBZPAsIGG9DjYzveyV8tMD2CA9K92pUqiq3dWMw==";

export default function Home() {
  const encrypted = encryptData("apa kabar", publicKey);
  const decrypted = decryptData(data, privateKey);

  return (
    <div className=" max-w-6xl mx-auto p-4">
      <div className=" flex flex-col gap-4">
        <h1>Hello World</h1>
        <ButtonGetKey />
        <div className="flex-1">
          <p>Encrypt</p>
          <p className=" text-sm max-w-6xl overflow-x-auto">{encrypted}</p>
        </div>
        <div>
          <p>Decrypt</p>
          <p className=" text-sm">{decrypted}</p>
        </div>
      </div>
    </div>
  );
}
