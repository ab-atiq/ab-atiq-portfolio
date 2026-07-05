import Link from "next/link";
import { profile, nav } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-base-border bg-white py-10 dark:border-dark-border dark:bg-dark-bg">
      <div className="container-page flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <Link href="/#home" className="font-display text-lg font-bold">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.dev</span>
        </Link>

        <ul className="flex flex-wrap justify-center gap-5">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-base-muted transition-colors hover:text-accent dark:text-dark-muted"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-xs text-base-muted dark:text-dark-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
