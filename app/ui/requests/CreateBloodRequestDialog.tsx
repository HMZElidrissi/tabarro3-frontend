"use client";

import React, { useState } from "react";
import {
  Dialog,
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

const Spinner = ({ className = "" }) => (
  <div
    className={`animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent ${className}`}
    role="status"
    aria-label="loading"
  >
    <span className="sr-only">Loading...</span>
  </div>
);

const CreateBloodRequestDialog = ({
  onCreateRequest,
}: {
  onCreateRequest: (newRequest: BloodRequest) => void;
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    description: "",
    blood_group: "ALL", // Set default value to "ALL"
    city: "",
    location: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    description: "",
    city: "",
    location: "",
    blood_group: "", // Add blood group validation
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      description: formData.description ? "" : t("description_required"),
      city: formData.city ? "" : t("city_required"),
      location: formData.location ? "" : t("location_required"),
      blood_group: formData.blood_group ? "" : t("blood_group_required"),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Fix: Only modify blood_group if it's "ALL"
      const newBloodRequest = {
        ...formData,
        // If blood_group is "ALL", set it to empty string, otherwise keep the selected blood group
        blood_group: formData.blood_group === "ALL" ? "" : formData.blood_group,
        status: "open",
      };

      console.log("Submitting blood request:", newBloodRequest); // Debug log

      const createdRequest = await createBloodRequest(
        newBloodRequest as BloodRequest,
      );

      // Optimistically update UI
      onCreateRequest(createdRequest);

      // Reset form and close dialog
      setFormData({
        description: "",
        blood_group: "ALL", // Reset to default
        city: "",
        location: "",
        phone: "",
      });
      setIsOpen(false);

      // Refresh the page data
      router.refresh();
    } catch (error) {
      console.error("Failed to create blood request:", error);
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              {t("blood_request_form_description")}
            </label>
            <div className="col-span-3">
              <textarea
                id="description"
                className={`form-input w-full ${errors.description ? "border-red-500" : ""}`}
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                placeholder={t("blood_request_form_description_placeholder")}
                rows={3}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            <label htmlFor="blood_group" className="form-label text-right">
              {t("Blood Group")}
            </label>
            <div className="col-span-3">
              <select
                id="blood_group"
                className={`form-input w-full ${errors.blood_group ? "border-red-500" : ""}`}
                name="blood_group"
                value={formData.blood_group}
                onChange={handleInputChange}
                required
              >
                <option value="ALL">{t("all_blood_groups")}</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
              {errors.blood_group && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.blood_group}
                </p>
              )}
            </div>

            <label htmlFor="city" className="form-label text-right">
              {t("City")}
            </label>
            <div className="col-span-3">
              <input
                id="city"
                type="text"
                className={`form-input w-full ${errors.city ? "border-red-500" : ""}`}
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                placeholder={t("blood_request_form_city_placeholder")}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            <label htmlFor="location" className="form-label text-right">
              {t("blood_request_form_location")}
            </label>
            <div className="col-span-3">
              <input
                id="location"
                type="text"
                className={`form-input w-full ${errors.location ? "border-red-500" : ""}`}
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
                placeholder={t("blood_request_form_location_placeholder")}
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            <label htmlFor="phone" className="form-label text-right">
              {t("blood_request_form_phone")}
            </label>
            <input
              id="phone"
              type="tel"
              className="form-input col-span-3"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t("blood_request_form_phone_placeholder")}
            />

            <DialogFooter className="col-span-4">
              <button
                type="submit"
                className="save-button flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="w-4 h-4 mr-2" />
                    {t("loading...")}
                  </>
                ) : (
                  t("Save")
                )}
              </button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBloodRequestDialog;
