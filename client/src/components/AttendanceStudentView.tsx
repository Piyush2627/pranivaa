import { useQuery } from "@tanstack/react-query";
import { fetchStudentsData } from "../api/fetchStudentsData.api";
import StudentsDataTable from "./common/StudentsDataTable";

const AttendanceStudentView = () => {
  const { data: students = [] } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudentsData,
  });
  return (
    <div>
      <div className="flex items-center justify-between align-middle">
        <div className="text-3xl font-bold"> Find Students Attendance </div>
      </div>
      <StudentsDataTable data={students} pagination paginationLines={4} />
    </div>
  );
};

export default AttendanceStudentView;
