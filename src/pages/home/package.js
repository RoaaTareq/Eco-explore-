import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Slider from '../../assest/images/slider-image-one-1.jpg'
import TourHeader from './header';

export default function AdvancedDemo() {
    const header = (
        <img alt="Card" src={Slider} />
    );

    // const footer = (
    //     <>
    //         <Button label="Save" icon="pi pi-check" />
    //         <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
    //     </>
    // );

    return (
        <>
             <TourHeader/>
        <div className="grid p-4">
            
            {Array.from({ length: 3 }).map((_, i) => (
                <div className="col-12 md:col-4 p-2" key={i}>
                    <Card title={`Card ${i + 1}`} subTitle="Card subtitle" header={header} >
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            ))}
        </div>
        </>
    );
}
