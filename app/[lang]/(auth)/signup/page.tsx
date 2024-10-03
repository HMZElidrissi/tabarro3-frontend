"use client";
import { bloodGroups } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import axiosClient from "@/app/lib/axiosClient";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/lib/useTranslation";

const SignUpPage = () => {
  const { t } = useTranslation();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    city: "",
    phone: "",
    blood_group: "",
  });
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newParticipant = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      password_confirmation: String(formData.get("password_confirmation")),
      city: String(formData.get("city")),
      phone: String(formData.get("phone")),
      blood_group: String(formData.get("blood_group")),
    };

    axiosClient
      .post("/register", newParticipant)
      .then((response) => {
        router.push("/signin");
      })
      .catch((error) => {
        const { response } = error;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors(response.data.errors);
          }
        }
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
            <form className="space-y-6" onSubmit={handleSignup}>
              <div>
                <label htmlFor="name" className="form-label">
                  {t("form_name")}
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("form_name_placeholder")}
                />
                {errors.name && (
                  <div className="text-center text-red-500 text-sm mt-1">
                    {errors.name}
                  </div>
                )}
              </div>

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
                {errors.email && (
                  <div className="text-center text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
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
                {errors.password && (
                  <div className="text-center text-red-500 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="password_confirmation" className="form-label">
                  {t("form_password_confirmation")}
                </label>
                <input
                  className="form-input"
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  placeholder={t("form_password_confirmation_placeholder")}
                />
                {errors.password_confirmation && (
                  <div className="text-center text-red-500 text-sm mt-1">
                    {errors.password_confirmation}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="city" className="form-label">
                  {t("form_city")}
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="city"
                  name="city"
                  placeholder={t("form_city_placeholder")}
                />
                {errors.city && (
                  <div className="text-center text-red-500 text-sm mt-1">
                    {errors.city}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="form-label">
                  {t("form_phone")}
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder={t("form_phone_placeholder")}
                />
                {errors.phone && (
                  <div className="text-center text-red-500 text-sm mt-1">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="blood_group" className="form-label">
                  {t("form_blood_group")}
                </label>
                <select
                  className="form-select"
                  id="blood_group"
                  name="blood_group"
                >
                  <option value="">{t("form_blood_group_placeholder")}</option>
                  <option value="">{t("form_blood_group_dont_know")}</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
                {errors.blood_group && (
                  <div className="text-center text-red-500 text-sm mt-1">
                    {errors.blood_group}
                  </div>
                )}
              </div>

              <div className="text-sm text-gray-500">
                {t("consent_message")}
              </div>

              <div className="text-center">
                <Link
                  href="/signin"
                  className="text-sm font-medium text-diesel-950 hover:underline"
                >
                  {t("form_have_account")}
                </Link>
              </div>

              <div>
                <button type="submit" className="submit-button">
                  {t("form_button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
