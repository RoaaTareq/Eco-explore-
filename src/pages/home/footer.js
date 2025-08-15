import { Button } from 'primereact/button';

export default function Footer() {
    return (
        <div className="bg-gray-900 text-white p-8">
            <div className="grid justify-content-between">
                {/* عمود 1: عن الشركة */}
                <div className="col-12 md:col-3 mb-4 md:mb-0">
                    <h4 className="mb-3">About Us</h4>
                    <p>
                        We provide amazing travel experiences all over the world. Explore, discover, and enjoy your trips with us.
                    </p>
                </div>

                {/* عمود 2: روابط سريعة */}
                <div className="col-12 md:col-3 mb-4 md:mb-0">
                    <h4 className="mb-3">Quick Links</h4>
                    <ul className="list-none p-0">
                        <li><a href="#" className="text-white no-underline hover:text-green-500">Home</a></li>
                        <li><a href="#" className="text-white no-underline hover:text-green-500">Destinations</a></li>
                        <li><a href="#" className="text-white no-underline hover:text-green-500">Tours</a></li>
                        <li><a href="#" className="text-white no-underline hover:text-green-500">Contact</a></li>
                    </ul>
                </div>

                {/* عمود 3: تواصل اجتماعي */}
                <div className="col-12 md:col-3 mb-4 md:mb-0 text-center md:text-left">
                    <h4 className="mb-3">Follow Us</h4>
                    <div className="flex gap-2">
                        <Button icon="pi pi-facebook" className="p-button-rounded p-button-text text-white" />
                        <Button icon="pi pi-twitter" className="p-button-rounded p-button-text text-white" />
                        <Button icon="pi pi-instagram" className="p-button-rounded p-button-text text-white" />
                        <Button icon="pi pi-linkedin" className="p-button-rounded p-button-text text-white" />
                    </div>
                </div>
            </div>

            {/* حقوق الطبع */}
            <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm">
                © 2025 Your Company. All Rights Reserved.
            </div>
        </div>
    );
}
