import { DEX_DATA, DEX_ORDER } from '@/data/dex-data'

export function TechComparison() {
    return (
        <div className="w-full bg-card p-4 md:p-8 border border-border/80">
            {/* Scrollable Container */}
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                <div className="min-w-[800px]">
                    {/* Header Row */}
                    <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] gap-4 pb-4 border-b border-black mb-4">
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                            PLATFORM
                        </div>
                        {/* ... other columns ... */}
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest text-primary font-bold">
                            SPEED
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                            MATCHING ENGINE
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                            ORDERING LOGIC
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                            ARCHITECTURE
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                            LIQUIDITY
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {DEX_ORDER.map((key) => {
                            const dex = DEX_DATA[key]
                            return (
                                <div key={key} className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] gap-4 py-6 border-b border-black/[0.04] items-start">
                                    {/* Name */}
                                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/90">
                                        {dex.shortName}
                                    </span>

                                    {/* Speed (Latency) */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-black uppercase tabular-nums">{dex.matchingLatency.label}</span>
                                        <span className="text-[9px] text-muted-foreground">{dex.matchingLatency.sublabel}</span>
                                    </div>

                                    {/* Matching Engine */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold uppercase">{dex.matchingEngine.label}</span>
                                        <span className="text-[9px] text-muted-foreground">{dex.matchingEngine.sublabel}</span>
                                    </div>

                                    {/* Ordering Logic */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold uppercase">{dex.orderingLogic.label}</span>
                                        <span className="text-[9px] text-muted-foreground">{dex.orderingLogic.sublabel}</span>
                                    </div>

                                    {/* Architecture */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold uppercase">{dex.architecture.label}</span>
                                        <span className="text-[9px] text-muted-foreground">{dex.architecture.sublabel}</span>
                                    </div>

                                    {/* Liquidity */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold uppercase">{dex.liquiditySource.label}</span>
                                        <span className="text-[9px] text-muted-foreground">{dex.liquiditySource.sublabel}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Details Footer */}
            <div className="mt-8 pt-6 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black" />
                        SOLANA BOUND (400ms)
                    </span>
                    <p className="text-[10px] text-muted-foreground leading-relaxed max-w-sm">
                        Platforms built directly on Solana (Jup, Drift, Flash) are strictly bound by the L1 block time limit (~400ms). They cannot settle or match trades faster than a block is produced.
                    </p>
                </div>

                <div className="space-y-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black" />
                        INDEPENDENT LAYERS (5-20ms)
                    </span>
                    <p className="text-[10px] text-muted-foreground leading-relaxed max-w-sm">
                        Architectures like <span className="font-bold text-foreground">BULK</span> (UDP Network) use mathematical verification (Reed-Solomon shards) to confirm trades as soon as a validator quorum (e.g. 6/8) is reached, bypassing full block propagation times.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-between text-[8px] font-mono text-muted-foreground uppercase tracking-[0.25em]">
                <div className="flex gap-8">
                    {/* Labels removed as requested */}
                </div>
                <div className="flex gap-8 items-center">
                    <span>LAST UPDATE: NOW</span>
                </div>
            </div>
        </div>
    )
}
