import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  getAllPromotions,
  getFeaturedPromotions,
  Promotion,
} from "../../lib/promotions";
import { formatDate } from "../../lib/utils";

export const metadata = {
  title: "Game Promotions | Colorado Ballclub",
  description:
    "Explore the exciting promotions and special events at Colorado Ballclub games this season.",
};

function PromotionCard({ promotion }: { promotion: Promotion }) {
  const promoDate = new Date(promotion.date);
  const formattedDate = formatDate(promoDate);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative h-48 w-full bg-blue-100">
        {promotion.imageUrl ? (
          <Image
            src={promotion.imageUrl}
            alt={promotion.title}
            fill={true}
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl">⚾</span>
          </div>
        )}
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white ${
            promotion.category === "giveaway"
              ? "bg-purple-600"
              : promotion.category === "discount"
                ? "bg-green-600"
                : promotion.category === "theme"
                  ? "bg-orange-600"
                  : promotion.category === "food"
                    ? "bg-yellow-600"
                    : "bg-blue-600"
          }`}
        >
          {promotion.category.charAt(0).toUpperCase() +
            promotion.category.slice(1)}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-sm text-blue-700 font-medium mb-2">
          {formattedDate} vs {promotion.opponent}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {promotion.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{promotion.description}</p>
        <div className="mt-auto">
          <Link
            href={`/schedule`}
            className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium group"
          >
            View Game Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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
      </div>
    </div>
  );
}

function FeaturedPromotionCard({ promotion }: { promotion: Promotion }) {
  const promoDate = new Date(promotion.date);
  const formattedDate = formatDate(promoDate);

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl shadow-xl overflow-hidden text-white flex flex-col md:flex-row">
      <div className="relative h-64 md:h-auto md:w-2/5">
        {promotion.imageUrl ? (
          <Image
            src={promotion.imageUrl}
            alt={promotion.title}
            fill={true}
            style={{ objectFit: "cover" }}
            priority
            className="transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-blue-700 flex items-center justify-center">
            <span className="text-8xl">⚾</span>
          </div>
        )}
      </div>
      <div className="p-6 md:p-8 md:w-3/5 flex flex-col">
        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 ${
            promotion.category === "giveaway"
              ? "bg-purple-600"
              : promotion.category === "discount"
                ? "bg-green-600"
                : promotion.category === "theme"
                  ? "bg-orange-600"
                  : promotion.category === "food"
                    ? "bg-yellow-600"
                    : "bg-blue-600"
          }`}
        >
          {promotion.category.charAt(0).toUpperCase() +
            promotion.category.slice(1)}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          {promotion.title}
        </h2>
        <div className="text-blue-200 font-medium mb-4">
          {formattedDate} vs {promotion.opponent}
        </div>
        <p className="text-blue-100 mb-6">{promotion.description}</p>
        <div className="mt-auto flex flex-wrap gap-3">
          <Link
            href={`/schedule`}
            className="px-4 py-2 rounded-lg bg-white text-blue-800 font-medium hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
          >
            See Game Details
          </Link>
          <a
            href="#"
            className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors"
          >
            Buy Tickets
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PromotionsPage() {
  const allPromotions = getAllPromotions();
  const featuredPromotions = getFeaturedPromotions();

  // Group promotions by category for filtering
  const categories = {
    giveaway: allPromotions.filter((p) => p.category === "giveaway"),
    theme: allPromotions.filter((p) => p.category === "theme"),
    discount: allPromotions.filter((p) => p.category === "discount"),
    special: allPromotions.filter((p) => p.category === "special"),
    food: allPromotions.filter((p) => p.category === "food"),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                2025 Game Promotions
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Enjoy special events, giveaways, and themed nights throughout
                the season
              </p>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-lg font-medium">
                  Don't miss out on our most popular promotions!
                </div>
                <div className="text-blue-200 text-sm">
                  Get your tickets early - special event nights often sell out
                  quickly
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Promotion */}
          {featuredPromotions.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
                Featured Promotions
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
              </h2>
              <div className="space-y-8">
                {featuredPromotions.slice(0, 2).map((promotion) => (
                  <FeaturedPromotionCard
                    key={promotion.id}
                    promotion={promotion}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Category Filters */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-4 py-2 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors">
                All Promotions
              </button>
              <button className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-medium hover:bg-purple-200 transition-colors">
                Giveaways
              </button>
              <button className="px-4 py-2 rounded-full bg-orange-100 text-orange-800 font-medium hover:bg-orange-200 transition-colors">
                Theme Nights
              </button>
              <button className="px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium hover:bg-green-200 transition-colors">
                Discounts
              </button>
              <button className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-medium hover:bg-yellow-200 transition-colors">
                Food Specials
              </button>
              <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition-colors">
                Special Events
              </button>
            </div>
          </section>

          {/* All Promotions */}
          <section>
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              All Promotions
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allPromotions.map((promotion) => (
                <PromotionCard key={promotion.id} promotion={promotion} />
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16 bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Never Miss a Promotion
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Sign up for our newsletter to get early access to special
                promotions and be the first to know about new events.
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
