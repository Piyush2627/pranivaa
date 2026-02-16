import React, { useState, useEffect, type FormEvent } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface User {
  _id: string;
  name: string;
}

interface Payment {
  _id?: string;
  user: string;
  amount: number;
  classesAttended?: number;
  status?: "paid" | "unpaid";
  paymentDate?: string;
}

const PaymentForm: React.FC = () => {
  const queryClient = useQueryClient();
  const [userSearch, setUserSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [classesAttended, setClassesAttended] = useState("8"); // default value from schema
  const [status, setStatus] = useState<"paid" | "unpaid">("unpaid");

  // Fetch users list
  const { data: users = [] } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/getAllUser`,
      );
      return res.data.data;
    },
  });

  // Filter users
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(userSearch.toLowerCase()),
    );
    setFilteredUsers(filtered);
  }, [userSearch, users]);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (payment: Payment) => {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/payment`,
        payment,
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      // Reset form
      setSelectedUser(null);
      setUserSearch("");
      setAmount("");
      setDate("");
      setClassesAttended("8");
      setStatus("unpaid");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !amount) return;

    mutate({
      user: selectedUser._id,
      amount: parseFloat(amount),
      classesAttended: parseInt(classesAttended),
      status,
      paymentDate: date || undefined,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-4 rounded bg-white p-6 shadow-md"
    >
      <h2 className="text-xl font-semibold">Add Payment</h2>

      {/* User Search Input */}
      <input
        type="text"
        placeholder="Search user by name"
        value={selectedUser?.name || userSearch}
        onChange={(e) => {
          setUserSearch(e.target.value);
          setSelectedUser(null);
        }}
        className="w-full rounded border px-4 py-2"
      />

      {/* User Dropdown */}
      {userSearch && !selectedUser && (
        <ul className="max-h-40 overflow-y-auto rounded border bg-white shadow">
          {filteredUsers.map((user) => (
            <li
              key={user._id}
              onClick={() => {
                setSelectedUser(user);
                setUserSearch("");
              }}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full rounded border px-4 py-2"
      />

      {/* Classes Attended */}
      <input
        type="number"
        placeholder="Classes Attended"
        value={classesAttended}
        onChange={(e) => setClassesAttended(e.target.value)}
        className="w-full rounded border px-4 py-2"
      />

      {/* Payment Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full rounded border px-4 py-2"
      />

      {/* Status Select */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as "paid" | "unpaid")}
        className="w-full rounded border px-4 py-2"
      >
        <option value="unpaid">Unpaid</option>
        <option value="paid">Paid</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!selectedUser || isPending}
        className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Submit Payment"}
      </button>

      {isError && (
        <p className="mt-2 text-sm text-red-600">Error adding payment.</p>
      )}
    </form>
  );
};

export default PaymentForm;
