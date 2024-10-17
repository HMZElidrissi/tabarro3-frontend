"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/lib/useTranslation";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // Prevent automatic redirect
      });

      if (result?.error) {
        // Handle specific error messages
        setError(t("signin_error") || result.error);
      } else if (result?.ok) {
        // Successful sign-in, redirect to home page or dashboard
        router.push("/");
      }
    } catch (err) {
      console.error("Sign-in error:", err);
      setError(t("unexpected_error") || "An unexpected error occurred");
    }
  };

  return (
    <div className="h-screen">
      <div className="min-h-full flex flex-col justify-center py-10 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/">
            <Image
              className="mx-auto"
              width={200}
              height={200}
              src="/logo.svg"
              alt="tabarro3"
            />
          </Link>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {error && (
              <div className="alert alert-error text-center mb-4">
                <div className="text-sm font-medium text-red-600">{error}</div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSignin}>
              <div>
                <label htmlFor="email" className="form-label">
                  {t("form_email")}
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("form_email_placeholder")}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="form-label">
                  {t("form_password")}
                </label>
                <input
                  className="form-input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder={t("form_password_placeholder")}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-diesel-800 focus:ring-diesel-800 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {t("form_remember_me")}
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/password/forgot"
                    className="font-medium text-diesel-900 hover:text-diesel-950"
                  >
                    {t("form_forgot_password")}
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/signup"
                  className="text-sm font-medium text-diesel-950 hover:underline"
                >
                  {t("form_dont_have_account")}
                </Link>
              </div>

              <div>
                <button type="submit" className="submit-button">
                  {t("form_sign_in")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
