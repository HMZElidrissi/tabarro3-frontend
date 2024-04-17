import { Suspense } from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default Layout;
