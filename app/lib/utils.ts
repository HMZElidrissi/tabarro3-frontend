// This file contains utility functions that can be used throughout the app.
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
