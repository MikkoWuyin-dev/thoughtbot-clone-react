export default function Hero() {
  return (
    <header id="when-the-stakes-are-high-experience-matters" className="page-section page-section--hero-full-width">
      <div className="container hero-container--full-width">
        <div className="hero__wrapper basic-grid">
          <div className="hero__block hero__text-wrapper hero__block--full-width">
            <div className="hero__text-grid">
              <div className="type-heading type-heading--1 hero__heading">
                <h1>When the stakes are high, experience matters</h1>
              </div>
              <div className="type-body long-form-content hero__text">
                <p>
                  Our senior team partners with you to deliver reliable software and strengthen your team, even under
                  complex constraints.
                </p>
              </div>
              <div className="hero__cta">
                <a className="button u-margin-top-4" href="/hire-us">
                  <p>Let’s talk</p>
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__block hero__block--full-width hero__image-wrapper">
            <svg viewBox="0 0 742 689" aria-labelledby="clipped-team-photos" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title id="clipped-team-photos">
                Headshot photos of thoughtbot team members arranged in a group of colorful rectangles.
              </title>
              <image className="hero__grid" href="/assets/decorations/grid-4ec21ca5be8850c28c104009d9de8c10761babc1f973c1bef3acbfe6d35eb123.png" alt=""></image>
              <mask id="mask2_6110_30780" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="30" y="87" width="296" height="296">
                <path
                  d="M325.724 362.241C325.724 373.625 316.495 382.854 305.111 382.854H107.825C96.4411 382.854 87.2124 373.625 87.2124 362.241V307.48C87.2124 296.096 77.9837 286.867 66.5995 286.867H51.1066C39.7224 286.867 30.4937 277.638 30.4937 266.254V108.236C30.4937 96.8518 39.7224 87.623 51.1066 87.623H305.111C316.495 87.623 325.724 96.8518 325.724 108.236V362.241Z"
                  fill="#D12929"
                ></path>
              </mask>
              <g id="image-left" className="hero__clipped-person" mask="url(#mask2_6110_30780)">
                <rect x="30.4937" y="87.623" width="295.23" height="296.685" fill="#29A7D1"></rect>
                <image className="hero__person" href="/hub.thoughtbot.com/Justin_Toniazzo.png" alt="Justin Toniazzo" loading="lazy" x="30.4937" y="87.623" width="295.23" height="296.685"></image>
                <image className="hero__person" href="/hub.thoughtbot.com/Will_Larry.png" alt="Will Larry" loading="lazy" x="30.4937" y="87.623" width="295.23" height="296.685"></image>
              </g>
              <mask id="mask1_6110_30780" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="392" y="14" width="296" height="296">
                <path
                  d="M392.014 289.325C392.014 300.709 401.242 309.938 412.627 309.938H666.631C678.015 309.938 687.244 300.709 687.244 289.325V169.119C687.244 157.735 678.015 148.506 666.631 148.506H651.138C639.754 148.506 630.525 139.277 630.525 127.893V35.32C630.525 23.9358 621.297 14.707 609.912 14.707H412.627C401.242 14.707 392.014 23.9358 392.014 35.32V289.325Z"
                  fill="#D12929"
                ></path>
              </mask>
              <g id="image-right" className="hero__clipped-person" mask="url(#mask1_6110_30780)">
                <rect x="392" y="14.7" width="295.23" height="296.685" fill="#A434E9"></rect>
                <image className="hero__person" href="/hub.thoughtbot.com/Neilson_Filho.png" alt="Neil Carvalho" loading="lazy" x="392" y="14.7" width="295.23" height="296.685"></image>
                <image className="hero__person" href="/hub.thoughtbot.com/Ali_Slater.png" alt="Aji Slater" loading="lazy" x="392" y="14.7" width="295.23" height="296.685"></image>
              </g>
              <mask id="mask0_6110_30780" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="330" y="378" width="297" height="296">
                <path
                  d="M626.17 653.049C626.17 664.433 616.941 673.662 605.557 673.662H475.172C463.787 673.662 454.559 664.433 454.559 653.049V643.373C454.559 631.988 445.33 622.76 433.946 622.76H351.552C340.168 622.76 330.939 613.531 330.939 602.147V474.671C330.939 463.286 340.168 454.058 351.552 454.058H372.863C384.247 454.058 393.476 444.829 393.476 433.445V399.045C393.476 387.66 402.704 378.432 414.089 378.432H605.557C616.941 378.432 626.17 387.66 626.17 399.045V653.049Z"
                  fill="#095C4F"
                ></path>
              </mask>
              <g id="image-bottom" className="hero__clipped-person" mask="url(#mask0_6110_30780)">
                <rect x="330.939" y="376.977" width="295.23" height="296.685" fill="#2BBE8F"></rect>
                <image className="hero__person" href="/hub.thoughtbot.com/Lindsey-Christensen.PNG" alt="Lindsey Christensen" loading="lazy" x="330.939" y="379" width="295.23" height="296.685"></image>
                <image className="hero__person" href="/hub.thoughtbot.com/Eric_Milford.png" alt="Eric Milford" loading="lazy" x="330.939" y="379" width="295.23" height="296.685"></image>
              </g>
            </svg>
          </figure>
        </div>
      </div>
    </header>
  );
}
