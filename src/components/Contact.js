import React from 'react';
import '../styles/contact.css';
import MailIcon from '../icons/Mail.js';
import GithubIcon from '../icons/Github.js';
import LinkedinIcon from '../icons/Linkedin.js';

export default function Contact() {
  return (
    <div className="icon-contact">
      <p className="reach">You can reach me there </p>
      <ul className="list-icon">
        <li>
          <a className="mail" href="mailto:marion.sl@netcourrier.com">
            {/* icon from heroicons.com */}
            <MailIcon />
          </a>
        </li>
        <li>
          <a href="http://github.com/salaun-marion/">
            <GithubIcon />
          </a>
        </li>

        <li>
          <a href="http://www.linkedin.com/in/marion-salaun">
            <LinkedinIcon />
          </a>
        </li>
      </ul>
      <p className="copyright">
        Created by myself℠ with the moral support from my 🐶. Inspiration from{' '}
        <a href="https://www.supah.it/portfolio">Fabio Ottaviani</a>. Last
        update the 29th July 2024.
      </p>
    </div>
  );
}
