import { NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
    isActive
      ? 'bg-zinc-100 text-zinc-950'
      : 'text-zinc-300 hover:bg-white/5 hover:text-white',
  ].join(' ')

export function AppShell() {
  return (
    <div className="flex min-h-svh flex-col bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <NavLink
            to="/"
            className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-lime-300 text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition group-hover:bg-lime-200">
              K
            </span>
            <span className="leading-none">
              Kinetic
              <span className="hidden text-zinc-500 sm:inline"> Supply</span>
            </span>
          </NavLink>

          <nav
            className="flex flex-wrap items-center justify-end gap-1 sm:gap-2"
            aria-label="Primary"
          >
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Catalog
            </NavLink>
            <NavLink to="/cart" className={navLinkClass}>
              Cart
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              Kinetic Supply
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
              Practice project: all copy and prices are written directly in JSX files (no
              separate data file, no useState / useEffect yet).
            </p>
          </div>
          <div className="text-xs text-zinc-500">
            Images from Unsplash • React + Tailwind
          </div>
        </div>
      </footer>
    </div>
  )
}
