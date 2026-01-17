const ContactPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-4xl flex-col gap-10 px-6 pb-24 pt-32 md:px-10 lg:px-0">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Contact
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Get in touch with ACM-W.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Simple, direct ways to reach the chapter. No clutter, no animations—just the essentials.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] md:items-start">
          {/* Left: Contact details + map */}
          <div className="space-y-6">
            <section className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h2 className="text-lg font-semibold md:text-xl">Official details</h2>
              <div className="space-y-3 text-sm text-slate-200 md:text-base">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Official email
                  </p>
                  <a
                    href="mailto:acmw@example.edu"
                    className="mt-1 inline-block text-sm text-blue-200 underline underline-offset-2"
                  >
                    acmw@example.edu
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Location
                  </p>
                  <p className="mt-1">
                    ACM-W Student Chapter,<br />
                    Example Institute of Technology,<br />
                    Main Campus, City, State, Country.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Social links
                  </p>
                  <ul className="mt-1 space-y-1 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-blue-200 underline underline-offset-2"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-blue-200 underline underline-offset-2"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-blue-200 underline underline-offset-2"
                      >
                       WhatsApp Group
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Map placeholder */}
            <section className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Google Map (optional)
              </p>
              <p className="text-sm text-slate-200 md:text-base">
                Embed your campus Google Map iframe here if your college allows it. Keep it static
                and minimal.
              </p>
              <div className="mt-3 h-52 w-full rounded-xl bg-slate-950/80" />
            </section>
          </div>

          {/* Right: Simple contact form */}
          <div>
            <section className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h2 className="text-lg font-semibold md:text-xl">Simple contact form</h2>
              <p className="text-sm text-slate-300 md:text-base">
                Use this for general queries, collaboration ideas, or questions about joining ACM-W.
              </p>

              <form className="mt-3 space-y-4 text-sm text-slate-200">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-blue-400"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-blue-400"
                    placeholder="you@college.edu"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-blue-400"
                    placeholder="Tell us how we can help."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
                >
                  Send message
                </button>

                <p className="text-[11px] text-slate-400">
                  This form is intentionally simple. You can later connect it to an email service or
                  backend endpoint.
                </p>
              </form>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;


