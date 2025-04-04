"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function YearPicker() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get current year and create a range of years (current year-1 to current year+1)
  const currentYear = new Date().getFullYear();
  const years = [currentYear - 1, currentYear, currentYear + 1];
  
  // Determine active year from URL parameters or default to current year
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  
  useEffect(() => {
    const startDate = searchParams.get("startDate");
    if (startDate) {
      const year = parseInt(startDate.split("-")[0]);
      setSelectedYear(year);
    } else {
      setSelectedYear(currentYear);
    }
  }, [searchParams, currentYear]);
  
  const handleYearClick = (year: number) => {
    // Preserve the month if it exists in the current filter
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    
    let month = "01";
    let endMonth = "12";
    let endDay = "31";
    
    // Try to extract month from existing filters
    if (startDate) {
      const parts = startDate.split("-");
      if (parts.length > 1) {
        month = parts[1];
      }
    }
    
    if (endDate) {
      const parts = endDate.split("-");
      if (parts.length > 1) {
        endMonth = parts[1];
        if (parts.length > 2) {
          // Get the last day of the selected month/year
          const lastDay = new Date(year, parseInt(endMonth), 0).getDate();
          endDay = lastDay.toString();
        }
      }
    }
    
    // Create date range for the selected year
    const yearStart = `${year}-${month}-01`;
    const yearEnd = `${year}-${endMonth}-${endDay}`;
    
    let queryParams = new URLSearchParams();
    queryParams.set("startDate", yearStart);
    queryParams.set("endDate", yearEnd);
    
    router.push(`/schedule?${queryParams.toString()}`);
    setSelectedYear(year);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Filter by Year</h3>
      <div className="flex space-x-3">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearClick(year)}
            className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
              selectedYear === year
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}