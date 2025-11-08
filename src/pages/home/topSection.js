import Image from "../../components/image/images";
import Gallery from "../../assest/images/hero2-image-group3-1-1.png";
import Button from "../../components/button/button";

export default function TopSection() {
    return (
        <div className="flex flex-wrap -mx-2 absolute top-[12%] w-full left-0 right-0 mx-auto p-32">
            <div className="w-1/2 px-2">
                <h1 className=" w-[620px] font-bold text-[40px] leading-[70px] text-[#2d373c] pt-[2px]">
                    Explore The Most <span>Attractive </span> Travel Places
                </h1>
                <p className="w-[600px] mt-16">
                    Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, suscipit turpis ut, facilisis purus.Sed convallis sit amet leo quis .
                </p>
                <Button className="bg-emeraldGreen w-[300px] h-[50px] mt-10" size="lg">
                    Login
                </Button>
            </div>
            <div className="w-1/2 px-2">
                <Image src={Gallery} alt="Random Image" />
            </div>
        </div>
    );
}
