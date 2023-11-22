import * as React from 'react'
import { cn } from '@/app/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-[13px] transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-protop-light-blue hover:bg-protop-light-blue/50',
        secondary: '' // TODO
      },
      size: {
        default: 'px-[30px] py-2 h-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <button className={cn('', buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </button>
    )
  })

Button.displayName = 'Button'

export { Button, buttonVariants }