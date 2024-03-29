import { getSession } from "next-auth/react";

const fetchClient = async (url: string, method: string, options: any) => {
  const session = await getSession();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.accessToken}`,
  };

    const config = {
        method: method,
        headers: headers,
        ...options,
    };

    return fetch(url, config);
};

export default fetchClient;
