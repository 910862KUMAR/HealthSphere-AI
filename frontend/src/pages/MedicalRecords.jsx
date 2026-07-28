import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import SearchBar from "../components/SearchBar";
import PageHeader from "../components/PageHeader";

const MedicalRecords = () => {

  const [search, setSearch] = useState("");

  const records = [
    {
      id: 1,
      patient: "Rahul Kumar",
      doctor: "Dr. Rajesh Kumar",
      diagnosis: "Diabetes",
      date: "24-07-2026",
    },
    {
      id: 2,
      patient: "Priya Sharma",
      doctor: "Dr. Anil Singh",
      diagnosis: "Fever",
      date: "25-07-2026",
    },
    {
      id: 3,
      patient: "Anil Kumar",
      doctor: "Dr. Priya Sharma",
      diagnosis: "Hypertension",
      date: "26-07-2026",
    },
  ];

  const filtered = records.filter((record) =>
    record.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>

      <PageHeader
        title="Medical Records"
        subtitle="Manage patient medical history"
      />

      <div className="flex justify-between mb-6">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search Medical Record..."
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Add Record
        </button>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">ID</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Diagnosis</th>
              <th>Date</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((record) => (

              <tr
                key={record.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{record.id}</td>
                <td>{record.patient}</td>
                <td>{record.doctor}</td>
                <td>{record.diagnosis}</td>
                <td>{record.date}</td>

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

export default MedicalRecords;