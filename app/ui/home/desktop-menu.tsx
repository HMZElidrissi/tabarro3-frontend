import { desktopMenu } from "@/app/lib/definitions";
import Link from "next/link";
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

const DesktopMenu = () => {
  const { status, data: session } = useSession();

  return (
    <div className="hidden lg:flex flex-1 items-center justify-end">
      <div className="flex items-center lg:ml-8">
        {desktopMenu.map((item) => (
          <div key={item.name} className="flow-root">
            <Link href={item.href} className={item.className}>
              {item.name}
            </Link>
          </div>
        ))}
        {status === "loading" && <div>Loading...</div>}
        {status === "authenticated" && (
          <>
            <div className="flow-root navbar-username">
              Welcome, {session.user?.name} 🩸
            </div>
            <div className="flow-root">
              <Link href="/signout" className="desktop-button">
                <ArrowLeftEndOnRectangleIcon className="h-6 w-6 mr-2" />
                Sign Out
              </Link>
            </div>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <div className="flow-root">
              <Link href="/signup" className="desktop-button-outline">
                Create an account
              </Link>
            </div>
            <div className="flow-root">
              <Link href="/signin" className="desktop-button">
                <ArrowRightEndOnRectangleIcon className="h-6 w-6 mr-2" />
                Sign in
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DesktopMenu;
