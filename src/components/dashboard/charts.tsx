import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { DEX_DATA, DEX_ORDER } from '@/data/dex-data'

interface MetricBarsProps {
    label: string
}

export function MetricBars({ label }: MetricBarsProps) {
    const [values, setValues] = useState<number[]>(() =>
        DEX_ORDER.map(() => 20 + Math.random() * 80)
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setValues(DEX_ORDER.map(() => 20 + Math.random() * 80))
        }, 300)
        return () => clearInterval(interval)
    }, [])

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-xs">{label}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-end gap-1 h-16">
                    {values.map((v, i) => (
                        <div
                            key={i}
                            className="flex-1 rounded-t transition-all duration-150"
                            style={{
                                height: `${v}%`,
                                backgroundColor: DEX_DATA[DEX_ORDER[i]].color
                            }}
                        />
                    ))}
                </div>
                <div className="flex justify-between mt-2">
                    {DEX_ORDER.map(dex => (
                        <span key={dex} className="text-[10px] text-muted-foreground">
                            {DEX_DATA[dex].shortName.slice(0, 3)}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export function StreamingBars() {
    const [bars, setBars] = useState<number[]>(() =>
        Array.from({ length: 60 }, () => 20 + Math.random() * 80)
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setBars(prev => {
                const newBars = [...prev.slice(1)]
                newBars.push(20 + Math.random() * 80)
                return newBars
            })
        }, 50)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-end gap-px h-20 bg-secondary/30 rounded-lg p-2">
            {bars.map((h, i) => (
                <div
                    key={i}
                    className="flex-1 bg-foreground/80 rounded-sm transition-all duration-75"
                    style={{ height: `${h}%` }}
                />
            ))}
        </div>
    )
}

export function TimelineChart() {
    const [data, setData] = useState<number[]>(() =>
        Array.from({ length: 48 }, () => 15000 + Math.random() * 10000)
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => {
                const newData = [...prev.slice(1)]
                newData.push(15000 + Math.random() * 10000)
                return newData
            })
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const max = Math.max(...data)
    const min = Math.min(...data)

    return (
        <Card>
            <CardHeader>
                <CardTitle>TPS (24H)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-end gap-px h-32">
                    {data.map((v, i) => {
                        const height = ((v - min) / (max - min)) * 100 || 50
                        return (
                            <div
                                key={i}
                                className="flex-1 bg-primary/60 rounded-t transition-all duration-200"
                                style={{ height: `${height}%` }}
                            />
                        )
                    })}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>NOW</span>
                </div>
            </CardContent>
        </Card>
    )
}
