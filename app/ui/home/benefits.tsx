import { benefits } from "@/app/lib/definitions";
import { useTranslation } from "@/app/lib/useTranslation";

export function BenefitsComponent() {
  const { t } = useTranslation();
  return (
    <div className="py-10" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("benefits.title")}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t("benefits.description")}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div
                key={benefit.name}
                className="relative transform transition duration-500 hover:scale-105 bg-white rounded-lg shadow-lg p-6"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {t(benefit.name)}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {t(benefit.description)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
