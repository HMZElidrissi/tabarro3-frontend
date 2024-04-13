import { criterias } from "@/app/lib/definitions";
import Image from "next/image";

const CriteriasComponent = () => {
  return (
    <div className="py-10 border-b border-gray-200" id="criterias">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <section className="md:space-x-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Eligibility Criteria for Blood Donation
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 gap-8">
                {criterias.map((criteria) => (
                  <div key={criteria.name} className="criteria-card">
                    <h3 className="text-xl font-semibold mb-2">
                      {criteria.name}
                    </h3>
                    <p>{criteria.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:flex-1 flex md:justify-end">
              <Image
                src="/4.svg"
                alt="Blood donation"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CriteriasComponent;
