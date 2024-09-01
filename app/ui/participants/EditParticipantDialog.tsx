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
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { bloodGroups, Participant } from "@/app/lib/definitions";
import { updateParticipant } from "@/app/lib/data";
import { useRouter } from "next/navigation";

const EditParticipantDialog = ({
  participant,
}: {
  participant: Participant;
}) => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const editedParticipant = {
      id: Number(formData.get("id")),
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      city: String(formData.get("city")),
      phone: String(formData.get("phone")),
      blood_group: String(formData.get("bloodGroup")),
    };
    await updateParticipant(editedParticipant);
    router.refresh();
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
          <DialogTitle>Edit Participant</DialogTitle>
          <DialogDescription>
            Edit Participant details, Click save to save changes.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form
            className="grid grid-cols-4 items-center gap-4"
            onSubmit={handleSubmit}
          >
            <input
              id="id"
              type="hidden"
              name="id"
              defaultValue={participant.id}
            />
            <label htmlFor="name" className="form-label text-right">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-input col-span-3"
              name="name"
              defaultValue={participant.name}
              required
            />
            <label htmlFor="email" className="form-label text-right">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-input col-span-3"
              name="email"
              defaultValue={participant.email}
              required
            />
            <label htmlFor="city" className="form-label text-right">
              City
            </label>
            <input
              id="city"
              type="text"
              className="form-input col-span-3"
              name="city"
              defaultValue={participant.city}
              required
            />
            <label htmlFor="phone" className="form-label text-right">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              className="form-input col-span-3"
              name="phone"
              defaultValue={participant.phone}
              required
            />
            <label htmlFor="bloodGroup" className="form-label text-right">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              className="form-input col-span-3"
              name="bloodGroup"
              defaultValue={participant.blood_group}
              required
            >
              {bloodGroups.map((group) => (
                <option key={group} defaultValue={group}>
                  {group}
                </option>
              ))}
            </select>
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

export default EditParticipantDialog;
