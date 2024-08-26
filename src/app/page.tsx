"use client";
import { FC, useState, useEffect } from 'react';

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Start animation after loading is finished
      const animationTimer = setTimeout(() => {
        setShowContent(true);
      }, 300); // Delay for starting animation
      return () => clearTimeout(animationTimer);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-200 to-green-400 p-6">
        <div className="flex items-center justify-center">
          {/* Simple spinner for loading */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col justify-center min-h-screen bg-gradient-to-b from-[#27ae60] to-[#2ecc71] p-4">
      {showContent && (
        <div className="flex flex-col inset-0 bg-opacity-50 flex items-center justify-center">
          {/* Popup content */}
          <div className="w-full max-w-lg bg-[#302b63]  rounded-3xl text-white p-8 shadow-lg transform transition-transform duration-500 scale-0 animate-scale-up">
          <div className="text-center mb-4">
          <h1 className="text-4xl font-bold">349,54</h1>
          <p className="text-sm text-gray-400">Total Balance</p>
        </div>
        {/* Bank Accounts List */}
        <div className="space-y-4">
            {[
              { name: 'Bitcoin', code: 'BTC', balance: '578,672', date: '17 Jun 2019', percent: '20%' },
              { name: 'Ethereum', code: 'ETH', balance: '11,208', date: '13 Oct 2019', percent: '17%' },
              { name: 'Litecoin', code: 'LTC', balance: '4,052', date: '13 Oct 2019', percent: '15%' },
              { name: 'Dash', code: 'DASH', balance: '578,672', date: '17 Jun 2019', percent: '10%' },
            ].map((account, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br from-${
                      account.code === 'BTC'
                        ? 'yellow-400'
                        : account.code === 'ETH'
                        ? 'blue-400'
                        : account.code === 'LTC'
                        ? 'purple-400'
                        : 'pink-400'
                    } to-gray-700 flex items-center justify-center`}
                  >
                    <span className="text-xs font-bold">{account.code}</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">{account.name}</p>
                    <p className="text-xs text-gray-400">{account.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{account.balance}</p>
                  <p className="text-xs text-green-400">{account.percent}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <button className="w-full py-2 mr-2 rounded-lg bg-[#10ac84] text-white font-bold">Receive</button>
            <button className="w-full py-2 ml-2 rounded-lg bg-[#10ac84] text-white font-bold">Send</button>
          </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;

