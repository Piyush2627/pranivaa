export type UserType = {
  _id?: string;
  userName: string;
  email: string;
  password: string;
  role: string;
  UserId?: UserDataType;
};

export type EnquiryRemarkType = {
  note: string;
  addedBy: string;
  createdAt: string;
};

export type EnquiryType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  instrument: string;
  preferredTime: string;
  message: string;
  status: string;
  remarks: EnquiryRemarkType[];
  followUp: string;
};

export type UserDataType = {
  userStatus: string;
  target: any;
  _id: string;
  name: string;
  email: string;
  mobileNumber: number;
  instruments: string[];
  joiningDate?: Date;
  branch: string;
  age: number;
  profile: string;
  address: {
    country?: string;
    city?: string;
    address?: string;
  };
};

export type AttendanceUserType = {
  attendanceUserId: {
    _id: string;
    name: string;
  };
  attendanceStatus: "Present" | "Absent" | "Late";
};

export type AttendanceType = {
  _id: string;
  attendanceDate: Date;
  attendanceRemark?: string;
  attendanceOfClass: string;
  attendanceRecord: AttendanceUserType[];
};

export type ClassBatchType = {
  _id: string;
  batchName: string;
  batchInstructor: InstructorType;
  batchInstrument?: string;
  batchTiming: string;
  batchUsers: UserDataType[];
  batchStartDate?: string;
  batchBranch?: string;
  createdAt?: string;
  updatedAt?: string;
};
export interface InstructorType {
  _id: string;
  userName: string;
  email?: string;
}
export interface RentalDetails {
  startDate?: string;
  endDate?: string;
  actualReturnDate?: string;
  isLate?: boolean;
  lateFee?: number;
}

export interface ModelType {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  tittle?: string;
}

export interface InstrumentTransaction {
  _id: string;
  transactionType: "purchase" | "rental";
  instrument: { name: string; price: number };
  paymentStatus: "pending" | "paid" | "failed";
  status: string;
  rentalDetails?: RentalDetails;
}
