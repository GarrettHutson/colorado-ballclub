/**
 * Format a date to a readable string
 * @param date The date to format
 * @returns Formatted date string (e.g., "April 15, 2025")
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Format a date to a short string
 * @param date The date to format
 * @returns Formatted date string (e.g., "Apr 15")
 */
export function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Check if a game is in the past
 * @param dateString Date string in ISO format (YYYY-MM-DD)
 * @returns True if the date is in the past
 */
export function isPastGame(dateString: string): boolean {
  const gameDate = new Date(dateString);
  const today = new Date();
  
  // Reset time to compare just the date
  today.setHours(0, 0, 0, 0);
  gameDate.setHours(0, 0, 0, 0);
  
  return gameDate < today;
}

/**
 * Format a game result
 * @param result The game result object
 * @returns Formatted result string
 */
export function formatGameResult(result: {
  status: string;
  legendsScore?: number;
  opponentScore?: number;
}) {
  if (!result || result.status === 'scheduled') {
    return 'Upcoming';
  }
  
  if (result.status === 'postponed') {
    return 'Postponed';
  }
  
  if (result.status === 'cancelled') {
    return 'Cancelled';
  }
  
  if (result.status === 'in-progress') {
    if (typeof result.legendsScore === 'number' && typeof result.opponentScore === 'number') {
      return `In Progress: ${result.legendsScore} - ${result.opponentScore}`;
    }
    return 'In Progress';
  }
  
  if (result.status === 'final') {
    if (typeof result.legendsScore === 'number' && typeof result.opponentScore === 'number') {
      const won = result.legendsScore > result.opponentScore;
      const lost = result.legendsScore < result.opponentScore;
      
      if (won) {
        return `W ${result.legendsScore}-${result.opponentScore}`;
      } else if (lost) {
        return `L ${result.legendsScore}-${result.opponentScore}`;
      } else {
        return `T ${result.legendsScore}-${result.opponentScore}`;
      }
    }
    return 'Final';
  }
  
  return '';
}