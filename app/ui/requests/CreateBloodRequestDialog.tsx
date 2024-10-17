"use client";

import React, { useState } from "react";
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

const CreateBloodRequestDialog = ({
  onCreateRequest,
}: {
  onCreateRequest: (newRequest: BloodRequest) => void;
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    description: "",
    blood_group: "",
    city: "",
    location: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    description: "",
    city: "",
    location: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      description: formData.description ? "" : t("description_required"),
      city: formData.city ? "" : t("city_required"),
      location: formData.location ? "" : t("location_required"),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const newBloodRequest = {
        ...formData,
        status: "open",
      };
      const createdRequest = await createBloodRequest(
        newBloodRequest as BloodRequest,
      );
      onCreateRequest(createdRequest);
      // Reset form after successful submission
      setFormData({
        description: "",
        blood_group: "",
        city: "",
        location: "",
        phone: "",
      });
    }
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
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>
            <label htmlFor="blood_group" className="form-label text-right">
              {t("Blood Group")}
            </label>
            <select
              id="blood_group"
              className="form-input col-span-3"
              name="blood_group"
              value={formData.blood_group}
              onChange={handleInputChange}
            >
              <option value="">{t("all_blood_groups")}</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
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
