import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import SearchBar from "../components/SearchBar";
import PageHeader from "../components/PageHeader";

const Prescriptions = () => {

  const [search, setSearch] = useState("");

  const prescriptions = [
    {
      id: 1,
      patient: "Rahul Kumar",
      doctor: "Dr. Rajesh Kumar",
      medicine: "Metformin",
      dosage: "500 mg",
    },
    {
      id: 2,
      patient: "Priya Sharma",
      doctor: "Dr. Anil Singh",
      medicine: "Paracetamol",
      dosage: "650 mg",
    },
    {
      id: 3,
      patient: "Anil Kumar",
      doctor: "Dr. Priya Sharma",
      medicine: "Amlodipine",
      dosage: "5 mg",
    },
  ];

  const filtered = prescriptions.filter((item) =>
    item.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>

      <PageHeader
        title="Prescriptions"
        subtitle="Manage patient prescriptions"
      />

      <div className="flex justify-between mb-6">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search Prescription..."
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Add Prescription
        </button>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">ID</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Medicine</th>
              <th>Dosage</th>
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
                <td>{item.doctor}</td>
                <td>{item.medicine}</td>
                <td>{item.dosage}</td>

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

export default Prescriptions;