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
        <span class="whitetext bottomphrase">Dog Walking Software for Professionals</span>
      </div>

      <div class="footergriditem2">
        <div><b class="whitetext footerlinkstitle">Site Links</b></div>
        <ul class="whitetext ulnostyle anostyle" style="font-size: 12px">
          <li><a href="index.html">Home</a> </li>
          <li><a href="features.html">Features</a> </li>
          <li><a href="about-us.html">About us</a> </li>
          <li><a href="case-studies.html">Case Studies</a></li>
          <li><a href="pricing.html">Pricing</a></li>
        </ul>
      </div>
      <div class="footergriditem3 whitetext smallfont">Copyright © 2022 WalkiesPro. All rights reserved.</div>
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