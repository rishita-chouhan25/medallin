import "./Programs.css";
import { ArrowRight } from "lucide-react";
import sports1 from "../../assets/sports3.jpg";

// Updated Roster Data with your specific athletes & images
const athletes = [
  {
    name: "RAVINDRA JADEJA",
    sport: "Cricket",
    image: sports1,
  },
  {
    name: "MANU BHAKER",
    sport: "Shooting",
    image: "https://images.pexels.com/photos/6203574/pexels-photo-6203574.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "ARJUN VAJPAI",
    sport: "Mountaineering",
    image: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "HARMILAN BAINS",
    sport: "Track & Field",
    image: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "AANCHAL THAKUR",
    sport: "Skiing",
    image: "https://images.pexels.com/photos/848595/pexels-photo-848595.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "ANAM HASHIM",
    sport: "Biking",
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Program() {
  return (
    <section className="program-section">
      {/* Background elements */}
      <div className="program-grid"></div>
      <div className="program-glow glow-one"></div>
      <div className="program-glow glow-two"></div>
      <div className="program-glow glow-three"></div>

      <div className="program-container">
        {/* LEFT CONTENT */}
        <div className="program-left">
          <span className="program-tag">TALENT ROSTER</span>

          <h2 className="program-title">
            ATHLETES WE <br />
            <span>WORK WITH</span>
          </h2>

          <p className="program-desc">
            Medallin manages brand building and commercial endorsements for India's finest athletes across Cricket, Shooting, Mountaineering, Track & Field, Skiing, and Biking.
          </p>

          <div className="program-list">
            {athletes.map((item, index) => (
              <div className="program-card" key={index}>
                <div className="program-dot"></div>
                <div className="program-info">
                  <h4>{item.name}</h4>
                  <p>{item.sport}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="program-btn">
            View All Athletes
            <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT VISUALS WITH ATHLETE IMAGES */}
        <div className="program-right">
          {/* Main Featured Player (Ravindra Jadeja) */}
          <div className="main-player">
            <img src={athletes[0].image} alt={athletes[0].name} />
          </div>

          {/* Floating Player Images */}
          <div className="floating-img card-one">
            <img src={athletes[1].image} alt={athletes[1].name} />
          </div>

          <div className="floating-img card-two">
            <img src={athletes[2].image} alt={athletes[2].name} />
          </div>

          <div className="floating-img card-three">
            <img src={athletes[3].image} alt={athletes[3].name} />
          </div>

          <div className="floating-img card-four">
            <img src={athletes[4].image} alt={athletes[4].name} />
          </div>

          {/* Animated Background Rings */}
          <div className="circle-ring"></div>
          <div className="circle-ring second-ring"></div>

          {/* Floating Glow Dots */}
          <span className="ball one"></span>
          <span className="ball two"></span>
          <span className="ball three"></span>

          {/* Dynamic Floating Category Badges */}
          <div className="stat-box stat-one">
            <h4>Cricket & Shooting</h4>
            <span>Olympic & International</span>
          </div>

          <div className="stat-box stat-two">
            <h4>Adventure Sports</h4>
            <span>Skiing & Mountaineering</span>
          </div>

          <div className="stat-box stat-three">
            <h4>Motorsports</h4>
            <span>Biking & Track</span>
          </div>
        </div>
      </div>
    </section>
  );
}