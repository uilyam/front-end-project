export interface ITruck {
  id: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image_url: string;
  url: string;
}
