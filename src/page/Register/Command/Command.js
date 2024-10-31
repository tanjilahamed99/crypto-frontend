import React from "react";

const Command = () => {
  return (
    <div className="border border-primary text-white p-5 rounded-lg">
      <h2 className="text-2xl font-semibold leading-none tracking-tight">
        How to register in Istimate-Pro?
      </h2>

      <div className="mt-8 space-y-3">
        <div className="flex md:items-center gap-2 font-semibold">
          <p className=" w-10 h-10 flex items-center justify-center text-xl text-primary font-semibold  rounded-full bg-gray-600">
            1
          </p>
          <p className="w-fit">
            Install a BSC chain(BEP20) wallet on your smartphone or PC.[Token
            Pocket, Metamask, Trust Wallet]
          </p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <p className="w-10 h-10 flex items-center justify-center text-xl text-primary font-semibold  rounded-full bg-gray-600">
            2
          </p>
          <p className="w-fit">Fill your Wallet with at least 5 USDT & 0.003 BNB.</p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <p className="w-10 h-10 flex items-center justify-center text-xl text-primary font-semibold  rounded-full bg-gray-600">
            3
          </p>
          <p className="w-fit">
            Directly Paste Your Upline link or Directly Click on Registration
            Button from Website & Follow our steps.
          </p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <p className="w-10 h-10 flex items-center justify-center text-xl text-primary font-semibold  rounded-full bg-gray-600">
            4
          </p>
          <p className="w-fit">
            You have no Upline, then copy & paste in Browser:-
            https://www.meta-pro.space/en/register?ref=9421052696
          </p>
        </div>
      </div>
    </div>
  );
};

export default Command;
