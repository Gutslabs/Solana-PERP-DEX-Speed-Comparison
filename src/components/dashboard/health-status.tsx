import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DEX_DATA, DEX_ORDER } from '@/data/dex-data'
import { formatLatency } from '@/lib/utils'

interface HealthItem {
    latency: number
    status: 'online' | 'degraded' | 'offline'
}

export function HealthStatus() {
    const [health, setHealth] = useState<Record<string, HealthItem>>(() => {
        const initial: Record<string, HealthItem> = {}
        DEX_ORDER.forEach(dex => {
            initial[dex] = { latency: DEX_DATA[dex].matchingLatency.min, status: 'online' }
        })
        initial['Solana'] = { latency: 400, status: 'online' }
        return initial
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const newHealth: Record<string, HealthItem> = {}
            DEX_ORDER.forEach(dex => {
                const base = DEX_DATA[dex].matchingLatency
                const latency = base.min + Math.random() * (base.max - base.min)
                newHealth[dex] = {
                    latency,
                    status: Math.random() > 0.03 ? 'online' : 'degraded'
                }
            })
            newHealth['Solana'] = {
                latency: 380 + Math.random() * 40,
                status: Math.random() > 0.02 ? 'online' : 'degraded'
            }
            setHealth(newHealth)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {DEX_ORDER.map(dex => (
                    <div key={dex} className="flex items-center justify-between py-1">
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold" style={{ color: DEX_DATA[dex].color }}>
                                {DEX_DATA[dex].shortName}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {DEX_DATA[dex].matchingEngine.sublabel}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Badge variant={health[dex]?.status === 'online' ? 'success' : 'warning'}>
                                {health[dex]?.status === 'online' ? 'OK' : 'SLOW'}
                            </Badge>
                            <motion.span
                                className="text-xs font-mono text-muted-foreground w-16 text-right"
                                key={Math.floor(health[dex]?.latency || 0)}
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: 1 }}
                            >
                                {formatLatency(health[dex]?.latency || 0)}
                            </motion.span>
                            <span className={`w-2 h-2 rounded-full ${health[dex]?.status === 'online'
                                    ? 'bg-primary shadow-[0_0_8px_var(--color-primary)]'
                                    : 'bg-speed-medium shadow-[0_0_8px_var(--color-speed-medium)]'
                                }`} />
                        </div>
                    </div>
                ))}

                <div className="border-t border-border pt-3 mt-3">
                    <div className="flex items-center justify-between py-1">
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-jupiter">SOLANA</span>
                            <span className="text-xs text-muted-foreground">L1 Blockchain</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Badge variant="success">OK</Badge>
                            <motion.span
                                className="text-xs font-mono text-muted-foreground w-16 text-right"
                                key={Math.floor(health['Solana']?.latency || 0)}
                            >
                                {formatLatency(health['Solana']?.latency || 0)}
                            </motion.span>
                            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
