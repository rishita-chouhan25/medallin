import "./Hero.css";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="overlay"></div>

      {/* Content */}

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-card left-card">

          <img
            src="/src/assets/left.png"
            alt=""
          />

          <div className="card-content">

            {/* <div className="icon">
              🏏
            </div> */}

            <h2>Elite Coaching</h2>

            <p>

              Expert mentors and personalized training programs to unlock your highest potential.

            </p>

            <button>

              Explore More

            </button>

          </div>

        </div>

        {/* CENTER */}

        <div className="hero-center">

          <span className="tag">

            TRAIN • COMPETE • EXCEL

          </span>

          <h1>

            Excellence On & Off

            <br />

            <span>

              The Field

            </span>

          </h1>

          <p>

            Empowering athletes through world-class coaching,
            elite sports infrastructure and international exposure.

          </p>

          <div className="hero-buttons">

            <button className="primary">

              Explore Programs

              <ArrowRight size={18}/>

            </button>

            <button className="secondary">

              <Play size={18}/>

              Watch Video

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-card right-card">

          <img
            src="/src/assets/right.png"
            alt=""
          />

          <div className="card-content">

            {/* <div className="icon green">

              🏑

            </div> */}

            <h2>

              World-Class Facilities

            </h2>

            <p>

              Modern infrastructure,
              performance analysis and recovery facilities.

            </p>

            <button>

              Explore More

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}