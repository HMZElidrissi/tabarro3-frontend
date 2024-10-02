import { BloodRequest } from "@/app/lib/definitions";
import { fetchBloodRequests } from "@/app/lib/data";
import ProfileClient from "@/app/ui/home/profile-client";

const Page = async () => {
  const requests: BloodRequest[] = await fetchBloodRequests();
  return <ProfileClient requests={requests} />;
};

export default Page;
