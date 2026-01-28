import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
    'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground',
                secondary: 'bg-secondary text-secondary-foreground',
                success: 'bg-speed-fast/20 text-speed-fast border border-speed-fast/30',
                warning: 'bg-speed-medium/20 text-speed-medium border border-speed-medium/30',
                destructive: 'bg-destructive/20 text-destructive border border-destructive/30',
                outline: 'border border-border text-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> { }

export function Badge({ className, variant, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
