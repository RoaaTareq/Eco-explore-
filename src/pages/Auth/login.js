import Button from "../../components/button/button";
import Image from "../../components/image/images";
import Input from "../../components/input/input";
import Logo from "../../assest/images/Logo.png";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <div className="flex justify-center mb-4">
                    <Image src={Logo} alt="Logo" className="w-50 h-50 object-contain" />
                </div>

                <h2 className="text-2xl font-bold mb-6 text-center text-emeraldGreen">Login</h2>

                <form className="flex flex-col gap-4">
                    <Input placeholder="Email" type="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 sm:text-sm" />
                    <Input placeholder="Password" type="password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 sm:text-sm" />
                    <Button type="submit" className="bg-emeraldGreen">
                        Login
                    </Button>
                </form>

                {/* Links for Forgot Password & Register */}
                <div className="mt-4 flex justify-between text-sm text-indigo-600">
                    <Link to="/forgot-password" className="hover:underline">
                        Forgot Password?
                    </Link>
                    <Link to="/register" className="hover:underline">
                        Don't have an account?
                    </Link>
                </div>
            </div>
        </div>
    );
}
