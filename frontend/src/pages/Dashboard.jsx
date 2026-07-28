import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatsCard from "../components/StatsCard";
import dashboardService from "../services/dashboardService";
import AppointmentBarChart from "../components/AppointmentBarChart";
import AppointmentPieChart from "../components/AppointmentPieChart";

import AIAssistantPanel from "../components/dashboard/AIAssistantPanel";

const Dashboard = () => {

  const [summary, setSummary] = useState({

    totalPatients: 0,
    totalDoctors: 0,
    totalAppointments: 0,
    totalMedicalRecords: 0,
    totalPrescriptions: 0,
    totalLaboratories: 0,
    totalPharmacies: 0,
    totalBills: 0,

  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    try {

      const response = await dashboardService.getDashboardSummary();

      setSummary(response.data);

    } catch (error) {

      console.error("Dashboard Error:", error);

    } finally {

      setLoading(false);

    }

  };

  const stats = [

    {
      title: "Patients",
      value: summary.totalPatients,
      icon: "👨‍⚕️",
    },

    {
      title: "Doctors",
      value: summary.totalDoctors,
      icon: "🩺",
    },

    {
      title: "Appointments",
      value: summary.totalAppointments,
      icon: "📅",
    },

    {
      title: "Medical Records",
      value: summary.totalMedicalRecords,
      icon: "📄",
    },

    {
      title: "Prescriptions",
      value: summary.totalPrescriptions,
      icon: "💊",
    },

    {
      title: "Laboratories",
      value: summary.totalLaboratories,
      icon: "🧪",
    },

    {
      title: "Pharmacy",
      value: summary.totalPharmacies,
      icon: "🏥",
    },

    {
      title: "Bills",
      value: summary.totalBills,
      icon: "💰",
    },

  ];

  if (loading) {

    return (

      <DashboardLayout>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <h2 className="text-xl font-semibold">

            Loading Dashboard...

          </h2>
        </div>

      </DashboardLayout>

    );

  }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 xl:grid-cols-10 gap-6">
          <div className="xl:col-span-7 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-500 mt-2">
                Welcome to HealthSphere AI Enterprise Healthcare Management System.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((item) => (
                <StatsCard
                  key={item.title}
                  title={item.title}
                  value={item.value}
                  icon={item.icon}
                />
              ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>✔ Patient Registration Completed</li>
                  <li>✔ Appointment Scheduled</li>
                  <li>✔ Prescription Generated</li>
                  <li>✔ Laboratory Report Uploaded</li>
                  <li>✔ Billing Completed</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Hospital Overview</h2>
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <AppointmentBarChart />
                  <AppointmentPieChart />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Patients</span>
                    <span className="font-semibold">{summary.totalPatients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Doctors</span>
                    <span className="font-semibold">{summary.totalDoctors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Appointments</span>
                    <span className="font-semibold">{summary.totalAppointments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Bills</span>
                    <span className="font-semibold">{summary.totalBills}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3">
            <div className="h-[85vh] sticky top-6">
              <AIAssistantPanel />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );

};

export default Dashboard;