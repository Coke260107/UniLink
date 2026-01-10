export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="flex w-full flex-col gap-3 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        {/* Left */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Unilinker
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            © {year} Unilinker. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center justify-between gap-3 lg:justify-end">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Developed by{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              Coke260107
            </span>
          </p>

          <span className="hidden h-4 w-px bg-zinc-200 dark:bg-zinc-700 lg:inline-block" />

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
