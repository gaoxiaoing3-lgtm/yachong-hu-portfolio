import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, Play, Pause, Plus, X } from 'lucide-react';

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
  marketCap?: number;
}

const DEFAULT_STOCKS = [
  { symbol: 'AAPL', name: 'Apple' },
  { symbol: 'GOOGL', name: 'Alphabet' },
  { symbol: 'MSFT', name: 'Microsoft' },
  { symbol: 'TSLA', name: 'Tesla' },
  { symbol: 'NVDA', name: 'NVIDIA' },
];

export function StockTracker() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [newSymbol, setNewSymbol] = useState('');
  const [error, setError] = useState('');

  const fetchStockData = async () => {
    setLoading(true);
    setError('');
    
    try {
      const promises = DEFAULT_STOCKS.map(async (stock) => {
        try {
          const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${stock.symbol}?interval=1d&range=1d`);
          const data = await response.json();
          
          const quote = data.chart.result[0].meta;
          const currentPrice = quote.regularMarketPrice || quote.previousClose;
          const previousClose = quote.previousClose;
          const change = currentPrice - previousClose;
          const changePercent = (change / previousClose) * 100;
          
          return {
            symbol: stock.symbol,
            name: stock.name,
            price: currentPrice,
            change,
            changePercent,
            high: quote.regularMarketDayHigh,
            low: quote.regularMarketDayLow,
            open: quote.regularMarketOpen,
            previousClose,
            volume: quote.regularMarketVolume,
          } as StockData;
        } catch (err) {
          console.error(`Error fetching ${stock.symbol}:`, err);
          return null;
        }
      });
      
      const results = await Promise.all(promises);
      const validStocks = results.filter((s): s is StockData => s !== null);
      setStocks(validStocks);
    } catch (err) {
      setError('获取股票数据失败');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData();
    
    if (autoRefresh) {
      const interval = setInterval(fetchStockData, 10000); // 10 秒刷新
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const handleAddStock = () => {
    if (!newSymbol.trim()) return;
    // 这里可以添加自定义股票逻辑
    setNewSymbol('');
  };

  const formatNumber = (num?: number) => {
    if (num === undefined || num === null) return 'N/A';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    return num.toLocaleString();
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            📈 实时股市观测
          </h2>
          <p className="text-gray-400 mb-6">追踪热门科技股实时表现</p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={fetchStockData}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              {loading ? '刷新中...' : '刷新'}
            </button>
            
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                autoRefresh
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {autoRefresh ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              自动刷新：{autoRefresh ? '开' : '关'}
            </button>
            
            <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-3">
              <input
                type="text"
                value={newSymbol}
                onChange={(e) => setNewSymbol(e.target.value.toUpperCase())}
                placeholder="添加股票代码 (如：AMD)"
                className="bg-transparent outline-none text-white placeholder-gray-500"
                onKeyPress={(e) => e.key === 'Enter' && handleAddStock()}
              />
              <button onClick={handleAddStock} className="text-green-400 hover:text-green-300">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {error && (
            <p className="mt-4 text-red-400 bg-red-900/20 px-4 py-2 rounded-lg inline-block">
              {error}
            </p>
          )}
        </div>

        {loading && stocks.length === 0 ? (
          <div className="text-center py-20">
            <RefreshCw className="w-12 h-12 animate-spin mx-auto text-green-400 mb-4" />
            <p className="text-gray-400">正在加载股票数据...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stocks.map((stock) => {
              const isPositive = stock.change >= 0;
              
              return (
                <div
                  key={stock.symbol}
                  className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all hover:transform hover:scale-105"
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
                  
                  <div className="text-3xl font-bold mb-4">
                    ${stock.price?.toFixed(2)}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">最高</p>
                      <p className="font-medium">${stock.high?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">最低</p>
                      <p className="font-medium">${stock.low?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">开盘</p>
                      <p className="font-medium">${stock.open?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">昨收</p>
                      <p className="font-medium">${stock.previousClose?.toFixed(2) || 'N/A'}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-gray-500 mb-1">成交量</p>
                      <p className="font-medium">{formatNumber(stock.volume)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        <p className="text-center text-gray-500 text-sm mt-8">
          数据延迟约 15 分钟 • 每 10 秒自动刷新（开启时）
        </p>
      </div>
    </section>
  );
}
