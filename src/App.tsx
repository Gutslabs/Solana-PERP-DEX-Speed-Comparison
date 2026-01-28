import { Header, Footer } from '@/components/layout'
import { SpeedComparison, TechComparison } from '@/components/dashboard'

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-black selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col p-4 md:p-6 gap-6 max-w-[1600px] mx-auto w-full">
        {/* Section 1: High Density Comparison */}
        <section className="space-y-2">
          <div className="flex justify-between items-end border-b border-black pb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest">
              Speed Comparison
            </h2>

          </div>
          <SpeedComparison />
        </section>

        {/* Section 2: Tech Comparison */}
        <section className="space-y-2">
          <div className="flex justify-between items-end border-b border-black pb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest">
              Technology Stack Comparison
            </h2>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">
              Infrastructure & Architecture
            </span>
          </div>
          <TechComparison />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
