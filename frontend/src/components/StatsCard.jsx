const StatsCard = ({ title, value, icon }) => {

  return (

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-gray-500">

            {title}

          </h3>

          <h2 className="text-3xl font-bold mt-3">

            {value}

          </h2>

        </div>

        <div className="text-5xl">

          {icon}

        </div>

      </div>

    </div>

  );

};

export default StatsCard;