"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function MonthPicker() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const months = [
    { name: "January", value: "01" },
    { name: "February", value: "02" },
    { name: "March", value: "03" },
    { name: "April", value: "04" },
    { name: "May", value: "05" },
    { name: "June", value: "06" },
    { name: "July", value: "07" },
    { name: "August", value: "08" },
    { name: "September", value: "09" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" },
  ];
  
  // Get current year
  const currentYear = new Date().getFullYear();
  
  const handleMonthClick = (monthValue: string) => {
    // Create date range for the selected month
    const monthStart = `${currentYear}-${monthValue}-01`;
    
    // Get the last day of the month
    const lastDay = new Date(currentYear, parseInt(monthValue), 0).getDate();
    const monthEnd = `${currentYear}-${monthValue}-${lastDay}`;
    
    let queryParams = new URLSearchParams();
    queryParams.set("startDate", monthStart);
    queryParams.set("endDate", monthEnd);
    
    router.push(`/schedule?${queryParams.toString()}`);
  };
  
  // Determine active month from URL parameters
  const isMonthActive = (monthValue: string) => {
    const startDate = searchParams.get("startDate");
    if (!startDate) return false;
    
    const parts = startDate.split("-");
    return parts[1] === monthValue && parts[2] === "01";
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Filter by Month</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {months.map((month) => (
          <button
            key={month.value}
            onClick={() => handleMonthClick(month.value)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              isMonthActive(month.value)
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {month.name}
          </button>
        ))}
      </div>
    </div>
  );
}