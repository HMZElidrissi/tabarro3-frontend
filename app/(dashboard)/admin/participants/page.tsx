"use client";
import EditDialog from "@/app/ui/EditParticipantDialog";
import { Dialog } from "@/app/ui/components/dialog";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import EditParticipantDialog from "@/app/ui/EditParticipantDialog";
import DeleteDialog from "@/app/(dashboard)/test/page";

const ParticipantsPage = () => {
  type Participant = {
    id: number;
    name: string;
    email: string;
    city: string;
    phone: string;
  };

  const participants: Participant[] = [
    {
      id: 1,
      name: "Jane Cooper",
      email: "jane@cooper.com",
      city: "London",
      phone: "1234567890",
    },
    {
      id: 2,
      name: "Jane Cooper",
      email: "jane1@cooper.com",
      city: "Manchester",
      phone: "1234567890",
    },
    {
      id: 3,
      name: "Jane Cooper",
      email: "jane2@cooper.com",
      city: "Birmingham",
      phone: "1234567890",
    },
    {
      id: 4,
      name: "Jane Cooper",
      email: "jane3@cooper.com",
      city: "Liverpool",
      phone: "1234567890",
    },
  ];

  return (
    <div className="overflow-hidden flex flex-col">
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {participants.map((participant, participantIdx) => (
                  <tr
                    key={participant.id}
                    className={
                      participantIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {participant.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participant.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participant.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participant.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <EditParticipantDialog />
                      &nbsp; &nbsp;
                      <DeleteDialog />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Dialog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsPage;
