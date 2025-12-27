const { default: StatsCard } = require("./StatsCard");

const DashboardCards = ({ cards }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 gap-6">
    {cards.map((card, i) => (
      <StatsCard key={i} {...card} />
    ))}
  </div>
);

export default DashboardCards;
