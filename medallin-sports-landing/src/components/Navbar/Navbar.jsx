// import { useEffect, useState } from "react";
// import { Menu, X, ArrowRight } from "lucide-react";

// const navLinks = [
//   "Home",
//   "Programs",
//   "Academy",
//   "Events",
//   "About Us",
//   "Contact",
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "backdrop-blur-xl bg-[#07101fd8] border-b border-white/10 shadow-2xl"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-[1400px] mx-auto px-10 h-[85px] flex justify-between items-center">

//         {/* Logo */}

//         <div className="flex items-center gap-3 cursor-pointer">

//           <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-xl">
//             M
//           </div>

//           <div>

//             <h2 className="font-bold tracking-wide text-lg">
//               MEDALLIN
//             </h2>

//             <p className="text-xs tracking-[4px] text-gray-400">
//               SPORTS
//             </p>

//           </div>

//         </div>

//         {/* Desktop Menu */}

//         <nav className="hidden lg:flex gap-12">

//           {navLinks.map((item) => (
//             <a
//               key={item}
//               href="#"
//               className={`relative font-medium text-sm transition duration-300
//               ${
//                 item === "Home"
//                   ? "text-white"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               {item}

//               {item === "Home" && (
//                 <span className="absolute -bottom-3 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
//               )}
//             </a>
//           ))}

//         </nav>

//         {/* Button */}

//         <button className="hidden lg:flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(59,130,246,.4)]">
//           Get In Touch

//           <ArrowRight size={18} />

//         </button>

//         {/* Mobile */}

//         <button
//           className="lg:hidden"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X /> : <Menu />}
//         </button>

//       </div>

//       {/* Mobile Menu */}

//       {open && (

//         <div className="lg:hidden bg-[#08101d] border-t border-white/10">

//           {navLinks.map((item) => (

//             <a
//               key={item}
//               href="#"
//               className="block px-8 py-5 border-b border-white/5"
//             >
//               {item}
//             </a>

//           ))}

//         </div>

//       )}

//     </header>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Ticket, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "What We Do", href: "#story" },
  { name: "T20 World Cup 2026", href: "#worldcup", badge: "HOT" },
  { name: "Athletes", href: "#athletes" },
  { name: "Media & Production", href: "#media" },
  { name: "About Us", href: "#about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

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
          ? "backdrop-blur-2xl bg-[#050816]/90 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-1"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-6 lg:px-12 h-[75px] flex justify-between items-center">

        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3fa9dc] to-[#8dc63f] p-[1px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0d1220] rounded-[11px] flex items-center justify-center font-black text-white text-lg tracking-tighter">
              M
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-extrabold tracking-widest text-lg text-white leading-none group-hover:text-[#3fa9dc] transition-colors">
              MEDALLIN
            </h2>
            <p className="text-[9px] tracking-[5px] text-[#8dc63f] font-semibold mt-1">
              SPORTS
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-9">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveLink(item.name)}
              className={`relative font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                activeLink === item.name
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}

              {/* Special Event Badge */}
              {item.badge && (
                <span className="px-1.5 py-0.5 text-[9px] font-bold bg-[#8dc63f]/20 text-[#8dc63f] border border-[#8dc63f]/40 rounded-md animate-pulse">
                  {item.badge}
                </span>
              )}

              {/* Dynamic Bottom Active Bar */}
              {activeLink === item.name && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-[#3fa9dc] to-[#8dc63f] rounded-full shadow-[0_0_12px_#3fa9dc]"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#8dc63f] to-[#3fa9dc] text-[#050816] font-bold text-xs tracking-wider uppercase hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(141,198,63,0.3)]">
            <Ticket size={16} />
            <span>Book T20 Packages</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="lg:hidden bg-[#050816]/98 border-b border-white/10 backdrop-blur-3xl animate-in slide-in-from-top duration-300">
          <div className="px-8 py-6 space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveLink(item.name);
                  setOpen(false);
                }}
                className="flex items-center justify-between py-3 text-sm font-semibold tracking-wider text-gray-300 hover:text-white border-b border-white/5 uppercase"
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-[10px] bg-[#8dc63f]/20 text-[#8dc63f] border border-[#8dc63f]/40 rounded-md">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4">
              <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#8dc63f] to-[#3fa9dc] text-[#050816] font-bold text-xs tracking-wider uppercase shadow-lg">
                <Ticket size={16} />
                Book T20 Packages
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;