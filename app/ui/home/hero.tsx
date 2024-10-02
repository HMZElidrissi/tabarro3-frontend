import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { useTranslation } from "@/app/lib/useTranslation";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

const HeroComponent = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log("Embla carousel is ready");
  //   }
  // }, [emblaApi]);

  return (
    <div
      className="bg-gradient-to-r from-primary-600 to-primary-400 py-10 md:py-20"
      id="hero"
    >
      <div className="container mx-auto px-4 md:px-12 xl:px-24">
        <div className="bg-white bg-opacity-10 rounded-lg shadow-xl p-6 md:p-12">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/hero.svg"
              alt={t("tabarro3_logo_alt")}
              className="mx-auto transform hover:scale-105 transition-transform duration-300 mb-8"
              width={800}
              height={800}
            />
            <h1 className="text-3xl md:text-4xl text-white font-extrabold mb-4 tracking-tight">
              {t("hero_title")}
            </h1>
            <p className="text-lg leading-7 text-white max-w-2xl mb-8">
              {t("hero_description")}
            </p>
            <div
              className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/cover.jpg"
                alt={t("blood_donation_image_alt")}
                width={1000}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
              >
                <Link
                  href="/requests"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  <HeartHandshake className="mr-2 h-6 w-6" />
                  {t("donate_button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* Carousel code
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
*/
}

export default HeroComponent;
