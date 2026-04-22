import { useState } from "react";

export default function MBPMWebsite() {
  const [activePage, setActivePage] = useState("home");

  const services = [
    {
      title: "Brickwork Packages",
      text: "Labour-only and full masonry packages including materials, plant and supervision across residential, commercial and education sectors.",
    },
    {
      title: "Project Management",
      text: "Site coordination, sequencing, programme control and subcontractor management from pre-start through to completion.",
    },
    {
      title: "Commercial & Tendering",
      text: "Trade bill pricing, tender submissions, value engineering, valuations and variation management.",
    },
    {
      title: "Quality & Compliance",
      text: "RAMS, QA inspections, site documentation, toolbox talks and compliance-led delivery.",
    },
  ];

  const projectCards = [
    { title: "Carmelite Monastery", type: "Feature brickwork and architectural masonry", image: "/mnt/data/Carmelite monastery 1.jpg" },
    { title: "Dukes Court", type: "Residential brickwork package", image: "/mnt/data/dukes court 1.jpg" },
    { title: "The Interchange", type: "Contemporary urban masonry", image: "/mnt/data/The Interchange.jpg" },
    { title: "Bastion Point", type: "Large-scale urban residential development", image: "/mnt/data/61ee6f0105ba9cec4ef528f9_Bastion Point - Edit.jpg" },
    { title: "Centric House", type: "Urban residential and commercial frontage", image: "/mnt/data/2024929185157-1centric-house-external.jpg.webp" },
    { title: "Hopwood Hall College", type: "Education and public sector delivery", image: "/mnt/data/Hopwood+Hall+College+10-web.jpg.webp" },
    { title: "Royal George Village", type: "Housing and residential development", image: "/mnt/data/Royal-George-Village-2.jpg" },
    { title: "GVS Commercial", type: "Modern commercial building", image: "/mnt/data/IMG-Front-Altaqualita.jpg" },
    { title: "Industrial Unit Fit-Out", type: "Internal blockwork and fit-out support", image: "/mnt/data/5c653b5a4210dafa3f337097b3166a4f.jpeg" },
    { title: "Pepper Street", type: "Urban development concept and planning visuals", image: "/mnt/data/Pepper-Street-car-park-Grosvenor-p-plannning-docs-1-650x460.jpg" },
  ];

  const gallery = [
    "/mnt/data/Camelite monastery 4.jpg",
    "/mnt/data/Carmelite Monastery 2.jpg",
    "/mnt/data/Carmelite Monastery 3.jpg",
    "/mnt/data/Carmelite_31-1.jpg",
    "/mnt/data/Carmelite_Monastery_by_Austin_Smith_Lord_dezeen_468_4.jpg",
    "/mnt/data/Carmelite_Monastery_by_Austin_Smith_Lord_dezeen_468_6.jpg",
    "/mnt/data/Carmelite_Monastery_by_Austin_Smith_Lord_dezeen_468_12.jpg",
    "/mnt/data/Carmelite_Monastery_by_Austin_Smith_Lord_dezeen_468_16.jpg",
    "/mnt/data/Carmelite_Monastery_by_Austin_Smith_Lord_dezeen_784_0.jpg",
    "/mnt/data/dukes court .jpg",
    "/mnt/data/dukes court 2.jpg",
    "/mnt/data/995_667_1_59f3bd7e-57cb-457d-9208-8c91ca253c86.jpg",
    "/mnt/data/995_667_1_b72fdc58-ba72-4683-b8a0-378525d68c64.jpg",
    "/mnt/data/2677d8aca55ab889fba50e5bcf4387e1.jpeg",
    "/mnt/data/IMG-Front-Altaqualita.jpg",
  ];

  const capabilities = [
    "Tender pricing and trade bill build-ups",
    "Labour-only and labour, plant and material packages",
    "Valuations, variations and commercial reporting",
    "RAMS, QA inspections and site paperwork",
    "Programme support and practical site coordination",
    "Support for both main contractors and private clients",
  ];

  const stats = [
    { value: "25+", label: "Years construction experience" },
    { value: "NW", label: "North West coverage" },
    { value: "L/O + LPM", label: "Package options" },
    { value: "QA", label: "Quality-led delivery" },
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/mnt/data/ChatGPT Image Sep 16, 2025 at 03_16_25 PM.png" alt="MBPM logo" className="h-12 w-12 rounded-xl ring-1 ring-white/10" />
            <div>
              <div className="font-bold tracking-wide">MBPM</div>
              <div className="text-xs text-gray-400">M Blundell Project Management Ltd</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => setActivePage(item.id)} className={`${activePage === item.id ? "text-white" : "text-gray-400"} transition hover:text-white`}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {activePage === "home" && (
        <>
          <section className="relative overflow-hidden border-b border-white/10">
            <img src="/mnt/data/Carmelite monastery 1.jpg" alt="MBPM hero" className="h-[560px] w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
            <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-6">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-300">
                  <img src="/mnt/data/ChatGPT Image Sep 16, 2025 at 03_16_25 PM.png" alt="MBPM" className="h-6 w-6 rounded-full" />
                  Main contractors and private clients
                </div>
                <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Masonry. Managed properly.</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                  MBPM combines practical brickwork contracting with project management, tendering and commercial control. We support main contractors with package delivery and private clients with dependable construction guidance and quality workmanship.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button onClick={() => setActivePage("contact")} className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5">
                    Request a Quote
                  </button>
                  <button onClick={() => setActivePage("projects")} className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-lg">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{service.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-y border-white/10 bg-white/[0.03] py-16">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr,1.1fr] md:items-center">
              <div>
                <h2 className="text-3xl font-bold">About MBPM</h2>
                <p className="mt-5 leading-8 text-gray-300">
                  MBPM is a North West based brickwork contractor and project management business built around real site experience. We support projects from tender stage through to delivery, combining practical knowledge with commercial awareness and a strong focus on quality.
                </p>
                <p className="mt-4 leading-8 text-gray-300">
                  For main contractors, MBPM offers dependable package support, pricing, coordination and reporting. For private clients and developers, MBPM offers a straightforward, professional route to getting projects priced, organised and delivered properly.
                </p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <img src="/mnt/data/Carmelite+03.jpg" alt="MBPM project detail" className="h-full w-full object-cover" />
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold">Selected projects</h2>
                <p className="mt-3 max-w-2xl text-gray-400">A mix of completed work, architectural imagery and development visuals that reflect the range of projects MBPM can support.</p>
              </div>
              <button onClick={() => setActivePage("projects")} className="hidden rounded-2xl border border-white/15 px-4 py-2 text-sm text-white md:block">
                See all projects
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projectCards.slice(0, 4).map((project) => (
                <div key={project.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
                  <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <div className="text-lg font-semibold">{project.title}</div>
                    <div className="mt-2 text-sm text-gray-400">{project.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activePage === "services" && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-4 max-w-3xl text-gray-400">MBPM supports both main contractors and private clients with practical construction knowledge, commercial control and dependable masonry delivery.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{service.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 text-sm text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </section>
      )}

      {activePage === "projects" && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="mt-4 max-w-3xl text-gray-400">A broader selection of residential, commercial, education and planning-stage work to demonstrate MBPM capability across different project types.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectCards.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-lg">
                <img src={project.image} alt={project.title} className="h-60 w-full object-cover" />
                <div className="p-5">
                  <div className="text-xl font-semibold">{project.title}</div>
                  <div className="mt-2 text-sm text-gray-400">{project.type}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((image, index) => (
              <div key={image + index} className="mb-4 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03]">
                <img src={image} alt={`MBPM gallery ${index + 1}`} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {activePage === "commercial" && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-4xl font-bold">Commercial & Tendering</h1>
          <p className="mt-4 max-w-3xl text-gray-400">A key part of MBPM’s offer is practical commercial support for masonry packages, tender returns and project controls.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Tender pricing",
              "Trade bill build-ups",
              "Valuations and applications",
              "Variation management",
              "Package assumptions and clarifications",
              "Value engineering options",
              "Programme and sequencing input",
              "Daywork and cost reporting",
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-300">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold">Why this matters</h2>
            <p className="mt-4 max-w-4xl leading-8 text-gray-300">
              Main contractors need clear pricing, sensible assumptions and dependable reporting. Private clients need honest guidance, budget clarity and practical delivery. MBPM is positioned to offer both.
            </p>
          </div>
        </section>
      )}

      {activePage === "contact" && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
            <div>
              <h1 className="text-4xl font-bold">Contact MBPM</h1>
              <p className="mt-4 max-w-xl text-gray-400">For tender enquiries, package pricing, project support or private client enquiries, get in touch.</p>
              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-5 flex items-center gap-4">
                  <img src="/mnt/data/ChatGPT Image Sep 16, 2025 at 03_16_25 PM.png" alt="MBPM logo" className="h-14 w-14 rounded-xl ring-1 ring-white/10" />
                  <div>
                    <div className="font-semibold">M Blundell Project Management Ltd</div>
                    <div className="text-sm text-gray-400">Brickwork contractor and project support</div>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div>07711 345925</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div>martin@mbpm.info</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Coverage</div>
                    <div>North West England</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-2xl font-semibold">Request a quote</h2>
              <p className="mt-3 text-sm text-gray-400">Use this form layout as the basis for your live website enquiry form.</p>
              <form className="mt-6 grid gap-4 md:grid-cols-2">
                <input className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none" placeholder="Name" />
                <input className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none" placeholder="Company" />
                <input className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none" placeholder="Email" />
                <input className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none" placeholder="Phone" />
                <select className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none md:col-span-2">
                  <option>Main contractor enquiry</option>
                  <option>Private client enquiry</option>
                  <option>Tender pricing</option>
                  <option>Brickwork package</option>
                  <option>Project management support</option>
                </select>
                <textarea className="min-h-[160px] rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none md:col-span-2" placeholder="Tell us about your project, package or enquiry" />
                <button type="button" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black md:col-span-2 md:w-fit">
                  Send enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/mnt/data/ChatGPT Image Sep 16, 2025 at 03_16_25 PM.png" alt="MBPM logo" className="h-10 w-10 rounded-xl ring-1 ring-white/10" />
            <div>
              <div className="font-semibold">MBPM</div>
              <div className="text-xs text-gray-500">M Blundell Project Management Ltd</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">Brickwork contracting, project management, tendering and commercial support.</div>
        </div>
      </footer>
    </div>
  );
}
