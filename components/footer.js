class Footer extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `
    <footer id="footer">
    <div class="footerwrapper">
      <div class="footergriditem1">
        <img class="bottomlogo" src="images/logobeige.png" alt="logo" />
        <span class="beigetext bottomphrase">Dog Walking Software for Professionals</span>
      </div>

      <div class="footergriditem2">
        <div><b class="beigetext footerlinkstitle">Site Links</b></div>
        <ul class="beigetext ulnostyle anostyle font12" >
          <li><a href="index.html">Home</a> </li>
          <li><a href="features.html">Features</a> </li>
          <li><a href="about-us.html">About us</a> </li>
          <li><a href="case-studies.html">Case Studies</a></li>
          <li><a href="pricing.html">Pricing</a></li>
        </ul>
      </div>
      <div class="footergriditem4">
        <div><b class="beigetext footerlinkstitle">Contact us</b></div>
        <div class="beigetext contacttext font12">
          <span class="visuallyhidden">Email Address</span>
          <span><i  aria-hidden="true" title="Email" class="fa-solid fa-at"></i> info@walkiespro.com</span>
            <br>
            <span class="visuallyhidden">Physical Address</span>
            <span><i class="fa-solid fa-location-arrow"></i> 36428 Feeney Mill Suite 561, West Aileenton</span>
            <br>
            <span class="visuallyhidden">Telephone Number</span>
            <span><i class="fa-solid fa-phone"></i>	(783) 638-9917</span>
        </div>
      </div>
      <div class="shield">
        <div class="svgdiv">  
          <svg width="44" height="58" viewBox="0 0 44 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="svgshield" d="M22 0C22 0 15.333 8 0 8V27.085C0 37.051 4.328 46.662 12.164 52.82C14.937 55 18.208 56.875 22 58C25.792 56.875 29.062 55 31.836 52.82C39.672 46.662 44 37.051 44 27.085V8C28.667 8 22 0 22 0Z" fill="#88C057"/>
          </div>
        <div class="centertext whitetext font10">Protected by SafeProtect™</div>
      </div>
      <div class="footergriditem3 beigetext smallfont">Copyright © 2022 WalkiesPro. All rights reserved.</div>
    </div>
  </footer>

  


    `;

  }
}
customElements.define('footer-component', Footer);
