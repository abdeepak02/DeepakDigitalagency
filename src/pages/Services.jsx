import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">Our Services</span><h1>Everything you need to <em>grow online.</em></h1><p>Choose one service or build a complete digital growth system with us.</p></div></section>
      <section className="section"><div className="container"><SectionTitle eyebrow="Our expertise" title="Services built around your business goals." text="We combine strategy, creative and performance to help you attract the right audience and turn attention into action."/><div className="services-grid">{services.map((s,i)=><ServiceCard key={s.title} service={s} index={i}/>)}</div></div></section>
      <section className="section dark-section"><div className="container split"><div><span className="eyebrow">Need a custom plan?</span><h2>Not sure which service you need?</h2></div><div><p>Tell us what you sell, where you operate and what you want to achieve. We'll suggest a practical starting point based on your business goals.</p><a className="btn primary" href="tel:+919654942641">Call +91 96549 42641</a></div></div></section>
      <CTA/>
    </>
  );
}