import PortfolioCard from "../components/PortfolioCard";
import SectionTitle from "../components/SectionTitle";
import CTA from "../components/CTA";
import { portfolio } from "../data/portfolio";

export default function Portfolio() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">Our Portfolio</span><h1>Work designed to <em>create impact.</em></h1><p>Explore a selection of projects and campaign concepts across marketing, websites and branding.</p></div></section>
      <section className="section"><div className="container"><SectionTitle eyebrow="Selected projects" title="Strategy meets creative."/><div className="portfolio-grid portfolio-large">{portfolio.map((item,i)=><PortfolioCard key={item.title} item={item} index={i}/>)}</div></div></section>
      <CTA/>
    </>
  );
}