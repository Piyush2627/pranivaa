import axios from "../utils/axios";
import type { AttendanceType } from "../types/index.types";

export const fetchAttendanceDataByStudentsId = async (
  id: string,
): Promise<AttendanceType[]> => {
  const response = await axios.get(`/attendance/student/${id}`);
  return response.data.data;
};
