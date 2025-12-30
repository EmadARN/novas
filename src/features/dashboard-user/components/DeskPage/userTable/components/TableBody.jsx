import { getNestedValue } from "../hooks/useUserTable";

const TableBody = ({ data, tableHead }) => (
  <tbody>
    {data.map((row, index) => (
      <tr key={row.id ?? index} className="border-b hover:bg-gray-50">
        <td className="p-4 font-medium">{index + 1}</td>

        {tableHead.map((head, i) => {
          const value = head.name
            ? getNestedValue(row, head.name)
            : null;

          if (head.type === "iconButton") {
            return (
              <td key={i} className="p-4">
                <button
                  onClick={() => head.onClick(row)}
                  className="bg-gray-900 text-white px-3 py-2 rounded-lg"
                >
                  {head.buttonIcon}
                </button>
              </td>
            );
          }

          return (
            <td key={i} className="p-4 text-sm">
              {head.format
                ? head.format(value)
                : value ?? "—"}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
