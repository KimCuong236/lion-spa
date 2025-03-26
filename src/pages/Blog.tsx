import React from 'react';
import type { BlogPost } from '../types';

export const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Benefits of Regular Spa Treatments',
      content: 'Discover how regular spa treatments can improve your physical and mental well-being...',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      date: '2025-03-15',
      author: 'Dr. Sarah Williams'
    },
    {
      id: '2',
      title: 'Everything You Need to Know About Laser Hair Removal',
      content: 'A comprehensive guide to understanding the laser hair removal process...',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      date: '2025-03-10',
      author: 'Emma Thompson'
    },
    {
      id: '3',
      title: 'The Latest Trends in Cosmetic Procedures',
      content: 'Stay up to date with the most innovative and effective cosmetic treatments...',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      date: '2025-03-05',
      author: 'Dr. Michael Chen'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Beauty & Wellness Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay informed with the latest trends, tips, and insights in beauty and wellness
          from our team of experts and industry professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-pink-600">{post.author}</span>
              </div>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <button className="text-pink-600 font-semibold hover:text-pink-700">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};