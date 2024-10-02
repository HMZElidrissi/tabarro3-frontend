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
import { TrashIcon } from "@heroicons/react/24/outline";
import { BloodRequest } from "@/app/lib/definitions";
import { deleteBloodRequest } from "@/app/lib/data";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/lib/useTranslation";

const DeleteBloodRequestDialog = ({
  bloodRequest,
}: {
  bloodRequest: BloodRequest;
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const handleClick = async () => {
    await deleteBloodRequest(bloodRequest.id as number);
    router.refresh();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
          <TrashIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          <span className="ml-3">{t("Delete")}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("delete_confirmation")}</DialogTitle>
          <DialogDescription>
            {t("delete_confirmation_description")}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <button
              className="save-button"
              onClick={() => {
                handleClick();
              }}
            >
              {t("Delete")}
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBloodRequestDialog;
