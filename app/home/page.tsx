import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/components/carousel";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { benefits, criterias } from "@/app/lib/definitions";

const Page = () => {
  return (
    <>
      <div className="bg-primary-500 py-20">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center space-y-4">
            <div className="py-8 px-6 sm:pt-10 sm:px-16 lg:py-6 lg:pr-0 xl:py-6 xl:px-20">
              <div className="lg:self-center">
                <Image
                  src="/logo_white.svg"
                  alt="tabaro3"
                  className="mx-auto mb-4"
                  width={200}
                  height={200}
                />
                <p className="block text-2xl text-white font-bold">
                  DONATE BLOOD .. SAVE LIVES
                </p>
                <p className="mt-4 text-lg leading-6 text-white">
                  Blood donation is a vital act that saves lives every day. Each
                  donation can treat up to three individuals and may be used in
                  a variety of medical situations, including surgeries, cancer
                  treatments, and medical emergencies. By donating regularly,
                  you significantly contribute to maintaining a sufficient
                  supply for your community.
                </p>
                <Link href="/donate" className="donate-button">
                  <HeartHandshake className="mr-2 h-6 w-6 inline-block" />
                  Donate Now
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <Carousel>
                <CarouselContent>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <CarouselItem key={index} className="sm:basis-1/3">
                      <Image
                        src={`/carousel/${index + 1}.jpeg`}
                        alt={`Carousel item ${index + 1}`}
                        width={800}
                        height={600}
                        loading="lazy"
                      />
                    </CarouselItem>
                  ))}
                  <CarouselItem className="basis-1/4"></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Benefits of Blood Donation
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Donating blood is not only beneficial for those who receive it.
                Donors can also enjoy many advantages, such as:
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {benefits.map((benefit) => (
                  <div key={benefit.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <benefit.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {benefit.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {benefit.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              Eligibility Criteria for Blood Donation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {criterias.map((criteria) => (
                <div className="criteria-card">
                  <h3 className="text-xl font-semibold mb-2">
                    {criteria.name}
                  </h3>
                  <p className="text-background-100">{criteria.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
