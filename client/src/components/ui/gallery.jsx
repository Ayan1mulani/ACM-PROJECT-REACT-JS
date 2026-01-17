const galleryData = [
  {
    year: '2024 – 2025',
    summary: 'A year of visible growth in outreach, mentorship, and deep-tech initiatives.',
    events: [
      {
        name: 'Inclusive Hackathon 2025',
        description: '48 hours of building with diverse teams and hands-on mentorship.',
        albumHint: 'Show teams, mentors, and final demos—not just group photos.',
      },
      {
        name: 'ACM-W Mentorship Showcase',
        description: 'End-of-semester demo day for mentorship projects and learning journeys.',
        albumHint: 'Capture mentee–mentor pairs, project posters, and candid feedback.',
      },
    ],
  },
  {
    year: '2023 – 2024',
    summary: 'Foundational work in setting up programs and recurring events.',
    events: [
      {
        name: 'Women in AI & Systems Day',
        description: 'Talks and mini-workshops focused on AI, systems, and security.',
        albumHint: 'Highlight speakers, whiteboard moments, and engaged audiences.',
      },
    ],
  },
];

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-24 pt-32 md:px-10 lg:px-0">
        {/* Header */}
        <header className="space-y-4 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Gallery
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Moments that make ACM-W human.
          </h1>
          <p className="max-w-3xl text-sm text-slate-300 md:text-base">
            Not a random dump of photos. A clean, year-wise timeline of events and albums that show
            students, mentors, and faculty in action.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative space-y-16">
          {/* vertical line for timeline (desktop only) */}
          <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/40 via-slate-700/40 to-transparent md:block" />

          {galleryData.map((yearBlock, yearIndex) => (
            <section key={yearBlock.year} className="space-y-6">
              {/* Year header */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="relative flex items-center gap-3">
                  {/* timeline dot */}
                  <div className="hidden md:block">
                    <div className="relative h-3 w-3 rounded-full bg-blue-400 ring-4 ring-blue-500/30" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Year
                    </p>
                    <h2 className="text-xl font-semibold md:text-2xl">{yearBlock.year}</h2>
                  </div>
                </div>
                <p className="max-w-2xl text-sm text-slate-300 md:text-base md:pl-8">
                  {yearBlock.summary}
                </p>
              </div>

              {/* Events / Albums */}
              <div className="space-y-10 md:pl-8">
                {yearBlock.events.map((event, eventIndex) => (
                  <article
                    key={`${yearBlock.year}-${event.name}`}
                    className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-sm backdrop-blur-xl md:p-6"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                          Event · Album {String(eventIndex + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold md:text-xl">{event.name}</h3>
                        <p className="mt-2 text-sm text-slate-200 md:text-base">
                          {event.description}
                        </p>
                      </div>
                      <p className="text-xs text-slate-400">
                        Minimal, intentional albums—no 200-photo dumps.
                      </p>
                    </div>

                    {/* Album layout hint / placeholders */}
                    <div className="mt-4 grid gap-4 md:grid-cols-[2fr,1fr]">
                      <div className="flex flex-col gap-4">
                        <div className="h-40 rounded-2xl bg-gradient-to-br from-blue-500/20 via-slate-900 to-slate-950 shadow-inner md:h-52" />
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-20 rounded-xl bg-slate-900/80" />
                          <div className="h-20 rounded-xl bg-slate-900/80" />
                          <div className="h-20 rounded-xl bg-slate-900/80" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between space-y-3 rounded-2xl border border-dashed border-slate-600 bg-slate-900/70 p-4 text-xs text-slate-300 md:text-sm">
                        <div>
                          <p className="font-semibold text-slate-100">How to curate this album</p>
                          <p className="mt-1">
                            {event.albumHint}
                          </p>
                        </div>
                        <ul className="ml-4 list-disc space-y-1">
                          <li>Keep 15–30 of the best images only.</li>
                          <li>Use short, clean captions (speaker name, activity, moment).</li>
                          <li>Compress images for web so the page loads fast.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Subtle separator between years */}
              {yearIndex < galleryData.length - 1 && (
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
              )}
            </section>
          ))}
        </div>

        {/* Closing note */}
        <footer className="mt-4 border-t border-slate-800 pt-6 text-xs text-slate-400 md:text-sm">
          This gallery is meant to feel calm and intentional. Over time, replace the placeholders
          with real, high-quality images and minimal captions that show the people behind ACM-W.
        </footer>
      </section>
    </main>
  );
};

export default GalleryPage;


