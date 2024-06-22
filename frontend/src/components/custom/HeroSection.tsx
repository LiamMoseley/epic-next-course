import Link from "next/link";
import { StrapiImage } from "@/components/custom/StrapiImage";
import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

interface Image {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface HeroSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
}

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image } = data;
  const imageURL = baseUrl + image.url;
  return (
    <header className="relative h-[400px] overflow-hidden">
      <StrapiImage
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full aspect/16:9"
        src={imageURL}
        height={1080}
        width={1920}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subHeading}</p>
      </div>
    </header>
  );
}
