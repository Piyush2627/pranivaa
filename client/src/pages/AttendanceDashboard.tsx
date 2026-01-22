import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

import AddModal from "../components/AddModal";
import AddAttendanceForm from "./AddAttendanceForm";
import AttendanceView from "../components/AttendananceView";
import AttendanceStudentView from "../components/AttendanceStudentView";
import AttendanceCalender from "../components/AttendanceCalender";

const AttendanceDashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <header className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Attendance Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage daily attendance records and track student status.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none"
            >
              <FiPlus className="h-4 w-4" />
              Record Attendance
            </button>
          </div>
        </header>

        {/* Modal */}
        <AddModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <AddAttendanceForm />
        </AddModal>

        {/* Dashboard Content */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left column */}
          <div className="space-y-6 lg:col-span-8">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <AttendanceView />
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <AttendanceStudentView />
            </div>
          </div>

          {/* Right column */}
          <aside className="lg:col-span-4">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <AttendanceCalender />
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
