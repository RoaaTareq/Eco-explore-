import React from "react";
import Card from "../../components/card/card";
import PlaceSix from "../../assest/images/Destination-Image-10-1.jpg";

function TripCard() {
  const trips = [
    { image: PlaceSix, days: 3, nights: 4, title: "Vinales Valley", location: "Cuba", price: 59 },
    { image: PlaceSix, days: 5, nights: 6, title: "Petra", location: "Jordan", price: 120 },
    { image: PlaceSix, days: 2, nights: 3, title: "Santorini", location: "Greece", price: 200 },
    { image: PlaceSix, days: 4, nights: 5, title: "Bali", location: "Indonesia", price: 150 },
   
  ];

  return (
    <div className=" bg-gray-100 p-4">
      {/* Flex container */}
      <div className="flex flex-wrap">
        {trips.map((trip, index) => (
          <div key={index} className="w-1/4 p-4">
            <Card
              image={trip.image}
              days={trip.days}
              nights={trip.nights}
              title={trip.title}
              location={trip.location}
              price={trip.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripCard;
