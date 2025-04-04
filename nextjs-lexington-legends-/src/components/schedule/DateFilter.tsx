"use client";

import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function DateFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [startDate, setStartDate] = useState(searchParams.get("startDate") || "");
  const [endDate, setEndDate] = useState(searchParams.get("endDate") || "");
  const [filterType, setFilterType] = useState(
    searchParams.has("startDate") || searchParams.has("endDate") ? "custom" : "all"
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    let queryParams = new URLSearchParams();
    
    if (filterType === "custom") {
      if (startDate) queryParams.set("startDate", startDate);
      if (endDate) queryParams.set("endDate", endDate);
    } else if (filterType === "month") {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
      const currentYear = currentDate.getFullYear();
      
      const monthStart = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-01`;
      
      // Get the last day of the month
      const lastDay = new Date(currentYear, currentMonth, 0).getDate();
      const monthEnd = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${lastDay}`;
      
      queryParams.set("startDate", monthStart);
      queryParams.set("endDate", monthEnd);
    }
    
    let url = "/schedule";
    if (queryParams.toString()) {
      url += `?${queryParams.toString()}`;
    }
    
    router.push(url);
  };

  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    setFilterType("all");
    router.push("/schedule");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Filter Games</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            <input 
              type="radio" 
              name="filterType" 
              value="all" 
              checked={filterType === "all"}
              onChange={() => setFilterType("all")}
              className="mr-2"
            />
            All Games
          </label>
          
          <label className="block text-sm font-medium">
            <input 
              type="radio" 
              name="filterType" 
              value="month" 
              checked={filterType === "month"}
              onChange={() => setFilterType("month")}
              className="mr-2"
            />
            Current Month
          </label>
          
          <label className="block text-sm font-medium">
            <input 
              type="radio" 
              name="filterType" 
              value="custom" 
              checked={filterType === "custom"}
              onChange={() => setFilterType("custom")}
              className="mr-2"
            />
            Custom Date Range
          </label>
        </div>
        
        {filterType === "custom" && (
          <div className="space-y-3 pt-2">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium mb-1">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
        
        <div className="flex space-x-3 pt-2">
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded font-medium hover:bg-blue-800 transition-colors"
          >
            Apply Filter
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded font-medium hover:bg-gray-300 transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}