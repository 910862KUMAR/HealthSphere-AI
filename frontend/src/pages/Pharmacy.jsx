import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";

const Pharmacy = () => {

  const [search, setSearch] = useState("");

  const medicines = [
    {
      id: 1,
      name: "Paracetamol",
      stock: 250,
      price: 25,
      supplier: "ABC Pharma",
    },
    {
      id: 2,
      name: "Metformin",
      stock: 180,
      price: 40,
      supplier: "HealthCare Ltd",
    },
    {
      id: 3,
      name: "Amlodipine",
      stock: 150,
      price: 65,
      supplier: "MediLife",
    },
  ];

  const filtered = medicines.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>

      <PageHeader
        title="Pharmacy"
        subtitle="Manage medicine inventory"
      />

      <div className="flex justify-between mb-6">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search Medicine..."
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          + Add Medicine
        </button>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">ID</th>
              <th>Medicine</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Supplier</th>
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
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>₹{item.price}</td>
                <td>{item.supplier}</td>

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

export default Pharmacy;