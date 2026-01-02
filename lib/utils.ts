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

  const dayMonthYear = new Intl.DateTimeFormat("en-UK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const monthYear = new Intl.DateTimeFormat("en-UK", {
    month: "long",
    year: "numeric",
  });

  if (isSameDate) {
    return dayMonthYear.format(startDate);
  }

  if (isSameMonth) {
    return `${dayMonthYear.format(startDate)} - ${dayMonthYear.format(endDate)}`;
  }

  return `${monthYear.format(startDate)} - ${monthYear.format(endDate)}`;
}
