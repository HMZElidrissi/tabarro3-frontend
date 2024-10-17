"use client";

import React, { useState } from "react";
import { BloodRequest } from "@/app/lib/definitions";
import CreateBloodRequestDialog from "@/app/ui/requests/CreateBloodRequestDialog";
import DeleteBloodRequestDialog from "@/app/ui/requests/DeleteBloodRequestDialog";
import ChangeRequestStatusDialog from "@/app/ui/requests/ChangeRequestStatusDialog";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "@/app/lib/useTranslation";

const BloodRequestCard = ({
  request,
  onChangeStatus,
  onDeleteRequest,
}: {
  request: BloodRequest;
  onChangeStatus: (updatedRequest: BloodRequest) => void;
  onDeleteRequest: (deletedRequestId: number) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              request.status === "open"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {request.status === "open" ? t("Open") : t("Closed")}
          </span>
          {request.blood_group ? (
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
              {request.blood_group}
            </span>
          ) : (
            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {t("all_blood_groups")}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {request.description}
        </h3>
        <div className="flex flex-col space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 mr-2 text-gray-400" />
            {request.city}
          </div>
          {request.location && (
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-400" />
              {request.location}
            </div>
          )}
          {request.phone && (
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
              {request.phone}
            </div>
          )}
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5 mr-2 text-gray-400" />
            {new Date(request.created_at as string).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="flex border-t border-gray-200">
        <ChangeRequestStatusDialog
          bloodRequest={request}
          onChangeStatus={onChangeStatus}
        />
        <DeleteBloodRequestDialog
          bloodRequest={request}
          onDeleteRequest={onDeleteRequest}
        />
      </div>
    </div>
  );
};

export default function ProfileClient({
  initialRequests,
}: {
  initialRequests: BloodRequest[];
}) {
  const { t } = useTranslation();
  const [requests, setRequests] = useState<BloodRequest[]>(initialRequests);

  const handleCreateRequest = (newRequest: BloodRequest) => {
    setRequests((prevRequests) => [newRequest, ...prevRequests]);
  };

  const handleDeleteRequest = (deletedRequestId: number) => {
    setRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== deletedRequestId),
    );
  };

  const handleChangeRequestStatus = (updatedRequest: BloodRequest) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === updatedRequest.id ? updatedRequest : request,
      ),
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("My Blood Requests")}
          </h1>
          <CreateBloodRequestDialog onCreateRequest={handleCreateRequest} />
        </div>
        {requests.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-xl text-gray-600">
              {t("No blood requests found")}
            </p>
            <p className="mt-4 text-gray-500">
              {t("Create a new request to get started")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {requests.map((request) => (
              <BloodRequestCard
                key={request.id}
                request={request}
                onChangeStatus={handleChangeRequestStatus}
                onDeleteRequest={handleDeleteRequest}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
