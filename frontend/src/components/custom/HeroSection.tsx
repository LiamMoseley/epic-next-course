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
    <header className="relative h-[200px] bg-gradient-to-r from-royalblue-300 from-10% via-pictonblue-200 via-30% to-mountainmeadow-200 to-90% overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-30">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subHeading}</p>
      </div>
    </header>
  );
}
