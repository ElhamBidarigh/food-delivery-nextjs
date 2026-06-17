'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Restaurant, fetchRestaurants } from '@/lib/mockData';
import SearchBar from '@/components/SearchBar';
import RestaurantCard from '@/components/RestaurantCard';

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchRestaurants(search || undefined);
      setRestaurants(data);
      setLoading(false);
    };
    load();
  }, [search]);

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(135deg, #1E88E5, #0F2D52)', color: '#fff', padding: '24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>🍕 Food Delivery</h1>
          <p style={{ opacity: 0.8, fontSize: 14 }}>Order from your favorite restaurants</p>
        </div>
      </header>

      {/* Search */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px' }}>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* Restaurants Grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 40px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          {search ? `Results for "${search}"` : 'Popular Restaurants'}
        </h2>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>⟳ Loading restaurants…</div>
        ) : restaurants.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
            No restaurants found. Try a different search.
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {restaurants.map(r => (
              <Link key={r.id} href={`/restaurant/${r.id}`}>
                <RestaurantCard restaurant={r} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
