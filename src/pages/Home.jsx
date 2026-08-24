import { Link } from "react-router-dom";
import { ArrowUpRight, Play, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import PortfolioCard from "../components/PortfolioCard";
import TestimonialCard from "../components/TestimonialCard";
import CTA from "../components/CTA";
import { services } from "../data/services";
import { portfolio } from "../data/portfolio";
import { testimonials } from "../data/testimonials";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">Digital Growth Partner · Patna</span>
            <h1>We turn <span>attention</span> into <em>business.</em></h1>
            <p>Deepak Digital Agency helps ambitious businesses grow through performance marketing, creative strategy and modern technology.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">Get Free Consultation <ArrowUpRight size={18}/></Link>
              <Link className="play-link" to="/portfolio"><span><Play size={15} fill="currentColor"/></span> View our work</Link>
            </div>
            <div className="trust-row">
              <CheckCircle2 size={18}/> <span>Strategy-first. Results-focused. Built for growth.</span>
            </div>
          </div>
          <div className="hero-dashboard">
            <div className="dashboard-card main-dashboard">
              <div className="dash-top"><span>Campaign performance</span><b>↗ 32.8%</b></div>
              <div className="big-number">₹4.82L <small>revenue</small></div>
              <div className="bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <div className="dash-bottom"><span>Jan</span><span>Apr</span><span>Jul</span><span>Aug</span></div>
            </div>
            <div className="floating-card lead-card"><b>+248</b><span>New leads</span></div>
            <div className="floating-card ads-card"><span>ROAS</span><b>4.8x</b></div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><strong>360°</strong><span>Digital solutions</span></div>
          <div><strong>24/7</strong><span>Campaign monitoring</span></div>
          <div><strong>100%</strong><span>Strategy focused</span></div>
          <div><strong>Patna</strong><span>Based & serving India</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="What we do" title="Digital marketing that moves the needle." text="From your first click to your next customer, we build connected digital experiences that support real business goals." />
          <div className="services-grid">{services.slice(0, 6).map((s, i) => <ServiceCard key={s.title} service={s} index={i}/>)}</div>
          <div className="center-btn"><Link className="text-link" to="/services">Explore all services <ArrowUpRight size={17}/></Link></div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionTitle eyebrow="Selected work" title="Ideas that became outcomes." text="A glimpse of the kind of digital work we create for growth-focused businesses." />
          <div className="portfolio-grid">{portfolio.slice(0, 3).map((item, i) => <PortfolioCard key={item.title} item={item} index={i}/>)}</div>
          <div className="center-btn"><Link className="text-link light-link" to="/portfolio">View all projects <ArrowUpRight size={17}/></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Client stories" title="Don't just take our word for it." />
          <div className="testimonials-grid">{testimonials.slice(0, 3).map(t => <TestimonialCard key={t.name} item={t}/>)}</div>
        </div>
      </section>

      <CTA />
    </>
  );
}