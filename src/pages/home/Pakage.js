import Image from "../../components/image/images";
import PlaceOne from '../../assest/images/Destination-Image-05-1.jpg'
import PlaceTwo from '../../assest/images/Destination-Image-06.png'
import PlaceThree from '../../assest/images/Destination-Image-07-1.jpg'
import PlaceFour from '../../assest/images/Destination-Image-08-1.jpg'
import PlaceFive from '../../assest/images/Destination-Image-09-1.jpg'
import PlaceSix from '../../assest/images/Destination-Image-10-1.jpg'

export default function Package() {
  const images = [
    PlaceOne,
    PlaceTwo,
    PlaceThree,
    PlaceFour,
    PlaceFive,
    PlaceSix
    
  ];

  return (
    <div className="text-center pt-16">
      <h1 className="w-[620px] mx-auto font-bold text-[30px] leading-[70px] text-[#2d373c] pt-[2px]">
        Choose Your Package
      </h1>
      <p className="w-[600px] mx-auto mt-8 text-gray-700">
        SDuis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.
        Suspendissendt eget consectetur. Blandit interdum. Sed pellentesque at nunc eget consectetur. Eget consectetur.
      </p>

    <div className="flex flex-wrap -mx-2 mt-12 mb-12 px-[150px]">
  {images.map((src, index) => (
    <div key={index} className="w-1/3 px-2 mb-4">
      <Image
        src={src}
        alt={`Package ${index + 1}`}
        className="w-[400px] h-[400px] object-cover rounded-lg"
      />
    </div>
  ))}
</div>

    </div>
  );
}
