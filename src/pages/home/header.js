import { Button } from 'primereact/button';

export default function TourHeader() {
    return (
        <div className="grid p-4 align-items-center">
            {/* العمود الأول: العنوان والوصف */}
            <div className="col-12 md:col-6">
                <div className="p-2">
                    <div className="text-gray-600 mb-2">
                        <h4>Perfect for You</h4>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-3xl font-bold">Popular Tour Package</h2>
                    </div>
                    <div>
                        <p>
                            Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.
                            Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur.
                        </p>
                    </div>
                </div>
            </div>

           
        </div>
    );
}
