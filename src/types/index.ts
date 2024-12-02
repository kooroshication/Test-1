export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  description: string;
  preferredDuration: string;
  contentType: 'Reels / Shorts' | 'Story' | 'YouTube Sponsoring';
}

export interface TariffPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
}