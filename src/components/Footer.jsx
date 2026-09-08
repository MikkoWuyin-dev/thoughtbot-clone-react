import { LogoFull } from './icons.jsx';

const LINK_GROUPS = [
  [
    ['Services', '/services'],
    ['Case Studies', '/case-studies'],
    ['Resources', '/resources'],
    ["Let's Talk", '/hire-us', 'footer__link--highlight'],
  ],
  [
    ['Our Company', '/our-company'],
    ['Careers', '/jobs'],
    ['Purpose', '/purpose'],
    ['Blog', '/blog'],
    ['Events', '/events'],
    ['Sponsor', 'https://github.com/sponsors/thoughtbot'],
    ['Store', 'https://shop.thoughtbot.com'],
  ],
  [
    ['Mastodon', 'https://thoughtbot.social/@thoughtbot', null, 'me'],
    ['Bluesky', 'https://bsky.app/profile/thoughtbot.com'],
    ['GitHub', 'https://github.com/thoughtbot'],
    ['YouTube', 'https://www.youtube.com/@thoughtbot'],
    ['Twitch', 'https://www.twitch.tv/thoughtbot'],
    ['Feeds', '/feeds'],
  ],
];

export default function Footer() {
  return (
    <footer className="tbds-app-frame__footer footer" aria-labelledby="footer">
      <div className="container footer__content footer__content--primary basic-grid">
        <div className="footer__group basic-grid__2-col">
          <h2 className="u-hide-visually" id="footer">
            Footer
          </h2>
          <LogoFull className="footer__logo" titleId="footer-logo-title" />
        </div>

        <div className="footer__group basic-grid__2-col">
          <div className="basic-grid">
            {LINK_GROUPS.map((group, i) => (
              <ul className="footer__list basic-grid__3-col" key={i}>
                {group.map(([label, href, extraCls, rel]) => (
                  <li key={label}>
                    <a href={href} className={extraCls || undefined} rel={rel || undefined}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__content footer__content--secondary basic-grid">
        <div className="footer__group basic-grid__2-col">
          © 2026
          thoughtbot, inc.
          <p>
            The design of a robot and thoughtbot are registered trademarks of thoughtbot, inc.
          </p>
        </div>

        <div className="footer__group basic-grid__2-col">
          <div>
            <ul>
              <li>
                <a href="tel:+18779762687">US: +1 (877) 9-ROBOTS</a>
              </li>
              <li>
                <a href="tel:+442038070560">UK: +44 (0)20 3807 0560</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/conduct">Code of Conduct</a>
              </li>
              <li>
                <a href="/accessibility-statement">Accessibility Statement</a>
              </li>
              <li>
                <a href="//www.iubenda.com/privacy-policy/7827608">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
