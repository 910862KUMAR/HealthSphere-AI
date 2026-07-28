import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import doctorService from "../services/doctorService";

const Doctors = () => {

    const initialDoctor = {

        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialization: "",
        experience: "",
        qualification: "",
        department: "",

    };

    const [doctors, setDoctors] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [openModal, setOpenModal] = useState(false);

    const [doctorForm, setDoctorForm] = useState(initialDoctor);

    const [saving, setSaving] = useState(false);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        loadDoctors();

    }, []);

    const loadDoctors = async () => {

        try {

            setLoading(true);

            const response = await doctorService.getAllDoctors();

            setDoctors(response.data);

        } catch (error) {

            setError("Failed to load doctors.");

        } finally {

            setLoading(false);

        }

    };

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setDoctorForm((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    const validateDoctor = () => {

        if (!doctorForm.firstName.trim())
            return "First Name is required";

        if (!doctorForm.lastName.trim())
            return "Last Name is required";

        if (!doctorForm.email.trim())
            return "Email is required";

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(doctorForm.email))
            return "Invalid Email";

        if (!doctorForm.phone.trim())
            return "Phone is required";

        if (!doctorForm.specialization.trim())
            return "Specialization is required";

        if (!doctorForm.experience)
            return "Experience is required";

        if (!doctorForm.qualification.trim())
            return "Qualification is required";

        if (!doctorForm.department.trim())
            return "Department is required";

        return null;

    };
const saveDoctor = async () => {

    const validationError = validateDoctor();

    if (validationError) {
        alert(validationError);
        return;
    }

    try {
        setSaving(true);

        if (editingId) {
    await doctorService.updateDoctor(editingId, doctorForm);
} else {
    await doctorService.createDoctor(doctorForm);
}

        setOpenModal(false);
        setDoctorForm(initialDoctor);
setEditingId(null);
        await loadDoctors();

        alert("Doctor Added Successfully");

    } catch (error) {

        alert(
            error.response?.data?.message ||
            "Unable to save doctor."
        );

    } finally {

        setSaving(false);

    }

};

const editDoctor = (doctor) => {
    setDoctorForm(doctor);
    setEditingId(doctor.id);
    setOpenModal(true);
};
const deleteDoctor = async (id) => {
    if (!confirm("Are you sure you want to delete this doctor?")) return;
    try {
        await doctorService.deleteDoctor(id);
        await loadDoctors();
        alert("Doctor deleted.");
    } catch (error) {
        alert(error.response?.data?.message || "Unable to delete doctor.");
    }
};

const filteredDoctors = doctors.filter((doctor) => {
    const keyword = search.toLowerCase();
    return (
        doctor.firstName.toLowerCase().includes(keyword) ||
        doctor.lastName.toLowerCase().includes(keyword) ||
        doctor.email.toLowerCase().includes(keyword) ||
        doctor.specialization.toLowerCase().includes(keyword) ||
        doctor.department.toLowerCase().includes(keyword)
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
                title="Doctors"
                subtitle="Manage hospital doctors"
            />

            <div className="flex justify-between items-center mb-6">

                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search Doctor..."
                />

                <Button
                    variant="primary"
                    onClick={() => setOpenModal(true)}
                >
                    + Add Doctor
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
                            <th className="p-3">Specialization</th>
                            <th className="p-3">Experience</th>
                            <th className="p-3">Qualification</th>
                            <th className="p-3">Department</th>
<th className="p-3">Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {filteredDoctors.map((doctor) => (

                            <tr
                                key={doctor.id}
                                className="border-b hover:bg-gray-100"
                            >

                                <td className="p-3">{doctor.id}</td>

                                <td>{doctor.firstName}</td>

                                <td>{doctor.lastName}</td>

                                <td>{doctor.email}</td>

                                <td>{doctor.phone}</td>

                                <td>{doctor.specialization}</td>

                                <td>{doctor.experience} Years</td>

                                <td>{doctor.qualification}</td>

                                <td>{doctor.department}</td>
                                <td className="p-3 flex gap-2">
    <Button
        variant="primary"
        onClick={() => editDoctor(doctor)}
    >
        Edit
    </Button>

    <Button
        variant="danger"
        onClick={() => deleteDoctor(doctor.id)}
    >
        Delete
    </Button>
</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <Modal
                open={openModal}
               title={editingId ? "Edit Doctor" : "Add Doctor"}
                onClose={() => setOpenModal(false)}
            >

                <div className="grid grid-cols-2 gap-4">

                    <Input
                        label="First Name"
                        name="firstName"
                        value={doctorForm.firstName}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Last Name"
                        name="lastName"
                        value={doctorForm.lastName}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={doctorForm.email}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Phone"
                        name="phone"
                        value={doctorForm.phone}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Specialization"
                        name="specialization"
                        value={doctorForm.specialization}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Experience"
                        type="number"
                        name="experience"
                        value={doctorForm.experience}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Qualification"
                        name="qualification"
                        value={doctorForm.qualification}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Department"
                        name="department"
                        value={doctorForm.department}
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
                        onClick={saveDoctor}
                        disabled={saving}
                    >
                       {saving ? "Saving..." : editingId ? "Update Doctor" : "Save Doctor"}
                    </Button>

                </div>

            </Modal>

        </DashboardLayout>

    );

};

export default Doctors;