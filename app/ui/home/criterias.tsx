import { criterias } from "@/app/lib/definitions";
import Image from "next/image";
import { useTranslation } from "@/app/lib/useTranslation";

const CriteriasComponent = () => {
  const { t } = useTranslation();
  return (
    <div
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      id="criterias"
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-primary-600 mb-8">
            {t("criterias.title")}
          </h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="flex-1 space-y-8 w-full md:w-1/2">
              {criterias.map((criteria, index) => (
                <div
                  key={criteria.name}
                  className="criteria-card transform transition duration-500 hover:scale-105"
                >
                  <div className="criteria-card-header">
                    <h3 className="text-xl font-semibold">
                      {t(criteria.name)}
                    </h3>
                  </div>
                  <div className="criteria-card-body">
                    <p className="text-gray-600">{t(criteria.description)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:flex-1 flex justify-center mt-12 md:mt-0">
              <Image
                src="/4.svg"
                alt="Blood donation"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CriteriasComponent;
