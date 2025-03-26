import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { MainSection } from '../components/MainSection';

export const Home = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Will implement API call later
  };

  return (
    <div className="page-transition">
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 animate-slide-in">Welcome to LionBeauty</h1>
          <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover our premium beauty and wellness services
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      <MainSection />
    </div>
  );
};