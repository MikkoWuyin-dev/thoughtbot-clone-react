const LOGOS = [
  ['Real Chemistry logo', '/images.prismic.io/aF2k-3fc4bHWiw-I_Dark_real-chemistry-logo.png', 37, 207],
  ['Postmates logo', '/images.prismic.io/aF2k-Hfc4bHWiw-F_Dark_logo-postmates.png', 98, 128],
  ['MoMA logo', '/images.prismic.io/aF2k9nfc4bHWiw-D_Dark_logo-moma.png', 30, 117],
  ['Groups Recover Together logo', '/images.prismic.io/aF2k63fc4bHWiw94_Dark_logo-groups-recover-together.png', 70, 166],
  ['Harvard Business Review logo', '/images.prismic.io/aF2k7Xfc4bHWiw96_Dark_logo-hbr.png', 74, 125],
  ['LevelUp logo', '/images.prismic.io/aF2k8Xfc4bHWiw9-_Dark_logo-level-up.png', 57, 254],
  ['Lola logo', '/images.prismic.io/aF2k8nfc4bHWiw9__Dark_logo-lola.png', 41, 152],
  ['vimeo logo', '/images.prismic.io/aF2k-nfc4bHWiw-H_Dark_logo-vimeo.png', 40, 137],
  ['Airrosti logo', '/images.prismic.io/aF2k5Hfc4bHWiw9w_Dark_logo-airrosti.png', 32, 181],
  ['Digital Ocean logo', '/images.prismic.io/aF2k53fc4bHWiw90_Dark_logo-digital-ocean.png', 91, 116],
  ['Planned Parenthood logo', '/images.prismic.io/aF2k93fc4bHWiw-E_Dark_logo-planned-parenthood.png', 54, 161],
  ['Everlane logo', '/images.prismic.io/aF2k6Xfc4bHWiw92_Dark_logo-everlane.png', 19, 199],
  ['Hilton logo', '/images.prismic.io/aF2k7nfc4bHWiw97_Dark_logo-hilton.png', 54, 146],
  ['Blinkist logo', '/images.prismic.io/aF2k5nfc4bHWiw9z_Dark_logo-blinkist.png', 32, 158],
  ['Gov.uk logo', '/images.prismic.io/aF2k6nfc4bHWiw93_Dark_logo-gov-uk.png', 90, 84],
  ['Mass Challenge logo', '/images.prismic.io/aF2k9Hfc4bHWiw-B_Dark_logo-mass-challenge.png', 70, 145],
  ['Mailchimp logo', '/images.prismic.io/aF2k83fc4bHWiw-A_Dark_logo-mailchimp.png', 50, 184],
  ['Tile logo', '/images.prismic.io/aF2k-Xfc4bHWiw-G_Dark_logo-tile.png', 43, 79],
  ['Mindler logo', '/images.prismic.io/aVRWzXNYClf9otRO_Dark_logo-mindler.png', 55, 400],
  ['Merck logo', '/images.prismic.io/aF2k9Xfc4bHWiw-C_Dark_logo-merck.png', 47, 170],
  ["Harry's logo", '/images.prismic.io/aF2k7Hfc4bHWiw95_Dark_logo-harrys.png', 30, 172],
  ['BarkBox logo', '/images.prismic.io/aF2k5Xfc4bHWiw9x_Dark_logo-bark-box.png', 38, 158],
  ['Kickstarter logo', '/images.prismic.io/aF2k8Hfc4bHWiw99_Dark_logo-kickstarter.png', 22, 198],
  ['Disney logo', '/images.prismic.io/aF2k6Hfc4bHWiw91_Dark_logo-disney.png', 68, 158],
];

export default function Clients() {
  return (
    <section id="over-1-000-positive-outcomes-our-clients" className="page-section">
      <div className="container">
        <div className="logos">
          <header className="logos__header">
            <div className="type-heading type-heading--eyebrow">
              <h2>Over 1,000+ positive outcomes</h2>
            </div>
            <h3 className="type-heading type-heading--2">Our Clients</h3>
            <div className="long-form-content">
              <p>Trusted by teams building software in high-stakes and regulated environments</p>
            </div>
            <a className="cta-link" href="/case-studies">
              Here are their stories
            </a>
          </header>
          <ul className="logos__logo-wrapper">
            {LOGOS.map(([alt, src, height, width]) => (
              <li className="logos__logo" key={src}>
                <img className="logos__logo-image" height={height} loading="lazy" width={width} alt={alt} src={src} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
