export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">About</h2>
          <p className="mt-4 text-slate-300 text-base/7">
            I'm a licensed land surveyor with experience across residential, commercial, and infrastructure projects. I combine classical surveying with GNSS, total stations, and drone photogrammetry to deliver accurate, timely results.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white/5 p-4 text-center">
              <p className="text-3xl font-bold text-white">8+</p>
              <p className="text-slate-300 text-sm">Years Experience</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4 text-center">
              <p className="text-3xl font-bold text-white">250+</p>
              <p className="text-slate-300 text-sm">Projects Delivered</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4 text-center">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-slate-300 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
