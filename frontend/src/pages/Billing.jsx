import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";

const Billing = () => {

  const [search, setSearch] = useState("");

  const bills = [
    {
      id: 1001,
      patient: "Rahul Kumar",
      amount: 3500,
      payment: "Paid",
      date: "24-07-2026",
    },
    {
      id: 1002,
      patient: "Priya Sharma",
      amount: 4200,
      payment: "Pending",
      date: "25-07-2026",
    },
    {
      id: 1003,
      patient: "Anil Kumar",
      amount: 5600,
      payment: "Paid",
      date: "26-07-2026",
    },
  ];

  const filtered = bills.filter((bill) =>
    bill.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>

      <PageHeader
        title="Billing"
        subtitle="Manage hospital billing"
      />

      <div className="flex justify-between mb-6">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search Bill..."
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          + Create Bill
        </button>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">Bill ID</th>
              <th>Patient</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Date</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((bill) => (

              <tr
                key={bill.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">{bill.id}</td>
                <td>{bill.patient}</td>
                <td>₹{bill.amount}</td>
                <td>{bill.payment}</td>
                <td>{bill.date}</td>

                <td>

                  <div className="flex gap-2 justify-center">

                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-green-600 text-white px-3 py-1 rounded">
                      Print
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
};

export default Billing;