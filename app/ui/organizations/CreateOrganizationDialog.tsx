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
import { createOrganization } from "@/app/lib/data";
import { useRouter } from "next/navigation";

const CreateOrganizationDialog = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newOrganization = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      password_confirmation: String(formData.get("password_confirmation")),
      city: String(formData.get("city")),
      phone: String(formData.get("phone")),
    };
    await createOrganization(newOrganization);
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-end mr-6 my-4">
          <button className="outline-button flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            Create Organization
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Organization</DialogTitle>
          <DialogDescription>
            Create a new organization by filling out the form below.
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
              placeholder="Organization Name ..."
            />
            <label htmlFor="email" className="form-label text-right">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-input col-span-3"
              name="email"
              required
              placeholder="Organization Email ..."
            />
            <label htmlFor="password" className="form-label text-right">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-input col-span-3"
              name="password"
              required
              placeholder="Organization Password ..."
            />
            <label
              htmlFor="password_confirmation"
              className="form-label text-right"
            >
              Confirm Password
            </label>
            <input
              id="password_confirmation"
              type="password"
              className="form-input col-span-3"
              name="password_confirmation"
              required
              placeholder="Confirm Password ..."
            />
            <label htmlFor="city" className="form-label text-right">
              City
            </label>
            <input
              id="city"
              type="text"
              className="form-input col-span-3"
              name="city"
              required
              placeholder="Organization City ..."
            />
            <label htmlFor="phone" className="form-label text-right">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              className="form-input col-span-3"
              name="phone"
              required
              placeholder="Organization Phone ..."
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

export default CreateOrganizationDialog;
