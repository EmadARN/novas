import SpendingChart from "./SpendingChart";
import SubscriptionChart from "./SubscriptionChart";


const DashboardCharts = ({ spendingData, subscriptionData }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
    <SpendingChart data={spendingData} />
    <SubscriptionChart data={subscriptionData} />
  </div>
);

export default DashboardCharts;