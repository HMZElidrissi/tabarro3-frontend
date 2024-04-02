import { Participant } from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";
import axios from "axios";
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
