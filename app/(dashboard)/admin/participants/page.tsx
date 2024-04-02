import { Dialog } from "@/app/ui/components/dialog";
import EditParticipantDialog from "@/app/ui/participants/EditParticipantDialog";
import DeleteParticipantDialog from "@/app/ui/participants/DeleteParticipantDialog";
import { fetchParticipants } from "@/app/lib/data";
import { Participant } from "@/app/lib/definitions";

const ParticipantsPage = async () => {
  const participants: Participant[] = await fetchParticipants();

  return (
    <div className="sm:overflow-hidden flex flex-col">
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
                  City
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Blood Group
                </th>
                <th scope="col" className="sr-only">
                  Actions
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="badge-blood-group">
                        {participant.blood_group}
                      </span>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    <div className="flex items-center">
                      <EditParticipantDialog participant={participant} />
                      <span className="mx-2"></span>
                      <DeleteParticipantDialog participant={participant} />
                    </div>
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
