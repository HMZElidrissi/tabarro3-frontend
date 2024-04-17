"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DesktopMenu from "@/app/ui/home/desktop-menu";
import MobileMenu from "@/app/ui/home/mobile-menu";
import Image from "next/image";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background-100">
      <div>
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <MobileMenu />
                {/* Links */}
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className="relative">
          <nav aria-label="Top">
            <div className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <Link href="/">
                      <span className="sr-only">tabaro3</span>
                      <Image
                        className="h-8 w-auto"
                        src="/logo.svg"
                        alt="tabaro3"
                      />
                    </Link>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars2Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <Link href="/" className="lg:hidden">
                    <span className="sr-only">tabaro3</span>
                    <Image
                      src="/logo.svg"
                      alt="tabaro3"
                      className="h-8 w-auto"
                    />
                  </Link>

                  {/* Desktop menu (lg+) */}
                  <DesktopMenu />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div>
        {/* Mobile filter dialog */}

        {children}
        <footer
          aria-labelledby="footer-heading"
          className="bg-white border-t border-gray-200"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-100 py-10 text-center">
              <p className="text-sm text-gray-500">
                &copy; 2024 tabaro3, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
