import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
          <section className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4">
                  <p className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Aspiring Business Analyst
                  </p>
                  <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    Alexia Hall
                  </h1>
                  <p className="max-w-2xl text-slate-300">
                    I help teams turn business questions into data-backed stories, build dashboards that guide decisions, and extract insight from raw numbers.
                  </p>
                </div>
    
                <div className="grid gap-4 sm:max-w-xs">
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Focus</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Business Intelligence</p>
                  </div>
                  <div className="rounded-3xl bg-cyan-500/10 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Strength</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Data storytelling</p>
                  </div>
                </div>
              </div>
    
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <h2 className="text-lg font-semibold text-white">Core Skills</h2>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    <li>JavaScript</li>
                    <li>Excel modeling</li>
                    <li>Tableau</li>
                    <li>Process improvement</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <h2 className="text-lg font-semibold text-white">Highlights</h2>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    <li>Forecast analysis for retail demand</li>
                    <li>Dashboard automation for operations</li>
                    <li>Story-driven presentations for stakeholders</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <h2 className="text-lg font-semibold text-white">Goal</h2>
                  <p className="mt-4 text-slate-300">
                    Grow into a business analysis role by delivering measurable improvements from data and process insight.
                  </p>
                </div>
              </div>
            </div>
    
            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h2 className="text-2xl font-semibold text-white">Project Experience</h2>
                <div className="mt-6 space-y-5 text-slate-300">
                  <article className="rounded-3xl bg-slate-900/80 p-6">
                    <h3 className="text-lg font-semibold text-white">Super Bowl Viewership Analysis Dashboard</h3>
                    <p className="mt-2 text-sm">
                      Analyzed real world data in Tableau on the superbowl 
                      ratings from 1967-2023 to create a dashboard that forecasts future viewership trends.
                    </p>
                    <p className="mt-3 text-sm text-cyan-300">Outcome: Recognized key factors influencing viewership and provided actionable insights.</p>
                  </article>
                  <article className="rounded-3xl bg-slate-900/80 p-6">
                    <h3 className="text-lg font-semibold text-white">Small Business Website</h3>
                    <p className="mt-2 text-sm">
                      Created a small business website for a local lemonade stand using JavaScript, HTML, and CSS.
                    </p>
                    <p className="mt-3 text-sm text-cyan-300">Outcome: Increased online presence and customer engagement.</p>
                  </article>
                </div>
              </div>
    
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h2 className="text-2xl font-semibold text-white">Contact</h2>
                <div className="mt-6 space-y-4 text-slate-300">
                  <p>Phone: <span className="text-white">813-766-1633</span></p>
                  <p>Email: <span className="text-white">alexiahall14@gmailcom</span></p>
                  <p>LinkedIn: <span className="text-white">https://www.linkedin.com/in/alexia-hall-</span></p>
                  <p>Open to analytics internships, entry-level BA roles, and data-driven business projects.</p>
                </div>
              </div>
            </section>
          </section>
        </main>

    </div>
  );
}
