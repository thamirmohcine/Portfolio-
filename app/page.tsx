
export default function Home() {
  return (
<section className="portfolio-container min-h-screen flex items-center py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    <div className="space-y-6">
      <p className="code-text w-fit">Hello World, I'm Mouhcine</p>
      
      <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
        Software Engineer <span className="text-accent">&</span> Architect.
      </h1>
      
      <p className="text-lg text-slate-400 max-w-lg">
        Building scalable systems and modern web experiences with a focus on 
        performance and clean code.
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="btn-primary">Get In Touch</button>
        <button className="px-6 py-3 rounded-full border border-slate-700 hover:bg-slate-800 transition-all">
          View Projects
        </button>
      </div>
    </div>

    <div className="relative group">
      <div className="gradient-glow absolute -inset-4 z-0"></div>
      
      <div className="project-card relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="code-bracket-icon" />
            </svg>
          </div>
          <span className="text-xs font-mono text-slate-500">v4.0.0</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">Modern Web Architecture</h3>
        <p className="text-slate-400 text-sm mb-4">
          Experimental design using Tailwind v4 Logical Properties for RTL support.
        </p>
        
        <div className="flex gap-2">
          <span className="code-text">C++</span>
          <span className="code-text">React</span>
          <span className="code-text">Tailwind</span>
        </div>
      </div>
    </div>

  </div>
</section>
  );
}
