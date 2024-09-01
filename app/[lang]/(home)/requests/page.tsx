import { BloodRequest } from "@/app/lib/definitions";
import { fetchAllBloodRequests } from "@/app/lib/data";
import BloodRequestClient from "@/app/[lang]/(home)/requests/blood-request-client";

const Page = async () => {
  const requests: BloodRequest[] = await fetchAllBloodRequests();
  return <BloodRequestClient requests={requests} />;
};

export default Page;
