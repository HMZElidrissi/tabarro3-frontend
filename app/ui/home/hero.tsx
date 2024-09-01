import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { useTranslation } from "@/app/lib/useTranslation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const HeroComponent = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla carousel is ready");
    }
  }, [emblaApi]);

  return (
    <div
      className="bg-gradient-to-r from-primary-600 to-primary-400 py-24"
      id="hero"
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="text-center space-y-8">
          <div className="py-8 px-6 sm:pt-10 sm:px-16 lg:py-6 lg:pr-0 xl:py-6 xl:px-20 bg-white bg-opacity-10 rounded-lg shadow-xl">
            <div className="lg:self-center">
              <Image
                src="/hero.svg"
                alt={t("tabaro3_logo_alt")}
                className="mx-auto transform hover:scale-105 transition-transform duration-300"
                width={900}
                height={900}
              />
              <h1 className="text-3xl md:text-4xl text-white font-extrabold mb-4 tracking-tight">
                {t("hero_title")}
              </h1>
              <p className="text-lg leading-7 text-white max-w-3xl mx-auto">
                {t("hero_description")}
              </p>
              <Link
                href="/requests"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <HeartHandshake className="mr-2 h-6 w-6" />
                {t("donate_button")}
              </Link>
            </div>
          </div>
          <div className="mt-12 aspect-w-16 aspect-h-9 md:aspect-w-2 md:aspect-h-1">
            <div
              className="rounded-xl overflow-hidden shadow-2xl"
              ref={emblaRef}
            >
              <div className="flex">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="flex-[0_0_33.33%] min-w-0">
                    <Image
                      src={`/carousel/${index + 1}.jpeg`}
                      alt={`${t("carousel_image_alt")} ${index + 1}`}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
