import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const Settings = () => {

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    darkMode: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;

    setSettings((previous) => ({
      ...previous,
      [name]: checked,
    }));
  };

  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Configure your application preferences.
          </p>

        </div>

        <div className="bg-white rounded-xl shadow p-8 space-y-6">

          <div className="flex justify-between items-center">

            <div>

              <h3 className="font-semibold">
                Email Notifications
              </h3>

              <p className="text-gray-500">
                Receive email notifications.
              </p>

            </div>

            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
            />

          </div>

          <hr />

          <div className="flex justify-between items-center">

            <div>

              <h3 className="font-semibold">
                SMS Notifications
              </h3>

              <p className="text-gray-500">
                Receive SMS alerts.
              </p>

            </div>

            <input
              type="checkbox"
              name="smsNotifications"
              checked={settings.smsNotifications}
              onChange={handleChange}
            />

          </div>

          <hr />

          <div className="flex justify-between items-center">

            <div>

              <h3 className="font-semibold">
                Dark Mode
              </h3>

              <p className="text-gray-500">
                Enable dark theme.
              </p>

            </div>

            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
            />

          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">

            Save Settings

          </button>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Settings;