# Solana Perp DEX Speed Comparison ⚡️

A real-time, interactive dashboard visualizing the performance and technical architecture of top Solana-based Perpetual DEXs.

![Dashboard Preview](public/dashboard_preview.png)

## 🚀 Overview

This project is a high-performance React application designed to compare the "speed" and architectural trade-offs of major Solana Perp DEXs. It features a simulated real-time transaction counter, visual latency tracking, and a detailed breakdown of matching engines, consensus mechanisms, and ordering logic.

**Platforms Tracked:**
- **BULK Trade:** Network Layer optimization (UDP).
- **Jupiter Perps:** Pool-based architecture (JLP).
- **Flash Trade:** Pool-to-Peer model (FLP).
- **Drift Protocol:** Hybrid Auction / JIT model.

## ✨ Features

- **Real-Time Simulation:** A persistent "Universal Transaction Counter" that simulates live network activity based on average TPS metrics, starting from a fixed epoch (Jan 28, 2026).
- **Visual Speed Meter:** Dynamic, block-based loading bars representing matching latency (e.g., < 20ms for BULK vs. ~400ms for Solana L1 apps).
- **Technical Deep Dive:** Comprehensive data grid comparing:
  - Matching Latency & Settlement Time
  - Architecture (Off-chain vs. On-chain)
  - Ordering Logic (FIFO vs. Oracle)
  - Centralization Risks
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop screens. (Vertical stacking on mobile, scrollable data tables).
- **Universal Clock:** Real-time UTC clock in the footer for global reference.

## 🛠 Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 📦 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/solana-perp-comparison.git
    cd solana-perp-comparison
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## ⚠️ Disclaimer

This dashboard uses **simulated data** based on real-world average performance metrics for demonstration purposes. It is not an active block explorer and does not connect to live blockchain nodes. Transaction counts are mathematical projections based on average TPS starting from the defined epoch.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Built with ❤️ for the Solana Community.
