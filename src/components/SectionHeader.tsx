type Props = { children: React.ReactNode };

export function SectionHeader({ children }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 w-1 rounded-full bg-linear-to-b from-amber-500 to-orange-400" />
      <h2 className="text-xl font-bold tracking-tight text-stone-900 dark:text-amber-50">{children}</h2>
    </div>
  );
}
