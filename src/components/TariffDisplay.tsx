import React from 'react';
import { TariffPlan } from '../types';
import { CheckCircle } from 'lucide-react';

interface Props {
  tariff: TariffPlan;
}

export default function TariffDisplay({ tariff }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">{tariff.name}</h3>
        <p className="mt-2 text-gray-500">{tariff.description}</p>
        <p className="mt-4 text-4xl font-bold text-blue-600">${tariff.price}</p>
      </div>
      
      <ul className="mt-6 space-y-4">
        {tariff.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Select Plan
      </button>
    </div>
  );
}