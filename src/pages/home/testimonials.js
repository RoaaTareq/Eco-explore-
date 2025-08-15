import { Card } from 'primereact/card';

const testimonials = [
    {
        name: "John Doe",
        role: "Traveler",
        text: "Amazing experience! The tour was very well organized and the guide was excellent.",
        img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Jane Smith",
        role: "Adventurer",
        text: "I loved every moment! Highly recommended for anyone who wants a unique journey.",
        img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Mike Johnson",
        role: "Explorer",
        text: "The destinations were stunning and everything was perfectly arranged. Will come back again!",
        img: "https://randomuser.me/api/portraits/men/65.jpg"
    }
];

export default function Testimonials() {
    return (

        <>
            <h1 className='text-center'>Testimonials</h1>
                <div className="grid p-4 justify-content-center">
          
            {testimonials.map((t, index) => (
                <div className="col-12 md:col-4 p-2" key={index}>
                    <Card className="text-center shadow-2 border-round p-3">
                        <img
                            src={t.img}
                            alt={t.name}
                            className="border-circle mb-3"
                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                        <h5 className="mb-1">{t.name}</h5>
                        <small className="text-gray-600">{t.role}</small>
                        <p className="mt-2">{t.text}</p>
                    </Card>
                </div>
            ))}
        </div>
        </>
    );
}
