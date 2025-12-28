import { Line, Pie } from "react-chartjs-2";

const SpendingChart = ({ data }) => (
  <div className="bg-white p-6 rounded-xl shadow ">
    <h2 className="text-xl font-bold mb-4">هزینه‌های من</h2>
    <Line data={data} options={{ responsive: true }} />
  </div>
);

export default SpendingChart;