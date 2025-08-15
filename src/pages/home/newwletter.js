import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';

export default function NewsletterSection() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        // هنا ممكن تضيفي منطق الاشتراك أو الاتصال بـ API Mailchimp
        alert(`Subscribed with: ${email}`);
        setEmail("");
    };

    return (
        <div className="p-8 bg-gray-100">
            <div className="grid justify-content-center">
                <div className="col-12 md:col-6 text-center">
                    <div className="p-4 shadow-2 border-round">
                        <h2 className="mb-3 text-3xl font-bold">
                            Get 20% OFF Your First <span className="text-green-500">TRIP!</span>
                        </h2>
                        <p className="mb-4">
                            Don’t Wanna Miss Somethings? Subscribe Right Now & Get The Special Discount & Monthly Newsletter.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-column md:flex-row gap-2 justify-content-center">
                            <InputText 
                                type="email" 
                                placeholder="Your email address" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                                className="flex-1"
                            />
                            <Button type="submit" label="Subscribe" className="p-button-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
