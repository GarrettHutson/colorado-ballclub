import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getGameBySlug } from "../../../lib/sanity";
import { formatDate, formatGameResult } from "../../../lib/utils";
import { GetServerSideProps } from "next";

interface GameDetailsPageProps {
  game: Game | null;
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  let game: Game | null = null;

  try {
    game = await getGameBySlug(slug);
  } catch (error) {
    console.error("Error fetching game:", error);
  }

  return {
    props: {
      game,
    },
  };
};

export default function GameDetailsPage({ game }: GameDetailsPageProps) {
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
      </main>

      <Footer />
    </div>
  );
}
