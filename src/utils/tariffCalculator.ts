import { CustomerInfo, TariffPlan } from '../types';

const TARIFF_PLANS: Record<string, TariffPlan[]> = {
  'YouTube Sponsoring': [
    {
      name: 'Basic Mention',
      description: '30-second mention in your video',
      price: 500,
      features: ['30-second product mention', 'Basic talking points', 'Single revision']
    },
    {
      name: 'Standard Integration',
      description: 'Dedicated 60-second segment',
      price: 1000,
      features: ['60-second dedicated segment', 'Custom talking points', 'Two revisions', 'Social media post']
    },
    {
      name: 'Premium Partnership',
      description: 'Full video sponsorship',
      price: 2000,
      features: ['Full video integration', 'Creative freedom', 'Unlimited revisions', 'Cross-platform promotion']
    }
  ],
  'Reels / Shorts': [
    {
      name: 'Quick Mention',
      description: '5-second mention in your reel/short',
      price: 200,
      features: ['5-second product mention', 'Basic integration', 'Single revision']
    },
    {
      name: 'Featured Integration',
      description: '15-second dedicated segment',
      price: 400,
      features: ['15-second feature', 'Creative direction', 'Two revisions', 'Story share']
    }
  ],
  'Story': [
    {
      name: 'Story Mention',
      description: 'Single story mention',
      price: 150,
      features: ['Single story post', 'Swipe-up link', 'Basic talking points']
    },
    {
      name: 'Story Series',
      description: 'Multiple connected stories',
      price: 300,
      features: ['3-5 connected stories', 'Swipe-up link', 'Custom talking points', 'Highlight save']
    }
  ]
};

export const calculateRecommendedTariff = (info: CustomerInfo): TariffPlan => {
  // Simplified logic based on content type and duration preference
  const contentTypePlans = TARIFF_PLANS[info.contentType];
  
  if (info.preferredDuration === 'full') {
    return contentTypePlans[contentTypePlans.length - 1]; // Most expensive plan
  } else if (info.preferredDuration === '60s') {
    return contentTypePlans[Math.floor(contentTypePlans.length / 2)]; // Mid-tier plan
  }
  return contentTypePlans[0]; // Basic plan
};

export const getAllTariffs = (contentType: string): TariffPlan[] => TARIFF_PLANS[contentType];