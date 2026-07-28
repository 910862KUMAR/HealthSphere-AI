const Table = ({
  columns,
  data,
}) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            {columns.map((column) => (
              <th
                key={column.key}
                className="p-4 text-left"
              >
                {column.title}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {data.length === 0 ? (
            <tr>

              <td
                colSpan={columns.length}
                className="text-center p-8"
              >
                No Data Available
              </td>

            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="p-4"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
};

export default Table;