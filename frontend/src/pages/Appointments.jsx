import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import appointmentService from "../services/appointmentService";

const Appointments = () => {

    const initialAppointment = {

        patientId: "",

        doctorId: "",

        appointmentDate: "",

        appointmentTime: "",

        reason: "",

        status: "",

    };

    const [appointments, setAppointments] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [openModal, setOpenModal] = useState(false);

    const [appointmentForm, setAppointmentForm] =
        useState(initialAppointment);

    const [saving, setSaving] = useState(false);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        loadAppointments();

    }, []);

    const loadAppointments = async () => {

        try {

            setLoading(true);

            const response =
                await appointmentService.getAllAppointments();

            setAppointments(response.data);

        } catch (error) {

            setError("Failed to load appointments.");

        } finally {

            setLoading(false);

        }

    };

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setAppointmentForm((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    const validateAppointment = () => {

        if (!appointmentForm.patientId)
            return "Patient ID is required";

        if (!appointmentForm.doctorId)
            return "Doctor ID is required";

        if (!appointmentForm.appointmentDate)
            return "Appointment Date is required";

                if (!appointmentForm.appointmentTime)
            return "Appointment Time is required";

        if (!appointmentForm.reason.trim())
            return "Reason is required";

        if (!appointmentForm.status.trim())
            return "Status is required";

        return null;

    };

    const saveAppointment = async () => {

        const validationError = validateAppointment();

        if (validationError) {

            alert(validationError);

            return;

        }

        try {

            setSaving(true);

            if (editingId) {
                await appointmentService.updateAppointment(editingId, appointmentForm);
            } else {
                await appointmentService.createAppointment(appointmentForm);
            }

            setOpenModal(false);

            setAppointmentForm(initialAppointment);
setEditingId(null);
            await loadAppointments();

            alert("Appointment Created Successfully");

        } catch (error) {

            alert(

                error.response?.data?.message ||

                "Unable to save appointment."

            );

        } finally {

            setSaving(false);

        }

    };

    const deleteAppointment = async (id) => {
        if (!window.confirm("Delete this appointment?")) return;

        try {
            await appointmentService.deleteAppointment(id);
            await loadAppointments();
            alert("Appointment deleted successfully");
        } catch (error) {
            alert("Unable to delete appointment.");
        }
    };

    const filteredAppointments = appointments.filter((appointment) => {
        const keyword = search.toLowerCase();

        return (
            appointment.reason?.toLowerCase().includes(keyword) ||
            appointment.status?.toLowerCase().includes(keyword) ||
            appointment.patientName?.toLowerCase().includes(keyword) ||
            appointment.doctorName?.toLowerCase().includes(keyword)
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
                title="Appointments"
                subtitle="Manage hospital appointments"
            />

            <div className="flex justify-between items-center mb-6">

                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search Appointment..."
                />

                <Button
                    variant="primary"
                    onClick={() => setOpenModal(true)}
                >
                    + Add Appointment
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
                            <th className="p-3">Patient</th>
                            <th className="p-3">Doctor</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Reason</th>
                            <th className="p-3">Status</th>
<th className="p-3">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredAppointments.map((appointment) => (

                            <tr
                                key={appointment.id}
                                className="border-b hover:bg-gray-100"
                            >

                                <td className="p-3">{appointment.id}</td>

                                <td>{appointment.patientName}</td>

                                <td>{appointment.doctorName}</td>

                                <td>{appointment.appointmentDate}</td>

                                <td>{appointment.appointmentTime}</td>

                                <td>{appointment.reason}</td>

                                <td>{appointment.status}</td>

<td className="p-3">
   <Button
    variant="secondary"
    onClick={() => {
        setAppointmentForm(appointment);
        setEditingId(appointment.id);
        setOpenModal(true);
    }}
>
    Edit
</Button>

<Button
    variant="danger"
    onClick={() => deleteAppointment(appointment.id)}
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
                title={editingId ? "Edit Appointment" : "Add Appointment"}
                onClose={() => setOpenModal(false)}
            >

                <div className="grid grid-cols-2 gap-4">

                    <Input
                        label="Patient ID"
                        type="number"
                        name="patientId"
                        value={appointmentForm.patientId}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Doctor ID"
                        type="number"
                        name="doctorId"
                        value={appointmentForm.doctorId}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Appointment Date"
                        type="date"
                        name="appointmentDate"
                        value={appointmentForm.appointmentDate}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Appointment Time"
                        type="time"
                        name="appointmentTime"
                        value={appointmentForm.appointmentTime}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Reason"
                        name="reason"
                        value={appointmentForm.reason}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Status"
                        name="status"
                        value={appointmentForm.status}
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
                        onClick={saveAppointment}
                        disabled={saving}
                    >
                        {saving ? "Saving..." : "Save Appointment"}
                    </Button>

                </div>

            </Modal>

        </DashboardLayout>

    );

};

export default Appointments;