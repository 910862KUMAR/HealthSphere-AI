import { Link } from "react-router-dom";

const Breadcrumb = ({
  items,
}) => {

  return (

    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">

      {items.map((item, index) => (

        <div
          key={index}
          className="flex items-center gap-2"
        >

          {index !== 0 && <span>/</span>}

          {item.link ? (

            <Link
              to={item.link}
              className="hover:text-blue-600"
            >
              {item.label}
            </Link>

          ) : (

            <span className="font-semibold text-gray-700">

              {item.label}

            </span>

          )}

        </div>

      ))}

    </div>

  );
};

export default Breadcrumb;