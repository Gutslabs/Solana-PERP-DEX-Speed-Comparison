import { cn } from '@/lib/utils'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number
    max?: number
    color?: string
    showGlow?: boolean
}

export function Progress({
    value,
    max = 100,
    color = 'bg-primary',
    showGlow = false,
    className,
    ...props
}: ProgressProps) {
    const percent = Math.min((value / max) * 100, 100)

    return (
        <div
            className={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
            {...props}
        >
            <div
                className={cn(
                    'h-full transition-all duration-300 ease-out',
                    color,
                    showGlow && 'shadow-[0_0_10px_currentColor]'
                )}
                style={{ width: `${percent}%` }}
            />
        </div>
    )
}
