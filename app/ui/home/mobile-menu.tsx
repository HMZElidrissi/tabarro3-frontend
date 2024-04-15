import { mobileMenu } from "@/app/lib/definitions";
import Link from "next/link";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const { status, data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
      {mobileMenu.map((item) => (
        <div key={item.name} className="flow-root">
          <Link
            href={item.href}
            className={clsx(item.className, {
              "text-primary-700": pathname === item.href,
            })}
          >
            {item.name}
          </Link>
        </div>
      ))}
      {status === "loading" && (
        <div className="text-primary-600 font-semibold text-sm">Loading...</div>
      )}
      {status === "authenticated" && (
        <>
          <div className="flow-root">
            <Link href="/myrequests" className="mobile-navbar-item">
              Dashboard
            </Link>
          </div>
          <div className="flow-root mobile-navbar-item font-bold border-t border-gray-200">
            Welcome, {session.user?.name} 🩸
          </div>
          <div className="flow-root">
            <Link
              href="/signout"
              className="mobile-navbar-item font-bold border-b border-gray-200"
            >
              Sign Out
            </Link>
          </div>
        </>
      )}
      {status === "unauthenticated" && (
        <>
          <div className="flow-root">
            <Link
              href="/signup"
              className="mobile-navbar-item font-bold border-t border-gray-200"
            >
              Create an account
            </Link>
          </div>
          <div className="flow-root">
            <Link
              href="/signin"
              className="mobile-navbar-item font-bold border-b border-gray-200"
            >
              Sign in
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
