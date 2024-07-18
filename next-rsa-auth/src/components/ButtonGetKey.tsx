"use client";

import { generatePrivateAndPublicKey } from "@/utils/myFunc";
import React, { useCallback, useState } from "react";

const ButtonGetKey = () => {
  const [keys, setKeys] = useState<{
    publicKey: string;
    privateKey: string;
  }>({ privateKey: "", publicKey: "" });
  const handleGetPrivateAndPublicKey = useCallback(() => {
    const data = generatePrivateAndPublicKey();
    setKeys(data);
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <button onClick={handleGetPrivateAndPublicKey} className=" bg-sky-500">
        Generate Private and Public key
      </button>
      {keys.privateKey ? (
        <>
          <textarea
            value={keys.publicKey}
            onChange={(val) => console.log("val: ", val)}
            className=" w-full min-h-[200px] border border-gray-400"
          ></textarea>
          <textarea
            value={keys.privateKey}
            onChange={(val) => console.log("val: ", val)}
            className=" w-full min-h-[200px] border border-gray-400"
          ></textarea>
        </>
      ) : null}
    </div>
  );
};

export default ButtonGetKey;
