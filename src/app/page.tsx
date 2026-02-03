import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-400 selection:text-black">
      {/* Мягкое свечение на фоне */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-[120px]" />
      </div>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <header className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-zinc-700"></span>
            <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">
              Frontend Developer • 2026
            </h2>
          </div>
          
          {/* Твоё Имя */}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-10">
            ANASTASIA <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-800">
              VIKTOROVA
            </span>
          </h1>

          <p className="max-w-xl text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
            Создаю быстрые и эстетичные веб-приложения. <br />
            Мой стек: <span className="text-white">Next.js, TypeScript, AI Integration.</span>
          </p>
        </header>

        {/* Сетка проектов */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-600">Selected Works</h2>
          <div className="h-[1px] flex-1 bg-zinc-900"></div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] p-8 hover:bg-zinc-900/60 hover:border-zinc-600 transition-all duration-500 flex flex-col justify-between overflow-hidden backdrop-blur-sm"
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`} />
              
              <div>
                <div className="flex gap-2 mb-8">
                  {project.stack.map(s => (
                    <span key={s} className="text-[9px] font-black uppercase tracking-tighter text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded">
                      {s}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-10">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <a 
                  href={project.link} 
                  target="_blank"
                  className="bg-zinc-100 text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors"
                >
                  Launch Site
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-40 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2026 Anastasia Viktorova</p>
          <div className="flex gap-8">
            <a href="mailto:aviktorova317@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="https://t.me/yay4ogo" className="hover:text-white transition-colors">Telegram</a>
          </div>
        </footer>
      </main>
    </div>
  );
}