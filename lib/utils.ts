import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-UK", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-UK", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateRange(startDate: Date, endDate: Date): string {
  const isSameDate =
    startDate.getDate() === endDate.getDate() &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear();

  const isSameMonth =
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear();

  const dayDifference =
    Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

  const dayMonthYear = new Intl.DateTimeFormat("en-UK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const monthYear = new Intl.DateTimeFormat("en-UK", {
    month: "long",
    year: "numeric",
  });

  // 1. Same exact date
  if (isSameDate) {
    return dayMonthYear.format(startDate);
  }

  // 2. Same month & year
  if (isSameMonth) {
    // More than 20 days → show only month & year
    if (dayDifference > 20) {
      return monthYear.format(startDate);
    }

    // 20 days or less → show full range
    return `${dayMonthYear.format(startDate)} - ${dayMonthYear.format(endDate)}`;
  }

  // 3. Different month/year
  return `${monthYear.format(startDate)} - ${monthYear.format(endDate)}`;
}
