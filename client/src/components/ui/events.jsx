const EventsPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-32 md:px-10 lg:px-0">
        {/* Header */}
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Events
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            The work we actually do.
          </h1>
          <p className="max-w-3xl text-sm text-slate-300 md:text-base">
            This is our proof of work—upcoming events you can join now, and a transparent archive
            of what we&apos;ve already delivered as a chapter.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] lg:items-start">
          {/* Left: Upcoming + Past */}
          <div className="space-y-10">
            {/* Upcoming Events */}
            <section className="space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold md:text-2xl">Upcoming Events</h2>
                  <p className="mt-1 text-sm text-slate-300 md:text-base">
                    Clear calls to action. If someone lands here, they should know exactly what to
                    do next.
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Join in
                </p>
              </div>

              <div className="space-y-4">
                {/* Example upcoming card */}
                <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-slate-900 to-slate-950 p-5 shadow-md backdrop-blur-xl">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                        Workshop · Open to all
                      </p>
                      <h3 className="text-lg font-semibold md:text-xl">
                        Getting Started with Open Source for Women in Computing
                      </h3>
                      <p className="text-sm text-slate-200 md:text-base">
                        Objective: demystify open source, set up GitHub, and help attendees make
                        their first contribution with mentors on-ground.
                      </p>
                      <p className="text-xs text-slate-400">
                        Speakers: senior ACM-W members + industry guest (TBD)
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-xs text-slate-300 md:items-end">
                      <p className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-blue-200">
                        26 Jan · On campus
                      </p>
                      <button className="mt-1 w-full rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-blue-400 md:w-auto">
                        Register now
                      </button>
                      <a
                        href="#"
                        className="text-[11px] underline-offset-2 hover:underline"
                      >
                        View detailed agenda
                      </a>
                    </div>
                  </div>
                </article>

                {/* Placeholder for more upcoming events */}
                <div className="rounded-2xl border border-dashed border-slate-600 bg-slate-900/70 p-4 text-xs text-slate-300 md:text-sm">
                  Add more upcoming events here with real registration links (Google Forms, college
                  portal, or external ticketing). Each card should answer: what, why, for whom, and
                  how to register.
                </div>
              </div>
            </section>

            {/* Past Events / Archive */}
            <section className="space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold md:text-2xl">Past Events</h2>
                  <p className="mt-1 text-sm text-slate-300 md:text-base">
                    Year-wise archive with outcomes and photos. This is where your credibility
                    lives.
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Archive
                </p>
              </div>

              <div className="space-y-4">
                {/* Example year block */}
                <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      2024 – 2025
                    </p>
                    <p className="text-[11px] text-slate-500">
                      List 3–6 key events with outcomes, not just titles.
                    </p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <article className="rounded-xl border border-white/10 bg-slate-950/60 p-3 text-xs md:text-sm">
                      <h3 className="text-sm font-semibold md:text-base">
                        ACM-W Tech Mentorship Circle
                      </h3>
                      <p className="mt-1 text-slate-300">
                        Objective: pair juniors with seniors for 8 weeks of guided learning.
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        Speakers / Mentors: 12 senior ACM-W members
                      </p>
                      <p className="mt-1 text-[11px] text-emerald-300">
                        Outcomes: 30+ mentees completed projects; 10 presented at internal demo day.
                      </p>
                      <p className="mt-2 text-[11px] text-blue-300">
                        Photos: add 3–5 curated images here (link or gallery section).
                      </p>
                    </article>

                    <article className="rounded-xl border border-white/10 bg-slate-950/60 p-3 text-xs md:text-sm">
                      <h3 className="text-sm font-semibold md:text-base">
                        Inclusive Computing 101 (Faculty + Students)
                      </h3>
                      <p className="mt-1 text-slate-300">
                        Objective: align faculty, students, and administration on why diversity in
                        computing matters.
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        Speakers: panel with faculty, alumni, and industry representative.
                      </p>
                      <p className="mt-1 text-[11px] text-emerald-300">
                        Outcomes: commitments for lab assistants, mentorship hours, and ACM-W budget.
                      </p>
                    </article>
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-slate-600 bg-slate-900/70 p-4 text-xs text-slate-300 md:text-sm">
                  Add previous years (2023–24, 2022–23, ...) with 2–4 highlight events each. This is
                  the section recruiters and sponsors will scroll through to understand your
                  consistency.
                </div>
              </div>
            </section>
          </div>

          {/* Right: Flagship Programs */}
          <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold md:text-xl">Flagship Programs</h2>
              <p className="text-sm text-slate-200 md:text-base">
                These are the programs we want to be known for—annual, consistent, and improving
                every year.
              </p>
            </section>

            <section className="space-y-4">
              <article className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 text-sm shadow-md backdrop-blur-lg">
                <h3 className="text-base font-semibold md:text-lg">Annual ACM-W Conference</h3>
                <p className="mt-2 text-slate-100">
                  A yearly gathering of students, faculty, and industry speakers focused on women in
                  computing, research showcases, and networking.
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Proof of work: agenda, speaker list, published schedule, and post-event report.
                </p>
              </article>

              <article className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-sm shadow-md backdrop-blur-lg">
                <h3 className="text-base font-semibold md:text-lg">Inclusive Hackathon</h3>
                <p className="mt-2 text-slate-100">
                  A hackathon where teams must include at least one woman or gender-minority member,
                  with mentorship at every stage.
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Proof of work: winning projects, problem statements, mentor roster, and feedback
                  from participants.
                </p>
              </article>

              <article className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm shadow-md backdrop-blur-lg">
                <h3 className="text-base font-semibold md:text-lg">Mentorship Program</h3>
                <p className="mt-2 text-slate-100">
                  Semester-long mentorship that pairs juniors with seniors, alumni, or industry
                  mentors for structured growth.
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Proof of work: number of pairs, sessions completed, projects shipped, and
                  testimonials.
                </p>
              </article>
            </section>

            <section className="mt-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-xs text-slate-100 md:text-sm">
              <p>
                Treat this page as a living portfolio. When someone asks, &quot;What does your
                ACM-W chapter actually do?&quot;, this is the link you send.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;


