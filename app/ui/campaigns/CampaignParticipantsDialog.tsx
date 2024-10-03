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
import { EyeIcon } from "@heroicons/react/24/outline";
import { Campaign, Participant } from "@/app/lib/definitions";
import { fetchCampaignParticipants } from "@/app/lib/data";

const EditCampaignDialog = async ({ campaign }: { campaign: Campaign }) => {
  const participants: Participant[] = await fetchCampaignParticipants(
    campaign.id as number,
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="table-button-outline">
          <EyeIcon className="w-5 h-5 mr-2" />
          Participants
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{campaign.name}</DialogTitle>
          <DialogDescription>
            These are the participants of the campaign.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  {participants.map((participant, participantIdx) => (
                    <dd
                      key={participant.id}
                      className="mt-1 text-sm text-gray-900"
                    >
                      {participant.name}
                    </dd>
                  ))}
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Blood Group
                  </dt>
                  {participants.map((participant, participantIdx) => (
                    <dd
                      key={participant.id}
                      className="mt-1 text-sm text-gray-900"
                    >
                      {participant.blood_group || "N/A"}
                    </dd>
                  ))}
                </div>
              </dl>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditCampaignDialog;
