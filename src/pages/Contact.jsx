// client/src/pages/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Page.css';

export default function Contact() {
  const [status, setStatus] = useState('');      // '', 'sending', 'sent', 'error'
  const [errorMsg, setErrorMsg] = useState('');  // store any error details

  const onSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    // `sendForm` will read fields by their "name" attributes
    emailjs
      .sendForm(
        'service_ypbjnmw',
        'template_9n0xj5b',
        e.target,
        'WTqDudn9pkJrYFxU6'
      )
      .then(
        () => setStatus('sent'),
        err => {
          console.error('EmailJS error:', err);
          setErrorMsg(err.text || 'Unknown error');
          setStatus('error');
        }
      );
  };

  if (status === 'sent') {
    return (
      <div className="about-page">
        <div className="mv-card contact-card">
          <h3>Thank You!</h3>
          <p className="success">Your message has been sent. We’ll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="about-page">
      <div className="mv-card contact-card">
        <h3>Contact Us</h3>
        <form onSubmit={onSubmit} className="contact-form">
          <label>
            Subject
            <input
              type="text"
              name="title"          // maps to {{title}} in your template
              placeholder="Subject"
              required
            />
          </label>
          <label>
            Name
            <input
              type="text"
              name="name"           // maps to {{name}}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"          // maps to {{email}}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"        // maps to {{message}}
              rows={4}
              placeholder="Your message…"
              required
            />
          </label>
          <button
            type="submit"
            className="btn-primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'error' && (
            <div className="error" style={{ marginTop: '1rem', color: 'red' }}>
              <p>Oops! Email failed:</p>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{errorMsg}</pre>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
