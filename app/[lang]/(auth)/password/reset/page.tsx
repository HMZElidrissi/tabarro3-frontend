"use client";
import Image from "next/image";
import Link from "next/link";
import axiosClient from "@/app/lib/axiosClient";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "@/app/lib/useTranslation";

const Page = () => {
  const { t } = useTranslation();

  const token = useSearchParams().get("token");
  console.log(token);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      password_confirmation: String(formData.get("password_confirmation")),
      token: token,
    };

    axiosClient
      .post("/password/reset", payload)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setError("An error occurred. Please try again later.");
      });
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
            <form className="space-y-6" onSubmit={handleReset}>
              {message && (
                <div className="text-center text-green-500 text-sm mb-2">
                  {message}
                </div>
              )}
              {error && (
                <div className="text-center text-red-500 text-sm mb-2">
                  {error}
                </div>
              )}
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
                />
              </div>
              <div>
                <label htmlFor="password_confirmation" className="form-label">
                  Confirm Password
                </label>
                <input
                  className="form-input"
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  placeholder="Confirm your password ..."
                />
              </div>

              <div>
                <button type="submit" className="submit-button">
                  {t("form_reset_password")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
