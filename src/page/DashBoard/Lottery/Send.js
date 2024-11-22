// import { useAddress, useSigner, useContract } from "@thirdweb-dev/react";
// import { ethers } from "ethers";

// const BuyButton = ({ isEthPayment }) => {
//   const address = useAddress(); // Get user's wallet address
//   const signer = useSigner(); // Get signer to send transactions

//   const ADMIN_ADDRESS = "0xa2D5c51A941ea7c1CA1c72748bD301a873F5A7df"; // Admin address
//   const ETH_PRICE = "0.001"; // ETH price

//   const handleBuy = async () => {
//     if (!address || !signer) {
//       alert("Connect your wallet first!");
//       return;
//     }

//     try {
//       if (isEthPayment) {
//         // ETH Payment
//         const tx = await signer.sendTransaction({
//           to: ADMIN_ADDRESS,
//           value: ethers.utils.parseEther(ETH_PRICE),
//         });
//         await tx.wait();
//         alert("ETH payment successful!");
//       }

//     } catch (error) {
//       console.error("Transaction failed:", error);
//       alert("Transaction failed: " + error.message);
//     }
//   };

//   return (
//     <button className="btn btn-primary" onClick={handleBuy}>
//       {/* {isEthPayment ? "Pay with ETH" : "Pay with USDT"} */}
//       pay
//     </button>
//   );
// };

// export default BuyButton;
import { useAddress, useSigner, useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const BuyButton = ({ isEthPayment }) => {
  const address = useAddress(); // Get user's wallet address
  const signer = useSigner(); // Get signer to send transactions

  // USDT Contract Setup
  const USDT_CONTRACT_ADDRESS = "0xYourUSDTContractAddress";
  const { contract: usdtContract } = useContract(USDT_CONTRACT_ADDRESS);

  const ADMIN_ADDRESS = "0xa2D5c51A941ea7c1CA1c72748bD301a873F5A7df"; // Admin address
  const ETH_PRICE = "0.000021"; // ETH price
  const USDT_PRICE = "10"; // USDT price

  const handleBuy = async () => {
    if (!address || !signer) {
      alert("Connect your wallet first!");
      return;
    }
    try {
      if (isEthPayment) {
        // ETH Payment
        const tx = await signer.sendTransaction({
          to: ADMIN_ADDRESS,
          value: ethers.utils.parseEther(ETH_PRICE),
        });
        await tx.wait();
        alert("ETH payment successful!");
        console.log(tx);
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: " + error.message);
    }
  };

  return (
    <button className={"btn btn-primary"} onClick={handleBuy}>
      pay
    </button>
  );
};

export default BuyButton;
