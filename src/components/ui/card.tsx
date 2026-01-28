import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass'
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
    return (
        <div
            className={cn(
                'rounded-xl border border-border bg-card',
                variant === 'glass' && 'glass',
                className
            )}
            {...props}
        />
    )
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn('text-sm font-medium tracking-wide text-muted-foreground uppercase', className)}
            {...props}
        />
    )
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('p-6 pt-0', className)} {...props} />
}
