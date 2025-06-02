import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#fdf6e3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#daa520] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#daa520] text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-[#daa520] border border-[#daa520]",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-[#daa520] bg-white hover:bg-[#fdf6e3] hover:text-[#daa520]",
        secondary: "bg-[#fdf6e3] text-[#1a1a2e] hover:bg-[#daa520]/20",
        ghost: "hover:bg-[#fdf6e3] hover:text-[#daa520]",
        link: "text-[#daa520] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
