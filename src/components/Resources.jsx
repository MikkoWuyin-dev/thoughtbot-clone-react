const RESOURCES = [
  {
    title: 'Tech Leadership',
    text: 'A quick-library to help your team level up processes and decision-making.',
    href: 'https://thoughtbot.com/resources/tech-leadership',
    cta: 'Dive into our resources',
  },
  {
    title: 'Design Sprint Guide',
    text: 'Our guide to conducting and facilitating Product Design Sprints.',
    href: 'https://thoughtbot.com/playbook/designing/design-sprints/README',
    cta: 'Start your sprint',
  },
  {
    title: 'Upcase',
    text: 'Become an experienced developer and take “junior” out of your title.',
    href: 'https://thoughtbot.com/upcase',
    cta: 'Learn from the experts',
  },
  {
    title: 'Our Playbook',
    text: 'Our documented approach to making successful web and mobile products.',
    href: 'https://thoughtbot.com/playbook',
    cta: 'Discover a better way of working',
  },
  {
    title: 'Our Blog',
    text: 'The latest design, development, and product tools, techniques and more.',
    href: 'https://thoughtbot.com/blog',
    cta: 'Stay current on best practices',
  },
  {
    title: 'Giant Robots Smashing Into Other Giant Robots Podcast',
    text: 'A podcast about the design, development, and business of great software.',
    href: 'https://giantrobots.fm',
    cta: 'Listen and subscribe',
  },
];

export default function Resources() {
  return (
    <section
      id="resources-for-designers-developers-and-leaders-reap-the-rewards-of-everything-we-ve-learned-while-building-successful-products"
      className="page-section"
    >
      <div className="container">
        <div className="basic-grid basic-grid--snippets">
          <div className="basic-grid__header-container">
            <header className="basic-grid__header">
              <div className="type-heading type-heading--eyebrow">
                <h2>Resources for Designers, Developers, and Leaders</h2>
              </div>
              <h3 className="basic-grid__heading type-heading type-heading--2">
                Reap the rewards of everything we’ve learned while building successful products
              </h3>
            </header>
          </div>

          {RESOURCES.map((r) => (
            <div className="basic-grid__3-col" key={r.title}>
              <h4 className="type-heading type-heading--4 u-margin-bottom-2">{r.title}</h4>
              <div className="long-form-content">
                <p>{r.text}</p>
              </div>
              <a className="cta-link" href={r.href}>
                {r.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HireUsCta() {
  return (
    <section className="page-section hire-us-cta">
      <div className="type-heading--accent container">
        <div className="hire-us-cta__text">
          <h2 className="type-heading type-heading--2">What does success look like for your project?</h2>
        </div>
        <div className="hire-us-cta__cta">
          <a className="button button--secondary button--small" href="/hire-us">
            Let’s chat
          </a>
        </div>
      </div>
    </section>
  );
}
