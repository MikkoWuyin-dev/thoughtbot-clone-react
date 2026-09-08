import { ArrowLong } from './icons.jsx';

const CARDS = [
  {
    href: '/case-studies/HBR-new-mobile-app',
    title: 'HBR',
    text: 'Future-proofing Harvard Business Review to inspire the next generation of global business leaders.',
    img: '/images.prismic.io/ad-yRp1ZCF7ETOK5_hbr-case-study-card.jpg',
    imgH: 1800,
    imgW: 2640,
    alt: "A cropped view of a person with green pants, focus is on their hand holding a phone. The screen has an article with an area chart image and a title that reads '5 Pillars for Democratizing Data at Your Organization'.",
  },
  {
    href: '/case-studies/generative-ai',
    title: 'Generative AI',
    text: 'Transforming healthcare experiences with artificial intelligence and machine learning',
    img: '/images.prismic.io/ad-yQJ1ZCF7ETOK1_confidential-healthcare-case-study-card.jpg',
    imgH: 1800,
    imgW: 2640,
    alt: 'Various people sitting at a meeting table. Most people are wearing headphones and all are looking at their own laptops.',
  },
  {
    href: 'https://thoughtbot.com/case-studies/closeknit',
    title: 'CloseKnit Health',
    text: 'Creating a scalable, multi-platform solution for virtual urgent\u00a0care',
    img: '/images.prismic.io/dee4f34d-9119-4eec-9be3-974af6ea0d19_case-study-card__Closeknit.png',
    imgH: 960,
    imgW: 1400,
    alt: 'CloseKnit logo is centered on a purple background above an illustration of medical professionals.',
  },
];

export default function ClientSuccess() {
  return (
    <>
      <section id="service-highlight-streamline-your-workflows-with-artificial-intelligence-ai" className="page-section">
        <div className="container">
          <div className="text-and-image-grid basic-grid text-and-image-grid--flipped">
            <div className="text-and-image-grid__text">
              <header>
                <div className="type-heading type-heading--eyebrow">
                  <h2>Service Highlight</h2>
                </div>
                <h3 className="type-heading type-heading--2">Streamline your workflows with Artificial Intelligence (AI)</h3>
              </header>
              <div className="long-form-content">
                <p>
                  Reimagine your company's future by developing your own custom Generative AI applications. thoughtbot
                  can help you find opportunities to leverage OpenAI's ChatGPT to streamline internal workflows and stay
                  ahead of the competition.
                </p>
              </div>
              <a className="cta-link u-margin-bottom-6" href="/services/machine-learning-artificial-intelligence-ai">
                Drive innovation with AI
              </a>
            </div>
            <figure className="image text-and-image-grid__image">
              <img
                height="581"
                loading="lazy"
                width="708"
                alt="Illustration of a maze with paths combining to a single way out."
                src="/cdn.prismic.io/aTBbZHNYClf9nxpj_streamlinewithai-blue.svg"
              />
            </figure>
          </div>
        </div>
      </section>

      <section id="client-success-delivering-confidently-in-complex-environments" className="page-section">
        <div className="container">
          <header className="u-margin-bottom-6">
            <div className="type-heading type-heading--eyebrow">
              <h2>Client Success</h2>
            </div>
            <h3 className="type-heading type-heading--1">Delivering confidently in complex environments</h3>
          </header>
          <div className="basic-grid basic-grid--snippets">
            {CARDS.map((card) => (
              <a className="basic-grid__3-col cards-grid__card" href={card.href} key={card.href}>
                <div className="cards-grid__image-link">
                  <div className="cards-grid__image-container">
                    <img className="cards-grid__image" height={card.imgH} loading="lazy" width={card.imgW} alt={card.alt} src={card.img} />
                  </div>
                  <img className="cards-grid__image--blur" height={card.imgH} loading="lazy" width={card.imgW} alt={card.alt} src={card.img} />
                </div>
                <div className="cards-grid__text-wrapper">
                  <div>
                    <div className="cards-grid__description type-body">
                      <h3 className="type-heading type-heading--4 u-margin-bottom-1">{card.title}</h3>
                      <p className="cards-grid__description--small">{card.text}</p>
                    </div>
                  </div>
                </div>
                <div className="cards-grid__arrow cutout cutout--bottom-right" aria-hidden="true">
                  <ArrowLong />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
