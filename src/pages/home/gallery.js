import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

const destinations = [
    { title: "United States of America", places: 1, img: "https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/USA-1.png", link: "https://www.turio-wp.egenslab.com/destination/united-states-of-america/" },
    { title: "Paris", places: 3, img: "https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/paris-1.png", link: "https://www.turio-wp.egenslab.com/destination/paris/" },
    { title: "New Zeland", places: 3, img: "https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Newzeland-1.png", link: "https://www.turio-wp.egenslab.com/destination/newzeland/" },
    { title: "India", places: 3, img: "https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/shan-elahi-DDiLYt_F88w-unsplash-1-1-1.jpg", link: "https://www.turio-wp.egenslab.com/destination/india/" },
    { title: "Grand Canyon", places: 1, img: "https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png", link: "https://www.turio-wp.egenslab.com/destination/grand-canyon/" },
    { title: "England", places: 1, img: "https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/England-1.png", link: "https://www.turio-wp.egenslab.com/destination/england/" },
];

export default function DestinationGallery() {
    return (
        <div className="grid p-4 justify-content-center">
            {destinations.map((dest, index) => (
                <div className="col-12 sm:col-6 lg:col-4 p-2" key={index}>
                    <Card className="relative overflow-hidden shadow-2 border-round" style={{ cursor: 'pointer' }}>
                        {/* صورة الوجهة */}
                        <Image src={dest.img} alt={dest.title} className="w-full h-48 object-cover" preview />

                        {/* Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full flex flex-column justify-content-center align-items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 text-center text-white">
                            <a href={dest.link} className="text-white no-underline">
                                <h5>{dest.title}</h5>
                                <h6>{dest.places} Place{dest.places > 1 ? 's' : ''}</h6>
                            </a>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}
