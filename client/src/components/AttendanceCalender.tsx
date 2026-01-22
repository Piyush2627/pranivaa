import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import {
  FiCalendar,
  FiChevronDown,
  FiFilter,
  FiSearch,
  FiUsers,
  FiAlertCircle,
} from "react-icons/fi";

// --- Types ---
interface AttendanceStudent {
  attendanceStudentsId: {
    _id: string;
    studentName: string;
  } | null; // Handle potential null populated fields
  attendanceStatus: "Present" | "Absent" | "Late";
}

interface AttendanceRecord {
  _id: string;
  attendanceDate: string;
  attendanceRemark?: string;
  attendanceOfClass: string;
  attendanceRecord: AttendanceStudent[];
}

interface Batch {
  _id: string;
  batchName: string;
}

// --- API Helpers ---
const fetchAttendance = async (): Promise<AttendanceRecord[]> => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/attendance`,
    );
    return res.data.data || [];
  } catch (error) {
    toast.error("Failed to fetch attendance records.");
    return [];
  }
};

const fetchBatches = async (): Promise<Batch[]> => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/batches`);
    return res.data.data || [];
  } catch (error) {
    console.error("Batch fetch error", error);
    return [];
  }
};

// --- Sub-Components ---

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    Present:
      "bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20",
    Absent: "bg-rose-50 text-rose-700 border-rose-200 ring-rose-500/20",
    Late: "bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/20",
    default: "bg-slate-50 text-slate-700 border-slate-200 ring-slate-500/20",
  };

  const activeStyle = styles[status as keyof typeof styles] || styles.default;

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium ring-1 ring-inset ${activeStyle}`}
    >
      {status}
    </span>
  );
};

const SkeletonCard = () => (
  <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
    <div className="flex animate-pulse items-center gap-4">
      <div className="h-14 w-14 rounded-lg bg-gray-200"></div>
      <div className="flex-1 space-y-3">
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        <div className="h-3 w-1/2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
);

const EmptyState = ({ isFiltered }: { isFiltered: boolean }) => (
  <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-8 text-center transition-all hover:bg-gray-50">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100">
      {isFiltered ? (
        <FiSearch className="h-8 w-8 text-gray-400" />
      ) : (
        <FiCalendar className="h-8 w-8 text-gray-400" />
      )}
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">
      {isFiltered ? "No matching records" : "No attendance history"}
    </h3>
    <p className="mt-2 max-w-sm text-sm text-gray-500">
      {isFiltered
        ? "We couldn't find any attendance records for the selected batch."
        : "Start by taking attendance for a batch to see the history here."}
    </p>
  </div>
);

// --- Main Component ---

const AttendanceCalendar = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const { data: attendance = [], isLoading: loadingAttendance } = useQuery({
    queryKey: ["attendance"],
    queryFn: fetchAttendance,
  });

  const { data: batches = [], isLoading: loadingBatches } = useQuery({
    queryKey: ["batches"],
    queryFn: fetchBatches,
  });

  // Collapse all when filter changes
  useEffect(() => {
    setExpanded({});
  }, [selectedBatch]);

  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // --- Optimized Logic (Memoized) ---
  const groupedData = useMemo(() => {
    // 1. Filter
    const filtered = selectedBatch
      ? attendance.filter((r) => r.attendanceOfClass === selectedBatch)
      : attendance;

    // 2. Group by Month
    const groups: Record<string, AttendanceRecord[]> = {};

    filtered.forEach((rec) => {
      const date = new Date(rec.attendanceDate);
      // Validate date before processing
      if (isNaN(date.getTime())) return;

      const monthKey = date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      if (!groups[monthKey]) groups[monthKey] = [];
      groups[monthKey].push(rec);
    });

    // 3. Sort Months (Newest first) and Records within Months (Newest first)
    return Object.entries(groups)
      .sort(
        ([monthA], [monthB]) =>
          new Date(monthB).getTime() - new Date(monthA).getTime(),
      )
      .map(([month, records]) => ({
        month,
        records: records.sort(
          (a, b) =>
            new Date(b.attendanceDate).getTime() -
            new Date(a.attendanceDate).getTime(),
        ),
      }));
  }, [attendance, selectedBatch]);

  const isLoading = loadingAttendance || loadingBatches;

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 p-4 sm:p-6">
      {/* --- Header Section --- */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Attendance History
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage past attendance records by batch and date.
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="relative min-w-[200px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FiFilter className="h-4 w-4 text-gray-400" />
          </div>
          <select
            className="block w-full cursor-pointer rounded-lg border-gray-300 bg-white py-2.5 pr-10 pl-10 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-gray-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none"
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            disabled={loadingBatches}
          >
            <option value="">All Batches</option>
            {batches.map((b) => (
              <option key={b._id} value={b._id}>
                {b.batchName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* --- Content Area --- */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : groupedData.length > 0 ? (
        <div className="space-y-12">
          {groupedData.map(({ month, records }) => (
            <div
              key={month}
              className="animate-in fade-in slide-in-from-bottom-2 duration-700"
            >
              {/* Month Header */}
              <div className="sticky top-0 z-10 mb-6 flex items-center gap-3 border-b border-gray-100 bg-white/95 py-3 backdrop-blur-sm">
                <div className="flex items-center justify-center rounded-md bg-violet-100 p-2 text-violet-600">
                  <FiCalendar className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{month}</h3>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                  {records.length}
                </span>
              </div>

              {/* Records Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {records.map((rec) => {
                  const dateObj = new Date(rec.attendanceDate);
                  const isExpanded = expanded[rec._id];

                  return (
                    <div
                      key={rec._id}
                      className={`group relative flex flex-col overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        isExpanded
                          ? "border-violet-200 shadow-md ring-2 ring-violet-500/20"
                          : "border-gray-200 shadow-sm"
                      }`}
                    >
                      {/* Card Click Area */}
                      <button
                        onClick={() => toggle(rec._id)}
                        className="flex w-full items-start gap-4 p-5 text-left focus:outline-none"
                        aria-expanded={isExpanded}
                      >
                        {/* Date Box */}
                        <div className="flex shrink-0 flex-col items-center justify-center rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white px-3 py-2 text-violet-700 shadow-sm">
                          <span className="text-[10px] font-bold tracking-wider uppercase opacity-80">
                            {dateObj.toLocaleString("default", {
                              weekday: "short",
                            })}
                          </span>
                          <span className="text-2xl leading-none font-black tracking-tight">
                            {dateObj.getDate()}
                          </span>
                        </div>

                        {/* Card Info */}
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate text-sm font-bold text-gray-900">
                              {/* If you have batch name in record, use it, else fallback */}
                              Batch Record
                            </span>
                            <FiChevronDown
                              className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                                isExpanded ? "rotate-180 text-violet-600" : ""
                              }`}
                            />
                          </div>

                          <p className="truncate text-xs font-medium text-gray-500">
                            {rec.attendanceRemark || "No remarks added"}
                          </p>

                          <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-full bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-600">
                              <FiUsers className="h-3 w-3" />
                              <span>{rec.attendanceRecord.length}</span>
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* Expanded Section (Accordion) */}
                      {isExpanded && (
                        <div className="animate-in slide-in-from-top-2 border-t border-gray-100 bg-gray-50/50 duration-200">
                          <div className="scrollbar-thin scrollbar-thumb-gray-200 max-h-64 overflow-y-auto p-2">
                            <table className="w-full text-left text-xs">
                              <thead className="sticky top-0 bg-gray-50 font-semibold text-gray-500">
                                <tr>
                                  <th className="px-3 py-2">Student</th>
                                  <th className="px-3 py-2 text-right">
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                {rec.attendanceRecord.map((student, i) => (
                                  <tr
                                    key={i}
                                    className="group/row hover:bg-white"
                                  >
                                    <td className="px-3 py-2.5 font-medium text-gray-700">
                                      <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 group-hover/row:bg-violet-400"></div>
                                        <span className="max-w-[120px] truncate">
                                          {student.attendanceStudentsId
                                            ?.studentName || (
                                            <span className="text-gray-400 italic">
                                              Unknown
                                            </span>
                                          )}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="px-3 py-2.5 text-right">
                                      <StatusBadge
                                        status={student.attendanceStatus}
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {rec.attendanceRecord.length === 0 && (
                              <div className="flex flex-col items-center py-4 text-gray-400">
                                <FiAlertCircle className="mb-1" />
                                <span>No students recorded</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState isFiltered={!!selectedBatch} />
      )}
    </div>
  );
};

export default AttendanceCalendar;
