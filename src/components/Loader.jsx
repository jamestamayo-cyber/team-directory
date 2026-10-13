export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-64 flex-col items-center justify-center gap-4"
    >
      <div
        aria-hidden="true"
        className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600 dark:border-slate-700 dark:border-t-blue-500"
      />
      <p className="animate-pulse text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
        Fetching team members...
      </p>
    </div>
  )
}