import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* background gradient grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.28),transparent_35%),radial-gradient(ellipse_at_bottom_right,rgba(8,145,178,0.25),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-300/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance projects
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Precision Land Surveying for Modern Projects
            </h1>
            <p className="mt-5 text-slate-300 text-base/7 sm:text-lg/8 max-w-xl">
              I deliver accurate topographic surveys, boundary mapping, and construction staking with the latest GNSS and drone photogrammetry workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-3 transition-colors">
                Get a Quote
              </a>
              <a href="#projects" className="rounded-xl border border-white/15 text-white hover:bg-white/10 px-5 py-3 transition-colors">
                View Projects
              </a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-2xl" />
            <div className="relative h-full rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur">
              {/* 3D scene using Spline */}
              <Spline scene="https://prod.spline.design/7r1c5J3EwS9gZ2kK/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
