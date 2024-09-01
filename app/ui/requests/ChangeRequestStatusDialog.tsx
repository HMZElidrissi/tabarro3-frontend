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
import { useRouter } from "next/navigation";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { LockKeyholeOpenIcon } from "lucide-react";
import { useTranslation } from "@/app/lib/useTranslation";

const ChangeRequestStatusDialog = ({
  bloodRequest,
}: {
  bloodRequest: BloodRequest;
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const handleClick = async () => {
    if (bloodRequest.status === "open") {
      await closeBloodRequest(bloodRequest.id as number);
    } else {
      await openBloodRequest(bloodRequest.id as number);
    }
    router.refresh();
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
          <DialogTitle>
            {bloodRequest.status === "open" ? t("close") : t("open")}{" "}
            {t("Blood Request")}
          </DialogTitle>
          <DialogDescription>
            {t("You are going to change the status of your blood request.")}
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
              {bloodRequest.status === "open" ? t("close") : t("open")}{" "}
              {t("Blood Request")}
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeRequestStatusDialog;
