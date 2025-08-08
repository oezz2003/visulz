import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary h-8 w-8"
      >
        <path d="M15.9999 0L32 9.2376L24.0001 13.8564L15.9999 9.2376L8 13.8564L0 9.2376L15.9999 0Z" fill="currentColor"/>
        <path d="M16.0001 18.4752L32 27.7128L16.0001 32L0 27.7128L16.0001 18.4752Z" fill="currentColor"/>
        <path d="M8.00001 13.8564L16 18.4752L24.0001 13.8564V23.094L16 27.7128L8.00001 23.094V13.8564Z" fill="currentColor"/>
      </svg>

      <span className="font-headline text-2xl font-bold text-foreground">
        Visualz
      </span>
    </div>
  );
}
