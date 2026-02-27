export function ProjectCardSkeleton() {
  return (
    <div className="bg-card rounded-xl overflow-hidden animate-pulse">
      <div className="aspect-video bg-muted" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-full" />
        <div className="flex gap-2">
          <div className="h-6 bg-muted rounded-full w-16" />
          <div className="h-6 bg-muted rounded-full w-20" />
          <div className="h-6 bg-muted rounded-full w-16" />
        </div>
      </div>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="max-w-7xl mx-auto animate-pulse">
      <div className="h-12 bg-muted rounded w-64 mb-8" />
      <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8">
        <div className="space-y-4">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-3/4" />
        </div>
        <div className="space-y-4">
          <div className="h-32 bg-muted rounded-xl" />
          <div className="h-24 bg-muted rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function ExperienceSkeleton() {
  return (
    <div className="max-w-7xl mx-auto animate-pulse">
      <div className="h-12 bg-muted rounded w-96 mb-8" />
      <div className="grid lg:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="space-y-6">
            <div className="bg-card rounded-xl p-6 space-y-4">
              <div className="h-6 bg-muted rounded w-48" />
              <div className="h-4 bg-muted rounded w-32" />
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-3/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <div className="max-w-4xl mx-auto animate-pulse">
      <div className="h-12 bg-muted rounded w-96 mb-8" />
      <div className="bg-card rounded-xl p-8 space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="h-12 bg-muted rounded-lg" />
          <div className="h-12 bg-muted rounded-lg" />
        </div>
        <div className="h-12 bg-muted rounded-lg" />
        <div className="h-32 bg-muted rounded-lg" />
        <div className="h-12 bg-muted rounded-full w-40" />
      </div>
    </div>
  );
}
