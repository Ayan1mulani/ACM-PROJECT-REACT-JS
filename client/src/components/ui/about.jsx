const AboutPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-24 pt-32 md:px-10 lg:px-0">
        <header className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            About
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
            ACM-W
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-slate-300 md:text-base">
            Supporting, celebrating, and advocating for the full engagement of women in all aspects
            of the computing field.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-start">
          <div className="space-y-8 text-sm leading-relaxed text-slate-200 md:text-base">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
                About ACM-W
              </h2>
              <p>
                ACM-W (Association for Computing Machinery – Women) supports, celebrates, and
                advocates for the full engagement of women in all aspects of the computing field.
                As part of the global ACM community, ACM-W works internationally to advance the
                participation, visibility, and impact of women in computing through programs,
                resources, and a strong network of chapters.
              </p>
              <p>
                ACM-W initiatives span student, professional, and institutional levels, providing
                platforms for learning, leadership, mentorship, and collaboration. Through chapters
                worldwide, ACM-W fosters inclusive computing communities that empower women to
                thrive in academia, industry, and research.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
                ACM-W Student Chapters
              </h2>
              <p>ACM-W Student Chapters are established at institutions across the world to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Empower students through community, mentorship, and peer support</li>
                <li>Encourage participation and retention of women in computing programs</li>
                <li>Organize technical talks, workshops, seminars, and outreach activities</li>
                <li>Provide access to global ACM-W resources and regional celebrations</li>
              </ul>
              <p>
                Student chapters play a critical role in creating inclusive environments on campus
                and enabling students to advocate for diversity and equity in computing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
                ACM-W India
              </h2>
              <p>
                ACM-W India carries forward the mission of ACM-W with a focused commitment to
                empowering women in computing across India. It supports students and professionals
                by enabling technical growth, professional development, and leadership opportunities
                within the Indian computing ecosystem.
              </p>
              <p>
                ACM-W India works closely with academic institutions, industry partners, and the
                larger ACM community to strengthen participation of women in computing and related
                disciplines.
              </p>
            </section>
          </div>

          <aside className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-50">
                Objectives of ACM-W India
              </h3>
              <ul className="ml-4 list-disc space-y-1 text-sm text-slate-200 md:text-base">
                <li>Facilitate technical growth through lectures, seminars, workshops, and meetings</li>
                <li>Create platforms for sharing knowledge, resources, and experiences</li>
                <li>Support professional development and career advancement</li>
                <li>Encourage participation in computing education and research</li>
                <li>
                  Promote computer literacy, particularly in rural and underrepresented communities,
                  to empower women and children
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-50">
                Leadership and Governance
              </h3>
              <p className="text-sm text-slate-200 md:text-base">
                ACM-W India is guided by a committee of experienced academics, researchers, and
                industry leaders who contribute actively to advancing the mission of women in
                computing. The committee oversees chapter activities, national initiatives, and
                collaborations across regions.
              </p>
              <p className="text-sm text-slate-200 md:text-base">
                The leadership is committed to:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-sm text-slate-200 md:text-base">
                <li>Building sustainable mentorship networks</li>
                <li>Supporting student and professional chapters</li>
                <li>Driving inclusive growth across academia and industry</li>
                <li>Strengthening India’s contribution to the global ACM-W community</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-50">Our Impact</h3>
              <p className="text-sm text-slate-200 md:text-base">
                Through student chapters, professional chapters, scholarships, celebrations, awards,
                and community programs, ACM-W and ACM-W India:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-sm text-slate-200 md:text-base">
                <li>Broaden participation in computing</li>
                <li>Support women at every stage of their computing journey</li>
                <li>Enable collaboration between students, educators, and professionals</li>
                <li>Recognize and amplify contributions of women in technology</li>
              </ul>
            </section>
          </aside>
        </div>

        <section className="mt-4 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-center shadow-lg backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-slate-50 md:text-xl">
            Join the Community
          </h3>
          <p className="mt-2 text-sm text-slate-200 md:text-base">
            ACM-W welcomes students, educators, and professionals who are committed to building an
            inclusive and equitable computing future. By joining or starting an ACM-W chapter,
            members become part of a global network working collectively to shape the future of
            computing.
          </p>
        </section>
      </section>
    </main>
  );
};

export default AboutPage;


