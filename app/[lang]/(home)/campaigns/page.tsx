"use client";

import { Campaign } from "@/app/lib/definitions";
import { InboxIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, TimerIcon, UserCircle } from "lucide-react";
import ParticipateButton from "@/app/ui/campaigns/ParticipateButton";
import SearchField from "@/app/ui/campaigns/search";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useTranslation } from "@/app/lib/useTranslation";
import useSWR from "swr";
import axiosClient from "@/app/lib/axiosClient";
import { useState } from "react";
import { CampaignsSkeleton } from "@/app/ui/components/loading";

const fetcher = (url: string) => axiosClient.get(url).then((res) => res.data);

const CampaignItem = ({ campaign }: { campaign: Campaign }) => {
  const { t } = useTranslation();

  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-bold">{campaign.name}</h3>
          </div>
          <p className="mt-1 text-gray-500 text-sm break-words">
            {campaign.description}
          </p>
          <div className="mt-2 text-gray-800 text-sm font-medium flex items-center">
            <MapPinIcon className="h-4 w-4 inline-block mr-2" />
            {campaign.location}
          </div>
          <div className="mt-2 text-diesel-700 text-sm font-medium flex items-center">
            <TimerIcon className="h-4 w-4 inline-block mr-2" />
            {formatDistanceToNow(parseISO(campaign.start_time), {
              addSuffix: true,
            })}
          </div>
          <div className="mt-2 text-gray-600 text-sm font-medium flex items-center">
            <UserCircle className="h-4 w-4 inline-block mr-2" />
            {campaign.organization!.name}
          </div>
          <div className="mt-1 text-gray-600 text-sm font-medium flex items-center">
            <InboxIcon className="h-4 w-4 inline-block mr-2" />
            {campaign.organization!.email}
          </div>
          <div className="mt-1 text-gray-600 text-sm font-medium flex items-center">
            <PhoneIcon className="h-4 w-4 inline-block mr-2" />
            {campaign.organization!.phone}
          </div>
        </div>
      </div>
      <ParticipateButton campaign={campaign} />
    </li>
  );
};

const Page = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: campaigns,
    error,
    mutate,
  } = useSWR<Campaign[]>(
    searchTerm ? `/campaigns/search?search=${searchTerm}` : "/campaigns/all",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const handleSearch = async (search: string) => {
    setSearchTerm(search);
    await mutate();
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("campaigns.title")}
          </p>
        </div>
        <SearchField onSearch={handleSearch} />
        {!campaigns && !error ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {[...Array(6)].map((_, index) => (
              <CampaignsSkeleton key={index} />
            ))}
          </ul>
        ) : error ? (
          <div className="w-full text-center py-10 text-red-500">
            {t("campaigns.error")}
          </div>
        ) : campaigns && campaigns.length === 0 ? (
          <div className="w-full text-gray-500 py-6 text-center">
            {t("campaigns.noCampaigns")}
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {campaigns &&
              campaigns.map((campaign) => (
                <CampaignItem key={campaign.id} campaign={campaign} />
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Page;
