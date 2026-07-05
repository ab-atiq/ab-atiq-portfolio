import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-base-muted dark:text-dark-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary mt-6">
        Back to Home
      </Link>
    </div>
  );
}
