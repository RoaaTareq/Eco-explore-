
const Card = ({ image, days, nights, title, location, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
   
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

      
        <div className="absolute top-3 left-3 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow">
          {days} Days {nights} Nights
        </div>
      </div>

     
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">📍 {location}</p>

        <div className="flex items-center justify-between mt-4">
          <button className="px-4 py-2 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition">
            BOOK NOW →
          </button>
          <p className="text-gray-600 text-sm">
            Starting From <br />
            <span className="text-green-600 font-bold text-lg">${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
