// This file contains type definitions for my data.
// It describes the shape of the data, and what data type each property should accept.

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  BuildingOffice2Icon
} from "@heroicons/react/24/outline";

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

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon },
  { name: "Team", href: "/test", icon: UsersIcon },
  { name: "Projects", href: "#", icon: FolderIcon },
  { name: "Calendar", href: "#", icon: CalendarIcon },
  { name: "Documents", href: "#", icon: InboxIcon },
  { name: "Reports", href: "#", icon: ChartBarIcon },
  { name: "Participants", href: "/admin/participants", icon: UsersIcon },
  { name: "Organizations", href: "/admin/organizations", icon: BuildingOffice2Icon },
  { name: "Campaigns", href: "#", icon: CalendarIcon }
];
export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
