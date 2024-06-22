import Image from "next/image";

interface FeatureProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: string;
}

interface FeatureSectionProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  feature: FeatureProps[];
}

export function FeatureSection({
  data,
}: {
  readonly data: FeatureSectionProps;
}) {
  const { feature } = data;

  let columnCount: number = 3;
  if (feature.length < 3) {
    columnCount = feature.length;
  }

  return (
    <div className="mb-40">
      <div className="flex-1">
        <section className="container px-4 py-6 mx-auto md:px-6 lg:py-24">
          <div className={`grid gap-8 md:grid-cols-3`}>
            {feature.map((feature) => (
              <div
                key={feature.id}
                className="relative z-[10] bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
              >
                <div className="mx-auto max-w-md">
                  <div className="divide-y divide-gray-300/50">
                    <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                      <div className="flex flex-col items-center text-center">
                        <div
                          className="w-12 h-12 mb-4 text-wildstrawberry-400"
                          dangerouslySetInnerHTML={{
                            __html: JSON.parse(feature.icon).component,
                          }}
                        ></div>
                        <h2 className="mb-4 text-2xl font-bold">
                          {feature.heading}
                        </h2>
                        <p className="text-gray-500">{feature.subHeading}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
