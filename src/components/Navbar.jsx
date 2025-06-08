import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
    { to: '/our-services', label: 'Our Services' },
    { to: '/publications', label: 'Publications' },
    { to: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <header className="navbar">
      <img src="/logo.png" alt="Doctoraaji" className="logo" />
      <nav>
        <ul>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
