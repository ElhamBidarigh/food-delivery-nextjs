'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Restaurant, MenuItem, fetchRestaurant, fetchMenuItems } from '@/lib/mockData';
import MenuItemComponent from '@/components/MenuItem';

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [r, m] = await Promise.all([
        fetchRestaurant(params.id),
        fetchMenuItems(params.id),
      ]);
      setRestaurant(r || null);
      setItems(m);
      setLoading(false);
    };
    load();
  }, [params.id]);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading…</div>;
  if (!restaurant) return <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>Not found</div>;

  return (
    <main style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px' }}>
        <Link href="/" style={{ color: '#1E88E5', fontWeight: 600 }}>← Back</Link>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 32px', background: '#fff', borderRadius: 16, marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>{restaurant.image} {restaurant.name}</h1>
        <p style={{ color: '#888' }}>{restaurant.cuisine}</p>
        <div style={{ display: 'flex', gap: 16, fontSize: 14, color: '#666', marginTop: 8 }}>
          <span>⭐ {restaurant.rating}</span>
          <span>⏱ {restaurant.deliveryTime} min</span>
          <span>🚚 +{restaurant.deliveryFee} QAR</span>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 40px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Menu</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
          {items.map(item => (<MenuItemComponent key={item.id} item={item} />))}
        </div>
      </div>
    </main>
  );
}
