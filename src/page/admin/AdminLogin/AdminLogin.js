"use client";

import RegistrationFunction from "@/page/Register/RegisterForm/RegistationFunction";
import { useAddress } from "@thirdweb-dev/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const wallet = useAddress();
  const router = useRouter();
  const { data: user } = useSession();
  

  const handle = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password, wallet);

    try {
      const response = await signIn("credentials", {
        wallet: wallet,
        email,
        password,
        callbackUrl: "/admin/dashboard",
        redirect: false,
      });
      if (response?.status) {
        router.push("/admin/dashboard");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-md space-y-5 rounded-lg border bg-gray-700 p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Sign In
        </h1>
        <div>
          <RegistrationFunction />
          <form onSubmit={handle} className="space-y-2">
            <div className="space-y-2 text-sm">
              <label
                htmlFor="username"
                className="block  dark:text-zinc-300 font-medium"
              >
               Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="username"
                placeholder="Enter email"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                htmlFor="password"
                className="block  dark:text-zinc-300 font-medium"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="password"
                placeholder="Enter password"
                name="password"
                type="password"
                required
              />
              <div className="flex justify-end text-xs">
                <a
                  href="#"
                  className="text-zinc-700 hover:underline dark:text-zinc-300"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              disabled={!wallet}
              className="rounded-md bg-primary px-4 py-2 text-white transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
