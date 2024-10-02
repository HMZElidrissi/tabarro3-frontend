import { useTranslation } from "@/app/lib/useTranslation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/rotaract_les_merinides/",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/rotaract-les-merinides/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-primary-600 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="/logo_white.svg"
              alt="tabarro3 Logo"
              width={20}
              height={20}
              className="w-auto"
            />
            <p className="mt-2 text-primary-200">{t("footer.byRotaract")}</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-primary-500 pt-8 flex justify-center items-center">
          <p className="text-sm text-primary-200">
            © {new Date().getFullYear()} tabarro3.{" "}
            {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
