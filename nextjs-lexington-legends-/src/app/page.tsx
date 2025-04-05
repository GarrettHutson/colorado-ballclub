import Link from "next/link";
// import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getUpcomingGames } from "../lib/sanity";
import { formatDate } from "../lib/utils";

interface Game {
  _id: string;
  opponent: string;
  date: string;
  time: string;
  location: string;
  locationImageUrl?: string;
  ticketsUrl?: string;
  slug: {
    current: string;
  };
}

export default async function Home() {
  // Fetch the next 3 upcoming games
  let upcomingGames: Game[] = [];

  try {
    const games = await getUpcomingGames();
    upcomingGames = games.slice(0, 3); // Get only the first 3 games
  } catch (error) {
    console.error("Error fetching upcoming games:", error);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-blue-900"></div>
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="absolute h-full w-full">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                  <span className="block">Lexington</span>
                  <span className="block text-yellow-300">Legends</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 max-w-lg animate-fade-in-up animation-delay-300">
                  Your premier baseball team in the heart of Kentucky. Join us for a season of thrilling games, great entertainment and unforgettable moments.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
                  <Link
                    href="/schedule"
                    className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                  >
                    View Schedule
                  </Link>
                  <Link
                    href="/promotions"
                    className="border-2 border-white hover:border-yellow-300 text-white px-8 py-3 rounded-full font-bold hover:text-yellow-300 transition-all duration-300"
                  >
                    Game Promotions
                  </Link>
                  <a
                    href="#"
                    className="bg-blue-900/40 backdrop-blur-sm hover:bg-blue-900/60 text-white px-8 py-3 rounded-full font-bold transition-all duration-300"
                  >
                    Buy Season Tickets
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm shadow-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-9xl">⚾</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Upcoming Games Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-blue-800 relative">
                Upcoming Games
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
              </h2>
              <Link
                href="/schedule"
                className="text-blue-700 hover:text-blue-900 font-medium flex items-center group"
              >
                View Full Schedule
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {upcomingGames.length > 0 ? (
                upcomingGames.map((game, index) => {
                  const gameDate = new Date(game.date);
                  const formattedDate = formatDate(gameDate);
                  
                  // Calculate days remaining
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const gameDay = new Date(game.date);
                  gameDay.setHours(0, 0, 0, 0);
                  const daysRemaining = Math.ceil((gameDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                  
                  return (
                    <div
                      key={game._id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className={`h-2 ${game.location === "Home" ? "bg-green-500" : "bg-blue-500"}`}></div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                            vs {game.opponent}
                          </h3>
                          {daysRemaining > 0 && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {daysRemaining} day{daysRemaining !== 1 ? 's' : ''} away
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center">
                            <div className="bg-blue-50 rounded-full p-1.5 mr-3">
                              <svg
                                className="w-4 h-4 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                            </div>
                            <span className="text-gray-700">{formattedDate}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="bg-blue-50 rounded-full p-1.5 mr-3">
                              <svg
                                className="w-4 h-4 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <span className="text-gray-700">{game.time}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="bg-blue-50 rounded-full p-1.5 mr-3">
                              <svg
                                className="w-4 h-4 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                              </svg>
                            </div>
                            <span
                              className={
                                game.location === "Home"
                                  ? "text-green-600 font-medium"
                                  : "text-blue-600 font-medium"
                              }
                            >
                              {game.location} Game
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link
                            href={`/schedule/${game.slug.current}`}
                            className="flex-1 py-2 px-3 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium text-sm rounded text-center transition-colors"
                          >
                            Game Details
                          </Link>
                          {game.location === "Home" && game.ticketsUrl && (
                            <a
                              href={game.ticketsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2 px-3 bg-green-100 hover:bg-green-200 text-green-800 font-medium text-sm rounded text-center transition-colors"
                            >
                              Buy Tickets
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-3 bg-white p-8 rounded-xl text-center shadow-md">
                  <div className="text-6xl mb-4">⚾</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No Upcoming Games</h3>
                  <p className="text-gray-600">Our schedule is being updated. Check back soon for the latest game information!</p>
                </div>
              )}
            </div>
          </section>

          {/* Features Section */}
          <section className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Latest News</h3>
              <p className="text-gray-600 mb-6">
                Stay up to date with the latest team news, trades, and announcements from the Lexington Legends.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 font-medium group">
                Read News
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Team Roster</h3>
              <p className="text-gray-600 mb-6">
                Meet our players and coaching staff for the current season. Get to know the team behind the Legends' success.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 font-medium group">
                View Roster
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Fan Shop</h3>
              <p className="text-gray-600 mb-6">
                Get the latest Lexington Legends merchandise and apparel. Show your support with official team gear.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 font-medium group">
                Shop Now
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 md:py-16 text-center text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Legends Community</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Be part of the excitement! Sign up for our newsletter to get the latest updates, exclusive content, and special offers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow"
                />
                <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
