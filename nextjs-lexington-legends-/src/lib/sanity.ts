import { createClient } from 'next-sanity';
import { Game } from '../../types/game'; // Assume this is where your Game interface is defined

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
});

// Type for the query response (array of games)
type GameQueryResponse = Game[];

// Query to get all games
export async function getGames(): Promise<GameQueryResponse> {
  return client.fetch(`
    *[_type == "game"] | order(date asc) {
      _id,
      opponent,
      date,
      time,
      location,
      "locationImageUrl": locationImage.asset->url,
      ticketsUrl,
      result,
      slug
    }
  `);
}

// Query to get upcoming games (today or in the future)
export async function getUpcomingGames(): Promise<GameQueryResponse> {
  const today = new Date().toISOString().split('T')[0];
  
  return client.fetch(`
    *[_type == "game" && date >= $today] | order(date asc) {
      _id,
      opponent,
      date,
      time,
      location,
      "locationImageUrl": locationImage.asset->url,
      ticketsUrl,
      result,
      slug
    }
  `, { today });
}

// Query to get past games (before today)
export async function getPastGames(): Promise<GameQueryResponse> {
  const today = new Date().toISOString().split('T')[0];
  
  return client.fetch(`
    *[_type == "game" && date < $today] | order(date desc) {
      _id,
      opponent,
      date,
      time,
      location,
      "locationImageUrl": locationImage.asset->url,
      ticketsUrl,
      result,
      slug
    }
  `, { today });
}

// Query to get games with filters (date range, location)
export async function getGamesByDateRange(startDate?: string, endDate?: string, location?: string): Promise<GameQueryResponse> {
  let query = `*[_type == "game"`;
  
  if (startDate && endDate) {
    query += ` && date >= $startDate && date <= $endDate`;
  } else if (startDate) {
    query += ` && date >= $startDate`;
  } else if (endDate) {
    query += ` && date <= $endDate`;
  }
  
  if (location) {
    query += ` && location == $location`;
  }
  
  query += `] | order(date asc) {
    _id,
    opponent,
    date,
    time,
    location,
    "locationImageUrl": locationImage.asset->url,
    ticketsUrl,
    result,
    slug
  }`;
  
  return client.fetch(query, { 
    startDate: startDate || '',
    endDate: endDate || '',
    location: location || ''
  });
}

// Query to get a specific game by slug
export async function getGameBySlug(slug: string): Promise<Game | null> {
  return client.fetch(`
    *[_type == "game" && slug.current == $slug][0] {
      _id,
      opponent,
      date,
      time,
      location,
      "locationImageUrl": locationImage.asset->url,
      ticketsUrl,
      result,
      slug
    }
  `, { slug });
}