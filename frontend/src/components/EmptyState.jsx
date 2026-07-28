const EmptyState = ({
  title = "No Data Found",
  description = "Nothing to display.",
}) => {

  return (

    <div className="bg-white rounded-xl shadow p-12 text-center">

      <h2 className="text-2xl font-bold text-gray-700">

        {title}

      </h2>

      <p className="text-gray-500 mt-3">

        {description}

      </p>

    </div>

  );
};

export default EmptyState;