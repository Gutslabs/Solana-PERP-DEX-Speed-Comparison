import { useState, useEffect } from 'react'
import { DEX_DATA, DEX_ORDER } from '@/data/dex-data'

interface HorizontalTrackProps {
    dexKey: string
}

// START OF 2026 EPOCH
const EPOCH_START = new Date('2026-01-28T00:00:00Z').getTime()

function HorizontalTrack({ dexKey }: HorizontalTrackProps) {
    const dex = DEX_DATA[dexKey]

    // Initialize with "universal" count based on time since epoch * TPS
    const getUniversalCount = () => {
        const elapsedSeconds = (Date.now() - EPOCH_START) / 1000
        return Math.floor(elapsedSeconds * dex.averageTPS)
    }

    const [txCount, setTxCount] = useState(getUniversalCount)
    const [fillState, setFillState] = useState(0) // 0 to 100

    // High resolution for smooth "digital meter" look
    const TOTAL_BLOCKS = 70

    // Get latency range from data
    const minLatency = dex.matchingLatency.min
    const maxLatency = dex.matchingLatency.max

    useEffect(() => {
        let startTime: number | null = null
        let animationFrameId: number

        // Initial random latency for the first cycle
        let currentCycleLatency = minLatency + Math.random() * (maxLatency - minLatency)

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime

            // Progress logic: 100% fill = current cycle latency duration
            const progress = Math.min(elapsed / currentCycleLatency, 1)

            // Update visual fill
            setFillState(progress * 100)

            if (progress >= 1) {
                // Increment based on simulated TPS logic? 
                // Actually, just increment by 1 for the visual "tick" effect, 
                // but sync with universal time occasionally? 
                // For simplified visual: just increment.
                setTxCount(prev => prev + 1)

                // OR better: Update to exact universal count to keep it "synced" if tab matches speed
                // But simple increment is smoother for UI. 
                // Let's stick to increment for smooth UI flow, initialized accurately.

                startTime = timestamp

                // Pick a new random latency for the NEXT cycle within range
                currentCycleLatency = minLatency + Math.random() * (maxLatency - minLatency)
            }

            // Optional: periodically resync to universal time to ensure it doesn't drift too far?
            // Not strictly necessary for a demo.

            animationFrameId = requestAnimationFrame(animate)
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [minLatency, maxLatency])

    return (
        <div className="grid grid-cols-[80px_1fr_60px] md:grid-cols-[120px_120px_1fr_60px] items-center gap-2 md:gap-4 py-6 border-b border-black/[0.04]">
            {/* Name */}
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-foreground/90 truncate mr-2">
                {dex.shortName}
            </span>

            {/* TX Count - Hidden on Mobile */}
            <div className="hidden md:flex items-center gap-2">
                <span className="text-[10px] font-mono text-muted-foreground/40 font-bold uppercase">
                    SEQ
                </span>
                <span className="text-[10px] font-mono tabular-nums font-black text-black">
                    {txCount.toLocaleString()}
                </span>
            </div>

            {/* Track - High Density Short Blocks */}
            <div className="relative h-3 flex items-center">
                {/* Container for static background/grid structure */}
                <div className="absolute inset-0 flex justify-between">
                    {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
                        <div key={`bg-${i}`} className="w-[3px] h-1.5 bg-black/5" />
                    ))}
                </div>

                {/* Dynamic Filling Blocks */}
                <div className="relative z-10 flex justify-between w-full">
                    {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => {
                        const isActive = (i / TOTAL_BLOCKS) * 100 < fillState
                        return (
                            <div
                                key={i}
                                className={`w-[3px] h-1.5 transition-colors duration-0 ${isActive ? 'bg-black' : 'bg-transparent'}`}
                            />
                        )
                    })}
                </div>

                {/* Solana Barrier Flag */}
                <div className="absolute top-0 bottom-0 right-0 w-[2px] h-full flex flex-col justify-between py-0.5 border-r border-red-500/20">
                    <div className="w-full h-1/4 bg-red-500/40" />
                    <div className="w-full h-1/4 bg-red-500/40" />
                </div>
            </div>

            {/* Latency Label - Shows Range (e.g. "5-20ms") */}
            <span className="text-[9px] md:text-[10px] font-mono text-right tabular-nums font-black whitespace-nowrap">
                {dex.matchingLatency.label}
            </span>
        </div>
    )
}

export function SpeedComparison() {
    return (
        <div className="w-full bg-card p-4 md:p-8 border border-border/80">
            <div className="flex flex-col gap-1">
                {DEX_ORDER.map((key) => (
                    <HorizontalTrack
                        key={key}
                        dexKey={key}
                    />
                ))}
            </div>

            <div className="mt-8 flex justify-between text-[8px] font-mono text-muted-foreground uppercase tracking-[0.25em] pt-6 border-t border-black/10">
                <div className="flex gap-8">
                    {/* Labels removed */}
                </div>
                <div className="flex gap-8 items-center">
                    <span className="text-red-600 font-bold opacity-60"></span>
                    <span className="bg-black text-white px-3 py-1 font-black">ACTIVE</span>
                </div>
            </div>
        </div>
    )
}
