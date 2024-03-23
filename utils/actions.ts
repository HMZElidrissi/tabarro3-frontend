import axiosClient from "@/utils/axiosClient";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";

export const handleLogin = (
  email: string,
  password: string,
  setErrors: (errors: any) => void,
  router: ReturnType<typeof useRouter>
) => {
  axiosClient
    .post("/login", { email, password })
    .then((response) => {
      if (response.status === 200) {
        cookie.set("JWT_TOKEN", response.data.token);
        router.push("/dashboard");
      } else {
        setErrors({ email: response.data.message });
      }
    })
    .catch((error) => {
      if (error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ email: error.response.data.message });
      }
    });
};

export const isAuthenticated = (): boolean => {
  const token = cookie.get("JWT_TOKEN");
  return !!token;
};
