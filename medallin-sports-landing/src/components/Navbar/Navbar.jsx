import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  "Home",
  "Programs",
  "Academy",
  "Events",
  "About Us",
  "Contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#07101fd8] border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-10 h-[85px] flex justify-between items-center">

        {/* Logo */}

        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-xl">
            M
          </div>

          <div>

            <h2 className="font-bold tracking-wide text-lg">
              MEDALLIN
            </h2>

            <p className="text-xs tracking-[4px] text-gray-400">
              SPORTS
            </p>

          </div>

        </div>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex gap-12">

          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className={`relative font-medium text-sm transition duration-300
              ${
                item === "Home"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item}

              {item === "Home" && (
                <span className="absolute -bottom-3 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
              )}
            </a>
          ))}

        </nav>

        {/* Button */}

        <button
          className="hidden lg:flex items-center gap-2
          px-7 py-3 rounded-xl
          bg-gradient-to-r
          from-blue-600
          via-blue-500
          to-violet-600
          hover:scale-105
          transition
          duration-300
          shadow-[0_0_30px_rgba(59,130,246,.4)]"
        >
          Get In Touch

          <ArrowRight size={18} />

        </button>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-[#08101d] border-t border-white/10">

          {navLinks.map((item) => (

            <a
              key={item}
              href="#"
              className="block px-8 py-5 border-b border-white/5"
            >
              {item}
            </a>

          ))}

        </div>

      )}

    </header>
  );
};

export default Navbar;