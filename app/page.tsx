import Image from "next/image";
import PricingSection from "./pricing-section";
import SiteFooter from "./site-footer";

type CommunityMemberProps = {
  name: string;
  country: string;
  imageSrc: string;
  className: string;
};

function CommunityMember({
  name,
  country,
  imageSrc,
  className,
}: CommunityMemberProps) {
  return (
    <article
      className={`absolute z-10 flex w-[112px] flex-col items-center rounded-2xl bg-white px-3 py-3 text-center shadow-[0_12px_30px_rgba(41,37,33,0.12)] sm:w-[128px] sm:px-4 ${className}`}
    >
      <Image
        src={imageSrc}
        alt={`${name}'s profile`}
        width={36}
        height={36}
        className="mb-2 h-9 w-9 rounded-full object-cover"
      />
      <span className="text-xs font-semibold text-[#292521]">{name}</span>
      <span className="mt-0.5 text-[10px] text-stone-400">{country}</span>
    </article>
  );
}

export default function Home() {

  const appleLogo = "/appleLogo.png";
  const playStoreLogo = "/playStoreLogo.jpg";
  const travel = "/travel-transparent.png"
  return (
    
    <>
      <div>
        <nav id="top" className="flex items-center justify-between p-6">
          <span className="font-bold text-3xl tracking-wider">Travellers</span>

          <div className="flex items-center gap-6 font-medium">
            <a href="#community-heading" className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-4 after:rounded-full after:bg-[#d94f26] after:content-['']">
              Reviews
            </a>
            <a href="#popular-travellers-heading">People</a>
            <a href="#popular-travellers-heading">Partners</a>
            <a href="#memories-heading">Feedbacks</a>
            <a href="#pricing">Pricing</a>
            <a href="#download-app" className="rounded-md bg-[#FF6B3D] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b83f1c] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d94f26]">
              Get the App
            </a>
          </div>
        </nav>
      </div>

     <div className=" p-6">
      <main className="relative isolate flex min-h-[calc(100vh-72px)] w-full flex-col items-center justify-between overflow-hidden rounded-3xl bg-[#faf6f0] p-6">
        
        
        <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-6xl items-center gap-8 px-6 py-12 font-[family-name:var(--font-poppins)] md:grid-cols-2 md:gap-12">
        <section className="max-w-xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-[#d94f26]">
            YOUR NEXT ADVENTURE STARTS HERE
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#292521] md:text-6xl">
            Don&apos;t listen to
            <br />
            what they say,
            <br />
            <span className="text-[#FF6B3D]">Go see.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-stone-600">
            Your ultimate travel companion. Carries all the information you need while travelling 
          </p>
          <div className="mt-8 flex flex-wrap gap-3" aria-label="App downloads coming soon">
            <div className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-left">
              <Image src={appleLogo} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
              <span className="flex flex-col leading-tight text-[#292521]">
                <span className="text-[10px]">Coming soon to the</span>
                <span className="text-sm font-semibold">App Store</span>
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-left">
              <Image src={playStoreLogo} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
              <span className="flex flex-col leading-tight text-[#292521]">
                <span className="text-[10px]">COMING SOON ON</span>
                <span className="text-sm font-semibold">Google Play</span>
              </span>
            </div>
          </div>
          <p className="mt-2 text-xs text-stone-500">App downloads are coming soon.</p>
        </section>

        <div className="relative aspect-[1810/1760] w-full justify-self-center overflow-hidden">
          <Image
            src={travel}
            alt="Illustration of a traveler with a suitcase"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
        </div>

        
      </main>
      </div>

      <section
        aria-labelledby="community-heading"
        className="overflow-hidden bg-white px-6 pb-20 pt-16 sm:pb-24 sm:pt-20"
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-400">
            BUILD UP A COMMUNITY
          </p>
          <h2
            id="community-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-[#292521] sm:text-3xl"
          >
            Join the biggest community of Travellers
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-1 w-7 rounded-full bg-[#FF6B3D]"
          />

          <div className="relative mx-auto mt-8 aspect-[1200/440] w-full max-w-6xl sm:mt-10">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1200 440"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <defs>
                <pattern
                  id="community-map-dots"
                  width="4"
                  height="4"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.6" fill="#e5e5e5" />
                </pattern>
                <clipPath id="community-map-shapes">
                  <path d="M80 105 115 77 166 75 188 93 227 91 250 121 230 142 201 147 188 177 159 181 145 208 117 204 101 175 73 160 60 132Z" />
                  <path d="m211 211 26 18 14 42-11 38 18 31-10 48-21 32-13-42-20-36 5-44-18-43Z" />
                  <path d="m491 111 33-27 53 7 28-19 53 7 21 22 41-4 31 19 53-2 23 25-16 20-40 1-25 21-40-7-28 25-36-14-35 11-27-15-34 7-22-17-37 7-17-23-33 2-17-25Z" />
                  <path d="m551 188 38 1 32 22 36 4 22 28-13 30 16 26-21 31-6 44-27 42-24-20-10-47-24-24-3-39-22-30 8-34-18-23Z" />
                  <path d="m850 299 39-22 34 8 22 28-17 26-46 5-31-18Z" />
                  <path d="m1010 332 31-16 41 13 22 26-30 21-42-7-25-18Z" />
                </clipPath>
                <clipPath id="community-orange-contours">
                  <circle cx="552" cy="203" r="132" />
                </clipPath>
                <clipPath id="community-left-contours">
                  <path d="M115 183c23-19 56-23 84-10l26 12c27 13 39 44 26 71l-9 19c-12 25-42 37-69 27l-44-16c-28-10-44-39-35-66Z" />
                </clipPath>
                <clipPath id="community-right-contours">
                  <path d="M917 171c19-20 50-28 77-20l28 8c29 8 48 36 43 66l-4 26c-5 29-31 50-61 47l-47-4c-30-3-53-28-53-58v-22c0-17 6-32 17-43Z" />
                </clipPath>
              </defs>
              <rect
                width="1200"
                height="440"
                fill="url(#community-map-dots)"
                clipPath="url(#community-map-shapes)"
              />
              <path
                d="M0 123C118 260 195 121 310 180s122 109 245 68 180-79 292 7 185 50 353 8"
                stroke="#f7d8d0"
                strokeWidth="4"
              />
              <circle cx="552" cy="203" r="132" fill="#ff6846" />
              <path
                d="M115 183c23-19 56-23 84-10l26 12c27 13 39 44 26 71l-9 19c-12 25-42 37-69 27l-44-16c-28-10-44-39-35-66Z"
                fill="#ffc34f"
              />
              <path
                d="M917 171c19-20 50-28 77-20l28 8c29 8 48 36 43 66l-4 26c-5 29-31 50-61 47l-47-4c-30-3-53-28-53-58v-22c0-17 6-32 17-43Z"
                fill="#ffc34f"
              />
              <path
                d="M328 173c74 18 83 68 155 59 59-7 95-53 160-40 60 12 77 57 143 44"
                stroke="#ffd0b6"
                strokeOpacity=".7"
                strokeWidth="3"
                clipPath="url(#community-orange-contours)"
              />
              <path
                d="M428 145c35-21 61 19 96 1s70-24 112-2M420 185c39-19 65 21 103 2s75-21 121-1M420 226c38-18 65 20 103 2s76-21 122-1M435 267c36-18 62 18 98 1s70-19 106-1"
                stroke="#ffd0b6"
                strokeOpacity=".58"
                strokeWidth="3"
                clipPath="url(#community-orange-contours)"
              />
              <path
                d="M134 214c28 4 35 26 65 24 18-1 29-10 42-18"
                stroke="white"
                strokeOpacity=".38"
                strokeWidth="2"
                clipPath="url(#community-left-contours)"
              />
              <path
                d="M127 245c28 4 35 26 65 24 18-1 29-10 42-18M136 275c28 4 35 26 65 24 18-1 29-10 42-18"
                stroke="white"
                strokeOpacity=".38"
                strokeWidth="2"
                clipPath="url(#community-left-contours)"
              />
              <path
                d="M930 216c31 1 40 22 73 18 22-2 32-13 43-23m-115 53c31 1 40 22 73 18 22-2 32-13 43-23m-105 50c31 1 40 22 73 18 22-2 32-13 43-23"
                stroke="white"
                strokeOpacity=".38"
                strokeWidth="2"
                clipPath="url(#community-right-contours)"
              />
            </svg>

            <CommunityMember
              name="Smith"
              country="England"
              imageSrc="/smith.jpg"
              className="left-[7%] top-[24%] sm:left-[13%]"
            />
            <CommunityMember
              name="Jessica"
              country="Egypt"
              imageSrc="/jessica.jpg"
              className="left-[67%] top-[24%] sm:left-[67%]"
            />
            <CommunityMember
              name="Sajon"
              country="Finland"
              imageSrc="/sajon.jpg"
              className="right-[3%] top-[41%] rotate-[-8deg] sm:right-[10%]"
            />
            <CommunityMember
              name="Julie"
              country="Poland"
              imageSrc="/julie.avif"
              className="left-[26%] top-[59%] rotate-[12deg] sm:left-[30%]"
            />
            <CommunityMember
              name="Farzan"
              country="Georgia"
              imageSrc="/forzan.jpg"
              className="left-[49%] top-[62%]"
            />

            <article className="absolute left-1/2 top-[18%] z-20 w-[132px] -translate-x-1/2 rotate-[-8deg] overflow-hidden rounded-xl bg-white shadow-[0_18px_40px_rgba(41,37,33,0.2)] sm:top-[15%] sm:w-[158px]">
              <div className="relative h-[92px] overflow-hidden bg-gradient-to-br from-[#ffb45e] via-[#f46b4a] to-[#713856] sm:h-[112px]">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 160 112"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 78 19 57l13 11 22-31 19 24 19-33 21 27 17-18 30 34v41H0Z"
                    fill="#8b4050"
                  />
                  <path
                    d="m0 89 26-27 15 13 28-34 25 31 17-20 22 26 27-17v51H0Z"
                    fill="#512f4a"
                  />
                  <path
                    d="M0 96c30-8 47 4 78-5 29-8 45-18 82-10v31H0Z"
                    fill="#342b48"
                    opacity=".7"
                  />
                </svg>
              </div>
              <div className="px-3 pb-3 pt-2 text-left sm:px-4">
                <p className="text-[10px] font-semibold text-[#292521] sm:text-xs">
                  Sajek Hill Spot
                </p>
                <div className="mt-2 flex items-center">
                  <Image src="/smith.jpg" alt="" width={20} height={20} className="h-5 w-5 rounded-full border-2 border-white object-cover" />
                  <Image src="/julie.avif" alt="" width={20} height={20} className="-ml-1 h-5 w-5 rounded-full border-2 border-white object-cover" />
                  <Image src="/forzan.jpg" alt="" width={20} height={20} className="-ml-1 h-5 w-5 rounded-full border-2 border-white object-cover" />
                  <span className="-ml-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#292521] text-[8px] font-bold text-white">+</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="popular-travellers-heading"
        className="overflow-hidden bg-white px-6 py-16 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-xs font-semibold tracking-[0.2em] text-stone-400">
              POPULAR TRAVELLERS
            </p>
            <h2
              id="popular-travellers-heading"
              className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight text-[#292521] sm:text-4xl"
            >
              Know the people you&apos;re going to meet
            </h2>
            <span
              aria-hidden="true"
              className="mt-5 block h-1 w-7 rounded-full bg-[#ff6846]"
            />
            <p className="mt-7 max-w-md text-sm leading-7 text-stone-600">
              Have a quick conversation anytime you need with your fellow
              travellers you&apos;re going to travel with.
            </p>

            <div className="mt-7 flex items-center" aria-label="Popular travellers">
              <Image
                src="/smith.jpg"
                alt="Smith"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <Image
                src="/jessica.jpg"
                alt="Jessica"
                width={40}
                height={40}
                className="-ml-2 h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <Image
                src="/sajon.jpg"
                alt="Sajon"
                width={40}
                height={40}
                className="-ml-2 h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <Image
                src="/julie.avif"
                alt="Julie"
                width={40}
                height={40}
                className="-ml-2 h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <span aria-hidden="true" className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white text-xl font-light text-[#ff6846] shadow-[0_5px_16px_rgba(41,37,33,0.12)]">
                +
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-stone-600">
              With one simple click you can know who you can have as your travel
              buddy.
            </p>
          </div>

          <div className="relative mx-auto flex aspect-[1/1] w-full max-w-[500px] items-center justify-center">
            <p
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[3%] left-1/2 z-0 -translate-x-1/2 text-[clamp(4rem,14vw,9rem)] font-bold tracking-[-0.08em] text-stone-50"
            >
              Travellers
            </p>

            <svg
              aria-hidden="true"
              className="absolute left-[5%] top-[5%] h-28 w-28 text-stone-200"
              viewBox="0 0 120 120"
              fill="currentColor"
            >
              <path d="m22 56 13-16 7 3-13 16Zm24-25 13-16 7 3-13 16Zm13 25 13-16 7 3-13 16Zm11-34 13-16 7 3-13 16Zm13 25 13-16 7 3-13 16Zm11-34 13-13 7 3-13 13Z" />
            </svg>

            <svg
              aria-hidden="true"
              className="absolute right-[2%] top-[12%] h-[78%] w-[78%]"
              viewBox="0 0 400 400"
              fill="none"
            >
              <path
                d="M92 37C144 17 282 15 326 46c39 27 34 85 48 137 13 48 2 135-40 162-42 26-101-3-158-8-52-5-127 0-151-42-24-42 8-103 18-158C53 91 45 55 92 37Z"
                fill="#ff6846"
              />
              <path
                d="M83 112c45-27 79 25 124 1s70-44 121-22M55 180c52-25 87 27 137 2s77-42 144-17M48 241c46-18 83 26 132 7s89-40 150-19"
                stroke="#ff9a79"
                strokeWidth="3"
                opacity=".55"
              />
            </svg>

            <div className="relative z-10 mr-[13%] mt-[-2%] h-[76%] w-[36%] min-w-[160px] max-w-[190px] rounded-[2rem] border-[5px] border-[#211f20] bg-white p-2 shadow-[0_22px_55px_rgba(41,37,33,0.2)]">
              <div className="h-full overflow-hidden rounded-[1.4rem] bg-[#fffdfa] px-2.5 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">‹</span>
                  <span className="text-[8px] font-semibold text-[#292521]">
                    Popular Travellers
                  </span>
                  <Image
                    src="/jessica.jpg"
                    alt=""
                    width={22}
                    height={22}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <article className="rounded-md bg-white p-2 shadow-[0_2px_8px_rgba(41,37,33,0.1)]">
                    <div className="flex items-center gap-1.5">
                      <Image
                        src="/sajon.jpg"
                        alt=""
                        width={22}
                        height={22}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[6px] font-semibold text-[#292521]">
                          Alex Wijovan
                        </p>
                        <p className="text-[5px] text-stone-400">
                          From&nbsp; England
                        </p>
                      </div>
                    </div>
                    <div className="ml-6 mt-2 border-l border-stone-100 pl-2">
                      <p className="text-[5px] font-semibold text-[#292521]">
                        Recent Post
                      </p>
                      <p className="mt-1 text-[5px] leading-3 text-stone-500">
                        The original solo travel blogger sharing destination
                        ideas and adventures.
                      </p>
                      <div className="mt-1.5 flex gap-1">
                        <span className="h-7 flex-1 rounded-sm bg-gradient-to-br from-[#ffc56e] to-[#a74a32]" />
                        <span className="h-7 flex-1 rounded-sm bg-gradient-to-br from-[#ddc09a] to-[#655247]" />
                      </div>
                    </div>
                    <span className="mt-2 block w-full rounded border border-[#ffd4c5] py-1 text-center text-[6px] font-semibold text-[#ff6846]">
                      See Profile
                    </span>
                  </article>
                  <article className="rounded-md bg-white p-2 shadow-[0_2px_8px_rgba(41,37,33,0.1)]">
                    <div className="flex items-center gap-1.5">
                      <Image
                        src="/smith.jpg"
                        alt=""
                        width={22}
                        height={22}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[6px] font-semibold text-[#292521]">
                          Sandy Kart
                        </p>
                        <p className="text-[5px] text-stone-400">
                          From&nbsp; Canada
                        </p>
                      </div>
                    </div>
                    <p className="ml-6 mt-2 text-[5px] leading-3 text-stone-500">
                      Travel blogger who documents her globetrotting
                      adventures.
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <article className="absolute right-[1%] top-[38%] z-20 w-[55%] max-w-[250px] rounded-xl bg-white p-3 shadow-[0_16px_40px_rgba(41,37,33,0.18)] sm:p-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/jessica.jpg"
                  alt=""
                  width={34}
                  height={34}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-[9px] font-semibold text-[#292521] sm:text-[10px]">
                    Sandy Kart
                  </p>
                  <p className="text-[8px] text-stone-400">From&nbsp; Canada</p>
                </div>
              </div>
              <div className="ml-10 mt-2 border-l border-stone-100 pl-2">
                <p className="text-[8px] font-semibold text-[#292521]">
                  Recent Post
                </p>
                <p className="mt-1 text-[7px] leading-3 text-stone-500 sm:text-[8px]">
                  Travel blogger who documents her globetrotting adventures.
                </p>
                <div className="mt-2 flex gap-1.5">
                  <span className="h-10 flex-1 rounded bg-gradient-to-br from-[#ffc56e] to-[#9c4a31]" />
                  <span className="h-10 flex-1 rounded bg-gradient-to-br from-[#dfc9a8] to-[#695145]" />
                </div>
              </div>
              <div className="ml-10 mt-2 flex gap-1.5">
                <span className="flex-1 rounded border border-[#ffd4c5] py-1.5 text-center text-[7px] font-semibold text-[#ff6846] sm:text-[8px]">
                  See Profile
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-[#ff6846] text-[10px] text-white">
                  ↗
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="memories-heading"
        className="overflow-hidden bg-[#fffdfa] px-6 py-16 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto aspect-[1/1] w-full max-w-[500px]">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full text-[#eeeae5]"
              viewBox="0 0 500 500"
              fill="none"
            >
              <g
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                opacity=".7"
              >
                <path d="M12 360V185l73-51 72 51v175M29 193h112M43 213v55h34v-55Zm56 0v55h34v-55ZM0 360h190" />
                <path d="m140 360 16-160 62-48 61 48 16 160M160 214h120M177 232v44h31v-44Zm55 0v44h31v-44ZM150 311h128v49M202 360v-32h34v32M283 360V213l59-42 61 42v147M299 224h88M313 240v44h27v-44Zm48 0v44h27v-44ZM273 360h149M35 173v-38h26v20M198 178v-35h25v18M330 169v-31h24v15" />
                <path d="M16 300c28-12 50-12 75 0m-65 12c22-8 43-8 63 0m-38-83v31m16-31v31m100-36v34m17-34v34m91-34v34m18-34v34m92-32v34m17-34v34" />
              </g>
            </svg>

            <Image
              src="/photographer-cutout.png"
              alt="A traveler taking a photograph"
              width={387}
              height={516}
              className="absolute bottom-0 left-[7%] z-10 h-[94%] w-[74%] object-contain object-bottom"
            />

            <article className="absolute bottom-[10%] right-0 z-20 w-[62%] rounded-lg bg-white p-4 shadow-[0_16px_40px_rgba(41,37,33,0.12)] sm:p-5">
              <div className="absolute -left-5 -top-4 h-11 w-11 overflow-hidden rounded-full border-4 border-white shadow-sm">
                <Image
                  src="/forzan.jpg"
                  alt=""
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="pl-5 text-[10px] leading-5 text-stone-600 sm:text-xs">
                Every day is a new day, and you&apos;ll never be able to find
                happiness if you don&apos;t travel the new places around the
                world.
              </p>
              <p className="mt-3 text-right text-[10px] font-semibold text-stone-500 sm:text-xs">
                <span className="text-[#ffb83f]">— </span>Luke James
              </p>
            </article>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <p className="text-xs font-semibold tracking-[0.2em] text-stone-400">
              GET CONNECTED
            </p>
            <h2
              id="memories-heading"
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#292521] sm:text-4xl"
            >
              Share your memories
              <br className="hidden sm:block" /> with your travel buddies
            </h2>
            <span
              aria-hidden="true"
              className="mt-5 block h-1 w-7 rounded-full bg-[#ffc34f]"
            />

            <div className="mt-9 space-y-6">
              <article className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ff6846] shadow-[0_5px_16px_rgba(41,37,33,0.1)]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4M8 8l8 8m0-8-8 8" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#292521]">Sign Up</h3>
                  <p className="mt-1 max-w-sm text-xs leading-5 text-stone-500">
                    Make an account and log in to keep yourself updated on the travellers platform.
                  </p>
                </div>
              </article>

              <article className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ff6846] shadow-[0_5px_16px_rgba(41,37,33,0.1)]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 2a7 7 0 0 0-4.1 12.67c.57.42.93 1.02 1.04 1.68h6.12c.11-.66.47-1.26 1.04-1.68A7 7 0 0 0 12 2Zm-2.5 16h5v1.5h-5V18Zm1 3h3v1h-3v-1Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#292521]">Create Events</h3>
                  <p className="mt-1 max-w-sm text-xs leading-5 text-stone-500">
                    Create an event to gather your fellow travellers and get to know them.
                  </p>
                </div>
              </article>

              <article className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ff6846] shadow-[0_5px_16px_rgba(41,37,33,0.1)]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 2.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM5 13.5A3.5 3.5 0 1 0 5 20.5a3.5 3.5 0 0 0 0-7Zm14 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#292521]">Share Memories</h3>
                  <p className="mt-1 max-w-sm text-xs leading-5 text-stone-500">
                    Upload and share stories with your fellow travellers anytime.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>


      <PricingSection />
      <SiteFooter />
    </>
  );
}
