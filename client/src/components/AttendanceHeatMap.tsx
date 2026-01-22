export default function AttendanceHeatMap() {
  return (
    <div className="font-poppins w-full rounded-xl border border-white/10 bg-white/5 bg-gradient-to-br from-indigo-600/10 to-black/5 p-4 text-black shadow backdrop-blur-lg dark:text-white">
      <div className="flex items-center justify-between align-middle">
        <div className="text-3xl font-bold">Heat Map </div>
        <div className="flex items-center space-x-2">
          <div className="">Low</div>
          <div className="flex space-x-1">
            <div className="size-4 rounded bg-indigo-950"></div>
            <div className="size-4 rounded bg-indigo-800"></div>
            <div className="size-4 rounded bg-indigo-500"></div>
          </div>
          <div className="">High</div>
        </div>
      </div>
      i will create a heat map in this section
    </div>
  );
}
