import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Image from "../../components/image/images";
import Logo from '../../assest/images/Logo.png';
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <Image src={Logo} alt="Logo" className="w-24 h-24 object-contain" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>

        <form className="flex flex-col gap-4">
          <Input placeholder="Email" type="email" />
          <Button type="submit">Send Reset Link</Button>
        </form>

        <div className="mt-4 text-sm text-indigo-600 text-center">
          Remember your password?{" "}
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
