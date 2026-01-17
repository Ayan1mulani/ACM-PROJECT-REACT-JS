const ChaptersPeoplePage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-32 md:px-10 lg:px-0">
        {/* Page header */}
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Chapters &amp; People
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            The people who make ACM-W real.
          </h1>
          <p className="max-w-3xl text-sm text-slate-300 md:text-base">
            Most clubs fail because they are just a logo and a WhatsApp group. This page makes our
            structure, accountability, and history visible—for students, faculty, and recruiters.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] lg:items-start">
          {/* Left column: current team + volunteers */}
          <div className="space-y-10">
            {/* Current Team */}
            <section className="space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold md:text-2xl">Current Team</h2>
                  <p className="mt-1 text-sm text-slate-300 md:text-base">
                    Clearly defined roles so everyone knows who is responsible for what.
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Transparent leadership
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    title: 'Chair',
                    name: 'TBD',
                    focus:
                      'Leads the chapter vision, represents ACM-W to faculty and external partners.',
                  },
                  {
                    title: 'Vice Chair',
                    name: 'TBD',
                    focus:
                      'Supports the chair and ensures continuity across events and initiatives.',
                  },
                  {
                    title: 'Secretary',
                    name: 'TBD',
                    focus:
                      'Documentation, minutes, communication, and making sure nothing falls through.',
                  },
                  {
                    title: 'Tech Lead',
                    name: 'TBD',
                    focus:
                      'Owns the technical stack for events, website, and student learning spaces.',
                  },
                  {
                    title: 'Design Lead',
                    name: 'TBD',
                    focus:
                      'Shapes the visual identity of ACM-W and ensures accessible, inclusive design.',
                  },
                  {
                    title: 'Outreach Lead',
                    name: 'TBD',
                    focus:
                      'Drives collaborations, school outreach, and communication with other chapters.',
                  },
                ].map((role) => (
                  <article
                    key={role.title}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-xl"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                        {role.title}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">{role.name}</h3>
                      <p className="mt-2 text-xs text-slate-200 md:text-sm">{role.focus}</p>
                    </div>
                    <p className="mt-3 text-[11px] text-slate-400">
                      Accountability: reachable, visible, and responsible for this area.
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Volunteers / Core Members */}
            <section className="space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold md:text-2xl">Volunteers &amp; Core Members</h2>
                  <p className="mt-1 text-sm text-slate-300 md:text-base">
                    The engine of the chapter—students who run logistics, follow up, and keep
                    events alive.
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Scalable impact
                </p>
              </div>

              <div className="rounded-2xl border border-dashed border-slate-600 bg-slate-900/60 p-5">
                <p className="text-sm text-slate-200 md:text-base">
                  Add names, photos, and short role tags for your core team here. Recruiters and
                  future committees will use this section to see who actually executed the work, not
                  just who held titles.
                </p>
                <p className="mt-3 text-xs text-slate-400">
                  Tip: Keep this updated every semester. It becomes a living record of contribution
                  that students can showcase in portfolios and CVs.
                </p>
              </div>
            </section>
          </div>

          {/* Right column: history + why it matters */}
          <aside className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
            {/* Past Leadership */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold md:text-xl">Past Leadership</h2>
              <p className="text-sm text-slate-200 md:text-base">
                Year-wise committees show continuity. They prove that ACM-W is not a one-year
                project, but an institution on campus.
              </p>
              <div className="mt-3 space-y-3 text-sm text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    2024 – 2025
                  </p>
                  <p className="mt-1 text-sm">
                    Chair, Vice Chair, Secretary, Tech, Design, Outreach — list names and key
                    initiatives here.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    2023 – 2024
                  </p>
                  <p className="mt-1 text-sm">
                    Add previous committees to show history and to help new teams reach out to
                    alumni for guidance.
                  </p>
                </div>
                <p className="text-xs text-slate-400">
                  Over time, this becomes proof of stability—something sponsors, faculty, and
                  external partners value highly.
                </p>
              </div>
            </section>

            {/* Why this matters */}
            <section className="space-y-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
              <h2 className="text-lg font-semibold md:text-xl">Why this matters</h2>
              <ul className="ml-4 list-disc space-y-2 text-sm text-slate-100 md:text-base">
                <li>Shows clear structure so students know who to approach and how to get involved.</li>
                <li>Builds accountability—every role has a face, not just a title on a poster.</li>
                <li>
                  Documents history, making handovers smoother and reducing the risk of the chapter
                  &quot;resetting&quot; every year.
                </li>
                <li>
                  Recruiters and sponsors use pages like this to gauge seriousness, stability, and
                  leadership depth.
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-300">
                Treat this page as your &quot;org chart + history&quot; for ACM-W. When it looks
                professional and stays updated, it speaks louder than any one-pager or pitch deck.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ChaptersPeoplePage;


