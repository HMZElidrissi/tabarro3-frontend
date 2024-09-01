import { mobileMenu } from "@/app/lib/definitions";
import Link from "next/link";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/lib/useTranslation";

const MobileMenu = ({
  closeMobileMenu,
}: Readonly<{ closeMobileMenu: () => void }>) => {
  const { status, data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const { t, lang } = useTranslation();

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  const switchLanguage = (langCode: string) => {
    const newPathname = pathname.replace(`/${lang}`, `/${langCode}`);
    router.push(newPathname);
    closeMobileMenu();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white shadow-lg rounded-lg mt-2 py-4 px-6 space-y-4"
    >
      {mobileMenu.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={item.href}
            className={clsx(
              "block py-2 px-4 rounded-md transition-colors duration-200",
              pathname === item.href
                ? "bg-primary-100 text-primary-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100",
            )}
            onClick={handleLinkClick}
          >
            {t(item.name)}
          </Link>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pt-4 border-t border-gray-200"
      >
        <div className="text-sm font-medium text-gray-900 mb-2">
          {t("Select Language")}
        </div>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={clsx(
              "block w-full text-left py-2 px-4 rounded-md transition-colors duration-200",
              lang === language.code
                ? "bg-primary-100 text-primary-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100",
            )}
          >
            {language.name}
          </button>
        ))}
      </motion.div>

      {status === "loading" && (
        <div className="text-primary-600 font-semibold text-sm animate-pulse">
          {t("Loading...")}
        </div>
      )}
      {status === "authenticated" && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pt-4 border-t border-gray-200"
          >
            <Link
              href="/profile"
              className="block py-2 px-4 rounded-md bg-primary-500 text-white font-semibold transition-colors duration-200 hover:bg-primary-600"
              onClick={handleLinkClick}
            >
              {t("Welcome")}, {session.user?.name} 🩸
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/signout"
              className="block py-2 px-4 rounded-md bg-gray-200 text-gray-700 font-semibold transition-colors duration-200 hover:bg-gray-300"
              onClick={handleLinkClick}
            >
              {t("Sign Out")}
            </Link>
          </motion.div>
        </>
      )}
      {status === "unauthenticated" && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pt-4 border-t border-gray-200"
          >
            <Link
              href="/signup"
              className="block py-2 px-4 rounded-md bg-primary-500 text-white font-semibold transition-colors duration-200 hover:bg-primary-600"
              onClick={handleLinkClick}
            >
              {t("Create an account")}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/signin"
              className="block py-2 px-4 rounded-md bg-gray-200 text-gray-700 font-semibold transition-colors duration-200 hover:bg-gray-300"
              onClick={handleLinkClick}
            >
              {t("Sign in")}
            </Link>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default MobileMenu;
