import React from 'react';
import Head from 'react-helmet';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Separator from './../components/Separator';
import Menu from './../components/Menu';
import MetaTags from './../components/MetaTags';
import AvatarImg from './../../static/images/headshot.jpg';

export default function About({ data }) {
  const { title, description, siteUrl } = data.site.siteMetadata;
  return (
    <div>
      <MetaTags
        title={`About - ${title}`}
        path={`/about`}
        siteUrl={siteUrl}
        tags="webdev, programming, javascript"
        description={description}
      />
      <Menu />
      <section className="blog container about">
        <div className="medium-8 medium-offset-2 large-10 large-offset-1">
          <header className="header">
            <div className="row text-center">
              <img
                className="header-avatar"
                src={AvatarImg}
                alt="Rossi Meacham"
              />
              <h1>Heyo, I'm Rossi. Thanks for stopping by!</h1>
            </div>
          </header>
          <Separator />
          <main role="main">
            <div className="row about-section">
              <div className="medium-2 about-section-title">INTRO</div>
              <div className="medium-10">
                <p>
                  I design software and websites, that use APIs and databases to serve the
                  rest of an application. I am a full stack engineer but I
                  love taking a specific field and learning it inside and out. I am always
                  interested in being a part of a team that builds great software and
                  getting things done.
                </p>
                <p>
                  I like things like Node.js, Express.js, React.js, Webpack,
                  Gulp, MySQL, MongoDB, Mocha, Jest, AWS, Ansible, Git and a
                  whole lot more.
                </p>
                <p>
                  I like{' '}
                  <a href="http://nopoventures.com">speaking</a> at
                  conferences about things that I've tried and making music which you can listen to on my
                  {' '}<a href="http://soundcloud.com/rocelot-gardner">Soundcloud</a>. I created
                  {' '}<a href="https://nopoventures.com">SoundSource</a> and
                  {' '}<a href="http://thistodoapp.com">this Todo App</a> You can find more code samples and my contributions on
                  {' '}<a href="https://github.com/corradorossi">Github</a>. Along with
                  some folks, we are organizing the local
                  {' '}<a href="http://www.meetup.com/">Nodejs meetup</a> and
                  {' '}<a href="http://justanothercrypto.site" target="_blank">Maine Crypto Conf</a>, the
                  biggest web development conference in Maine. We are also known as
                  {' '}<a href="http://justanothercrypto.site" target="_blank">JACS</a>.
                </p>
                <p>
                  This site is being generated using Gatsby.js and you can find the source on
                   {' '}<a href="https://github.com/corradorossi/rossimeacham.com">{' '}GitHub</a>.
                </p>
                <p>
                  I am currently living in Portland, Maine.
                  Have you ever been? Take a look, I am sure you will fall in
                  love with the amazing beaches of Kennebunkport.
                </p>
              </div>
            </div>
            <div className="row about-section">
              <div className="medium-2 about-section-title">BIO</div>
              <div className="medium-10">
                <div className="row">
                  <div className="medium-2 bio-date">2017</div>
                  <div className="medium-10 text-right">
                    Released{' '}
                    <a href="https://nopoventures.com">
                      nopoventures.com
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2016</div>
                  <div className="medium-10 text-right">
                    Started the first ever{' '}
                    <a href="http://soundcloud.com/rocelot-gardner">
                      Podcast for Maine developers.
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2015</div>
                  <div className="medium-10 text-right">
                    Started working with{' '}
                    <a href="http://nopoventures.com">NoPoVentures</a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2014</div>
                  <div className="medium-10 text-right">
                    Won first prize at{' '}
                    <a href="http://www.nopoventures.com/">
                      Portland Startup Live
                    </a>{' '}
                    with the{' '}
                    <a href="http://justanothercrypto.site">JACS team.</a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2014</div>
                  <div className="medium-10 text-right">
                    <a href="http://booptydoop.com">Booper</a> is on the air
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2014</div>
                  <div className="medium-10 text-right">
                    Started working with a local web design agency. Lots of
                    E-Commerce and Wordpress based projects
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2013</div>
                  <div className="medium-10 text-right">This blog was born, and later refactored using Gatsby.js</div>
                </div>
              </div>
            </div>

            <div className="row about-section">
              <div className="medium-2 about-section-title">PROJECTS</div>
              <div className="medium-10">
                <div className="row">
                  <div className="medium-4">
                    <a
                      href="https://justanothercrypto.site"
                      target="_blank"
                    >
                      JustAnotherCryptoSite
                    </a>
                  </div>
                  <div className="medium-8 text-right">
                    A Slack bot that welcomes news members on your team
                  </div>
                </div>
                <div className="row">
                  <div className="medium-4">
                    <a
                      href="https://mything.com"
                      target="_blank"
                    >
                      My Thing
                    </a>
                  </div>
                  <div className="medium-8 text-right">
                    Subscribe to your favorite GitHub repository and get notified by email for new issues with specific labels.
                  </div>
                </div>
                <div className="row">
                  <div className="medium-4">
                    <a href="" target="_blank">
                      Stargento
                    </a>
                  </div>
                  <div className="medium-8 text-right">
                    PHP sandbox powered up with the latest Magento installation
                    to test your Magento skills
                  </div>
                </div>
              </div>
            </div>

            <div className="row about-section">
              <div className="medium-2 about-section-title">TALKS</div>
              <div className="medium-10">
                <div className="row">
                  <div className="medium-4">
                    <a
                      href=""
                      target="_blank"
                    >
                      JACS 101
                    </a>
                  </div>
                  <div className="medium-8 text-right">
                    Crypto for beginners
                  </div>
                </div>
                <div className="row">
                  <div className="medium-4">
                    <a
                      href=""
                      target="_blank"
                    >
                      Some talk I gave
                    </a>
                  </div>
                  <div className="medium-8 text-right">
                    How I scale my codebase
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export const aboutPageQuery = graphql`
  query AboutPageSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
