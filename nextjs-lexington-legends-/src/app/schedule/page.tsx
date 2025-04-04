import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Image from "next/image";
import Link from "next/link";
import {
  getUpcomingGames,
  getGamesByDateRange,
  getGames,
} from "../../lib/sanity";
import { formatDate } from "../../lib/utils";
import DateFilter from "../../components/schedule/DateFilter";
import MonthPicker from "../../components/schedule/MonthPicker";
import YearPicker from "../../components/schedule/YearPicker";
import QuickFilters from "../../components/schedule/QuickFilters";

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

interface SchedulePageProps {
  searchParams: {
    startDate?: string;
    endDate?: string;
    location?: string;
  };
}

export default async function Schedule({ searchParams }: SchedulePageProps) {
  // Get filter parameters
  const { startDate, endDate, location } = searchParams;

  // Fetch games based on filters
  let games: Game[] = [];
  let pageTitle = "Game Schedule";

  try {
    if (startDate || endDate || location) {
      games = await getGamesByDateRange(startDate, endDate, location);

      // Update page title based on filter
      let titleParts = [];

      if (startDate && endDate) {
        const formattedStart = formatDate(new Date(startDate));
        const formattedEnd = formatDate(new Date(endDate));
        titleParts.push(`from ${formattedStart} to ${formattedEnd}`);
      } else if (startDate) {
        const formattedStart = formatDate(new Date(startDate));
        titleParts.push(`from ${formattedStart} onwards`);
      } else if (endDate) {
        const formattedEnd = formatDate(new Date(endDate));
        titleParts.push(`until ${formattedEnd}`);
      }

      if (location) {
        titleParts.push(location === "Home" ? "at Home" : "Away");
      }

      if (titleParts.length > 0) {
        pageTitle = `Games ${titleParts.join(" ")}`;
      }
    } else {
      // Default to showing all games
      games = await getGames();
      pageTitle = "Complete Game Schedule";
    }
  } catch (error) {
    console.error("Error fetching games:", error);
    // If fetch fails, we'll show an empty schedule
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">{pageTitle}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <QuickFilters />

            <DateFilter />

            <YearPicker />

            <MonthPicker />

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Schedule Notes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>All times are Eastern Time Zone</li>
                <li>Schedule is subject to change</li>
                <li>
                  For group tickets (10 or more), please call our ticket office
                  at (555) 123-4567
                </li>
                <li>Gates open 1 hour before game time</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Opponent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                        Tickets
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {games.length > 0 ? (
                      games.map((game) => {
                        const gameDate = new Date(game.date);
                        const formattedDate = formatDate(gameDate);

                        return (
                          <tr key={game._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              {formattedDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {game.time}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap font-medium">
                              <Link
                                href={`/schedule/${game.slug.current}`}
                                className="text-blue-700 hover:underline"
                              >
                                {game.opponent}
                              </Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={
                                  game.location === "Home"
                                    ? "text-green-600"
                                    : "text-blue-600"
                                }
                              >
                                {game.location}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                              {game.location === "Home" ? (
                                <a
                                  href={game.ticketsUrl}
                                  className="bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors"
                                >
                                  Buy Tickets
                                </a>
                              ) : (
                                <span className="text-gray-500 text-sm">
                                  Away Game
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-6 py-8 text-center text-gray-500"
                        >
                          No games found for the selected date range. Try
                          adjusting your filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
