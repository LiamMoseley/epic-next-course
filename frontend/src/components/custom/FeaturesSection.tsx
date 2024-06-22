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
    <div className="">
      <div className="flex-1">
        <section className="container px-4 py-6 mx-auto md:px-6 lg:py-24">
          <div className={`grid gap-8 md:grid-cols-${columnCount}`}>
            {feature.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-12 h-12 mb-4 text-black"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(feature.icon).component,
                  }}
                ></div>
                <h2 className="mb-4 text-2xl font-bold">{feature.heading}</h2>
                <p className="text-gray-500">{feature.subHeading}</p>
              </div>
            ))}

            {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
              <Image
                src="/layout/beams.jpg"
                alt=""
                className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                width="1308"
                height="818"
              />
              <div className="absolute inset-0 bg-[url(/layout/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
              <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                  <img
                    src="/img/logo.svg"
                    className="h-6"
                    alt="Tailwind Play"
                  />
                  <div className="divide-y divide-gray-300/50">
                    <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                      <p>
                        An advanced online playground for Tailwind CSS,
                        including support for things like:
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">
                            Customizing your
                            <code className="text-sm font-bold text-gray-900">
                              tailwind.config.js
                            </code>{" "}
                            file
                          </p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">
                            Extracting classNamees with
                            <code className="text-sm font-bold text-gray-900">
                              @apply
                            </code>
                          </p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">
                            Code completion with instant preview
                          </p>
                        </li>
                      </ul>
                      <p>
                        Perfect for learning how the framework works,
                        prototyping a new idea, or creating a demo to share
                        online.
                      </p>
                    </div>
                    <div className="pt-8 text-base font-semibold leading-7">
                      <p className="text-gray-900">
                        Want to dig deeper into Tailwind?
                      </p>
                      <p>
                        <a
                          href="https://tailwindcss.com/docs"
                          className="text-sky-500 hover:text-sky-600"
                        >
                          Read the docs &rarr;
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
