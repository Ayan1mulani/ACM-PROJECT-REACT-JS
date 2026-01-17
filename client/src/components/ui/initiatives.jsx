const initiatives = [
  {
    key: 'mentorship',
    label: 'Mentorship Program',
    badge: 'Continuity',
    problem:
      'Many students, especially first-generation learners, navigate computing alone with no structured guidance.',
    doing:
      'ACM-W pairs juniors with seniors, alumni, and industry mentors for semester-long tracks with goals, check-ins, and demo days.',
    who: 'First and second-year students seeking guidance; seniors and alumni willing to mentor.',
    outcomes:
      'Higher retention in CS programs, stronger portfolios, and a culture where asking for help is normal.',
  },
  {
    key: 'school-outreach',
    label: 'School Outreach',
    badge: 'Impact Beyond Campus',
    problem:
      'Girls in schools often never meet women in tech and rarely see computing as a real option for them.',
    doing:
      'We conduct hands-on coding sessions, tech demos, and parent-teacher interactions in nearby schools with a focus on first exposure.',
    who: 'ACM-W volunteers who enjoy teaching; schools and NGOs looking to introduce computing basics.',
    outcomes:
      'Dozens of school students get their first real coding experience, and see women engineers leading the room.',
  },
  {
    key: 'research-circles',
    label: 'Research Circles',
    badge: 'Depth',
    problem:
      'Students interested in research often do not know where to start—papers feel intimidating and opportunities are hidden.',
    doing:
      'Small reading groups led by seniors or faculty where we break down papers, replicate results, and work towards mini-projects.',
    who: 'Students curious about research in systems, AI, HCI, security, and related areas.',
    outcomes:
      'More research internships, stronger statements of purpose, and early exposure to publishing culture.',
  },
  {
    key: 'career-readiness',
    label: 'Career Readiness',
    badge: 'Real-world',
    problem:
      'Many capable students miss out on opportunities because they are not interview-ready or lack visibility into roles.',
    doing:
      'We run resume studios, mock interviews, referral circles, and alumni AMA sessions focused on women in computing roles.',
    who: 'Pre-final and final year students preparing for internships, jobs, or higher studies.',
    outcomes:
      'Better placement outcomes, more confident applicants, and visible success stories tied back to ACM-W.',
  },
  {
    key: 'open-source',
    label: 'Open Source Programs',
    badge: 'Community',
    problem:
      'Open source participation feels scary without guidance, and many students never make their first contribution.',
    doing:
      'We organize contribution sprints, maintain beginner-friendly repositories, and support students applying to programs like GSoC.',
    who: 'Students at any level who want to learn by building in public and contributing to real projects.',
    outcomes:
      'Consistent contributions on GitHub, successful program selections, and stronger public technical profiles.',
  },
  {
    key: 'women-in-deep-tech',
    label: 'Women in AI / Systems / Security',
    badge: 'Focus Areas',
    problem:
      'Advanced areas like AI, systems, and security can feel gatekept, especially for women and gender minorities.',
    doing:
      'Focused tracks, reading groups, and project cohorts where students explore one deep-tech area with mentorship and peer support.',
    who: 'Students with basic foundations in computing who want to go deeper into a specific field.',
    outcomes:
      'Capstone projects, conference submissions, CTF and competition participation, and stronger domain expertise.',
  },
];

const InitiativesPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-32 md:px-10 lg:px-0">
        {/* Header */}
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Initiatives
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            What makes our ACM-W chapter different.
          </h1>
          <p className="max-w-3xl text-sm text-slate-300 md:text-base">
            These initiatives are not just &quot;events&quot;—they are ongoing programs with clear
            problem statements, ownership, and measurable outcomes. This is what separates an active
            chapter from a passive one.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] lg:items-start">
          {/* Left: Initiatives list */}
          <div className="space-y-6">
            {initiatives.map((init) => (
              <article
                key={init.key}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-5 shadow-md ring-1 ring-white/5 backdrop-blur-xl md:p-6"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-semibold md:text-xl">{init.label}</h2>
                      <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-blue-200">
                        {init.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-6">
                  <div className="space-y-3 border-b border-slate-800 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Problem statement
                      </p>
                      <p className="mt-1 text-sm text-slate-200 md:text-base">{init.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        What ACM-W is doing
                      </p>
                      <p className="mt-1 text-sm text-slate-200 md:text-base">{init.doing}</p>
                    </div>
                  </div>

                  <div className="space-y-3 md:pl-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Who can join
                      </p>
                      <p className="mt-1 text-sm text-slate-200 md:text-base">{init.who}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Outcomes
                      </p>
                      <p className="mt-1 text-sm text-emerald-300 md:text-base">
                        {init.outcomes}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right: Meta + why this page matters */}
          <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold md:text-xl">
                Why initiatives matter more than events.
              </h2>
              <p className="text-sm text-slate-200 md:text-base">
                Anyone can run a one-off event. Initiatives are the programs that run all year,
                create real change, and make your ACM-W chapter worth investing in.
              </p>
            </section>

            <section className="space-y-2 text-sm text-slate-100 md:text-base">
              <ul className="ml-4 list-disc space-y-2">
                <li>They show you understand real problems on campus and in the wider community.</li>
                <li>They make it clear who owns what and how students can plug into the work.</li>
                <li>
                  They give faculty and sponsors confidence that your chapter is consistent, not
                  reactive.
                </li>
              </ul>
            </section>

            <section className="space-y-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-slate-100 md:text-sm">
              <h3 className="text-sm font-semibold md:text-base">
                How to keep this page strong
              </h3>
              <ul className="ml-4 list-disc space-y-1">
                <li>Assign a core owner for each initiative and keep their name listed here.</li>
                <li>Update outcomes every semester—numbers, stories, and tangible wins.</li>
                <li>
                  Link out to detailed docs, playbooks, or reports if someone wants to go deeper.
                </li>
              </ul>
              <p className="mt-2 text-[11px] text-slate-200">
                If this page looks weak or outdated, your chapter looks passive. If it looks sharp,
                it becomes your strongest argument for support.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default InitiativesPage;


