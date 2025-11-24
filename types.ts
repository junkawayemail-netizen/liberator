export interface QuoteEstimate {
  volumeLabel: string;
  priceLow: number;
  priceHigh: number;
  explanation: string;
  category: string;
}

export interface QuoteRequest {
  itemsDescription: string;
}

export enum ServiceType {
  RESIDENTIAL = 'Residential Cleanout',
  COMMERCIAL = 'Commercial/Office',
  CONSTRUCTION = 'Construction Debris',
  APPLIANCE = 'Appliance Removal'
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}