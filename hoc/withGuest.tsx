import React, { useEffect } from "react";
import { isAuthenticated } from "@/utils/actions";
import {redirect} from "next/navigation";

const withGuest = (WrappedComponent: React.ComponentType<any>) => {
    const AuthenticatedComponent: React.FC = (props) => {

        useEffect(() => {
            if (isAuthenticated()) {
                redirect("/");
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withGuest;