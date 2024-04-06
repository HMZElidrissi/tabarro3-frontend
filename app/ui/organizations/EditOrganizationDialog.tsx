"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/app/ui/components/dialog";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Organization } from "@/app/lib/definitions";
import { updateOrganization } from "@/app/lib/data";
import { useRouter } from "next/navigation";

const EditOrganizationDialog = ({
                                  organization
                                }: {
  organization: Organization;
}) => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const editedOrganization = {
      id: Number(formData.get("id")),
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      city: String(formData.get("city")),
      phone: String(formData.get("phone"))
    };
    await updateOrganization(editedOrganization);
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
          <DialogTitle>Edit Organization</DialogTitle>
          <DialogDescription>
            Edit Organization details, Click save to save changes.
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
              defaultValue={organization.id}
            />
            <label htmlFor="name" className="form-label text-right">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-input col-span-3"
              name="name"
              defaultValue={organization.name}
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
              defaultValue={organization.email}
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
              defaultValue={organization.city}
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
              defaultValue={organization.phone}
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

export default EditOrganizationDialog;
