"use client";

import { useState, useEffect } from "react";
import EditCampaignDialog from "@/app/ui/campaigns/EditCampaignDialog";
import DeleteCampaignDialog from "@/app/ui/campaigns/DeleteCampaignDialog";
import { fetchCampaigns } from "@/app/lib/data";
import { Campaign } from "@/app/lib/definitions";
import CreateCampaignDialog from "@/app/ui/campaigns/CreateCampaignDialog";
import CampaignParticipantsDialog from "@/app/ui/campaigns/CampaignParticipantsDialog";
import { TableSkeleton } from "@/app/ui/components/loading";

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCampaigns = async () => {
      setIsLoading(true);
      const fetchedCampaigns = await fetchCampaigns();
      setCampaigns(fetchedCampaigns);
      setIsLoading(false);
    };

    loadCampaigns();
  }, []);

  const handleCampaignChange = (updatedCampaign: Campaign) => {
    setCampaigns((prevCampaigns) =>
      prevCampaigns.map((campaign) =>
        campaign.id === updatedCampaign.id ? updatedCampaign : campaign,
      ),
    );
  };

  const handleCampaignDelete = (deletedCampaignId: number) => {
    setCampaigns((prevCampaigns) =>
      prevCampaigns.filter((campaign) => campaign.id !== deletedCampaignId),
    );
  };

  const handleCampaignCreate = (newCampaign: Campaign) => {
    setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
  };

  if (isLoading) {
    return <TableSkeleton />;
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <CreateCampaignDialog onCampaignCreate={handleCampaignCreate} />
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Start Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      End Time
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.length === 0 && (
                    <tr className="bg-white">
                      <td
                        colSpan={6}
                        className="px-6 py-4 text-sm text-gray-500 text-center"
                      >
                        No campaigns found.
                      </td>
                    </tr>
                  )}
                  {campaigns.map((campaign, campaignIdx) => (
                    <tr
                      key={campaign.id}
                      className={
                        campaignIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {campaign.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {campaign.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {campaign.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {campaign.start_time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {campaign.end_time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end items-center">
                          <EditCampaignDialog
                            campaign={campaign}
                            onCampaignUpdate={handleCampaignChange}
                          />
                          <span className="mx-2"></span>
                          <DeleteCampaignDialog
                            campaign={campaign}
                            onCampaignDelete={handleCampaignDelete}
                          />
                          <span className="mx-2"></span>
                          <CampaignParticipantsDialog campaign={campaign} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
