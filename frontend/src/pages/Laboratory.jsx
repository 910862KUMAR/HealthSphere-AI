import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";

const Laboratory = () => {

  const [search, setSearch] = useState("");

  const tests = [
    {
      id: 1,
      patient: "Rahul Kumar",
      test: "Blood Test",
      technician: "Arun",
      status: "Completed",
    },
    {
      id: 2,
      patient: "Priya Sharma",
      test: "Urine Test",
      technician: "Mahesh",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Anil Kumar",
      test: "MRI Scan",
      technician: "Suresh",
      status: "Processing",
    },
  ];

  const filtered = tests.filter((item) =>
    item.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>

      <PageHeader
        title="Laboratory"
        subtitle="Manage laboratory test records"
      />

      <div className="flex justify-between mb-6">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search Laboratory..."
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          + New Test
        </button>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">ID</th>
              <th>Patient</th>
              <th>Test</th>
              <th>Technician</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">{item.id}</td>
                <td>{item.patient}</td>
                <td>{item.test}</td>
                <td>{item.technician}</td>
                <td>{item.status}</td>

                <td>

                  <div className="flex gap-2 justify-center">

                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-600 text-white px-3 py-1 rounded">
                      Delete
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

export default Laboratory;