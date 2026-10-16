import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pb-32 pt-44">
      <div className="container-x">
        <p className="text-sm text-ink-soft">404</p>
        <h1 className="text-display mt-6">
          <span className="text-accent-deep">Page</span> not <span className="italic-accent">found</span>.
        </h1>
        <p className="mt-8 max-w-md text-lg text-ink-soft">This page doesn&apos;t exist, or it moved.</p>
        <Button href="/" variant="dark" size="lg" className="mt-10">
          Back home
        </Button>
      </div>
    </section>
  );
}
