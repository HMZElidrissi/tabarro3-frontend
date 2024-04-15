"use client";
import { Campaign } from "@/app/lib/definitions";
import { participateInCampaign } from "@/app/lib/data";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Verified } from "lucide-react";

const ParticipateButton = ({ campaign }: { campaign: Campaign }) => {
  const { status, data: session } = useSession();
  const router = useRouter();

  const handleParticipate = async () => {
    if (status !== "authenticated") {
      router.push("/signin");
    } else {
      await participateInCampaign(campaign.id as number);
      campaign.is_participating = true;
      router.refresh();
    }
  };

  return (
    <div className="-mt-px flex divide-x divide-gray-200">
      <button
        className="relative -mr-px w-0 mx-auto flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
        onClick={handleParticipate}
      >
        {campaign.is_participating ? (
          <>
            <Verified className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3">Already Participating</span>
          </>
        ) : (
          <>
            <PlusIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3">Participate</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ParticipateButton;
