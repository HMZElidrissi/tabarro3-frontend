import { Fragment } from "react";
import { desktopMenu } from "@/app/lib/definitions";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/app/lib/useTranslation";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import {
  GlobeAltIcon,
  ChevronDownIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const DesktopMenu = () => {
  const { status, data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const { t, lang } = useTranslation();

  const getUserName = (): string => {
    return session?.user?.name || t("User");
  };

  const languages = [
    { code: "en", name: "EN" },
    { code: "fr", name: "FR" },
    { code: "ar", name: "AR" },
  ];

  const switchLanguage = (langCode: string) => {
    const newPathname = pathname.replace(`/${lang}`, `/${langCode}`);
    router.push(newPathname);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-2 flex-wrap">
      {desktopMenu.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            "px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200",
            "flex items-center justify-center text-center min-h-[40px]",
            pathname === item.href
              ? "bg-primary-100 text-primary-700"
              : "text-gray-700 hover:bg-gray-100 hover:text-primary-600",
          )}
        >
          <span className="inline-block">{t(item.name)}</span>
        </Link>
      ))}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500 min-h-[40px]">
            <GlobeAltIcon
              className="mr-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>{languages.find((l) => l.code === lang)?.name}</span>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 mr-2 w-46 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              {languages.map((language) => (
                <Menu.Item key={language.code}>
                  {({ active }) => (
                    <button
                      onClick={() => switchLanguage(language.code)}
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex items-center w-full px-4 py-2 text-sm`}
                    >
                      {language.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {status === "authenticated" ? (
        <Menu as="div" className="relative inline-block text-left ml-2">
          <div>
            <Menu.Button className="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500 min-h-[40px]">
              <UserIcon
                className="mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>
                {t("Welcome")}, {getUserName()}
              </span>
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/profile"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex items-center w-full px-4 py-2 text-sm`}
                    >
                      {t("Profile")}
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/signout"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex items-center w-full px-4 py-2 text-sm`}
                    >
                      {t("Sign out")}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <div className="flex items-center space-x-2 ml-2">
          <Link
            href="/create-account"
            className="px-3 py-2 rounded-md bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center min-h-[40px]"
          >
            <span className="inline-block">{t("Create an account")}</span>
          </Link>
          <Link
            href="/signin"
            className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center min-h-[40px]"
          >
            <span className="inline-block">{t("Sign in")}</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default DesktopMenu;
