import { cn } from '@/app/lib/utils'

export function Layout ({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={cn('container px-5 md:px-10', className)}>
      {children}
    </div>
  )
}
