// Mock promotion data
export interface Promotion {
  id: string;
  title: string;
  description: string;
  date: string;
  opponent: string;
  imageUrl?: string;
  category: 'giveaway' | 'theme' | 'discount' | 'special' | 'food';
  featured?: boolean;
}

// Sample promotional events for the season
export const promotions: Promotion[] = [
  {
    id: 'opening-day',
    title: 'Opening Day Celebration',
    description: 'Join us for the season opener with special ceremonies, player introductions, and a post-game fireworks display! First 1,000 fans receive a commemorative 2025 Lexington Legends magnet schedule.',
    date: '2025-04-10',
    opponent: 'Florence Y\'alls',
    imageUrl: '/promotions/opening-day.jpg',
    category: 'special',
    featured: true
  },
  {
    id: 'bobblehead-night',
    title: 'Legends Bobblehead Night',
    description: 'First 1,500 fans will receive an exclusive Lexington Legends bobblehead featuring our star player. Arrive early to guarantee yours!',
    date: '2025-04-25',
    opponent: 'Evansville Otters',
    imageUrl: '/promotions/bobblehead.jpg',
    category: 'giveaway',
    featured: true
  },
  {
    id: 'dollar-beer-night',
    title: '$1 Beer Thursday',
    description: 'Enjoy $1 domestic beers all game long during this Thursday night matchup.',
    date: '2025-05-08',
    opponent: 'Gateway Grizzlies',
    imageUrl: '/promotions/beer-night.jpg',
    category: 'discount',
    featured: false
  },
  {
    id: 'marvel-night',
    title: 'Superhero Night',
    description: 'Legends players will wear special Marvel-themed jerseys that will be auctioned off after the game. Special character appearances throughout the game!',
    date: '2025-05-17',
    opponent: 'Windy City ThunderBolts',
    imageUrl: '/promotions/superhero.jpg',
    category: 'theme',
    featured: true
  },
  {
    id: 'taco-tuesday',
    title: 'Taco Tuesday',
    description: '$2 tacos all night long, plus special discounts on margaritas for fans 21+.',
    date: '2025-06-03',
    opponent: 'Joliet Slammers',
    imageUrl: '/promotions/taco-tuesday.jpg',
    category: 'food',
    featured: false
  },
  {
    id: 'fireworks-friday',
    title: 'Fireworks Friday',
    description: 'Stay after the game for a spectacular fireworks display set to classic rock music.',
    date: '2025-06-13',
    opponent: 'Lake Erie Crushers',
    imageUrl: '/promotions/fireworks.jpg',
    category: 'special',
    featured: true
  },
  {
    id: 'legends-cap-night',
    title: 'Legends Cap Giveaway',
    description: 'First 1,000 fans will receive a limited edition Lexington Legends cap.',
    date: '2025-06-27',
    opponent: 'Washington Wild Things',
    imageUrl: '/promotions/cap.jpg',
    category: 'giveaway',
    featured: false
  },
  {
    id: 'country-night',
    title: 'Country Music Night',
    description: 'Special country music performances, themed contests, and special edition merchandise available only at this game.',
    date: '2025-07-11',
    opponent: 'Southern Illinois Miners',
    imageUrl: '/promotions/country.jpg',
    category: 'theme',
    featured: false
  },
  {
    id: 'christmas-july',
    title: 'Christmas in July',
    description: 'Santa will be making a special summer appearance! Holiday music, decorations, and special holiday-themed concessions.',
    date: '2025-07-25',
    opponent: 'Schaumburg Boomers',
    imageUrl: '/promotions/christmas.jpg',
    category: 'theme',
    featured: true
  },
  {
    id: 'legends-blanket-night',
    title: 'Legends Blanket Giveaway',
    description: 'First 750 fans will receive a comfortable Lexington Legends stadium blanket — perfect for those cool evening games!',
    date: '2025-08-08',
    opponent: 'New Jersey Jackals',
    imageUrl: '/promotions/blanket.jpg',
    category: 'giveaway',
    featured: false
  },
  {
    id: 'bark-park',
    title: 'Bark in the Park',
    description: 'Bring your furry friends to the ballpark! Special dog-friendly seating sections and contests for your canine companions.',
    date: '2025-08-22',
    opponent: 'Québec Capitales',
    imageUrl: '/promotions/bark.jpg',
    category: 'special',
    featured: true
  },
  {
    id: 'fan-appreciation',
    title: 'Fan Appreciation Day',
    description: 'Our season finale celebration! Special giveaways every inning, player autographs before the game, and a post-game fireworks show.',
    date: '2025-09-07',
    opponent: 'Tri-City ValleyCats',
    imageUrl: '/promotions/fan-appreciation.jpg',
    category: 'special',
    featured: true
  }
];

// Get all promotions sorted by date
export function getAllPromotions(): Promotion[] {
  return [...promotions].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

// Get featured promotions
export function getFeaturedPromotions(): Promotion[] {
  return promotions.filter(promo => promo.featured).sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

// Get promotions by category
export function getPromotionsByCategory(category: Promotion['category']): Promotion[] {
  return promotions.filter(promo => promo.category === category).sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

// Get upcoming promotions (today or in the future)
export function getUpcomingPromotions(): Promotion[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return promotions.filter(promo => {
    const promoDate = new Date(promo.date);
    promoDate.setHours(0, 0, 0, 0);
    return promoDate >= today;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

// Get promotion by ID
export function getPromotionById(id: string): Promotion | undefined {
  return promotions.find(promo => promo.id === id);
}