// client/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

export default function Home() {
  const features = [
    {
      title: 'Expert Consultations',
      text: 'From antenatal guidance to toddler development—our specialists support every stage.',
    },
    {
      title: 'Evidence-Based Articles',
      text: 'Curated, peer-reviewed health guides you can trust, on everything from nutrition to sleep.',
    },
    {
      title: 'Family-Centered Care',
      text: 'We empower the whole family—Aai, Baba, Aaji, and Aajoba—working together for your child’s future.',
    },
  ];

  return (
    <section className="about-page home-page">
      {/* Hero Banner */}
      <div className="home-hero">
        <div className="home-hero-content">
          <h1>Welcome to DoctorAaji’s</h1>
          <p>Your partner in the first 1000 days—blending tradition and science for healthier families.</p>
          <Link to="/our-services" className="btn-primary">
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="home-features horizontal-cards">
        {features.map((f) => (
          <div key={f.title} className="mv-card feature-card">
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="home-cta mv-card">
        <h2>Ready to start your 1000-day journey?</h2>
        <p>Book your first consultation today and join our community of empowered families.</p>
        <Link to="/contact-us" className="btn-secondary">
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
