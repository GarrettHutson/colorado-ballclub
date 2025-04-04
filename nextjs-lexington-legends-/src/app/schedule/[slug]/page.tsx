import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getGameBySlug } from "../../../lib/sanity";
import { formatDate, formatGameResult } from "../../../lib/utils";

// Define the Game interface (unchanged, as it seems correct)
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

// Update GameDetailsPageProps to match Next.js expectations
interface GameDetailsPageProps {
  params: Params;
  searchParams?: { [key: string]: string | string[] | undefined }; // Optional search parameters
}

export default async function GameDetailsPage({
  params,
}: GameDetailsPageProps) {
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
              Sorry, we couldn't find the game you're looking for.
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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto p-8">
        {/* Your Game Details Rendering Code */}
        <h1 className="text-2xl font-bold">{game.opponent}</h1>
        <p>Date: {formattedDate}</p>
        <p>Time: {game.time}</p>
        <p>Location: {game.location}</p>
        {game.locationImageUrl && (
          <Image
            src={game.locationImageUrl}
            alt="Location"
            width={500}
            height={300}
          />
        )}
        {game.ticketsUrl && (
          <Link
            href={game.ticketsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Tickets
          </Link>
        )}
        {game.result && <p>Result: {formatGameResult(game.result)}</p>}
      </main>

      <Footer />
    </div>
  );
}
