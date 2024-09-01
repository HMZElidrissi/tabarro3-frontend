// This file contains type definitions for my data.
// It describes the shape of the data, and what data type each property should accept.

import {
  BuildingOffice2Icon,
  CalendarIcon,
  HomeIcon,
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
  organization?: Organization;
  participants?: Participant[];
  is_participating?: boolean;
};

export type BloodRequest = {
  id?: number;
  description: string;
  blood_group: string;
  city: string;
  status: "open" | "closed";
  user?: Participant;
};

export const adminNavigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Participants", href: "/admin/participants", icon: UsersIcon },
  {
    name: "Organizations",
    href: "/admin/organizations",
    icon: BuildingOffice2Icon,
  },
];

export const organizationNavigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Campaigns", href: "/organization/campaigns", icon: CalendarIcon },
];

export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/signout" },
];

export const desktopMenu = [
  {
    name: "menu.bloodRequests",
    href: "/requests",
    className: "desktop-navbar-item",
  },
  {
    name: "menu.newCampaigns",
    href: "/campaigns",
    className: "desktop-navbar-item",
  },
  {
    name: "menu.donationCenters",
    href: "/#map",
    className: "desktop-navbar-item",
  },
  {
    name: "menu.whyDonateBlood",
    href: "/#benefits",
    className: "desktop-navbar-item",
  },
  {
    name: "menu.whoCanDonateBlood",
    href: "/#criterias",
    className: "desktop-navbar-item",
  },
];

export const mobileMenu = [
  {
    name: "menu.bloodRequests",
    href: "/requests",
    className: "mobile-navbar-item",
  },
  {
    name: "menu.newCampaigns",
    href: "/campaigns",
    className: "mobile-navbar-item",
  },
  {
    name: "menu.donationCenters",
    href: "/#map",
    className: "mobile-navbar-item",
  },
  {
    name: "menu.whyDonateBlood",
    href: "/#benefits",
    className: "mobile-navbar-item",
  },
  {
    name: "menu.whoCanDonateBlood",
    href: "/#criterias",
    className: "mobile-navbar-item",
  },
];

export const benefits = [
  {
    name: "benefits.freeHealthCheckUp.title",
    description: "benefits.freeHealthCheckUp.description",
    icon: Activity,
  },
  {
    name: "benefits.improvedCardiovascularHealth.title",
    description: "benefits.improvedCardiovascularHealth.description",
    icon: HospitalIcon,
  },
  {
    name: "benefits.emotionalSatisfaction.title",
    description: "benefits.emotionalSatisfaction.description",
    icon: UsersIcon,
  },
  {
    name: "benefits.reducedRiskOfCancer.title",
    description: "benefits.reducedRiskOfCancer.description",
    icon: HeartIcon,
  },
];

export const criterias = [
  {
    name: "criterias.ageAndWeight.title",
    description: "criterias.ageAndWeight.description",
  },
  {
    name: "criterias.generalHealth.title",
    description: "criterias.generalHealth.description",
  },
  {
    name: "criterias.donationFrequency.title",
    description: "criterias.donationFrequency.description",
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
