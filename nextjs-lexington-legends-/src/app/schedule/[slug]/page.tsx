import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getGameBySlug } from "../../../lib/sanity";
import { formatDate, formatGameResult } from "../../../lib/utils";

// Define the Game interface
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

// Define params type for the dynamic route
interface Params {
  slug: string;
}

// In Next.js App Router, page components receive these props directly
// We don't need to define our own interface that extends PageProps

export default async function GameDetailsPage({
  params,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { slug } = params;

  // Fetch the game data from Sanity
  let game: Game | null = null;

  try {
    game = await getGameBySlug(slug);
  } catch (error) {
    console.error("Error fetching game:", error);
  }

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-8">
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-red-600">Game Not Found</h2>
            <p className="mt-4">
              Sorry, we couldn&apos;t find the game you&apos;re looking for.
            </p>
            <Link
              href="/schedule"
              className="mt-6 inline-block bg-blue-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition-colors"
            >
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <main className="flex-grow container mx-auto p-4 md:p-8">
        {/* Back to schedule button */}
        <div className="mb-6">
          <Link 
            href="/schedule" 
            className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back to Schedule
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Game header with opponent name and matchup info */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  Lexington Legends vs {game.opponent}
                </h1>
                <div className="flex items-center text-blue-100">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${game.location === "Home" ? "bg-green-400" : "bg-yellow-400"}`}></span>
                  <span>{game.location} Game</span>
                </div>
              </div>
              
              {/* Game result badge if available */}
              {game.result && (
                <div className="mt-4 md:mt-0">
                  <div className="inline-block px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold">
                    {formatGameResult(game.result)}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Game details section */}
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">Game Details</h2>
                
                <div className="space-y-4">
                  {/* Date info */}
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-blue-800" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Date</h3>
                      <p className="text-lg font-semibold text-gray-800">{formattedDate}</p>
                    </div>
                  </div>
                  
                  {/* Time info */}
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-blue-800" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Start Time</h3>
                      <p className="text-lg font-semibold text-gray-800">{game.time}</p>
                    </div>
                  </div>
                  
                  {/* Location info */}
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-blue-800" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Location</h3>
                      <p className="text-lg font-semibold text-gray-800">{game.location}</p>
                    </div>
                  </div>
                </div>
                
                {/* Ticket button */}
                {game.ticketsUrl && (
                  <div className="mt-8">
                    <Link
                      href={game.ticketsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg text-center transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
                    >
                      <span className="inline-flex items-center">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 mr-2" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" 
                            clipRule="evenodd" 
                          />
                          <path 
                            d="M9 11H3v5a2 2 0 002 2h4v-7zm2 7h4a2 2 0 002-2v-5h-6v7z" 
                          />
                        </svg>
                        Buy Tickets
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Location image or game highlight */}
              <div>
                {game.locationImageUrl ? (
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64 md:h-72 lg:h-80 w-full">
                      <Image
                        src={game.locationImageUrl}
                        alt={`${game.location} Stadium`}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-105"
                        priority={true}
                      />
                    </div>
                    <div className="p-3 bg-gray-800 text-gray-200 text-sm">
                      {game.location} Stadium - Home of the {game.location === "Home" ? "Lexington Legends" : game.opponent}
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 h-full flex items-center justify-center border border-blue-200">
                    <div className="text-center">
                      <div className="text-6xl mb-4">⚾</div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Game Highlights</h3>
                      <p className="text-blue-700">Stay tuned for game photos and highlights!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Additional game information or stats could go here */}
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Game Preview</h2>
              <p className="text-gray-600">
                Join us for this exciting matchup between the Lexington Legends and the {game.opponent}! 
                {game.location === "Home" 
                  ? " Cheer on your Legends at home as they face off against a tough opponent."
                  : " Support your team on the road as they take on the challenge away from home."}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
