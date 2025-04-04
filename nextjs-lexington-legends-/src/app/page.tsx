import Link from "next/link";
// import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { getUpcomingGames } from "../lib/sanity";
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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto p-8">
        <section className="mb-12">
          <div className="bg-blue-700 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to Lexington Legends
            </h2>
            <p className="text-xl mb-6">
              Your premier baseball team in the heart of Kentucky
            </p>
            <Link
              href="/schedule"
              className="bg-white text-blue-800 px-6 py-2 rounded-lg font-bold hover:bg-blue-100 transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Upcoming Games
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingGames.length > 0 ? (
              upcomingGames.map((game) => {
                const gameDate = new Date(game.date);
                const formattedDate = formatDate(gameDate);

                return (
                  <div
                    key={game._id}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                  >
                    <h3 className="text-xl font-bold mb-2">
                      vs {game.opponent}
                    </h3>
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-500"
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
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-500"
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
                      <span>{game.time}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-500"
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
                      <span
                        className={
                          game.location === "Home"
                            ? "text-green-600"
                            : "text-blue-600"
                        }
                      >
                        {game.location} Game
                      </span>
                    </div>
                    <div className="flex space-x-3">
                      <Link
                        href={`/schedule/${game.slug.current}`}
                        className="text-blue-700 hover:text-blue-900 font-medium text-sm"
                      >
                        Game Details
                      </Link>
                      {game.location === "Home" && game.ticketsUrl && (
                        <a
                          href={game.ticketsUrl}
                          className="text-green-700 hover:text-green-900 font-medium text-sm"
                        >
                          Buy Tickets
                        </a>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 bg-gray-100 p-6 rounded-lg text-center text-gray-500">
                No upcoming games scheduled. Check back soon!
              </div>
            )}
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/schedule"
              className="text-blue-700 hover:text-blue-900 font-medium"
            >
              View Full Schedule →
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Latest News</h3>
            <p>
              Stay up to date with the latest team news, trades, and
              announcements.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Team Roster</h3>
            <p>Meet our players and coaching staff for the current season.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Fan Shop</h3>
            <p>Get the latest Lexington Legends merchandise and apparel.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
