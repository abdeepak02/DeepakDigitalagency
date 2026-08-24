import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">Contact Us</span><h1>Let's talk about your <em>next move.</em></h1><p>Have a project, campaign or business goal in mind? Send us a message.</p></div></section>
      <section className="section"><div className="container contact-grid">
        <div>
          <SectionTitle eyebrow="Get in touch" title="Tell us what you want to grow." text="We'll get back to you and discuss the right digital approach for your business."/>
          <div className="contact-info">
            <a href="tel:+919654942641"><span><Phone/></span><div><small>Call us</small><b>+91 96549 42641</b></div></a>
            <a href="mailto:hello@deepakdigitalagency.in"><span><Mail/></span><div><small>Email</small><b>hello@deepakdigitalagency.in</b></div></a>
            <div><span><MapPin/></span><div><small>Visit us</small><b>Boring Road, Patna, Bihar</b></div></div>
            <div><span><Clock/></span><div><small>Working hours</small><b>Mon – Sat · 10 AM – 7 PM</b></div></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>Name<input required name="name" placeholder="Your name"/></label>
          <label>Phone<input required name="phone" placeholder="Your phone number"/></label>
          <label>Email<input type="email" name="email" placeholder="Your email"/></label>
          <label>Service<select name="service"><option>Digital Marketing</option><option>Google Ads</option><option>Meta Ads</option><option>SEO</option><option>Website Development</option><option>Social Media Marketing</option><option>Other</option></select></label>
          <label>Message<textarea required name="message" rows="5" placeholder="Tell us a little about your business..."></textarea></label>
          <button className="btn primary" type="submit">Send Enquiry <Send size={17}/></button>
          {sent && <p className="success">Thanks! Your enquiry has been captured in this demo form. Connect the form to your backend/email service to receive submissions.</p>}
        </form>
      </div></section>
      <section className="map-section"><div className="container"><div className="map-placeholder"><MapPin size={34}/><h3>Boring Road, Patna</h3><p>Replace this area with your Google Maps embed.</p></div></div></section>
    </>
  );
}