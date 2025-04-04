"use client";

import { useRouter } from "next/navigation";

export default function QuickFilters() {
  const router = useRouter();

  // Calculate date ranges for quick filters
  const today = new Date();
  // const currentYear = today.getFullYear();
  // const currentMonth = today.getMonth() + 1; // JavaScript months are 0-indexed

  // Format a date as YYYY-MM-DD
  const formatDateForParam = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const handleUpcomingClick = () => {
    const todayFormatted = formatDateForParam(today);

    let queryParams = new URLSearchParams();
    queryParams.set("startDate", todayFormatted);

    router.push(`/schedule?${queryParams.toString()}`);
  };

  const handleWeekendClick = () => {
    // Calculate the date of the next Friday
    const nextFriday = new Date(today);
    const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday

    if (dayOfWeek < 5) {
      // Before Friday
      nextFriday.setDate(today.getDate() + (5 - dayOfWeek));
    } else if (dayOfWeek === 5) {
      // It is Friday
      nextFriday.setDate(today.getDate());
    } else {
      // Saturday or Sunday, get next week's Friday
      nextFriday.setDate(today.getDate() + (5 + 7 - dayOfWeek));
    }

    // Calculate the date of the next Sunday
    const nextSunday = new Date(nextFriday);
    nextSunday.setDate(nextFriday.getDate() + 2);

    const queryParams = new URLSearchParams();
    queryParams.set("startDate", formatDateForParam(nextFriday));
    queryParams.set("endDate", formatDateForParam(nextSunday));

    router.push(`/schedule?${queryParams.toString()}`);
  };

  const handleHomeGamesClick = () => {
    router.push(`/schedule?location=Home`);
  };

  const handleAllGamesClick = () => {
    router.push("/schedule");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Quick Filters</h3>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleUpcomingClick}
          className="bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors"
        >
          Upcoming Games
        </button>

        <button
          onClick={handleWeekendClick}
          className="bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors"
        >
          Next Weekend
        </button>

        <button
          onClick={handleHomeGamesClick}
          className="bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors"
        >
          Home Games
        </button>

        <button
          onClick={handleAllGamesClick}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
        >
          All Games
        </button>
      </div>
    </div>
  );
}
