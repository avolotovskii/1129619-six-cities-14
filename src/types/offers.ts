type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferCity = {
  name: string;
  location: OfferLocation;
};

type OfferHost = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

type Offers = {
  city: OfferCity;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: OfferHost;
  description: string;
  location: OfferLocation;
  id: number;
};

export { type Offers };
