"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/app/ui/components/dialog";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Campaign } from "@/app/lib/definitions";
import { deleteCampaign } from "@/app/lib/data";

const DeleteCampaignDialog = ({
  campaign,
  onCampaignDelete,
}: {
  campaign: Campaign;
  onCampaignDelete: (id: number) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await deleteCampaign(campaign.id as number);
    onCampaignDelete(campaign.id as number);
    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="delete-button">
          <TrashIcon className="w-5 h-5 mr-2" />
          Delete
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <button
              className="save-button"
              onClick={handleClick}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCampaignDialog;
