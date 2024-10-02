"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/components/dialog";
import { PlusIcon } from "@heroicons/react/24/outline";
import { createBloodRequest } from "@/app/lib/data";
import { useRouter } from "next/navigation";
import { bloodGroups, BloodRequest } from "@/app/lib/definitions";
import { useTranslation } from "@/app/lib/useTranslation";

const CreateBloodRequestDialog = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newBloodRequest = {
      description: String(formData.get("description")),
      blood_group: String(formData.get("blood_group")),
      city: String(formData.get("city")),
      status: "open",
    };
    await createBloodRequest(newBloodRequest as BloodRequest);
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-start mr-6 my-4">
          <button className="outline-button flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            {t("New Blood Request")}
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("New Blood Request")}</DialogTitle>
          <DialogDescription>
            {t("Fill in the form below to create a new blood request.")}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form
            className="grid grid-cols-4 items-center gap-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="description" className="form-label text-right">
              Description
            </label>
            <input
              id="description"
              type="text"
              className="form-input col-span-3"
              name="description"
              required
              placeholder="Blood Request Description ..."
            />
            <label htmlFor="blood_group" className="form-label text-right">
              {t("Blood Group")}
            </label>
            <select
              id="blood_group"
              className="form-input col-span-3"
              name="blood_group"
              required
            >
              {bloodGroups.map((group) => (
                <option key={group} defaultValue={group}>
                  {group}
                </option>
              ))}
            </select>
            <label htmlFor="city" className="form-label text-right">
              {t("City")}
            </label>
            <input
              id="city"
              type="text"
              className="form-input col-span-3"
              name="city"
              required
              placeholder="Blood Request City ..."
            />
            <DialogFooter className="col-span-4">
              <DialogClose asChild>
                <button type="submit" className="save-button">
                  {t("Save")}
                </button>
              </DialogClose>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBloodRequestDialog;
