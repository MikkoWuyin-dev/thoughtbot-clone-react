import { useState } from 'react';
import { Chevron, CloseIcon, HamburgerIcon, BackArrowIcon, LogoFull, LogoRalph, ArrowLong } from './icons.jsx';

const SERVICES_COLUMNS = [
  {
    header: 'Development',
    links: [
      ['Ruby on Rails', '/services/ruby-on-rails-development'],
      ['Hotwire', '/services/hotwire-stimulus-turbo-frontend-development'],
      ['AI and Machine Learning', '/services/machine-learning-artificial-intelligence-ai'],
      ['Maintenance', '/services/rails-maintenance'],
      ['Mobile', '/services/mobile-development'],
    ],
  },
  {
    header: 'Design',
    links: [
      ['Shaping Sprints', '/services/shaping-sprint'],
      ['UX, UI, and Product Design', '/services/product-design'],
      ['Design Systems', '/services/design-systems'],
    ],
  },
  {
    header: 'Product',
    links: [
      ['MVP', '/services/mvp-development'],
      ['Product Management', '/services/product-management'],
      ['Accessibility', '/services/product-accessibility'],
    ],
  },
  {
    header: 'Team and Processes',
    links: [
      ['Team Augmentation', '/services/team-augmentation'],
      ['Fractional Leadership', '/services/fractional-product-technical-leadership'],
    ],
  },
];

const INDUSTRIES_COLUMNS = [
  { links: [['Healthcare', '/industries/health-tech']] },
  { links: [['Finance', '/industries/fintech']] },
  { links: [['Insurance', '/industries/insuretech']] },
];

const RESOURCES_COLUMNS = [
  {
    headerLink: ['Development', 'https://thoughtbot.com/resources#development-resources-learn-from-our-development-team'],
    links: [
      ['Tech Leadership Resources', '/resources/tech-leadership'],
      ['Open Source', 'https://thoughtbot.com/open-source'],
      ['Books', 'https://thoughtbot.com/resources#books-take-one-off-the-thoughtbot-bookshelf'],
      ['The Bike Shed Podcast', 'https://bikeshed.thoughtbot.com/'],
      ['Live Streaming on YouTube', 'https://www.youtube.com/@thoughtbot/streams'],
      ['Conference Talks', 'https://www.youtube.com/playlist?list=PL8tzorAO7s0g57gv25kLcHLTIyIBdEVyX'],
    ],
  },
  {
    header: 'The business of great software',
    links: [
      ['Playbook', 'https://thoughtbot.com/playbook'],
      ['Giant Robots Smashing Into Other Giant Robots Podcast', 'https://podcast.thoughtbot.com/'],
      ['Design Sprint Guide', 'https://thoughtbot.com/playbook/designing/design-sprints/README'],
      ['Live Streaming on LinkedIn', 'https://www.linkedin.com/company/thoughtbot-inc-/events'],
    ],
  },
];

