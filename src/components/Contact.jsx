export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-emerald-400/10 to-cyan-400/10 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Get in touch</h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base">
                Tell me about your site and deliverables. I'll reply within one business day.
              </p>
              <div className="mt-6 space-y-2 text-slate-300 text-sm">
                <p>Email: you@example.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Location: Your City, Country</p>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-slate-200 text-sm mb-1">Name</label>
                <input className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-slate-2 00 text-sm mb-1">Email</label>
                <input type="email" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-slate-200 text-sm mb-1">Message</label>
                <textarea rows={4} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="Project scope, site location, timeline..." />
              </div>
              <button type="button" className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-3 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
