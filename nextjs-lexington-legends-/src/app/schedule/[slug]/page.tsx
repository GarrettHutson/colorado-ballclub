import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getGameBySlug } from "../../../lib/sanity";
import { formatDate, formatGameResult } from "../../../lib/utils";

interface GameDetailsPageProps {
  params: {
    slug: string;
  };
}

interface Game {
  _id: string;
  opponent: string;
  date: string;
  time: string;
  location: string;
  locationImageUrl?: string;
  ticketsUrl?: string;
  result?: {
    status: string;
    legendsScore?: number;
    opponentScore?: number;
  };
  slug: {
    current: string;
  };
}

export default async function GameDetailsPage({ params }: GameDetailsPageProps) {
  const { slug } = params;
  
  // Fetch the game data from Sanity
  let game: Game | null = null;
  
  try {
    game = await getGameBySlug(slug);
  } catch (error) {
    console.error("Error fetching game:", error);
    // If fetch fails, game will remain null and we'll show the 'not found' page
  }
  
  if (!game) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-8">
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-red-600">Game Not Found</h2>
            <p className="mt-4">Sorry, we couldn't find the game you're looking for.</p>
            <Link href="/schedule" className="mt-6 inline-block bg-blue-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition-colors">
              Return to Schedule
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const gameDate = new Date(game.date);
  const formattedDate = formatDate(gameDate);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto p-8">
        <div className="mb-6">
          <Link href="/schedule" className="text-blue-700 hover:underline flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Schedule
          </Link>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="bg-blue-800 text-white p-6">
            <h1 className="text-3xl font-bold">Lexington Legends vs {game.opponent}</h1>
            <div className="mt-2 flex flex-wrap gap-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {formattedDate}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {game.time}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className={game.location === "Home" ? "text-green-300" : "text-blue-300"}>
                  {game.location} Game
                </span>
              </div>
              {game.result && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {formatGameResult(game.result)}
                </div>
              )}
            </div>
          </div>
          
          <div className="p-6">
            {game.location === "Home" && game.ticketsUrl && (
              <div className="mb-6">
                <a
                  href={game.ticketsUrl}
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-block"
                >
                  Buy Tickets
                </a>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Game Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    {game.location === "Home" ? (
                      <p>Lexington Legends Ballpark<br />207 Legends Lane, Lexington, KY 40505</p>
                    ) : (
                      <p>Away Game - Opponent's Stadium</p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold">Promotions</h3>
                    {game.location === "Home" ? (
                      <ul className="list-disc pl-5 space-y-1">
                        <li>$1 Hot Dog Night</li>
                        <li>Post-game Fireworks</li>
                        <li>Kids Run the Bases</li>
                      </ul>
                    ) : (
                      <p>No promotions for away games</p>
                    )}
                  </div>
                  
                  {game.location === "Home" && (
                    <div>
                      <h3 className="text-lg font-semibold">Parking Information</h3>
                      <p>Free parking is available at the stadium. Gates open 1 hour before game time.</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Stadium</h2>
                {game.locationImageUrl ? (
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <div className="relative w-full h-64">
                      <Image 
                        src={game.locationImageUrl} 
                        alt={`${game.location === "Home" ? "Lexington Legends Ballpark" : `${game.opponent} Stadium`}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-gray-50">
                      <p>{game.location === "Home" ? "Lexington Legends Ballpark" : `${game.opponent} Stadium`}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <p>Stadium image not available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}