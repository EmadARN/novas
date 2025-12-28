 const StatsCard = ({ title, count, icon, color, onClick }) => (
  <div
    onClick={onClick}
    className={`bg-gradient-to-r ${color} p-6 rounded-xl shadow-xl cursor-pointer text-white hover:scale-105 transition`}
  >
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm opacity-80">{title}</p>
        <p className="text-3xl font-bold">{count}</p>
      </div>
      <span className="text-4xl">{icon}</span>
    </div>
  </div>
);


export default StatsCard;