const footerColumns = [
  {
    title: "Company",
    links: [
      ["About Travellers", "#top"],
      ["Our Community", "#community-heading"],
      ["Our Story", "#memories-heading"],
    ],
  },
  {
    title: "Travellers",
    links: [
      ["Popular Travellers", "#popular-travellers-heading"],
      ["Share Memories", "#memories-heading"],
      ["Community", "#community-heading"],
      ["Pricing", "#pricing"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["App Downloads", "#download-app"],
      ["Explore Travellers", "#popular-travellers-heading"],
      ["Travel Memories", "#memories-heading"],
    ],
  },
  {
    title: "Extras",
    links: [
      ["Meet the Community", "#community-heading"],
      ["Find Travel Buddies", "#popular-travellers-heading"],
      ["Get the App", "#download-app"],
    ],
  },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "Twitter") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M20.2 7.1v.5c0 5.2-4 11.2-11.2 11.2-2.2 0-4.3-.7-6-1.8h.9c1.8 0 3.5-.6 4.8-1.7a3.9 3.9 0 0 1-3.6-2.7c.2 0 .5.1.8.1.4 0 .7 0 1-.1a3.9 3.9 0 0 1-3.1-3.8v-.1c.5.3 1.1.5 1.8.5a3.9 3.9 0 0 1-1.2-5.2 11.1 11.1 0 0 0 8.1 4.1 3.9 3.9 0 0 1 6.7-3.6c.9-.2 1.7-.5 2.4-.9-.3.9-.9 1.6-1.7 2.1.8-.1 1.5-.3 2.2-.6-.5.8-1.2 1.4-1.9 2Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M23 7.1a2.9 2.9 0 0 0-2-2C19.2 4.6 12 4.6 12 4.6s-7.2 0-9 .5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 .5 12 30 30 0 0 0 1 16.9a2.9 2.9 0 0 0 2 2c1.8.5 9 .5 9 .5s7.2 0 9-.5a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .5-4.9 30 30 0 0 0-.5-4.9ZM9.7 15.3V8.7l5.8 3.3-5.8 3.3Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="px-6 pb-8 pt-4 sm:pb-12"
    >
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-xl bg-white shadow-[0_12px_40px_rgba(41,37,33,0.06)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/3 bg-gradient-to-r from-stone-100/80 to-transparent"
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-5 h-16 w-16 text-[#c8a9a0]"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="m24 7-10 15m30-13L34 24m21-6-10 15m-25 2L10 50m29-8L28 58m27-16L45 57"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>

        <div className="grid gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_1fr_1fr_1fr_1.25fr] lg:gap-8 lg:px-14">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-sm font-semibold text-[#292521]">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-xs text-stone-500 transition hover:text-[#ff6846] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6846]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section aria-labelledby="footer-subscribe-heading">
            <h2
              id="footer-subscribe-heading"
              className="text-sm font-semibold text-[#292521]"
            >
              Subscribe
            </h2>
            <form
              action="#site-footer"
              className="mt-4 flex max-w-sm"
              aria-describedby="footer-subscribe-note"
            >
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Email address"
                required
                disabled
                className="min-w-0 flex-1 rounded-l-md border border-stone-200 bg-white px-3 py-2.5 text-xs text-stone-700 placeholder:text-stone-400 disabled:cursor-not-allowed disabled:bg-stone-50"
              />
              <button
                type="submit"
                disabled
                aria-label="Subscribe to newsletter"
                className="flex w-10 shrink-0 items-center justify-center rounded-r-md bg-[#ff6846] text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 10h13m-5-5 5 5-5 5" />
                </svg>
              </button>
            </form>
            <p id="footer-subscribe-note" className="mt-2 text-[10px] text-stone-400">
              Newsletter sign-up coming soon.
            </p>

            <p className="mt-6 max-w-xs text-xs leading-5 text-stone-500">
              A community for curious travellers to connect and share their journeys.
            </p>
          </section>
        </div>

        <div className="mx-7 border-t border-stone-200 sm:mx-10 lg:mx-14" />

        <div className="flex flex-col gap-6 px-7 py-7 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <a
            href="#top"
            className="text-2xl font-semibold tracking-tight text-[#292521]"
          >
            Travellers
          </a>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-stone-600 sm:gap-x-7">
              <li><a className="hover:text-[#ff6846]" href="#community-heading">Reviews</a></li>
              <li><a className="hover:text-[#ff6846]" href="#popular-travellers-heading">People</a></li>
              <li><a className="hover:text-[#ff6846]" href="#popular-travellers-heading">Partners</a></li>
              <li><a className="hover:text-[#ff6846]" href="#memories-heading">Feedbacks</a></li>
              <li><a className="hover:text-[#ff6846]" href="#pricing">Pricing</a></li>
            </ul>
          </nav>

          <div aria-label="Social media links coming soon">
            <p className="mb-2 text-[10px] text-stone-400">Follow us soon</p>
            <ul aria-hidden="true" className="flex gap-3">
              {[
                "Facebook",
                "Instagram",
                "Twitter",
                "YouTube",
              ].map((name) => (
                <li key={name}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#292521] shadow-[0_4px_14px_rgba(41,37,33,0.1)]">
                    <SocialIcon name={name} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
