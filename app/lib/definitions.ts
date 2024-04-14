// This file contains type definitions for my data.
// It describes the shape of the data, and what data type each property should accept.

import {
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

export type BloodRequest = {
  id?: number;
  description: string;
  blood_group: string;
  city: string;
  status: "open" | "closed";
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
    name: "Blood Requests",
    href: "/requests",
    className: "desktop-navbar-item",
  },
  {
    name: "New Campaigns",
    href: "/campaigns",
    className: "desktop-navbar-item",
  },
  {
    name: "Donation Centers",
    href: "/#map",
    className: "desktop-navbar-item",
  },
  {
    name: "Why Donate Blood?",
    href: "/#benefits",
    className: "desktop-navbar-item",
  },
  {
    name: "Who Can Donate Blood?",
    href: "/#criterias",
    className: "desktop-navbar-item",
  },
];

export const mobileMenu = [
  {
    name: "Blood Requests",
    href: "/requests",
    className: "mobile-navbar-item",
  },
  {
    name: "New Campaigns",
    href: "/campaigns",
    className: "mobile-navbar-item",
  },
  {
    name: "Donation Centers",
    href: "/#map",
    className: "mobile-navbar-item",
  },
  {
    name: "Why Donate Blood?",
    href: "/#benefits",
    className: "mobile-navbar-item",
  },
  {
    name: "Who Can Donate Blood?",
    href: "/#criterias",
    className: "mobile-navbar-item",
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

export const donationCenters = [
  {
    id: 1,
    name: "Rabat Regional Blood Donation Center",
    latitude: 34.020882,
    longitude: -6.84165,
  },
  {
    id: 2,
    name: "Casablanca Regional Blood Donation Center",
    latitude: 33.57311,
    longitude: -7.589843,
  },
  {
    id: 3,
    name: "Marrakech Regional Blood Donation Center",
    latitude: 31.629472,
    longitude: -7.981084,
  },
  {
    id: 4,
    name: "Fez Regional Blood Donation Center",
    latitude: 34.033125,
    longitude: -5.000875,
  },
  {
    id: 5,
    name: "Tangier Regional Blood Donation Center",
    latitude: 35.759465,
    longitude: -5.834009,
  },
  {
    id: 6,
    name: "Agadir Regional Blood Donation Center",
    latitude: 30.427755,
    longitude: -9.598107,
  },
  {
    id: 7,
    name: "Oujda Regional Blood Donation Center",
    latitude: 34.677874,
    longitude: -1.929306,
  },
  {
    id: 8,
    name: "Meknes Regional Blood Donation Center",
    latitude: 33.893791,
    longitude: -5.54727,
  },
  {
    id: 9,
    name: "Tetouan Regional Blood Donation Center",
    latitude: 35.570175,
    longitude: -5.374278,
  },
  {
    id: 10,
    name: "Kenitra Regional Blood Donation Center",
    latitude: 34.26101,
    longitude: -6.5802,
  },
];
