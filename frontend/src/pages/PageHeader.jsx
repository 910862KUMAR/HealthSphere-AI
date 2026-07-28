const PageHeader = ({ title, subtitle, action }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        <p className="text-gray-500 mt-1">
          {subtitle}
        </p>
      </div>

      {action}
    </div>
  );
};

export default PageHeader;