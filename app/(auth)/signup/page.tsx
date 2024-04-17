"use client";
import { bloodGroups } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import axiosClient from "@/app/lib/axiosClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
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
              alt="tabaro3"
            />
          </Link>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSignup}>
              {errors && (
                <div className="text-center text-red-500 text-sm mb-2">
                  {errors.name}
                </div>
              )}
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name ..."
                />
              </div>
              {errors && (
                <div className="text-center text-red-500 text-sm mb-2">
                  {errors.email}
                </div>
              )}
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email ..."
                />
              </div>
              {errors && (
                <div className="text-center text-red-500 text-sm mb-2">
                  {errors.password}
                </div>
              )}
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  className="form-input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your password ..."
                />
              </div>
              {errors && (
                <div className="text-center text-red-500 text-sm mb-2">
                  {errors.password_confirmation}
                </div>
              )}
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
              {errors && (
                <div className="text-center text-red-500 text-sm mb-2">
                  {errors.city}
                </div>
              )}
              <div>
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Your city ..."
                />
              </div>
              {errors && (
                <div className="text-center text-red-500 text-sm mb-2">
                  {errors.phone}
                </div>
              )}
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your phone ..."
                />
              </div>
              {errors && (
                <div className="text-center text-red-500 text-sm mb-2">
                  {errors.blood_group}
                </div>
              )}
              <div>
                <label htmlFor="blood_group" className="form-label">
                  Blood Group
                </label>
                <select
                  className="form-select"
                  id="blood_group"
                  name="blood_group"
                >
                  <option value="">Select your blood group</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-center">
                <Link
                  href="/signin"
                  className="text-sm font-medium text-diesel-950 hover:underline"
                >
                  Already have an account? Sign in
                </Link>
              </div>

              <div>
                <button type="submit" className="submit-button">
                  Sign up
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
