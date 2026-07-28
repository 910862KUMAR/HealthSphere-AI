import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import patientService from "../services/patientService";

const Patients = () => {

    const initialPatient = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        bloodGroup: "",
        address: "",
    };

    const [patients, setPatients] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [openModal, setOpenModal] = useState(false);

    const [patientForm, setPatientForm] = useState(initialPatient);

    const [saving, setSaving] = useState(false);

    const [editing, setEditing] = useState(false);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        loadPatients();

    }, []);

    const loadPatients = async () => {

        try {

            setLoading(true);

            const response =
                await patientService.getAllPatients();

            setPatients(response.data);

        } catch (err) {

            setError("Failed to load patients.");

        } finally {

            setLoading(false);

        }

    };

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setPatientForm((prev) => ({

            ...prev,

            [name]: value,

        }));

    };
    
    const deletePatient = async (id) => {
    if (!window.confirm("Are you sure you want to delete this patient?")) {
        return;
    }

    try {
        await patientService.deletePatient(id);
        await loadPatients();
        alert("Patient Deleted Successfully");
    } catch (error) {
        alert(
            error.response?.data?.message ||
            "Unable to delete patient."
        );
    }
};
    const validatePatient = () => {

        if (!patientForm.firstName.trim())
            return "First Name is required";

        if (!patientForm.lastName.trim())
            return "Last Name is required";

        if (!patientForm.email.trim())
            return "Email is required";

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(patientForm.email))
            return "Invalid Email";

        if (!patientForm.phone.trim())
            return "Phone is required";

        if (!patientForm.age)
            return "Age is required";

        if (!patientForm.gender)
            return "Gender is required";

        if (!patientForm.bloodGroup)
            return "Blood Group is required";

        if (!patientForm.address.trim())
            return "Address is required";

        return null;

    };

    const savePatient = async () => {

        const validationError = validatePatient();

        if (validationError) {

            alert(validationError);

            return;

        }

        try {

            setSaving(true);

            if (editing) {
    await patientService.updatePatient(editingId, patientForm);
    alert("Patient Updated Successfully");
} else {
    await patientService.createPatient(patientForm);
    alert("Patient Created Successfully");
}

setOpenModal(false);
setPatientForm(initialPatient);
await loadPatients();

        } catch (error) {

            alert(

                error.response?.data?.message ||

                "Unable to save patient."

            );

        } finally {

            setSaving(false);

        }

    };

    const filteredPatients = patients.filter((patient) => {

        const keyword = search.toLowerCase();

        return (

            patient.firstName.toLowerCase().includes(keyword) ||

            patient.lastName.toLowerCase().includes(keyword) ||

            patient.email.toLowerCase().includes(keyword) ||

            patient.phone.toLowerCase().includes(keyword)

        );

    });

    if (loading)

        return (

            <DashboardLayout>

                <Loader />

            </DashboardLayout>

        );
    return (

        <DashboardLayout>

            <PageHeader
                title="Patients"
                subtitle="Manage hospital patients"
            />

            <div className="flex justify-between items-center mb-6">

                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search Patient..."
                />

               <Button
    variant="primary"
    onClick={() => {
        setEditing(false);
        setEditingId(null);
        setPatientForm(initialPatient);
        setOpenModal(true);
    }}
>
    + Add Patient
</Button>
            </div>

            {error && (

                <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">

                    {error}

                </div>

            )}

            <div className="bg-white rounded-xl shadow-lg overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-blue-600 text-white">

                        <tr>

                            <th className="p-3">ID</th>
                            <th className="p-3">First Name</th>
                            <th className="p-3">Last Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Age</th>
                            <th className="p-3">Gender</th>
                            <th className="p-3">Blood Group</th>
                            <th className="p-3">Address</th>
                            <th className="p-3">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredPatients.map((patient) => (

                            <tr
                                key={patient.id}
                                className="border-b hover:bg-gray-100 transition"
                            >

                                <td className="p-3">{patient.id}</td>

                                <td>{patient.firstName}</td>

                                <td>{patient.lastName}</td>

                                <td>{patient.email}</td>

                                <td>{patient.phone}</td>

                                <td>{patient.age}</td>

                                <td>{patient.gender}</td>

                                <td>{patient.bloodGroup}</td>

                                <td>{patient.address}</td>

                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <Button
                                            variant="warning"
                                            onClick={() => {
                                                setEditing(true);
                                                setEditingId(patient.id);
                                                setPatientForm(patient);
                                                setOpenModal(true);
                                            }}
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            variant="danger"
                                            onClick={() => deletePatient(patient.id)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
<Modal
    open={openModal}
    title={editing ? "Update Patient" : "Add Patient"}
    onClose={() => setOpenModal(false)}
>
                <div className="grid grid-cols-2 gap-4">

                    <Input
                        label="First Name"
                        name="firstName"
                        value={patientForm.firstName}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Last Name"
                        name="lastName"
                        value={patientForm.lastName}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={patientForm.email}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Phone"
                        name="phone"
                        value={patientForm.phone}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Age"
                        type="number"
                        name="age"
                        value={patientForm.age}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Gender"
                        name="gender"
                        value={patientForm.gender}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Blood Group"
                        name="bloodGroup"
                        value={patientForm.bloodGroup}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Address"
                        name="address"
                        value={patientForm.address}
                        onChange={handleInputChange}
                    />

                </div>

                <div className="flex justify-end gap-3 mt-6">

                    <Button
                        variant="secondary"
                        onClick={() => setOpenModal(false)}
                    >
                        Cancel
                    </Button>

                   <Button
    variant="primary"
    onClick={savePatient}
    disabled={saving}
>
    {saving ? "Saving..." : editing ? "Update Patient" : "Save Patient"}
</Button>

                </div>

            </Modal>

        </DashboardLayout>

    );

};

export default Patients;