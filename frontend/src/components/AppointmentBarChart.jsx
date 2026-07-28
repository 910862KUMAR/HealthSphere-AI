import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const AppointmentBarChart = () => {

    const data = {

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
        ],

        datasets: [

            {

                label: "Appointments",

                data: [
                    25,
                    40,
                    55,
                    70,
                    50,
                    90
                ],

            },

        ],

    };

    const options = {

        responsive: true,

        plugins: {

            legend: {

                position: "top",

            },

        },

    };

    return (

        <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-xl font-semibold mb-4">

                Monthly Appointments

            </h2>

            <Bar
                data={data}
                options={options}
            />

        </div>

    );

};

export default AppointmentBarChart;