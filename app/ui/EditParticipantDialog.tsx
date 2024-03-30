import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/components/dialog";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const EditParticipantDialog = () => {
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
          <DialogTitle>Edit Participant</DialogTitle>
          <DialogDescription>
            Edit Participant details, Click save to save changes.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="form-label text-right">
              Name
            </label>
            <input id="name" value="Pedro Duarte" className="form-input col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="form-label text-right">
              Email
            </label>
            <input
              id="email"
              value="email@example.com"
              className="form-input col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <button className="save-button">Save</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditParticipantDialog;
