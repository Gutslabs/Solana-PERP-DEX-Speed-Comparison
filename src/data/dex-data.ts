// DEX Data Configuration
export interface DexInfo {
    name: string
    shortName: string
    color: string
    averageTPS: number
    matchingLatency: { min: number; max: number; label: string; sublabel: string }
    settlementTime: { label: string; sublabel: string }
    architecture: { label: string; sublabel: string }
    orderingLogic: { label: string; sublabel: string }
    matchingEngine: { label: string; sublabel: string }
    liquiditySource: { label: string; sublabel: string }
    priceDiscovery: { label: string; sublabel: string }
    slippage: { label: string; sublabel: string; hasSlippage: boolean }
    dependency: { label: string; sublabel: string; independent: boolean }
    centralizationRisk: { label: string; sublabel: string; level: 'low' | 'medium' | 'high' }
    boundToSolana?: boolean
    hasCountdown?: boolean
}

export const DEX_DATA: Record<string, DexInfo> = {
    BULK: {
        name: 'BULK Trade',
        shortName: 'BULK Trade',
        color: '#000000',
        averageTPS: 1500,
        matchingLatency: { min: 5, max: 20, label: '5 - 20 ms', sublabel: 'Network Layer' },
        settlementTime: { label: '25 - 40 ms', sublabel: 'Solana Final' },
        architecture: { label: 'Leaderless Network', sublabel: 'UDP + Reed-Solomon' },
        orderingLogic: { label: 'Deterministic FIFO', sublabel: 'Hash-based sorting' },
        matchingEngine: { label: 'Decentralized Nodes', sublabel: 'Validator RAM' },
        liquiditySource: { label: 'Orderbook', sublabel: 'Makers/Takers' },
        priceDiscovery: { label: 'Market Driven', sublabel: 'Buyers/Sellers' },
        slippage: { label: 'Standard', sublabel: 'Depends on Depth', hasSlippage: true },
        dependency: { label: 'Independent', sublabel: 'No Block Wait', independent: true },
        centralizationRisk: { label: 'Low', sublabel: 'No Leader', level: 'low' }
    },

    Pacifica: {
        name: 'Pacifica Protocol',
        shortName: 'Pacifica Protocol',
        color: '#000000',
        averageTPS: 100,
        matchingLatency: { min: 1, max: 10, label: '< 10 ms', sublabel: 'Off-chain Server' },
        settlementTime: { label: 'Sub-second', sublabel: 'On L1 Chain' },
        architecture: { label: 'Hybrid', sublabel: 'Off-chain / On-chain' },
        orderingLogic: { label: 'Sequencer / Leader', sublabel: 'FIFO' },
        matchingEngine: { label: 'Centralized Server', sublabel: 'Off-chain' },
        liquiditySource: { label: 'Orderbook', sublabel: 'Makers/Takers' },
        priceDiscovery: { label: 'Market Driven', sublabel: 'Buyers/Sellers' },
        slippage: { label: 'Standard', sublabel: 'Depends on Depth', hasSlippage: true },
        dependency: { label: 'Independent', sublabel: 'No Block Wait', independent: true },
        centralizationRisk: { label: 'Medium', sublabel: 'Leader Actions', level: 'medium' }
    },
    Drift: {
        name: 'Drift Trade',
        shortName: 'Drift Trade',
        color: '#000000',
        averageTPS: 300,
        matchingLatency: { min: 400, max: 5000, label: '~5s / ~400ms', sublabel: 'JIT Auction Duration' },
        settlementTime: { label: '~400 ms', sublabel: 'Solana Block' },
        architecture: { label: 'Hybrid Auction', sublabel: 'JIT -> DLOB -> AMM' },
        orderingLogic: { label: 'Incentivized FIFO', sublabel: 'Keeper Bots' },
        matchingEngine: { label: 'Keeper Network', sublabel: 'Off-chain Bots' },
        liquiditySource: { label: 'Triple Layer', sublabel: 'JIT + Limit + AMM' },
        priceDiscovery: { label: 'Hybrid', sublabel: 'Market + Oracle' },
        slippage: { label: 'Optimized', sublabel: 'JIT Improvements', hasSlippage: true },
        dependency: { label: 'Partial', sublabel: 'Auction + Solana', independent: false },
        centralizationRisk: { label: 'Medium', sublabel: 'Keeper Dependence', level: 'medium' },
        hasCountdown: true
    },
    Jupiter: {
        name: 'Jupiter',
        shortName: 'Jupiter',
        color: '#000000',
        averageTPS: 800,
        matchingLatency: { min: 400, max: 400, label: '~400 ms', sublabel: 'Solana Block' },
        settlementTime: { label: '~400 ms', sublabel: 'Solana Block' },
        architecture: { label: 'Pool-Based', sublabel: 'JLP Pool' },
        orderingLogic: { label: 'Oracle Execution', sublabel: 'Zero-Impact' },
        matchingEngine: { label: 'Smart Contract', sublabel: 'On-chain Logic' },
        liquiditySource: { label: 'JLP Pool', sublabel: 'Unified Assets' },
        priceDiscovery: { label: 'Hybrid Oracle', sublabel: 'Chaos Labs + Pyth' },
        slippage: { label: 'Zero (0%)', sublabel: 'Oracle Pricing', hasSlippage: false },
        dependency: { label: 'Dependent', sublabel: 'Solana Speed', independent: false },
        centralizationRisk: { label: 'Oracle Risk', sublabel: 'Data Feeds', level: 'medium' },
        boundToSolana: true
    },
    Flash: {
        name: 'Flash Trade',
        shortName: 'Flash Trade',
        color: '#000000',
        averageTPS: 800,
        matchingLatency: { min: 400, max: 400, label: '~400 ms', sublabel: 'Solana Block' },
        settlementTime: { label: '~400 ms', sublabel: 'Solana Block' },
        architecture: { label: 'Pool-to-Peer', sublabel: 'FLP Pool' },
        orderingLogic: { label: 'Oracle Execution', sublabel: 'Zero-Price Impact' },
        matchingEngine: { label: 'Smart Contract', sublabel: 'On-chain Logic' },
        liquiditySource: { label: 'FLP Pool', sublabel: 'Dynamic Fee' },
        priceDiscovery: { label: 'Pyth Oracle', sublabel: 'High-Freq Updates' },
        slippage: { label: 'Zero (0%)', sublabel: 'Oracle Pricing', hasSlippage: false },
        dependency: { label: 'Dependent', sublabel: 'Solana Speed', independent: false },
        centralizationRisk: { label: 'Oracle Risk', sublabel: 'Data Feeds', level: 'medium' },
        boundToSolana: true
    }
}

export const DEX_ORDER = ['BULK', 'Jupiter', 'Flash', 'Drift'] as const
export type DexKey = typeof DEX_ORDER[number]

export const SOLANA_BLOCK_TIME = 400 // ms

export const METRICS = [
    { key: 'matchingLatency', label: 'Matching Latency' },
    { key: 'architecture', label: 'Architecture' },
    { key: 'dependency', label: 'Dependency' },
] as const
