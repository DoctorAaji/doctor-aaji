import React from 'react';
import './Page.css';

export default function Services() {
  const services = [
    { title: 'Antenatal Breastfeeding Consultation', subtitle: '7–9 Months of Pregnancy' },
    { title: 'Postpartum Breastfeeding Consultation', subtitle: 'Up to 6 months postpartum' },
    { title: 'Infant Development Consultation', subtitle: 'Up to 1 year' },
    { title: 'Infant & Young Child Nutrition Counselling', subtitle: '6 months to 2 years' },
    { title: 'Toddler Development Care', subtitle: '1 to 2 years' },
    { title: 'Complete 1000 Days Plan', subtitle: 'Combination of 1–5 above' },
    { title: 'Social Skills Development Intervention', subtitle: '2 to 5 years' },
    { title: 'LD / Autism / ADHD Assessment & Intervention', subtitle: '' },
  ];

  return (
    <section className="about-page services-page">
      {/* Hero Banner */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Our Services</h1>
          <p>
            Tailored programs and expert consultations to support every stage
            of early childhood development and maternal care.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="mv-card service-card">
            <h3>{s.title}</h3>
            {s.subtitle && <p className="service-sub">{s.subtitle}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
