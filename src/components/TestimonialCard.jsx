export default function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p>“{item.text}”</p>
      <div className="client">
        <div className="avatar">{item.name.charAt(0)}</div>
        <div><strong>{item.name}</strong><small>{item.role}</small></div>
      </div>
    </article>
  );
}