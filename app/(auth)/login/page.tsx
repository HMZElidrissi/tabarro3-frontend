import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="min-h-full flex flex-col justify-center py-10 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
              className="mx-auto"
              width={200}
              height={200}
              src="logo.svg"
              alt="tabaro3"
            />
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" method="POST">
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
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link
                      href="/forgot-password"
                      className="font-medium text-diesel-900 hover:text-diesel-950"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/register"
                    className="text-sm font-medium text-diesel-950 hover:underline"
                  >
                    Don&apos;t have an account? Register
                  </Link>
                </div>

                <div>
                  <button type="submit" className="submit-button">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
