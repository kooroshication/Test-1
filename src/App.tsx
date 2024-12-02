import React, { useState } from 'react';
import { CustomerInfo, TariffPlan } from './types';
import CustomerForm from './components/CustomerForm';
import TariffDisplay from './components/TariffDisplay';
import { calculateRecommendedTariff, getAllTariffs } from './utils/tariffCalculator';
import { Youtube } from 'lucide-react';

function App() {
  const [recommendedTariff, setRecommendedTariff] = useState<TariffPlan | null>(null);
  const [showAllTariffs, setShowAllTariffs] = useState(false);
  const [selectedContentType, setSelectedContentType] = useState<string>('YouTube Sponsoring');

  const handleSubmit = (customerInfo: CustomerInfo) => {
    const tariff = calculateRecommendedTariff(customerInfo);
    setRecommendedTariff(tariff);
    setSelectedContentType(customerInfo.contentType);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Youtube className="h-8 w-8 text-red-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Video Sponsorship Calculator</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Enter Your Channel Details</h2>
            <CustomerForm onSubmit={handleSubmit} />
          </div>

          <div>
            {recommendedTariff && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Recommended Tariff Plan</h2>
                <TariffDisplay tariff={recommendedTariff} />
                
                <div className="text-center">
                  <button
                    onClick={() => setShowAllTariffs(!showAllTariffs)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {showAllTariffs ? 'Hide' : 'Show'} all available tariffs
                  </button>
                </div>

                {showAllTariffs && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">All Available Tariffs</h2>
                    <div className="grid grid-cols-1 gap-6">
                      {getAllTariffs(selectedContentType).map((tariff, index) => (
                        <TariffDisplay key={index} tariff={tariff} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;