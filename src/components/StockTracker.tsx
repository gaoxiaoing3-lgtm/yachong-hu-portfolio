import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, RefreshCw, Play, Pause } from 'lucide-react';

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  high?: number;
  low?: number;
  open?: number;
  previousClose?: number;
  volume?: number;
}

const STOCKS = [
  { symbol: 'AAPL', name: 'Apple' },
  { symbol: 'GOOGL', name: 'Alphabet' },
  { symbol: 'MSFT', name: 'Microsoft' },
  { symbol: 'TSLA', name: 'Tesla' },
  { symbol: 'NVDA', name: 'NVIDIA' },
  { symbol: 'META', name: 'Meta' },
  { symbol: 'AMZN', name: 'Amazon' },
];

export function StockTracker() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const getDemoData = (symbol: string): StockData => {
    const basePrices: { [key: string]: number } = {
      'AAPL': 175.50, 'GOOGL': 140.25, 'MSFT': 415.00,
      'TSLA': 175.00, 'NVDA': 875.00, 'META': 485.00, 'AMZN': 178.00
    };
    const basePrice = basePrices[symbol] || 100;
    const change = (Math.random() - 0.5) * 10;
    const changePercent = (change / basePrice) * 100;
    
    return {
      symbol,
      name: STOCKS.find(s => s.symbol === symbol)?.name || symbol,
      price: basePrice + change,
      change,
      changePercent,
      high: basePrice * 1.02,
      low: basePrice * 0.98,
      open: basePrice,
      previousClose: basePrice,
      volume: Math.floor(Math.random() * 100000000),
    };
  };

  const fetchStockData = async () => {
    setLoading(true);
    try {
      // 使用演示数据（真实 API 可能有 CORS 限制）
      const data = STOCKS.map(stock => getDemoData(stock.symbol));
      setStocks(data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData();
    
    if (autoRefresh) {
      const interval = setInterval(fetchStockData, 10000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const formatVolume = (volume?: number) => {
    if (!volume) return 'N/A';
    if (volume >= 1e9) return (volume / 1e9).toFixed(2) + 'B';
    if (volume >= 1e6) return (volume / 1e6).toFixed(2) + 'M';
    return volume.toLocaleString();
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📈 实时股市观测
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            追踪热门科技股实时表现
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={fetchStockData}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50 font-medium"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            {loading ? '刷新中...' : '刷新'}
          </button>
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
              autoRefresh
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {autoRefresh ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            自动刷新：{autoRefresh ? '开' : '关'}
          </button>
        </div>

        {loading && stocks.length === 0 ? (
          <div className="text-center py-20">
            <RefreshCw className="w-12 h-12 animate-spin mx-auto text-green-400 mb-4" />
            <p className="text-gray-400">正在加载股票数据...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stocks.map((stock) => {
              const isPositive = stock.change >= 0;
              return (
                <motion.div
                  key={stock.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-green-400">{stock.symbol}</h3>
                      <p className="text-gray-400 text-sm">{stock.name}</p>
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                      isPositive ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                    }`}>
                      {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold mb-4 text-white">
                    ${stock.price?.toFixed(2)}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">最高</p>
                      <p className="font-medium text-gray-300">${stock.high?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">最低</p>
                      <p className="font-medium text-gray-300">${stock.low?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">开盘</p>
                      <p className="font-medium text-gray-300">${stock.open?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">成交量</p>
                      <p className="font-medium text-gray-300">{formatVolume(stock.volume)}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <p className="text-center text-gray-500 text-sm mt-8">
          数据每 10 秒自动刷新（开启时）• 演示数据
        </p>
      </div>
    </section>
  );
}
