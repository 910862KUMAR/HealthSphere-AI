const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* Left Section */}

        <div className="relative hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-blue-900 text-white p-12 overflow-hidden">

          {/* Decorative Circles */}

          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-30"></div>

          <div className="absolute bottom-8 right-12 w-44 h-44 bg-blue-400 rounded-full opacity-50"></div>

          <div className="relative z-10">

            <h1 className="text-5xl font-extrabold mb-4">
              🏥 HealthSphere AI
            </h1>

            <h2 className="text-3xl font-bold mb-6">
              Welcome
            </h2>

            <p className="text-blue-100 leading-8 text-lg">
              Enterprise Healthcare Management System for managing
              patients, doctors, appointments, laboratory,
              pharmacy, billing and medical records.
            </p>

            <div className="mt-10 space-y-3 text-lg">

              <p>✔ Patient Management</p>

              <p>✔ Doctor Management</p>

              <p>✔ Appointment Scheduling</p>

              <p>✔ Laboratory & Pharmacy</p>

              <p>✔ Billing & Reports</p>

              <p>✔ Secure JWT Authentication</p>

            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex items-center justify-center p-10 bg-white">

          <div className="w-full max-w-md">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;