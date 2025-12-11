import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="mailto:info@mail.arciris.org">Email</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link
              href="https://github.com/Arciris-org/.github/blob/main/profile/POLICY.md"
              target="_blank"
            >
              Policy
            </Link>
          </Button>
        </div>
        <div className="text-center mt-8 text-xs text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Arciris org. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
