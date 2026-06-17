import { MenuItem } from '@/lib/mockData';

interface MenuItemProps {
  item: MenuItem;
}

export default function MenuItemComponent({ item }: MenuItemProps) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      padding: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    }}>
      <div style={{ fontSize: 32, marginBottom: 12 }}>{item.image}</div>
      <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{item.name}</h4>
      <p style={{ fontSize: 13, color: '#888', marginBottom: 12, lineHeight: 1.4 }}>{item.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#1E88E5' }}>{item.price} QAR</span>
        {item.isPopular && <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 12, background: '#fff3cd', color: '#856404' }}>⭐ Popular</span>}
      </div>
    </div>
  );
}
