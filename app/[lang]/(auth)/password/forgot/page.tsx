"use client";
import Image from "next/image";
import Link from "next/link";
import axiosClient from "@/app/lib/axiosClient";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/lib/useTranslation";

const Page = () => {
  const { t } = useTranslation();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email"));

    axiosClient
      .post("/password/email", { email })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setError(error.response.data.message);
          return;
        }
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
                <button type="submit" className="submit-button">
                  {t("form_send_password_reset_link")}
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
