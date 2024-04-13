import Image from "next/image";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/components/carousel";

const HeroComponent = () => {
  return (
    <div className="bg-primary-500 py-20" id="hero">
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
                donation can treat up to three individuals and may be used in a
                variety of medical situations, including surgeries, cancer
                treatments, and medical emergencies. By donating regularly, you
                significantly contribute to maintaining a sufficient supply for
                your community.
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
  );
};

export default HeroComponent;
