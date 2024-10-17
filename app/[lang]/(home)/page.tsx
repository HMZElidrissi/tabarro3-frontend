"use client";

import { BenefitsComponent } from "@/app/ui/home/benefits";
import CriteriasComponent from "@/app/ui/home/criterias";
import HeroComponent from "@/app/ui/home/hero";
import MapComponent from "@/app/ui/home/map";
import HowItWorksComponent from "@/app/ui/home/how-it-works";

export default function Page() {
  return (
    <>
      <HeroComponent />
      <HowItWorksComponent />
      <BenefitsComponent />
      <CriteriasComponent />
      <MapComponent />
    </>
  );
}
