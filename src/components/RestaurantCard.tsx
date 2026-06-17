import { Restaurant } from '@/lib/mockData';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
      }}
    >
      <div style={{ fontSize: 48, padding: '20px', textAlign: 'center', background: '#f9f9f9' }}>
        {restaurant.image}
      </div>
      <div style={{ padding: '12px 16px' }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{restaurant.name}</h3>
        <p style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>{restaurant.cuisine}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#666' }}>
          <span>⭐ {restaurant.rating}</span>
          <span>⏱ {restaurant.deliveryTime}min</span>
          <span>🚚 +{restaurant.deliveryFee} QAR</span>
        </div>
      </div>
    </div>
  );
}
