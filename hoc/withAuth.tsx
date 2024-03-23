import React, { useEffect } from "react";
import { isAuthenticated } from "@/utils/actions";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;

/*
import withAuth from '../hoc/withAuth';

const ProtectedPage: React.FC = () => {
  return <div>Protected Page</div>;
};

export default withAuth(ProtectedPage);
*/
