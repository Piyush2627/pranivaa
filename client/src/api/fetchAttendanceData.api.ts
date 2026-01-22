import axios from "../utils/axios";
import type { AttendanceType } from "../types/index.types";

export const fetchAttendanceData = async (): Promise<AttendanceType[]> => {
  const response = await axios.get("/attendance");
  return response.data.data;
};
