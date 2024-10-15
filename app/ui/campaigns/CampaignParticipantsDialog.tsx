"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/components/dialog";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Campaign, Participant } from "@/app/lib/definitions";
import { fetchCampaignParticipants } from "@/app/lib/data";

const CampaignParticipantsDialog = ({ campaign }: { campaign: Campaign }) => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadParticipants = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedParticipants = await fetchCampaignParticipants(
        campaign.id as number,
      );
      setParticipants(fetchedParticipants);
    } catch (err) {
      console.error("Error fetching participants:", err);
      setError("Failed to load participants. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadParticipants();
  }, [campaign.id]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="table-button">
          <UserGroupIcon className="w-5 h-5 mr-2" />
          Participants
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Campaign Participants</DialogTitle>
          <DialogDescription>
            List of participants for the campaign: {campaign.name}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {isLoading && <p>Loading participants...</p>}
          {error && (
            <div>
              <p className="text-red-500">{error}</p>
              <button
                onClick={loadParticipants}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Retry
              </button>
            </div>
          )}
          {!isLoading && !error && (
            <ul className="divide-y divide-gray-200">
              {participants.map((participant) => (
                <li key={participant.id} className="py-4">
                  <p className="font-medium">{participant.name}</p>
                  <p className="text-sm text-gray-500">{participant.email}</p>
                </li>
              ))}
              {participants.length === 0 && (
                <p>No participants found for this campaign.</p>
              )}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignParticipantsDialog;
