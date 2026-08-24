export default function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <article className="service-card">
      <div className="service-number">0{index + 1}</div>
      <div className="icon-box"><Icon size={26}/></div>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
      <span className="card-arrow">↗</span>
    </article>
  );
}