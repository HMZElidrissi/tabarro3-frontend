import React from "react";
import { Loader2 } from "lucide-react";

const LoadingButton = ({
  isLoading,
  children,
  className = "",
  ...props
}: any) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={`submit-button ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin h-5 w-5 mr-2" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;
