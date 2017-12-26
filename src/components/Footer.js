import React from 'react';
import GatsbyLink from 'gatsby-link';

const Footer = () =>
  <div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="medium-8 medium-offset-2 large-10 large-offset-1 text-center">
            I'm{' '}
            <GatsbyLink
              className="footer-link"
              to="/"
              title="rossimeacham.com Home"
            >
              Rossi Meacham
            </GatsbyLink>, a web developer, crypto lover, and
            enthusiastic doer of things. My mission is to write clean and efficient code,
            to solve problems on the web and to keep learning until I stop breathing. Read{' '}
            <GatsbyLink
              className="footer-link"
              to="/about"
              title="About rossimeacham.com"
            >
              more about me
            </GatsbyLink>{' '}
            or <GatsbyLink
              className="footer-link"
              to="/contact"
              title="Contact Rossi"
            >
            get in touch
            </GatsbyLink>.
          </div>
        </div>
      </div>
    </footer>

    <footer className="footer-social">
      <ul className="social">
        <li>
          <a
            target="_blank"
            href="https://twitter.com/rossimeacham"
            title="tweet me"
          >
            <i className="icon-twitter" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/corradorossi"
            title="contribute"
          >
            <i className="icon-github" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://medium.com/@rossimeacham"
            title="medium"
          >
            <i className="icon-medium" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rossimeacham/"
            title="linkedin"
          >
            <i className="icon-linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="mailto:rossimeacham@gmail.com?subject=Hi!"
            title="rossimeacham@gmail.com"
          >
            <i className="icon-mail" />
          </a>
        </li>
      </ul>
      <div className="text-center">
        Copyright {new Date().getFullYear()}{' '}
        <GatsbyLink to="/" title="Rossi Meacham Blog">
          Rossi Meacham
        </GatsbyLink>{' '}
        <span className="separator"> • </span> Design by{' '}
        <a href="http://www.motorossi.me" target="_blank">
          MoToRossi
        </a>
      </div>
    </footer>
  </div>;

export default Footer;
