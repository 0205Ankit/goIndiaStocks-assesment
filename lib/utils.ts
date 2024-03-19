import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFormattedCount = (count: number) => {
  if (count < 1000) {
    return count;
  } else if (count >= 1000 && count < 1000000) {
    return Math.ceil(count / 1000) + "k";
  }
};
