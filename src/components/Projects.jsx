const projects = [
  {
    title: "Hillside Residential Subdivision",
    img: "https://images.unsplash.com/photo-1508711043262-0cc4e0b1a8a2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Urban Redevelopment Survey",
    img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Highway Alignment Mapping",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Projects</h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
            A snapshot of recent surveying work. High-resolution deliverables and reports available on request.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <img src={p.img} alt={p.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent text-white text-sm">
                {p.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
