import React from 'react';
import './Page.css';

export default function About() {
  return (
    <section className="about-page">

      {/* Hero Banner */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>
            We are passionate healthcare providers shaping the future generation
            with love, care, and science.
          </p>
        </div>
      </div>

      {/* 1. Our Mission — Horizontal */}
      <div className="about-section about-mv horizontal-cards">
        <div className="mv-card">
          <h3>Our Mission</h3>
          <ul>
            <li><strong>Empower families:</strong> Supporting children and their families during the crucial first 1000 days of life.</li>
            <li><strong>Preventive care:</strong> Creating environments that nurture healthy, long-term development in children.</li>
            <li><strong>Overcoming barriers:</strong> Helping families tackle developmental challenges and social stigma.</li>
          </ul>
        </div>
      </div>

      {/* 2. Why & 1000-Day Program — Vertical */}
      <div className="about-section vertical-cards">
        <div className="mv-card">
          <h3>Why DoctorAaji’s?</h3>
          <p>
            The first 1000 days, from conception to two years of age, are referred to as
            the “Window of Opportunity” by UNICEF. During this time, a child’s nutrition
            and care build the foundation for lifelong growth, learning, and thriving.
          </p>
          <blockquote>
            “The first 1000 days are critical for building the foundation of a healthy and fulfilling life.”
          </blockquote>
          <p>
            In today’s nuclear families, young parents often need extra guidance and support.
            DoctorAaji and DoctorAajoba bridge this gap, offering a blend of traditional wisdom
            and modern science to empower families for this life-changing journey.
          </p>
        </div>

        <div className="mv-card">
          <h3>Our 1000-Day Care Program</h3>
          <p>
            Through our 1000-day Care program, DoctorAaji empowers the Aai-Baba-Aaji-Aajoba
            family unit with insights and techniques to shoulder responsibilities efficiently
            while welcoming the newest member.
          </p>
          <ul>
            <li><strong>Antenatal family counselling</strong> & breastfeeding guidance.</li>
            <li><strong>Complementary feeding recommendations</strong> post-natally.</li>
            <li><strong>Age-appropriate developmental care</strong> with active family participation.</li>
          </ul>
          <p>
            By preventing developmental disorders and promoting healthy practices, our model
            strengthens the foundation for future generations.
          </p>
        </div>
      </div>

      {/* 3. Our Story & Approach — Horizontal */}
      <div className="about-section about-story horizontal-cards">
        <div className="mv-card">
          <h3>Our Story</h3>
          <p>
            Founded in 2024 by visionary healthcare professionals and technologists, DoctorAaji
            emerged to bridge the gap between traditional medicine and modern digital tools.
            From curated health articles to live online consultations, we put your well-being
            at the center of everything we do.
          </p>
        </div>
        <div className="mv-card">
          <h3>Our Approach</h3>
          <ul>
            <li><strong>Antenatal counseling:</strong> Family counseling & breastfeeding guidance.</li>
            <li><strong>Developmental care:</strong> Age-appropriate plans for growth.</li>
            <li><strong>Holistic support:</strong> Nurturing environments with family participation.</li>
          </ul>
        </div>
      </div>

      {/* 4. Team Section */}
      <div className="about-section about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {[
            { name: 'Dr. Aaji',    role: 'Co-Founder', img: '/aaji.jpg' },
            { name: 'Dr. Aajoba',  role: 'Co-Founder', img: '/ajoba.jpg' },
          ].map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-avatar">
                <img src={member.img} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
