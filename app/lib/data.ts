import { Participant, Organization } from "@/app/lib/definitions";
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
    const response = await axiosClient.put(`/organizations/${id}`, organization);
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
