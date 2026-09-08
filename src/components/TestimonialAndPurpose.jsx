export default function TestimonialAndPurpose() {
  return (
    <>
      <section id="client-testimonial" className="page-section">
        <figure className="container basic-grid">
          <div className="quote text-grid quote--bg-none">
            <blockquote className="quote__text">
              <p>
                We were so impressed by{' '}
                <strong>how collaborative and organized thoughtbot’s cross-functional team was</strong>. They were able
                to work through unexpected challenges with strategic focus. That remained consistent throughout our
                nine-month&nbsp;engagement.
              </p>
            </blockquote>
            <figcaption className="quote__details">
              <div className="quote__author">
                <img
                  alt="A headshot of Anne Bartholomew"
                  className="avatar quote__author-avatar"
                  height="450"
                  loading="lazy"
                  width="450"
                  src="/images.prismic.io/ZjpDN0MTzAJOCnXJ_anne_bartholomew.jpeg"
                />
                <p className="quote__author-details">
                  <span className="quote__author-name">Anne Bartholomew</span>
                  <span className="quote__author-job">Director of Product Management, Harvard Business Review</span>
                </p>
              </div>
              <a className="cta-link" href="/case-studies/HBR-new-mobile-app">
                Read the Harvard Business Review case study
              </a>
            </figcaption>
          </div>
        </figure>
      </section>

      <section id="our-company-purpose-driven-teams" className="page-section">
        <div className="container">
          <div className="text-and-image-grid basic-grid text-and-image-grid--flipped">
            <div className="text-and-image-grid__text">
              <header>
                <div className="type-heading type-heading--eyebrow">
                  <h2>Our company</h2>
                </div>
                <h3 className="type-heading type-heading--2">Purpose-driven teams</h3>
              </header>
              <div className="long-form-content">
                <p>
                  Our team is driven by our purpose and values; we continually improve our process, do our best work in
                  strong partnerships with you, and transparently share how we work. We now have teammates located
                  throughout the Americas, Europe, West Asia, and Africa enabling us to take on client projects around
                  the&nbsp;world.{' '}
                </p>
              </div>
              <a className="cta-link u-margin-bottom-6" href="/our-company">
                Learn more about our company
              </a>
            </div>
            <figure className="image text-and-image-grid__image">
              <img
                height="581"
                loading="lazy"
                width="708"
                alt="Illustration of a compass with silhouettes of people around it."
                src="/cdn.prismic.io/aTBbWHNYClf9nxpc_purposedriventeams.svg"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
