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
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Campaign } from "@/app/lib/definitions";
import { updateCampaign } from "@/app/lib/data";

const EditCampaignDialog = ({
  campaign,
  onCampaignUpdate,
}: {
  campaign: Campaign;
  onCampaignUpdate: (campaign: Campaign) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const editedCampaign = {
      id: Number(formData.get("id")),
      name: String(formData.get("name")),
      description: String(formData.get("description")),
      location: String(formData.get("location")),
      start_time: String(formData.get("start_time")),
      end_time: String(formData.get("end_time")),
    };
    await updateCampaign(editedCampaign);
    onCampaignUpdate(editedCampaign);
    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="table-button">
          <PencilSquareIcon className="w-5 h-5 mr-2" />
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Campaign</DialogTitle>
          <DialogDescription>
            Edit Campaign details, Click save to save changes.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form
            className="grid grid-cols-4 items-center gap-4"
            onSubmit={handleSubmit}
          >
            <input id="id" type="hidden" name="id" defaultValue={campaign.id} />
            <label htmlFor="name" className="form-label text-right">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-input col-span-3"
              name="name"
              defaultValue={campaign.name}
              required
            />
            <label htmlFor="description" className="form-label text-right">
              Description
            </label>
            <textarea
              id="description"
              className="form-input col-span-3"
              name="description"
              defaultValue={campaign.description}
              required
            />
            <label htmlFor="location" className="form-label text-right">
              Location
            </label>
            <input
              id="location"
              type="text"
              className="form-input col-span-3"
              name="location"
              defaultValue={campaign.location}
              required
            />
            <label htmlFor="start_time" className="form-label text-right">
              Start Time
            </label>
            <input
              id="start_time"
              type="date"
              className="form-input col-span-3"
              name="start_time"
              defaultValue={formatDate(campaign.start_time)}
              required
            />
            <label htmlFor="end_time" className="form-label text-right">
              End Time
            </label>
            <input
              id="end_time"
              type="date"
              className="form-input col-span-3"
              name="end_time"
              defaultValue={formatDate(campaign.end_time)}
              required
            />
            <DialogFooter className="col-span-4">
              <DialogClose asChild>
                <button
                  type="submit"
                  className="save-button"
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save"}
                </button>
              </DialogClose>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditCampaignDialog;
