"use client";
import { createThirdwebClient } from "thirdweb";

export const clientID = process.env.CLIENT_ID;

export const clientV5 = createThirdwebClient({
  clientId: "CLIENT ID",
});
