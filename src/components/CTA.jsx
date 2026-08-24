import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-box">
        <div>
          <span className="eyebrow">Ready to grow?</span>
          <h2>Let's build your next <em>growth story.</em></h2>
          <p>Tell us about your business and we'll help you choose the right digital strategy.</p>
        </div>
        <Link className="btn light" to="/contact">Start a Conversation <ArrowUpRight size={18}/></Link>
      </div>
    </section>
  );
}