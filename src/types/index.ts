export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'hair-removal' | 'filler-botox' | 'other';
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface SearchResult {
  services: Service[];
  loading: boolean;
  error: string | null;
}