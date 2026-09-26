import { Link, useLocation } from "react-router-dom";
import { Button, Avatar, ThemeToggle } from "./ui";

export default function Appbar() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup";
  const isPublishPage = location.pathname === "/publish";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link
            to="/blogs"
            className="flex items-center gap-2 font-semibold text-xl text-[var(--color-text-primary)] hover:opacity-80 transition-opacity duration-200"
            aria-label="Go to homepage"
          >
            <svg
              className="h-7 w-7 text-[var(--color-accent-primary)]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            <span className="hidden sm:block">Medium</span>
          </Link>

          {/* Center: Search (only on blog pages) */}
          {!isAuthPage && !isPublishPage && (
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <label className="relative w-full" htmlFor="search">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-text-muted)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  id="search"
                  type="search"
                  placeholder="Search stories, writers, publications..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-full text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)] focus:border-transparent transition-all duration-200"
                />
              </label>
            </div>
          )}

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {!isAuthPage && (
              <>
                <ThemeToggle />
                <Link to="/publish">
                  <Button size="sm" variant="primary">
                    New Post
                  </Button>
                </Link>
              </>
            )}
            {!isAuthPage && !isPublishPage && (
              <Link to="/publish" className="ml-1">
                <Avatar name="Atharva" size="sm" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}