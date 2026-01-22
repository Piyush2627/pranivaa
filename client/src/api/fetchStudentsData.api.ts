import axios from "../utils/axios";
import type { StudentsType } from "../types/index.types";

export const fetchStudentsData = async (): Promise<StudentsType[]> => {
  const response = await axios.get("/getAllStudent");
  return response.data.data;
};
