import React, { useState, useEffect } from 'react';

const AnimatedBar = ({ value, maxValue, color, delay = 0, children }) => {
  const [width, setWidth] = useState(0);
  const percentage = (value / maxValue) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="relative">
      <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
      {children}
    </div>
  );
};

const MetricCard = ({ title, cagr, cagrIcon, data, color, unit = "₹ in crore", showPercentage = false }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="text-right">
          <div className="text-sm text-gray-500">{unit}</div>
          {cagr && (
            <div className="flex items-center gap-1 text-sm">
              <span className="text-gray-600">CAGR</span>
              <span className="font-bold text-xl">{cagr}%</span>
              <span className="text-blue-500">{cagrIcon}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item.year} className="flex items-center justify-between">
            <div className="w-12 text-sm text-gray-600">{item.year}</div>
            <div className="flex-1 mx-4">
              <AnimatedBar 
                value={item.value} 
                maxValue={maxValue} 
                color={color}
                delay={index * 100}
              />
            </div>
            <div className="w-20 text-right text-sm font-medium">
              {showPercentage ? `${item.value}%` : item.value.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DualMetricCard = ({ title, data1, data2, color1, color2, label1, label2, unit = "₹ in crore" }) => {
  const maxValue = Math.max(...data1.map(d => d.value), ...data2.map(d => d.value));
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="text-sm text-gray-500">{unit}</div>
      </div>
      
      <div className="space-y-3">
        {data1.map((item, index) => (
          <div key={item.year} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-12 text-sm text-gray-600">{item.year}</div>
              <div className="flex-1 mx-4">
                <AnimatedBar 
                  value={item.value} 
                  maxValue={maxValue} 
                  color={color1}
                  delay={index * 100}
                />
              </div>
              <div className="w-20 text-right text-sm font-medium">
                {item.value.toLocaleString()}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-12"></div>
              <div className="flex-1 mx-4">
                <AnimatedBar 
                  value={data2[index].value} 
                  maxValue={maxValue} 
                  color={color2}
                  delay={index * 100 + 50}
                />
              </div>
              <div className="w-20 text-right text-sm font-medium">
                {data2[index].value.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${color1.replace('bg-', 'bg-')}`}></div>
          <span>{label1}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${color2.replace('bg-', 'bg-')}`}></div>
          <span>{label2}</span>
        </div>
      </div>
    </div>
  );
};

const CASACard = ({ title, cagr, data, unit = "₹ in crore" }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="text-right">
          <div className="text-sm text-gray-500">{unit}</div>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-gray-600">CAGR</span>
            <span className="font-bold text-xl">{cagr}%</span>
            <span className="text-blue-500">●</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item.year} className="flex items-center justify-between">
            <div className="w-12 text-sm text-gray-600">{item.year}</div>
            <div className="flex-1 mx-4">
              <AnimatedBar 
                value={item.value} 
                maxValue={maxValue} 
                color="bg-blue-400"
                delay={index * 100}
              />
            </div>
            <div className="w-32 text-right text-sm">
              <div className="font-medium">{item.value.toLocaleString()}</div>
              <div className="text-gray-500">{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-gray-600">CASA Balances (₹ in crore)</div>
        </div>
        <div>
          <div className="text-gray-600">CASA (%)</div>
        </div>
      </div>
    </div>
  );
};

const KPI = () => {
  const [activeTab, setActiveTab] = useState('operational');

  // Operational Metrics Data
  const totalAssets = [
    { year: 'FY 21', value: 478854 },
    { year: 'FY 22', value: 546498 },
    { year: 'FY 23', value: 620430 },
    { year: 'FY 24', value: 767667 },
    { year: 'FY 25', value: 879774 }
  ];

  const capitalReserves = [
    { year: 'FY 21', value: 84836 },
    { year: 'FY 22', value: 97134 },
    { year: 'FY 23', value: 112254 },
    { year: 'FY 24', value: 129892 },
    { year: 'FY 25', value: 157395 }
  ];

  const capitalAdequacy = [
    { year: 'FY 21', value: 23.4 },
    { year: 'FY 22', value: 23.7 },
    { year: 'FY 23', value: 23.3 },
    { year: 'FY 24', value: 21.8 },
    { year: 'FY 25', value: 23.3 }
  ];

  const cet1 = [
    { year: 'FY 21', value: 22.5 },
    { year: 'FY 22', value: 22.7 },
    { year: 'FY 23', value: 22.3 },
    { year: 'FY 24', value: 20.7 },
    { year: 'FY 25', value: 22.3 }
  ];

  const bankDeposits = [
    { year: 'FY 21', value: 280100 },
    { year: 'FY 22', value: 311684 },
    { year: 'FY 23', value: 363096 },
    { year: 'FY 24', value: 448954 },
    { year: 'FY 25', value: 499055 }
  ];

  const casaData = [
    { year: 'FY 21', value: 169313, percentage: '60.4' },
    { year: 'FY 22', value: 189134, percentage: '60.7' },
    { year: 'FY 23', value: 191815, percentage: '52.8' },
    { year: 'FY 24', value: 204304, percentage: '45.5' },
    { year: 'FY 25', value: 214416, percentage: '43.0' }
  ];

  const tdSweep = [
    { year: 'FY 21', value: 20924 },
    { year: 'FY 22', value: 21906 },
    { year: 'FY 23', value: 23339 },
    { year: 'FY 24', value: 47052 },
    { year: 'FY 25', value: 55627 }
  ];

  const totalTermDeposits = [
    { year: 'FY 21', value: 110787 },
    { year: 'FY 22', value: 122550 },
    { year: 'FY 23', value: 171281 },
    { year: 'FY 24', value: 244650 },
    { year: 'FY 25', value: 284639 }
  ];

  const bankAdvances = [
    { year: 'FY 21', value: 223670 },
    { year: 'FY 22', value: 271254 },
    { year: 'FY 23', value: 319861 },
    { year: 'FY 24', value: 376075 },
    { year: 'FY 25', value: 426909 }
  ];

  const netInterestIncome = [
    { year: 'FY 21', value: 19858 },
    { year: 'FY 22', value: 22187 },
    { year: 'FY 23', value: 27740 },
    { year: 'FY 24', value: 33669 },
    { year: 'FY 25', value: 37394 }
  ];

  const operatingProfit = [
    { year: 'FY 21', value: 16018 },
    { year: 'FY 22', value: 16719 },
    { year: 'FY 23', value: 20086 },
    { year: 'FY 24', value: 25836 },
    { year: 'FY 25', value: 29045 }
  ];

  const netProfit = [
    { year: 'FY 21', value: 9990 },
    { year: 'FY 22', value: 12089 },
    { year: 'FY 23', value: 14925 },
    { year: 'FY 24', value: 18213 },
    { year: 'FY 25', value: 22126 }
  ];

  const nim = [
    { year: 'FY 21', value: 4.41 },
    { year: 'FY 22', value: 4.61 },
    { year: 'FY 23', value: 5.33 },
    { year: 'FY 24', value: 5.32 },
    { year: 'FY 25', value: 4.96 }
  ];

  const npa = [
    { year: 'FY 21', value: 1.21 },
    { year: 'FY 22', value: 0.64 },
    { year: 'FY 23', value: 0.37 },
    { year: 'FY 24', value: 0.34 },
    { year: 'FY 25', value: 0.31 }
  ];

  // Group Company & Valuation Metrics Data
  const aum = [
    { year: 'FY 21', value: 323762 },
    { year: 'FY 22', value: 382709 },
    { year: 'FY 23', value: 420880 },
    { year: 'FY 24', value: 560140 },
    { year: 'FY 25', value: 669885 }
  ];

  const adv = [
    { year: 'FY 21', value: 10946 },
    { year: 'FY 22', value: 13940 },
    { year: 'FY 23', value: 14259 },
    { year: 'FY 24', value: 19089 },
    { year: 'FY 25', value: 25414 }
  ];

  const eps = [
    { year: 'FY 21', value: 50.5 },
    { year: 'FY 22', value: 60.8 },
    { year: 'FY 23', value: 75.0 },
    { year: 'FY 24', value: 91.5 },
    { year: 'FY 25', value: 111.3 }
  ];

  const lifeInsurance = [
    { year: 'FY 21', value: 11100 },
    { year: 'FY 22', value: 13015 },
    { year: 'FY 23', value: 15320 },
    { year: 'FY 24', value: 17708 },
    { year: 'FY 25', value: 18376 }
  ];

  const iev = [
    { year: 'FY 21', value: 9869 },
    { year: 'FY 22', value: 10679 },
    { year: 'FY 23', value: 12511 },
    { year: 'FY 24', value: 15242 },
    { year: 'FY 25', value: 17612 }
  ];

  const bookValue = [
    { year: 'FY 21', value: 426 },
    { year: 'FY 22', value: 487 },
    { year: 'FY 23', value: 563 },
    { year: 'FY 24', value: 653 },
    { year: 'FY 25', value: 792 }
  ];

  const amcOverall = [
    { year: 'FY 21', value: 202826 },
    { year: 'FY 22', value: 272938 },
    { year: 'FY 23', value: 287058 },
    { year: 'FY 24', value: 346589 },
    { year: 'FY 25', value: 468820 }
  ];

  const amcEquity = [
    { year: 'FY 21', value: 81401 },
    { year: 'FY 22', value: 130488 },
    { year: 'FY 23', value: 153486 },
    { year: 'FY 24', value: 200923 },
    { year: 'FY 25', value: 299924 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex space-x-4 mb-6">
          <button 
            onClick={() => setActiveTab('operational')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'operational' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Operational Metrics
          </button>
          <button 
            onClick={() => setActiveTab('group')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'group' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Group Company & Valuation Metrics
          </button>
        </div>
      </div>

      {/* Operational Metrics */}
      {activeTab === 'operational' && (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Operational Metrics</h2>
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MetricCard 
              title="Total Assets"
              cagr="16"
              cagrIcon="●"
              data={totalAssets}
              color="bg-purple-400"
            />
            <MetricCard 
              title="Capital and Reserves and Surplus"
              cagr="17"
              cagrIcon="●"
              data={capitalReserves}
              color="bg-purple-500"
            />
            <DualMetricCard 
              title="Capital Adequacy Ratio and CET 1"
              data1={capitalAdequacy}
              data2={cet1}
              color1="bg-purple-300"
              color2="bg-purple-600"
              label1="Capital Adequacy Ratio"
              label2="CET 1"
              unit="(%)"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MetricCard 
              title="Bank Deposits"
              cagr="16"
              cagrIcon="●"
              data={bankDeposits}
              color="bg-gray-400"
            />
            <CASACard 
              title="Bank Current Account and Savings Account (CASA)"
              cagr="6"
              data={casaData}
            />
            <DualMetricCard 
              title="Bank Term Deposits"
              data1={tdSweep}
              data2={totalTermDeposits}
              color1="bg-purple-300"
              color2="bg-purple-600"
              label1="TD Sweep/ActivMoney (Part of Total Term Deposits)"
              label2="Total Term Deposits"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MetricCard 
              title="Bank Advances"
              cagr="18"
              cagrIcon="●"
              data={bankAdvances}
              color="bg-purple-500"
            />
            <MetricCard 
              title="Net Interest Income"
              cagr="17"
              cagrIcon="●"
              data={netInterestIncome}
              color="bg-purple-500"
            />
            <MetricCard 
              title="Operating Profit"
              cagr="16"
              cagrIcon="●"
              data={operatingProfit}
              color="bg-purple-500"
            />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MetricCard 
              title="Net Profit"
              cagr="22"
              cagrIcon="●"
              data={netProfit}
              color="bg-purple-600"
            />
            <MetricCard 
              title="Bank - Net Interest Margin (NIM)"
              data={nim}
              color="bg-gray-400"
              unit="(%)"
              showPercentage={true}
            />
            <MetricCard 
              title="Bank - Net NPA"
              data={npa}
              color="bg-gray-400"
              unit="(%)"
              showPercentage={true}
            />
          </div>

          {/* Footer note */}
          <div className="text-sm text-gray-600 mt-8">
            ● 4-year CAGR | * Operating Profit and Net Profit for FY 2024-25 includes gain on divestment of stake in Kotak Mahindra General Insurance Company Limited
          </div>
        </div>
      )}

      {/* Group Company & Valuation Metrics */}
      {activeTab === 'group' && (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-red-600">Group Company Metrics</h2>
            <h2 className="text-2xl font-bold text-red-600">Valuation Metrics</h2>
          </div>
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MetricCard 
              title="Total Assets Under Management"
              cagr="20"
              cagrIcon="●"
              data={aum}
              color="bg-purple-500"
            />
            <MetricCard 
              title="Kotak Securities - Average Daily Volume (ADV)"
              cagr="23"
              cagrIcon="●"
              data={adv}
              color="bg-purple-500"
            />
            <MetricCard 
              title="Basic Earnings Per Share (EPS)"
              cagr="22"
              cagrIcon="●"
              data={eps}
              color="bg-orange-400"
              unit="(₹)"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MetricCard 
              title="Kotak Mahindra Life Insurance - Gross Written Premium"
              cagr="13"
              cagrIcon="●"
              data={lifeInsurance}
              color="bg-purple-500"
            />
            <MetricCard 
              title="Kotak Mahindra Life Insurance - Indian Embedded Value (IEV)"
              cagr="16"
              cagrIcon="●"
              data={iev}
              color="bg-purple-500"
            />
            <MetricCard 
              title="Book Value Per Share"
              cagr="17"
              cagrIcon="●"
              data={bookValue}
              color="bg-orange-400"
              unit="(₹)"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetricCard 
              title="Kotak Mahindra Asset Management - AAUM - Overall"
              cagr="23"
              cagrIcon="●"
              data={amcOverall}
              color="bg-purple-500"
            />
            <MetricCard 
              title="Kotak Mahindra Asset Management - AAUM - Equity"
              cagr="39"
              cagrIcon="●"
              data={amcEquity}
              color="bg-purple-600"
            />
          </div>

          {/* Valuation Metrics Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">19.5x</div>
                <div className="text-sm text-gray-600">Price-to-earnings (P/E)</div>
                <div className="text-sm text-gray-600">as on 31st March, 2025</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">2.7x</div>
                <div className="text-sm text-gray-600">Price-to-book (P/B)</div>
                <div className="text-sm text-gray-600">as on 31st March, 2025</div>
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2.7%</div>
                <div className="text-sm text-gray-600">Return on Assets (RoA)</div>
                <div className="text-sm text-gray-600">for FY 2024-25</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15.2%</div>
                <div className="text-sm text-gray-600">Return on Equity (RoE)</div>
                <div className="text-sm text-gray-600">for FY 2024-25</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">85.5%</div>
                <div className="text-sm text-gray-600">Credit - Deposit Ratio (CD)</div>
                <div className="text-sm text-gray-600">for FY 2024-25</div>
              </div>
            </div>
          </div>

          {/* Bottom Statistics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2">11.6% | 9.4%</div>
                <div className="text-sm text-gray-600">Overall Market Share | Equity Market</div>
                <div className="text-sm text-gray-600">Share - Kotak Securities for</div>
                <div className="text-sm text-gray-600">FY 2024-25**</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2">25.0%</div>
                <div className="text-sm text-gray-600">Value Of New Business (VNB)</div>
                <div className="text-sm text-gray-600">Margin - Kotak Mahindra Life</div>
                <div className="text-sm text-gray-600">Insurance for FY 2024-25**</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KPI;
