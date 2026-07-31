import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function Footer() {
return ( <footer className="footer"> <div className="footer-top-line"></div>


  <div className="footer-container">
    <div className="footer-grid">

      {/* Brand */}
      <div className="footer-brand">
          <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3fa9dc] to-[#8dc63f] p-[1px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0d1220] rounded-[11px] flex items-center justify-center font-black text-white text-lg tracking-tighter">
              M
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className=" mt-5 font-extrabold tracking-widest text-lg text-white leading-none group-hover:text-[#3fa9dc] transition-colors">
              MEDALLIN
            </h2>
            <p className="text-[9px] tracking-[5px] text-[#8dc63f] font-semibold mt-1">
              SPORTS
            </p>
          </div>
        </div>

        <p>
          Medallin Sports Private Limited is committed to developing athletes
          and promoting sports excellence worldwide.
        </p>

        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Quick Links */}
     <div className="footer-links">
        <h4>Quick Links</h4>
        <a href="#">Home</a>
        <a href="#">What We Do</a>
        <a href="#">Athlets</a>
        <a href="#">Media And Production</a>
        <a href="#">About Us</a>
        
      </div>

      {/* Programs
      <div className="footer-links">
        <h4>Programs</h4>
        <a href="#">Football Academy</a>
        <a href="#">Fitness Programs</a>
        <a href="#">Youth Development</a>
        <a href="#">Personal Training</a>
        <a href="#">Sports Management</a>
      </div> */}

      {/* Contact */}
      <div className="footer-links">
        <h4>Contact Us</h4>

        <div className="footer-contact-item">
          <FiPhone />
          <span>+91 98765 43210</span>
        </div>

        <div className="footer-contact-item">
          <FiMail />
          <span>info@medallinsports.com</span>
        </div>

        <div className="footer-contact-item">
          <FiMapPin />
          <span>
            Bangalore, Karnataka,
            <br />
            India - 560001
          </span>
        </div>
      </div>

      {/* Newsletter */}
      <div className="footer-links">
        <h4>Newsletter</h4>

        <p className="newsletter-text">
          Subscribe to get updates on our latest programs.
        </p>

        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>
            <FiSend />
          </button>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 Medallin Sports Private Limited. All Rights Reserved.</p>

      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>


);
}