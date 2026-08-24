export default function PortfolioCard({ item, index }) {
  return (
    <article className="portfolio-card">
      <div className={`portfolio-visual visual-${(index % 3) + 1}`}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div className="mock-chart"><i></i><i></i><i></i><i></i><i></i></div>
      </div>
      <div className="portfolio-info">
        <div><span>{item.category}</span><b>{item.result}</b></div>
        <h3>{item.title}</h3>
      </div>
    </article>
  );
}