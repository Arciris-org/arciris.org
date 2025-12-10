import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Arciris org
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link href="mailto:info@mail.arciris.org" className="text-sm hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            Contact
          </Link>
          <Link href="https://github.com/Arciris-org" target="_blank" className="text-sm hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            GitHub
          </Link>
        </div>
      </nav>
    </header>
  );
}
