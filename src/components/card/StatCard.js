

const StatCard = ({ icon, number, label }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center w-64">
      <div className="text-green-600 text-5xl mb-3">{icon}</div>
      <h2 className="text-3xl font-bold text-gray-800">{number}</h2>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
};

export default StatCard;
