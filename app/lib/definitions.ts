// This file contains type definitions for my data.
// It describes the shape of the data, and what data type each property should accept.

import {
  ArrowRightEndOnRectangleIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Activity, HospitalIcon } from "lucide-react";
import { HeartIcon } from "@heroicons/react/20/solid";

export type Participant = {
  id: number;
  name: string;
  email: string;
  city: string;
  phone: string;
  blood_group: string;
};

export type Organization = {
  id?: number;
  name: string;
  email: string;
  password?: string;
  password_confirmation?: string;
  city: string;
  phone: string;
};

export type Campaign = {
  id?: number;
  name: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
};

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon },
  { name: "Team", href: "/test", icon: UsersIcon },
  { name: "Projects", href: "#", icon: FolderIcon },
  { name: "Calendar", href: "#", icon: CalendarIcon },
  { name: "Documents", href: "#", icon: InboxIcon },
  { name: "Reports", href: "#", icon: ChartBarIcon },
  { name: "Participants", href: "/admin/participants", icon: UsersIcon },
  {
    name: "Organizations",
    href: "/admin/organizations",
    icon: BuildingOffice2Icon,
  },
  { name: "Campaigns", href: "/organization/campaigns", icon: CalendarIcon },
];
export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export const desktopMenu = [
  {
    name: "Create an account",
    href: "/register",
    className: "desktop-button-outline",
  },
  {
    name: "Sign in",
    href: "/login",
    className: "desktop-button",
    icon: ArrowRightEndOnRectangleIcon,
  },
];

export const mobileMenu = [
  {
    name: "Create an account",
    href: "/register",
    className: "-m-2 p-2 block font-medium text-gray-600",
  },
  {
    name: "Sign in",
    href: "/login",
    className: "-m-2 p-2 block font-medium text-gray-600",
  },
];

export const benefits = [
  {
    name: "Free Health Check-Up",
    description:
      "In order to give blood, you’re required to undergo a health screening. A trained staff member performs this checkup. They’ll check your: pulse, blood pressure, body temperature, hemoglobin levels",
    icon: Activity,
  },
  {
    name: "Improved Cardiovascular Health",
    description:
      "Donating blood can help reduce harmful iron stores. This can reduce the risk of heart disease. It can also reduce the risk of heart attack.",
    icon: HospitalIcon,
  },
  {
    name: "Emotional Satisfaction",
    description:
      "Donating blood can help you feel good about yourself. It can also help you feel more connected to your community.",
    icon: UsersIcon,
  },
  {
    name: "Reduced Risk of Cancer",
    description:
      "Donating blood can help reduce the risk of cancer. This is because it can reduce the risk of iron overload in the body.",
    icon: HeartIcon,
  },
];

export const criterias = [
  {
    name: "Age and Weight",
    description:
      "Donors must be between 18 and 65 years old and weigh at least 50 kg.",
  },
  {
    name: "General Health",
    description:
      "Be in good general health and not suffering from any diseases transmissible by blood.",
  },
  {
    name: "Donation Frequency",
    description:
      "Men can donate every three months, and women every four months.",
  },
];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
