import DashboardLayout from "../layouts/DashboardLayout";

const Profile = () => {
  const user = {
    name: "Admin User",
    email: "admin@healthsphere.com",
    role: "Administrator",
    phone: "+91 9876543210",
    department: "Hospital Administration",
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            View your profile information.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-8">

          <div className="flex flex-col md:flex-row gap-8">

            <div className="flex justify-center">

              <div className="w-40 h-40 rounded-full bg-blue-600 text-white flex items-center justify-center text-6xl font-bold">

                A

              </div>

            </div>

            <div className="flex-1">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-gray-500">
                    Full Name
                  </label>

                  <p className="text-lg font-semibold">
                    {user.name}
                  </p>
                </div>

                <div>
                  <label className="text-gray-500">
                    Email
                  </label>

                  <p className="text-lg font-semibold">
                    {user.email}
                  </p>
                </div>

                <div>
                  <label className="text-gray-500">
                    Phone
                  </label>

                  <p className="text-lg font-semibold">
                    {user.phone}
                  </p>
                </div>

                <div>
                  <label className="text-gray-500">
                    Role
                  </label>

                  <p className="text-lg font-semibold">
                    {user.role}
                  </p>
                </div>

                <div>
                  <label className="text-gray-500">
                    Department
                  </label>

                  <p className="text-lg font-semibold">
                    {user.department}
                  </p>
                </div>

              </div>

              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Edit Profile
              </button>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default Profile;