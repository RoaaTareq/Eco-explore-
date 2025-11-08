
import { FaGlobe, FaMapMarkerAlt, FaMedal, FaMountain } from "react-icons/fa";
import StatCard from "../../components/card/StatCard";


function StatsSection() {
  const stats = [
    { icon: <FaGlobe />, number: 500, label: "Awesome Tour" },
    { icon: <FaMapMarkerAlt />, number: 300, label: "New Destinations" },
    { icon: <FaMedal />, number: 10, label: "Year Experience" },
    { icon: <FaMountain />, number: 150, label: "Best Mountains" },
  ];

  return (
    <div className="bg-gray-100 py-12 flex flex-wrap justify-center gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          number={stat.number}
          label={stat.label}
        />
      ))}
    </div>
  );
}

export default StatsSection;
