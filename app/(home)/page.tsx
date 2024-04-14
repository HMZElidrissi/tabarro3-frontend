import { donationCenters } from "@/app/lib/definitions";
import BenefitsComponent from "@/app/ui/home/benefits";
import CriteriasComponent from "@/app/ui/home/criterias";
import HeroComponent from "@/app/ui/home/hero";
import dynamic from "next/dynamic";

const Page = () => {
  const Map = dynamic(() => import("@/app/ui/home/map"), {
    loading: () => <p>loading...</p>,
    ssr: false,
  });
  return (
    <>
      <HeroComponent />
      <BenefitsComponent />
      <CriteriasComponent />
      <Map centers={donationCenters} />
    </>
  );
};

export default Page;
