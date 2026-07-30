import "./CTASection.css";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
return ( <section className="cta-section"> <div className="cta-glow glow-left"></div> <div className="cta-glow glow-right"></div>

  <div className="cta-container">
    <span className="cta-tag">READY TO KICK OFF</span>

    <h2 className="cta-title">
      LET'S PLAN YOUR
      <br />
      <span>NEXT SEASON</span>
    </h2>

    <p className="cta-text">
      Tell us your property, the audience, and the outcome you're chasing —
      from grassroots development to elite sports programs and performance
      partnerships.
    </p>

    <button className="cta-button">
      Talk to our team
      <ArrowRight size={18} />
    </button>
  </div>
</section>

);
}