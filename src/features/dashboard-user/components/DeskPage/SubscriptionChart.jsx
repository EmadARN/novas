import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);
const SubscriptionChart = ({ data }) => (
  <div className="bg-white p-6 rounded-xl shadow ">
    <h2 className="text-xl text-[var(--accent)] font-bold mb-4">
      وضعیت اشتراک‌ها
    </h2>
    <Pie
      data={data}
      options={{
        responsive: true,
        plugins: { legend: { position: "top" } },
        scales: { y: { beginAtZero: true }, x: {} },
      }}
    />
  </div>
);

export default SubscriptionChart;
