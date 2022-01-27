export class Company {
  name?: string;
  logo?: string;
  type?: string;
  domain?: string;
  description?: string;
  location?: string;
  category?: {
    industry?: string
  };
  metrics: {
    raised?: number,
    marketCap?: number,
    annualRevenue?: number,
    employees?: number
  };
}