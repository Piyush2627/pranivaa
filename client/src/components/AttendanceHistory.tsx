import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAttendanceDataByStudentsId } from "../api/fetchAttendanceDataByStudentsId";
import type { AttendanceType } from "../types/index.types";
import { useState } from "react";

function AttendanceHistory() {
  const [isCoverUp, setIsCoverUp] = useState(0);
  const { studentsId } = useParams<{ studentsId: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["attendance", studentsId],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return fetchAttendanceDataByStudentsId(id as string);
    },
  });

  const getChunkData = (data: AttendanceType) => {
    const chunk = [];
  };

  if (!studentsId) return <div>Invalid student</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading attendance</div>;

  return (
    <div>
      {data?.map((attendance) => (
        <div key={attendance._id}>
          <h4>{new Date(attendance.attendanceDate).toDateString()}</h4>

          {attendance.attendanceRecord.map((record) => (
            <div key={record.attendanceStudentsId._id}>
              <p>Student Name: {record.attendanceStudentsId.studentName}</p>
              <p>Status: {record.attendanceStatus}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default AttendanceHistory;
