import LoopingVideo from './LoopingVideo.jsx';

export default function CloseKnitCaseStudy() {
  return (
    <section id="closeknit-health" className="page-section case-study-highlight">
      <div className="container">
        <header className="case-study-highlight__header">
          <div className="type-heading type-heading--eyebrow type-heading--eyebrow--decorated">
            <img alt="" src="/assets/pages/case-study-highlight/eyebrow-decoration__left-958d6c34a2c73a3d257ce61b448ebe5b7a197498d748ba390557932337c52315.svg" />
            <h2>Featured case study</h2>
            <img alt="" src="/assets/pages/case-study-highlight/eyebrow-decoration__right-cf77700fbe18c1b94adee2657f49c59f7c0fe09d0c68376e0890293fa5d48910.svg" />
          </div>
          <img
            className="case-study-highlight-logo case-study-highlight-logo--homepage"
            alt="Client logo"
            src="/cdn.prismic.io/aUm2HnNYClf9ol1A_closeknit-logo-white.svg"
          />
        </header>
      </div>
      <div className="container container--full-width u-margin-bottom-3">
        <LoopingVideo
          src="/cdn.prismic.io/aUlhJXNYClf9ok9t_Closeknit-Infinite-Scroll.mp4"
          label="Video of screenshots of the CloseKnit app. The screenshots are arranged in a row and they slowly move from left to right in an endless loop."
        />
      </div>
      <div className="container basic-grid">
        <div className="basic-grid__2-col">
          <h3 className="type-heading type-heading--2">CloseKnit Health</h3>
          <ul className="u-layout-horizontal u-margin-bottom-3">
            <li className="tag">Product Management</li>
            <li className="tag">UX, UI, &amp; Product&nbsp;Design</li>
            <li className="tag">Ruby on Rails</li>
          </ul>
          <div className="long-form-content">
            <p>How thoughtbot delivered a multi-platform care solution while accelerating release speeds by 10x.</p>
          </div>
          <a className="cta-link" href="/case-studies/closeknit-health">
            Read about how we helped CloseKnit Health
          </a>
        </div>
        <aside className="quote quote--highlight basic-grid__2-col">
          <blockquote className="quote__text">
            <p>
              We’ve had eight to ten times improvement in our release speed over a year, and that pace only looks to
              continue to accelerate. It’s night and day in terms of what we’re able to deliver.
            </p>
          </blockquote>
          <figcaption className="quote__details">
            <div className="quote__author">
              <img
                alt="A headshot of Matt Thompson, Product Manager, CloseKnit Health"
                className="avatar quote__author-avatar"
                height="528"
                loading="lazy"
                width="528"
                src="/images.prismic.io/a35a7111-0877-4116-8ecf-7b08fa1ad0fe_Matthew-Thompson.jpeg"
              />
              <p className="quote__author-details">
                <span className="quote__author-name">Matt Thompson, Product Manager, CloseKnit Health</span>
              </p>
            </div>
          </figcaption>
        </aside>
      </div>
    </section>
  );
}
