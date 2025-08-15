

import { Image } from 'primereact/image';
import Slider from '../../assest/images/slider-image-one-1.jpg'
export default function Images() {
    return (
        <div className="card flex justify-content-center">
            <Image src={Slider} alt="Image"  />
        </div>
    )
}
        