const { Pie } = require("react-chartjs-2");

const SubscriptionChart = ({ data }) => (
  <div className="bg-white p-6 rounded-xl shadow ">
    <h2 className="text-xl font-bold mb-4">وضعیت اشتراک‌ها</h2>
    <Pie data={data} options={{ responsive: true }} />
  </div>
);

export default SubscriptionChart;
