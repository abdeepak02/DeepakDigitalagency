import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import CTA from "../components/CTA";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">Testimonials</span><h1>Good work creates <em>good stories.</em></h1><p>What clients say about working with Deepak Digital Agency.</p></div></section>
      <section className="section"><div className="container"><SectionTitle eyebrow="Client feedback" title="Built on communication and results."/><div className="testimonials-grid">{testimonials.map(t=><TestimonialCard key={t.name} item={t}/>)}</div></div></section>
      <CTA/>
    </>
  );
}