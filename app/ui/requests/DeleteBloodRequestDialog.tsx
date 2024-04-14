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

const DeleteBloodRequestDialog = ({
  bloodRequest,
}: {
  bloodRequest: BloodRequest;
}) => {
  const router = useRouter();
  const handleClick = async () => {
    await deleteBloodRequest(bloodRequest.id as number);
    router.refresh();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
          <TrashIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          <span className="ml-3">Delete</span>
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
              onClick={() => {
                handleClick();
              }}
            >
              Delete
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBloodRequestDialog;
