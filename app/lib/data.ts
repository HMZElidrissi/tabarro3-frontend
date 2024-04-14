import {
  BloodRequest,
  Campaign,
  Organization,
  Participant,
} from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";
import axiosClient from "@/app/lib/axiosClient";

export async function fetchParticipants() {
  noStore();
  try {
    const response = await axiosClient.get("/participants");
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function fetchOrganizations() {
  noStore();
  try {
    const response = await axiosClient.get("/organizations");
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function fetchCampaigns() {
  noStore();
  try {
    const response = await axiosClient.get("/campaigns");
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function fetchCampaignParticipants(campaignId: number) {
  noStore();
  try {
    const response = await axiosClient.get(
      `/campaigns/${campaignId}/participants`,
    );
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function fetchBloodRequests() {
  noStore();
  try {
    const response = await axiosClient.get("/blood-requests");
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function createBloodRequest(bloodRequest: BloodRequest) {
  try {
    const response = await axiosClient.post("/blood-requests", bloodRequest);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function deleteBloodRequest(id: number) {
  try {
    const response = await axiosClient.delete(`/blood-requests/${id}`);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function closeBloodRequest(id: number) {
  try {
    const response = await axiosClient.put(`/blood-requests/${id}/close`, {
      status: "closed",
    });
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function openBloodRequest(id: number) {
  try {
    const response = await axiosClient.put(`/blood-requests/${id}/open`, {
      status: "open",
    });
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function updateParticipant(participant: Participant) {
  const { id } = participant;

  try {
    const response = await axiosClient.put(`/participants/${id}`, participant);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function deleteParticipant(id: number) {
  try {
    const response = await axiosClient.delete(`/participants/${id}`);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function updateOrganization(organization: Organization) {
  const { id } = organization;

  try {
    const response = await axiosClient.put(
      `/organizations/${id}`,
      organization,
    );
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function deleteOrganization(id: number) {
  try {
    const response = await axiosClient.delete(`/organizations/${id}`);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function createOrganization(organization: Organization) {
  try {
    const response = await axiosClient.post("/organizations", organization);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function updateCampaign(campaign: Campaign) {
  const { id } = campaign;

  try {
    const response = await axiosClient.put(`/campaigns/${id}`, campaign);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function deleteCampaign(id: number) {
  try {
    const response = await axiosClient.delete(`/campaigns/${id}`);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}

export async function createCampaign(campaign: Campaign) {
  try {
    const response = await axiosClient.post("/campaigns", campaign);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}
