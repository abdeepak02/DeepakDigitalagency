import { Target, Eye, Sparkles, Users, TrendingUp, ShieldCheck } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import CTA from "../components/CTA";

export default function About() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">About Deepak Digital Agency</span><h1>We make digital <em>simple, smart & scalable.</em></h1><p>We are a Patna-based digital marketing agency helping businesses build visibility, generate leads and grow online.</p></div></section>
      <section className="section"><div className="container split">
        <div><span className="eyebrow">Who we are</span><h2>A practical digital partner for modern businesses.</h2></div>
        <div><p>Deepak Digital Agency brings strategy, creativity and technology together under one roof. We focus on understanding your business first, then choosing the channels and campaigns that make sense for your goals.</p><p>Whether you need more local customers, stronger social media, paid advertising or a professional website, our approach stays focused on measurable business outcomes.</p></div>
      </div></section>
      <section className="section soft-section"><div className="container"><SectionTitle eyebrow="Our foundation" title="What guides our work" /><div className="values-grid">
        <article><Target/><h3>Mission</h3><p>Help businesses use digital marketing in a clear, practical and result-oriented way.</p></article>
        <article><Eye/><h3>Vision</h3><p>Become a trusted growth partner for businesses across Patna and India.</p></article>
        <article><Sparkles/><h3>Creativity</h3><p>Create memorable campaigns and digital experiences that stand out.</p></article>
        <article><ShieldCheck/><h3>Trust</h3><p>Work with transparency, clear communication and realistic expectations.</p></article>
      </div></div></section>
      <section className="section"><div className="container"><SectionTitle eyebrow="How we work" title="Simple process. Serious execution."/><div className="process-grid">
        {[["01","Discover","Understand your business, audience and goals."],["02","Plan","Build a focused digital strategy and campaign roadmap."],["03","Create","Develop the ads, content, website and creative assets."],["04","Optimize","Track performance and improve what matters."]].map(x => <div className="process" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></div>)}
      </div></div></section>
      <CTA/>
    </>
  );
}