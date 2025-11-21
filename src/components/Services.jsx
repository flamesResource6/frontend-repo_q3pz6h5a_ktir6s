import { Ruler, Map, Drone, Landmark } from "lucide-react";

const services = [
  {
    title: "Topographic Surveys",
    desc: "Detailed terrain and feature mapping for planning and design.",
    icon: Map,
  },
  {
    title: "Boundary & Title Surveys",
    desc: "Precise property line delineation and documentation.",
    icon: Ruler,
  },
  {
    title: "Construction Staking",
    desc: "Accurate layout of buildings, roads, and utilities.",
    icon: Landmark,
  },
  {
    title: "Drone Mapping",
    desc: "Aerial photogrammetry and 3D models for large sites.",
    icon: Drone,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Services</h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
            From land subdivision to as-built verification, I provide end-to-end surveying services compliant with local standards and delivered with clarity.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 text-slate-950 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
