import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const menu = [

    { name: "Dashboard", path: "/dashboard" },
    { name: "Patients", path: "/patients" },
    { name: "Doctors", path: "/doctors" },
    { name: "Appointments", path: "/appointments" },
    { name: "Medical Records", path: "/medical-records" },
    { name: "Prescriptions", path: "/prescriptions" },
    { name: "Laboratory", path: "/laboratory" },
    { name: "Pharmacy", path: "/pharmacy" },
    { name: "Billing", path: "/billing" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
    { name: "AI Chat", path: "/ai-chat" },   // 👈 Add this
  ];

  return (

    <aside className="w-72 bg-slate-900 text-white min-h-screen">

      <div className="text-center py-6 border-b border-slate-700">

        <h2 className="text-2xl font-bold">

          HealthSphere

        </h2>

      </div>

      <nav className="mt-4">

        {

          menu.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-6 py-4 transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`
              }
            >

              {item.name}

            </NavLink>

          ))

        }

      </nav>

    </aside>

  );

};

export default Sidebar;