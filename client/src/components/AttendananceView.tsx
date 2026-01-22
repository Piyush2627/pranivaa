import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchAttendanceData } from "../api/fetchAttendanceData.api";
import { fetchStudentsData } from "../api/fetchStudentsData.api";

function AttendanceView() {
  const { data: students = [] } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudentsData,
  });
  const {
    data: attendance = [],
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["attendance"],
    queryFn: fetchAttendanceData,
  });

  useEffect(() => {}, [isError, isSuccess]);
  const currentDate = new Date().toDateString();
  const todayAttendance = attendance.find((record) => {
    const recordDate = new Date(record.attendanceDate).toDateString();
    return recordDate == currentDate;
  });

  const presentCount = todayAttendance
    ? todayAttendance.attendanceRecord.filter(
        (students) => students.attendanceStatus === "Present",
      ).length
    : "NA";
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading data</div>;

  return (
    <div className="font-poppins">
      <div className="flex justify-between space-x-4">
        <div className="w-full rounded-xl border border-indigo-200 p-4 text-black shadow-sm shadow-indigo-100 drop-shadow-2xl dark:text-white">
          <div className="flex justify-between">
            <div>Overall </div>
            <div className="flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-center text-[10px] font-bold text-emerald-400">
              + 2.3%
            </div>
          </div>
          <div className="text-3xl font-extrabold">{attendance.length}</div>
          <div className="text-gray-500">Progress Deception </div>
        </div>
        <div className="w-full rounded-xl border border-indigo-200 p-4 text-black shadow-sm shadow-indigo-100 drop-shadow-2xl dark:text-white">
          <div className="flex justify-between">
            <div>Overall </div>
            <div className="flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-center text-[10px] font-bold text-emerald-400">
              + 2.3%
            </div>
          </div>
          <div className="text-3xl font-extrabold">{students.length}</div>
          <div className="text-gray-500">Progress Deception </div>
        </div>
        <div className="w-full rounded-xl border border-indigo-200 p-4 text-black shadow-sm shadow-indigo-100 drop-shadow-2xl dark:text-white">
          <div className="flex justify-between">
            <div>Overall </div>
            <div className="flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-center text-[10px] font-bold text-emerald-400">
              + 2.3%
            </div>
          </div>
          <div className="text-3xl font-extrabold">{presentCount}</div>
          <div className="text-gray-500">Progress Deception </div>
        </div>

        <div className="w-full rounded-xl border border-indigo-200 p-4 text-black shadow-sm shadow-indigo-100 drop-shadow-2xl dark:text-white">
          <div className="flex justify-between">
            <div>Low </div>
            <div className="flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-center text-[10px] font-bold text-emerald-400">
              + 2.3%
            </div>
          </div>
          <div className="text-3xl font-extrabold text-red-500">
            {attendance.length}
          </div>
          <div className="text-gray-500">Progress Deception </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceView;
