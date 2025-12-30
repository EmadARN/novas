import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);
const SpendingChart = ({ data }) => (
  <div className="bg-white p-6 rounded-xl shadow ">
    <h2 className="text-xl text-[var(--accent)] font-bold mb-4">هزینه‌های من</h2>
    <Line data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true }, x: {} } }} />
  </div>
);

export default SpendingChart;