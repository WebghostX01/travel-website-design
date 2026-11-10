import Image from "next/image";

const plans = [
  {
    name: "Standard",
    price: 29,
    description: "All the basics for businesses that are just getting started.",
    features: [
      "Organizes your travel plans",
      "Find places near hotel",
      "Tallies & displays travel stats",
    ],
  },
  {
    name: "Essentials",
    price: 99,
    description: "Advanced features for travelling that are needed.",
    features: [
      "Tracks reward programs",
      "Find places near hotel",
      "Find alternative flights",
      "Shows transportation options",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: 129,
    description: "Advanced features for pros who need more customization.",
    features: [
      "Country-specific travel info",
      "Finds better hotels",
      "Shows security wait times",
      "Tracks reward programs",
    ],
  },
];

export default function PricingSection() {
  return (
    <>
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="bg-white px-6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <header className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-stone-400">
              PRICING TABLE
            </p>
            <h2
              id="pricing-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-[#292521] sm:text-3xl"
            >
              Choose the plan that&apos;s right for you
            </h2>
            <span
              aria-hidden="true"
              className="mx-auto mt-4 block h-1 w-7 rounded-full bg-[#ffc34f]"
            />
          </header>

          <div className="mt-8 rounded-3xl bg-[#fff9f4] px-4 py-8 sm:px-8 sm:py-10">
            <div className="mb-7 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-stone-500">
              <span className="font-semibold text-[#292521]">Monthly pricing</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-stone-300" />
              <span>Annual billing details coming soon</span>
            </div>

            <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`flex flex-col rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(41,37,33,0.08)] sm:p-6 ${
                    plan.featured
                      ? "md:scale-[1.03] md:shadow-[0_14px_32px_rgba(41,37,33,0.14)]"
                      : ""
                  }`}
                >
                  <p className="flex items-baseline gap-1 text-[#292521]">
                    <span className="text-3xl font-semibold tracking-tight">
                      ${plan.price}
                    </span>
                    <span className="text-[10px] text-stone-400">/month</span>
                  </p>
                  <h3 className="mt-3 text-sm font-semibold text-[#292521]">
                    {plan.name}
                  </h3>
                  <p className="mt-2 min-h-10 text-xs leading-5 text-stone-500">
                    {plan.description}
                  </p>

                  <ul className="mt-5 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs leading-5 text-stone-600"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          className="mt-0.5 h-4 w-4 shrink-0"
                        >
                          <circle cx="10" cy="10" r="9" fill="#d9f3e8" />
                          <path
                            d="m6 10 2.5 2.5L14 7"
                            fill="none"
                            stroke="#54b88e"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    disabled
                    className={`mt-6 inline-flex min-h-10 cursor-not-allowed items-center justify-between rounded-md border px-3 text-xs font-semibold opacity-80 ${
                      plan.featured
                        ? "border-[#ff6846] bg-[#ff6846] text-white"
                        : "border-[#ff8c69] text-[#292521]"
                    }`}
                  >
                    Coming Soon
                    <span aria-hidden="true" className="text-base">→</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="download-app"
        aria-labelledby="download-app-heading"
        className="px-6 pb-16 sm:pb-24"
      >
        <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#ff7047] px-6 py-12 text-center sm:px-10 sm:py-14">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M-50 180C100 10 160 255 310 96s225 120 360-12 212 123 350-16 205 92 250-4M-20 240c130-123 190 96 320-12s232 96 365-3 222 94 360-10 192 82 245-5"
              stroke="#ff9a79"
              strokeOpacity=".48"
              strokeWidth="2"
            />
            <path
              d="M-20 60c120 100 200-88 330 13s224-74 340 9 228-87 350 10 202-78 260-13"
              stroke="#ff9a79"
              strokeOpacity=".38"
              strokeWidth="2"
            />
          </svg>

          <h2
            id="download-app-heading"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Download the travellers community app now!
          </h2>
          <p className="mt-2 text-xs text-white/85">
            Be the first one to explore one of the best travel applications.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3" aria-label="App downloads coming soon">
            <div className="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-3 py-2 text-left text-[#292521] shadow-sm">
              <Image
                src="/appleLogo.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-[8px]">Coming soon to the</span>
                <span className="text-xs font-semibold">App Store</span>
              </span>
            </div>
            <div className="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-3 py-2 text-left text-[#292521] shadow-sm">
              <Image
                src="/playStoreLogo.jpg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-[8px]">COMING SOON ON</span>
                <span className="text-xs font-semibold">Google Play</span>
              </span>
            </div>
          </div>
          <p className="mt-3 text-[10px] text-white/85">
            App downloads are coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
