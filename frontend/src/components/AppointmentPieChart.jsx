import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const AppointmentPieChart = () => {

    const data = {

        labels: [

            "Completed",

            "Pending",

            "Cancelled"

        ],

        datasets: [

            {

                data: [

                    120,

                    35,

                    20

                ],

            },

        ],

    };

    return (

        <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-xl font-semibold mb-4">

                Appointment Status

            </h2>

            <Pie data={data} />

        </div>

    );

};

export default AppointmentPieChart;