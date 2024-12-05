"use client";

import { bloodGroups } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import axiosClient from "@/app/lib/axiosClient";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/lib/useTranslation";
import LoadingButton from "@/app/ui/home/loading-button";

const SignUpPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    city: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    city: "",
    phone: "",
    blood_group: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = t("name_required");
        else if (value.length < 2) error = t("name_too_short");
        break;
      case "email":
        if (!value.trim()) error = t("email_required");
        else if (!/\S+@\S+\.\S+/.test(value)) error = t("email_invalid");
        break;
      case "password":
        if (!value) error = t("password_required");
        else if (value.length < 6) error = t("password_too_short");
        break;
      case "password_confirmation":
        if (!value) error = t("password_confirmation_required");
        else if (value !== formData.password)
          error = t("passwords_do_not_match");
        break;
      case "city":
        if (!value.trim()) error = t("city_required");
        break;
      case "phone":
        if (!value.trim()) error = t("phone_required");
        else if (!/^\d{10}$/.test(value)) error = t("phone_invalid");
        break;
    }
    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate all fields
    const newErrors = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key as keyof typeof errors] = validateField(
          key,
          formData[key as keyof typeof formData],
        );
        return acc;
      },
      {} as typeof errors,
    );

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    try {
      await axiosClient.post("/register", formData);
      router.push("/signin");
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setErrors((prev) => ({ ...prev, ...error.response.data.errors }));
      }
    } finally {
      setIsLoading(false);
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                "name",
                "email",
                "password",
                "password_confirmation",
                "city",
                "phone",
              ].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="form-label">
                    {t(`form_${field}`)}
                  </label>
                  <input
                    className="form-input"
                    type={
                      field.includes("password")
                        ? "password"
                        : field === "email"
                          ? "email"
                          : "text"
                    }
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={t(`form_${field}_placeholder`)}
                  />
                  {errors[field as keyof typeof errors] && (
                    <div className="text-center text-red-500 text-sm mt-1">
                      {errors[field as keyof typeof errors]}
                    </div>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="blood_group" className="form-label">
                  {t("form_blood_group")}
                </label>
                <select
                  className="form-select"
                  id="blood_group"
                  name="blood_group"
                  onChange={handleChange}
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
                <LoadingButton type="submit" isLoading={isLoading}>
                  {t("form_button")}
                </LoadingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
