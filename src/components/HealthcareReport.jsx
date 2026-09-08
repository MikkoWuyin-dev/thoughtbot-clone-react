import LoopingVideo from './LoopingVideo.jsx';

export default function HealthcareReport() {
  return (
    <section id="new-the-state-of-software-delivery-in-healthcare" className="page-section">
      <div className="container">
        <div className="text-and-image-grid basic-grid text-and-image-grid--flipped">
          <div className="text-and-image-grid__text">
            <header>
              <div className="type-heading type-heading--eyebrow"></div>
              <h3 className="type-heading type-heading--2">NEW: The State of Software Delivery in Healthcare</h3>
            </header>
            <div className="long-form-content">
              <p>
                We surveyed engineering, product, and technology leaders across US healthcare organizations to find out
                how the best teams are doing both. Learn how your team stacks up.
              </p>
            </div>
            <a className="cta-link u-margin-bottom-6" href="/healthcare-software-delivery-report">
              Check out the results
            </a>
          </div>
          <LoopingVideo
            small
            className="text-and-image-grid__image"
            src="/cdn.prismic.io/6FCW4fZ2PdNCLuqh_HealthcareSurveyReport.mp4"
            label="Stats from the healthcare survey report animating"
          />
        </div>
      </div>
    </section>
  );
}
