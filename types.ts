
export interface NavItem {
  label: string;
  href: string;
}

export enum UserCategory {
  TRAVEL = 'Travel Enthusiast',
  SHOPPER = 'Online Shopper',
  FUEL = 'Fuel Spender',
  GROCERY = 'Grocery Saver',
  PREMIUM = 'Premium Lifestyle',
  BUSINESS = 'Business Professional',
  UNKNOWN = 'Unclassified'
}

export interface GroundingLink {
  title: string;
  uri: string;
}

export interface RecommendationResult {
  category: UserCategory;
  reasoning: string;
  suggestedCardName: string;
  estimatedSavings: string;
  groundingLinks?: GroundingLink[];
  cardImageUrl?: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
