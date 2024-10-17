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
import { BloodRequest } from "@/app/lib/definitions";
import { closeBloodRequest, openBloodRequest } from "@/app/lib/data";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { LockKeyholeOpenIcon } from "lucide-react";
import { useTranslation } from "@/app/lib/useTranslation";

const ChangeRequestStatusDialog = ({
  bloodRequest,
  onChangeStatus,
}: {
  bloodRequest: BloodRequest;
  onChangeStatus: (updatedRequest: BloodRequest) => void;
}) => {
  const { t } = useTranslation();

  const handleClick = async () => {
    let updatedRequest;
    if (bloodRequest.status === "open") {
      updatedRequest = await closeBloodRequest(bloodRequest.id as number);
    } else {
      updatedRequest = await openBloodRequest(bloodRequest.id as number);
    }
    onChangeStatus(updatedRequest);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
          {bloodRequest.status === "open" ? (
            <>
              <LockClosedIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">{t("Close")}</span>
            </>
          ) : (
            <>
              <LockKeyholeOpenIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">{t("Open")}</span>
            </>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("change_blood_request_status")}</DialogTitle>
          <DialogDescription>
            {t("You are going to change the status of your blood request.")}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <button className="save-button" onClick={handleClick}>
              {bloodRequest.status === "open"
                ? t("close_blood_request")
                : t("open_blood_request")}
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeRequestStatusDialog;
