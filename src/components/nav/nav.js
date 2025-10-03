import { useState } from "react";


export default function Navbar({ logo, links = [], button }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkGreen ">
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo ? <img src={logo} alt="Logo" className=" w-[200px] h-[50px]" /> : <span className="font-bold text-xl">Logo</span>}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center ">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-blue-600 font-medium"
              >
                {link.label}
              </a>
            ))}
            {button && <div>{button}</div>}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white shadow-md">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.label}
            </a>
          ))}
          {button && <div className="pt-2">{button}</div>}
        </div>
      )}
    </nav>
  );
}
