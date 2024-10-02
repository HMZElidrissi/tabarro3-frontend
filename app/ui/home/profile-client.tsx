"use client";

import { BloodRequest } from "@/app/lib/definitions";
import CreateBloodRequestDialog from "@/app/ui/requests/CreateBloodRequestDialog";
import DeleteBloodRequestDialog from "@/app/ui/requests/DeleteBloodRequestDialog";
import ChangeRequestStatusDialog from "@/app/ui/requests/ChangeRequestStatusDialog";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "@/app/lib/useTranslation";

export default function ProfileClient({
  requests,
}: {
  requests: BloodRequest[];
}) {
  const { t } = useTranslation();

  return (
    <div className=" py-20">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("My Blood Requests")}
          </p>
          <CreateBloodRequestDialog />
        </div>
        {requests.length === 0 && (
          <div className="w-full text-gray-500 py-6 text-center">
            {t("No blood requests found")}
          </div>
        )}
        {requests.length > 0 && (
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6"
          >
            {requests.map((request) => (
              <li
                key={request.id}
                className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-bold">
                        {t("Blood Group")}:
                      </h3>
                      <span className="flex-shrink-0 inline-block px-2 py-0.5 badge-blood-group">
                        {request.blood_group}
                      </span>
                    </div>
                    <div className="mt-2 text-gray-800 text-sm font-medium flex items-center">
                      <MapPinIcon className="h-4 w-4 inline-block mr-2" />
                      {request.city}
                    </div>
                    <p className="mt-1 text-gray-500 text-sm">
                      {request.description}
                    </p>
                    <div className="mt-2">
                      {request.status === "open" ? (
                        <span className="badge-open">{t("Open")}</span>
                      ) : (
                        <span className="badge-closed">{t("Close")}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <ChangeRequestStatusDialog bloodRequest={request} />
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <DeleteBloodRequestDialog bloodRequest={request} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
