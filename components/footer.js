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
        <ul class="beigetext ulnostyle anostyle" style="font-size: 12px">
          <li><a href="index.html">Home</a> </li>
          <li><a href="features.html">Features</a> </li>
          <li><a href="about-us.html">About us</a> </li>
          <li><a href="case-studies.html">Case Studies</a></li>
          <li><a href="pricing.html">Pricing</a></li>
        </ul>
      </div>
      <div class="footergriditem4">
        <div><b class="beigetext footerlinkstitle">Contact us</b></div>
        <div class="beigetext contacttext" style="font-size: 12px">
            <span>Email: info@walkiespro.com</span>
            <br>
            <span> Address: 36428 Feeney Mill Suite 561, West Aileenton</span>
            <br>
            <span>Phone:	(783) 638-9917</span>
        </div>
      </div>
      <div class="footergriditem3 beigetext smallfont">Copyright © 2022 WalkiesPro. All rights reserved.</div>
    </div>
  </footer>

    `;
   /*  const template = document.createElement('template');
    
    template.innerHTML = `
      <h1>Hello, World!</h1>
      <p>And all who inhabit it</p>
    `; */
  }
  }
  customElements.define('footer-component', Footer);