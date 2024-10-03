"use client";

import { useSearchParams } from "next/navigation";

const errors = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in.",
};

const Error = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessage =
    error && (errors[error as keyof typeof errors] ?? errors.default);

  return (
    <div className="alert alert-error text-center mb-4">
      <div className="text-sm font-medium text-red-600">{errorMessage}</div>
    </div>
  );
};

export default Error;
