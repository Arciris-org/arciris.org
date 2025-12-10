import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-500">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
            HomePage
          </Link>
          <Link href="mailto:info@mail.arciris.org" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
            Email
          </Link>
          <Link href="https://github.com/Arciris-org/.github/blob/main/profile/POLICY.md" target="_blank" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
            Policy
          </Link>
        </div>
        <div className="text-center mt-8 text-xs text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Arciris org. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
