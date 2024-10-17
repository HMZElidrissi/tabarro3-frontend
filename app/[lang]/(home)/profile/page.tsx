import { BloodRequest } from "@/app/lib/definitions";
import { fetchBloodRequests } from "@/app/lib/data";
import ProfileClient from "@/app/ui/home/profile-client";

const Page = async () => {
  const initialRequests: BloodRequest[] = await fetchBloodRequests();
  return <ProfileClient initialRequests={initialRequests} />;
};

export default Page;
