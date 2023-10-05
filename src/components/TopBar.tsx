function TopBar() {
  return (
    <nav className="flex text-white bg-[#2B3E50] justify-between place-content-center h-12 border-b-2 border-cyan-300">
      <a
        href="jukebox_index.html"
        className="ml-4 self-center text-sm font-bold text-slate-200 uppercase tracking-widest rounded-lg bg-slate-600 p-1.5 hover:bg-red-400 transition-all"
      >
        The EternalJukebox
      </a>
      <div className="flex text-white bg-[#2B3E50] place-content-center gap-6">
        <a
          href="jukebox_index.html"
          className="cursor-pointer self-center text-sm font-bold text-slate-200 uppercase tracking-widest rounded-lg bg-slate-600 p-1.5 hover:bg-red-400 transition-all"
        >
          Home
        </a>
        <a
          href="about.html"
          className="cursor-pointer self-center text-sm font-bold text-slate-200 uppercase tracking-widest rounded-lg bg-slate-600 p-1.5 hover:bg-red-400 transition-all"
        >
          About
        </a>
        <a
          href="faq.html"
          className="cursor-pointer self-center text-sm font-bold text-slate-200 uppercase tracking-widest rounded-lg bg-slate-600 p-1.5 hover:bg-red-400 transition-all"
        >
          FAQ
        </a>
      </div>
      <a
        href="https://ko-fi.com/daviirodrig"
        target="_blank"
        rel="noreferrer"
        className="mr-4 self-center text-sm font-bold text-slate-200 uppercase tracking-widest rounded-lg bg-slate-600 p-1.5 hover:bg-red-400 transition-all"
      >
        Support me on Ko-fi!
      </a>
    </nav>
  );
}

export default TopBar;
