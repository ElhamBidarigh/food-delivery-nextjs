// src/lib/mockData.ts
// ─────────────────────────────────────────────────────
// TypeScript interfaces + mock data
//
// مفهوم TypeScript interface:
// تعریف شکل یه object — مثل contract که میگه
// "هر Restaurant باید این فیلدها رو داشته باشه"
// ─────────────────────────────────────────────────────

export interface Restaurant {
  id:         string;
  name:       string;
  cuisine:    string;
  rating:     number;
  deliveryTime: number;   // minutes
  deliveryFee:  number;   // QAR
  minOrder:     number;
  image:        string;
  tags:         string[];
  isOpen:       boolean;
}

export interface MenuItem {
  id:          string;
  restaurantId: string;
  name:        string;
  description: string;
  price:       number;
  category:    string;
  image:       string;
  isPopular:   boolean;
}

// ── Mock Restaurants ──────────────────────────────────
export const restaurants: Restaurant[] = [
  { id: "r1", name: "Burger Palace",    cuisine: "American",   rating: 4.8, deliveryTime: 25, deliveryFee: 5,  minOrder: 50,  image: "🍔", tags: ["Burgers","Fast Food","Halal"],   isOpen: true  },
  { id: "r2", name: "Sushi World",      cuisine: "Japanese",   rating: 4.6, deliveryTime: 40, deliveryFee: 8,  minOrder: 80,  image: "🍣", tags: ["Sushi","Asian","Healthy"],      isOpen: true  },
  { id: "r3", name: "Shawarma King",    cuisine: "Middle Eastern", rating: 4.9, deliveryTime: 20, deliveryFee: 3, minOrder: 30, image: "🌯", tags: ["Shawarma","Arabic","Popular"], isOpen: true  },
  { id: "r4", name: "Pizza Hub",        cuisine: "Italian",    rating: 4.5, deliveryTime: 35, deliveryFee: 6,  minOrder: 60,  image: "🍕", tags: ["Pizza","Italian","Family"],     isOpen: false },
  { id: "r5", name: "Healthy Bowl",     cuisine: "Healthy",    rating: 4.7, deliveryTime: 30, deliveryFee: 5,  minOrder: 45,  image: "🥗", tags: ["Healthy","Salads","Vegan"],     isOpen: true  },
  { id: "r6", name: "Noodle House",     cuisine: "Chinese",    rating: 4.4, deliveryTime: 30, deliveryFee: 4,  minOrder: 40,  image: "🍜", tags: ["Chinese","Noodles","Soup"],     isOpen: true  },
];

export const menuItems: MenuItem[] = [
  { id: "m1", restaurantId: "r1", name: "Classic Smash Burger", description: "Double smash patty, cheddar, special sauce", price: 42, category: "Burgers", image: "🍔", isPopular: true  },
  { id: "m2", restaurantId: "r1", name: "Crispy Chicken Sandwich", description: "Fried chicken, pickles, honey mustard",   price: 38, category: "Chicken", image: "🥪", isPopular: true  },
  { id: "m3", restaurantId: "r1", name: "Loaded Fries",           description: "Skin-on fries, cheese sauce, jalapeños",   price: 22, category: "Sides",   image: "🍟", isPopular: false },
  { id: "m4", restaurantId: "r3", name: "Chicken Shawarma",       description: "Marinated chicken, garlic sauce, pickles", price: 28, category: "Wraps",   image: "🌯", isPopular: true  },
  { id: "m5", restaurantId: "r3", name: "Mixed Grill Platter",    description: "Kofta, shish tawook, grilled veggies",    price: 75, category: "Platters",image: "🍖", isPopular: true  },
  { id: "m6", restaurantId: "r3", name: "Hummus with Pita",       description: "Creamy hummus, olive oil, fresh pita",    price: 18, category: "Starters",image: "🫓", isPopular: false },
];

// شبیه‌سازی API delay
export const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

export async function fetchRestaurants(search?: string): Promise<Restaurant[]> {
  await delay(600);
  if (!search) return restaurants;
  return restaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(search.toLowerCase()) ||
    r.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );
}

export async function fetchMenuItems(restaurantId: string): Promise<MenuItem[]> {
  await delay(400);
  return menuItems.filter(m => m.restaurantId === restaurantId);
}

export async function fetchRestaurant(id: string): Promise<Restaurant | undefined> {
  await delay(300);
  return restaurants.find(r => r.id === id);
}
