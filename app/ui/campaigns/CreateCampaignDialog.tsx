"use client";
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
import { PlusIcon } from "@heroicons/react/24/outline";
import { createCampaign } from "@/app/lib/data";
import { useRouter } from "next/navigation";

const CreateCampaignDialog = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newCampaign = {
      name: String(formData.get("name")),
      description: String(formData.get("description")),
      location: String(formData.get("location")),
      start_time: String(formData.get("start_time")),
      end_time: String(formData.get("end_time")),
    };
    await createCampaign(newCampaign);
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-end mr-6 my-4">
          <button className="outline-button flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            Create Campaign
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Campaign</DialogTitle>
          <DialogDescription>
            Create a new Campaign, Fill in the form and click save to create a
            new Campaign.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form
            className="grid grid-cols-4 items-center gap-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="form-label text-right">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-input col-span-3"
              name="name"
              required
              placeholder="Campaign Name ..."
            />
            <label htmlFor="description" className="form-label text-right">
              Description
            </label>
            <textarea
              id="description"
              className="form-input col-span-3"
              name="description"
              required
              placeholder="Campaign Description ..."
            />
            <label htmlFor="location" className="form-label text-right">
              Location
            </label>
            <input
              id="location"
              type="text"
              className="form-input col-span-3"
              name="location"
              required
              placeholder="Campaign Location ..."
            />
            <label htmlFor="start_time" className="form-label text-right">
              Start Time
            </label>
            <input
              id="start_time"
              type="datetime-local"
              className="form-input col-span-3"
              name="start_time"
              required
            />
            <label htmlFor="end_time" className="form-label text-right">
              End Time
            </label>
            <input
              id="end_time"
              type="datetime-local"
              className="form-input col-span-3"
              name="end_time"
              required
            />
            <DialogFooter className="col-span-4">
              <DialogClose asChild>
                <button type="submit" className="save-button">
                  Save
                </button>
              </DialogClose>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCampaignDialog;
