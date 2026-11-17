export function Section({
  title,
  id,
  children,
}: {
  title: string
  id?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-8">
      <h2 className="mb-5 font-medium text-neutral-900 dark:text-neutral-100">{title}</h2>
      {children}
    </section>
  )
}
