import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react'
import { DEX_DATA, DEX_ORDER } from '@/data/dex-data'

export function DexIcons() {
    return (
        <div className="py-4 px-4 md:px-6 bg-card border-y border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Protocol Overview
            </p>
            <div className="flex items-center gap-4 md:gap-6 overflow-x-auto pb-2 md:pb-0">
                <div className="flex-1 h-0.5 bg-border relative min-w-[20px]">
                    {/* Connection line */}
                </div>
                <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                    {DEX_ORDER.map(dex => (
                        <div
                            key={dex}
                            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-background text-sm border-2 border-background shadow-lg flex-shrink-0"
                            style={{ backgroundColor: DEX_DATA[dex].color }}
                            title={DEX_DATA[dex].name}
                        >
                            {DEX_DATA[dex].shortName.charAt(0)}
                        </div>
                    ))}
                </div>
                <div className="flex-1 h-0.5 bg-border relative min-w-[20px]">
                    {/* Connection line */}
                </div>
            </div>
        </div>
    )
}

export function Header() {
    return (
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-4 border-b border-border bg-card gap-4 md:gap-0">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                    <h1 className="text-lg font-bold tracking-tight">
                        PERP DEX <span className="text-primary">SPEED</span>
                    </h1>
                    <p className="text-xs text-muted-foreground">Technology Comparison</p>
                </div>
            </div>
        </header>
    )
}

export function Footer() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'UTC'
        }) + ' UTC'
    }

    return (
        <footer className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 md:py-3 border-t border-border bg-card text-xs text-muted-foreground gap-2 md:gap-0 text-center md:text-left">
            <span>SOLANA PERP DEX SPEED COMPARISON • Real-time simulated data</span>
            <div className="flex items-center gap-2">
                <span className="uppercase tracking-wider opacity-50">Universal Time</span>
                <span className="font-mono text-primary font-bold">{formatTime(time)}</span>
            </div>
        </footer>
    )
}