function DropdownColumnBlock({ column, withHeader }) {
  return (
    <div className="application-header__dropdown-block">
      {withHeader &&
        (column.headerLink ? (
          <a className="application-header__list-header" href={column.headerLink[1]}>
            {column.headerLink[0]}
            <ArrowLong />
          </a>
        ) : (
          <span className="application-header__list-header">{column.header}</span>
        ))}
      <ul>
        {column.links.map(([label, href]) => (
          <li key={href}>
            <a className="application-nav__link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DropdownContainer({ id, open, onClose, columns, footerLink, viewAllLabel }) {
  return (
    <div
      className={`application-header__dropdown-container${open ? ' dropdown-menu' : ''}`}
      data-dropdown-menu-target={id}
      tabIndex={0}
      aria-label="Navigation dropdown expanded"
    >
      <button
        name="button"
        type="button"
        className="dropdown-background application-nav__link-button"
        id={id}
        aria-expanded={open}
        aria-hidden="true"
        onClick={onClose}
      ></button>
      <span className="application-nav__mobile-header">
        <button name="button" type="button" className="back-button" aria-expanded="false" onClick={onClose}>
          <BackArrowIcon />
          Back
        </button>
        <button name="button" type="button" className="icon-button" aria-expanded="false" onClick={onClose}>
          <CloseIcon className="application-header__close-icon" />
        </button>
      </span>

      <div className="header-container application-header__dropdown">
        {viewAllLabel && (
          <a href={footerLink} className="application-header__list-header-mobile-only">
            {viewAllLabel}
            <span>
              <ArrowLong />
            </span>
          </a>
        )}
        {columns.map((column, i) => (
          <DropdownColumnBlock key={i} column={column} withHeader />
        ))}
      </div>

      {footerLink && (
        <a className="application-nav__link application-header__dropdown-footer" href={footerLink}>
          {viewAllLabel}
          <ArrowLong />
        </a>
      )}
    </div>
  );
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null); // 'services' | 'industries' | 'resources' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (id) => setOpenDropdown((cur) => (cur === id ? null : id));
  const closeAll = () => setOpenDropdown(null);

  return (
    <header className={`links-no-underline shim-sticky u-margin-bottom-6${mobileMenuOpen ? ' mobile-menu' : ''}`}>
      <a className="skip-nav" href="#main">
        Skip to main content
      </a>

      <div className="application-header container">
        <a className="application-header__logo" href="/">
          <LogoFull className="logo-ralph-and-wordmark" titleId="logo-full-title" />
          <LogoRalph titleId="logo-ralph-title" />
        </a>
        <nav className="application-nav" aria-label="Main">
          <span className="application-nav__mobile-header">
            <button
              name="button"
              type="button"
              className="icon-button"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(false)}
            >
              <CloseIcon className="application-header__close-icon" />
              <span className="u-hide-visually">Close Menu</span>
            </button>
          </span>

          <ul className="application-nav__row">
            <li className="application-nav__item mobile-nav-only">
              <a
                id="twitch-button-mobile"
                className="site-nav-live-link button button--small button--secondary"
                style={{ display: 'none' }}
                href="https://www.twitch.tv/thoughtbot"
              >
                <span className="live-link-content live-link-content--short">We're live</span>
                <span className="live-link-content">Live on Twitch!</span>
              </a>
            </li>
            <li className="application-nav__item">
              <button
                name="button"
                type="button"
                className={`application-nav__link-button${openDropdown === 'services' ? ' application-nav__link--active' : ''}`}
                id="services"
                aria-expanded={openDropdown === 'services'}
                onClick={() => toggleDropdown('services')}
              >
                Services
                <Chevron />
              </button>
            </li>
            <li className="application-nav__item">
              <button
                name="button"
                type="button"
                className={`application-nav__link-button${openDropdown === 'industries' ? ' application-nav__link--active' : ''}`}
                id="industries"
                aria-expanded={openDropdown === 'industries'}
                onClick={() => toggleDropdown('industries')}
              >
                Industries
                <Chevron />
              </button>
            </li>
            <li className="application-nav__item">
              <a className="application-nav__link" href="/case-studies">
                Case Studies
              </a>
            </li>
            <li className="application-nav__item">
              <button
                name="button"
                type="button"
                className={`application-nav__link-button${openDropdown === 'resources' ? ' application-nav__link--active' : ''}`}
                id="resources"
                aria-expanded={openDropdown === 'resources'}
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <Chevron />
              </button>
            </li>
            <li className="application-nav__item">
              <a className="application-nav__link" href="https://thoughtbot.com/blog">
                Blog
              </a>
            </li>
            <li className="application-nav__item mobile-nav-only">
              <a className="application-nav__link button" href="/hire-us">
                Let’s Talk
              </a>
            </li>
          </ul>
        </nav>
        <div className="application-header__buttons">
          <a
            id="twitch-button"
            className="site-nav-live-link button button--small button--secondary"
            style={{ display: 'none' }}
            href="https://www.twitch.tv/thoughtbot"
          >
            <span className="live-link-content live-link-content--short">We're live</span>
            <span className="live-link-content">Live on Twitch!</span>
          </a>
          <div className="application-header__mobile-nav">
            <button
              name="button"
              type="button"
              className="application-header__button icon-button"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <HamburgerIcon />
              <span className="u-hide-visually">Menu</span>
            </button>
          </div>
          <div className="application-header__cta-group application-header__button-group">
            <a className="application-header__hire-us button button--small" href="/hire-us">
              Let’s get started!
            </a>
          </div>
        </div>
      </div>

      <DropdownContainer
        id="services"
        open={openDropdown === 'services'}
        onClose={closeAll}
        columns={SERVICES_COLUMNS}
        footerLink="/services"
        viewAllLabel="View all Services"
      />
      <DropdownContainer
        id="industries"
        open={openDropdown === 'industries'}
        onClose={closeAll}
        columns={INDUSTRIES_COLUMNS}
      />
      <DropdownContainer
        id="resources"
        open={openDropdown === 'resources'}
        onClose={closeAll}
        columns={RESOURCES_COLUMNS}
        footerLink="/resources"
        viewAllLabel="View all Resources"
      />
    </header>
  );
}
