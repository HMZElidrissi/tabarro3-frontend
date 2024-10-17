import React from "react";
import { useTranslation } from "@/app/lib/useTranslation";
import { UserPlus, Droplet, Bell, Users } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "how_it_works_step1_title",
    description: "how_it_works_step1_description",
  },
  {
    icon: Droplet,
    title: "how_it_works_step2_title",
    description: "how_it_works_step2_description",
  },
  {
    icon: Bell,
    title: "how_it_works_step3_title",
    description: "how_it_works_step3_description",
  },
  {
    icon: Users,
    title: "how_it_works_step4_title",
    description: "how_it_works_step4_description",
  },
];

const HowItWorksComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-16" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("how_it_works_title")}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t("how_it_works_description")}
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mx-auto">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                  {t(step.title)}
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  {t(step.description)}
                </p>
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksComponent;
