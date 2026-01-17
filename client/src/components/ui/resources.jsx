const learningPaths = [
  {
    title: 'Data Structures & Algorithms (DSA)',
    level: 'Foundations',
    description:
      'Build strong problem-solving skills for internships, interviews, and competitive programming.',
    bullets: [
      'Start with language basics (C++ / Java / Python) and simple problems.',
      'Progress through arrays, strings, linked lists, stacks, queues, trees, graphs, DP.',
      'Mix theory with regular practice on platforms like LeetCode, CodeStudio, or HackerRank.',
    ],
  },
  {
    title: 'Web Development',
    level: 'Applied',
    description:
      'Go from static websites to full-stack apps you can demo in portfolios and events.',
    bullets: [
      'Begin with HTML, CSS, and basic JavaScript to understand the browser.',
      'Pick a modern framework (React, Next.js) and build 2–3 end-to-end projects.',
      'Learn basic backend (Node/Express) or serverless functions for simple APIs.',
    ],
  },
  {
    title: 'AI / ML',
    level: 'Deep Tech',
    description:
      'Explore the fundamentals of machine learning and build small but meaningful projects.',
    bullets: [
      'Strengthen math basics: linear algebra, probability, and calculus.',
      'Start with Python, NumPy, pandas, then move to scikit-learn and PyTorch / TensorFlow.',
      'Participate in Kaggle-style challenges or guided research/mini projects.',
    ],
  },
];

const opportunities = [
  {
    title: 'Grace Hopper Celebration',
    type: 'Conference',
    description:
      'One of the largest gatherings of women and non-binary technologists in the world.',
    tips: [
      'Track scholarship deadlines early; they close months before the conference.',
      'Prepare a clear story about your work, projects, and community impact.',
    ],
  },
  {
    title: 'Google Summer of Code (GSoC)',
    type: 'Open Source Program',
    description:
      'A global program that pays students to contribute to open source under mentorship.',
    tips: [
      'Start exploring organizations and contributing well before applications open.',
      'Use your ACM-W open source initiatives to build a track record.',
    ],
  },
  {
    title: 'ACM / ACM-W Scholarships & Grants',
    type: 'Scholarships',
    description:
      'Funding for travel, research, and conference participation for students in computing.',
    tips: [
      'Align your applications with clear impact and how you will bring value back to your chapter.',
      'Ask faculty mentors and ACM-W advisors for feedback on essays.',
    ],
  },
];

const ResourcesPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-32 md:px-10 lg:px-0">
        {/* Header */}
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Resources
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Underrated, high-value resources for ACM-W members.
          </h1>
          <p className="max-w-3xl text-sm text-slate-300 md:text-base">
            This page is built to compound over time—students, alumni, and mentors can keep coming
            back to learn, apply, and grow. It&apos;s how your chapter stays relevant between events.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] lg:items-start">
          {/* Left: Learning paths + Recorded / Blog */}
          <div className="space-y-8">
            {/* Learning Paths */}
            <section className="space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold md:text-2xl">Learning Paths</h2>
                  <p className="mt-1 text-sm text-slate-300 md:text-base">
                    Curated starting points so members don&apos;t feel lost when they begin.
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Long-term growth
                </p>
              </div>

              <div className="space-y-4">
                {learningPaths.map((path) => (
                  <article
                    key={path.title}
                    className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-5 shadow-md ring-1 ring-white/5 backdrop-blur-xl md:p-6"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold md:text-xl">{path.title}</h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                          {path.level}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-200 md:text-base">{path.description}</p>
                    <ul className="mt-3 ml-4 list-disc space-y-1 text-sm text-slate-200 md:text-base">
                      {path.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* Recorded Talks & Blog */}
            <section className="space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold md:text-2xl">Recorded Talks &amp; Articles</h2>
                  <p className="mt-1 text-sm text-slate-300 md:text-base">
                    Capture the best of your chapter&apos;s sessions so people can keep learning
                    asynchronously.
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Compounding library
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm shadow-sm backdrop-blur-lg">
                  <h3 className="text-base font-semibold md:text-lg">Recorded Talks</h3>
                  <p className="mt-2 text-slate-200">
                    Maintain a playlist or drive folder with recordings of your best sessions:
                    research talks, career panels, technical deep-dives.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Link them here with topics, speakers, and a 1-line takeaway so students know
                    what to watch.
                  </p>
                </article>

                <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm shadow-sm backdrop-blur-lg">
                  <h3 className="text-base font-semibold md:text-lg">Blog / Articles</h3>
                  <p className="mt-2 text-slate-200">
                    Optional but powerful: reflective write-ups by students on projects, events, and
                    learnings from ACM-W programs.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    This becomes evidence of thinking, not just attendance—and is great for
                    portfolios and applications.
                  </p>
                </article>
              </div>
            </section>
          </div>

          {/* Right: Scholarships & meta */}
          <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
            {/* Scholarships & Programs */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold md:text-xl">Scholarships &amp; Programs</h2>
              <p className="text-sm text-slate-200 md:text-base">
                High-leverage opportunities that ACM-W members should know about early.
              </p>
            </section>

            <section className="space-y-4">
              {opportunities.map((op) => (
                <article
                  key={op.title}
                  className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 text-sm shadow-md backdrop-blur-lg"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold md:text-lg">{op.title}</h3>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                        {op.type}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-slate-100">{op.description}</p>
                  <ul className="mt-2 ml-4 list-disc space-y-1 text-xs text-slate-100 md:text-sm">
                    {op.tips.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>

            {/* Why this page matters */}
            <section className="space-y-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-slate-100 md:text-sm">
              <h3 className="text-sm font-semibold md:text-base">
                Why this page builds long-term value
              </h3>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  Students bookmark it and share it with juniors—organic, compounding traffic for
                  your chapter.
                </li>
                <li>
                  Faculty and sponsors see that you care about sustained learning, not just events.
                </li>
                <li>
                  It becomes a living handbook for self-driven students who want to grow with or
                  without formal events.
                </li>
              </ul>
              <p className="mt-2 text-[11px] text-slate-200">
                Update this page every semester with new links, playlists, and opportunities. The
                more relevant it stays, the more your ACM-W chapter matters online.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;


