"use client";
import React from "react";
import {
  ConnectWallet,
  useAddress,
  useSigner,
  useDisconnect,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const RegistrationFunction = () => {
  const address = useAddress(); // Get the wallet address
  const signer = useSigner(); // Get the ethers.js signer
  const disconnect = useDisconnect(); // Function to disconnect the wallet
  const [isVerified, setIsVerified] = useState(false); // Track if the user signed the message

  const verifyWalletConnection = async () => {
    if (!signer) return;

    try {
      // Create a message for signing
      const message = `Welcome to the Lottery DApp! \n\n Address: ${address} \n\n Please confirm your wallet connection.`;

      // Request signature
      const signature = await signer.signMessage(message);

      // If successful, allow wallet connection
      Swal.fire("Wallet Verified", "Thank you for signing!", "success");
      setIsVerified(true);
    } catch (error) {
      console.error("Signing failed:", error);
      Swal.fire(
        "Error",
        "You must confirm the signing to connect your wallet.",
        "error"
      );

      // Disconnect wallet if signing fails
      disconnect();
    }
  };

  // Trigger verification when wallet connects
  useEffect(() => {
    if (address && !isVerified) {
      verifyWalletConnection();
    }
  }, [address]);

  return (
    <div>
      <ConnectWallet
        btnTitle="Connect"
        hideBuyButton
        hideNetworkSelector
        className="bg-primary"
      />
    </div>
  );
};

export default RegistrationFunction;
