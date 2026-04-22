export type TagColor = "amber" | "stone" | "orange";

export const tagClasses: Record<TagColor, string> = {
  amber:
    "border-amber-200 bg-amber-50 text-amber-800 hover:border-amber-300 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200",
  stone:
    "border-stone-200 bg-white text-stone-600 hover:border-stone-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300",
  orange:
    "border-orange-200 bg-orange-50 text-orange-800 hover:border-orange-300 dark:border-orange-800 dark:bg-orange-950/40 dark:text-orange-200",
};

export const strengthChipClasses: Record<TagColor, string> = {
  amber:
    "bg-amber-50 text-amber-800 ring-1 ring-amber-200/60 hover:bg-amber-100 dark:bg-amber-950/50 dark:text-amber-200 dark:ring-amber-700/40",
  stone:
    "bg-stone-100 text-stone-700 ring-1 ring-stone-200/60 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-200 dark:ring-stone-600/40",
  orange:
    "bg-orange-50 text-orange-800 ring-1 ring-orange-200/60 hover:bg-orange-100 dark:bg-orange-950/50 dark:text-orange-200 dark:ring-orange-700/40",
};
