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
      <div class="shield">
        <div class="svgdiv">  
          <svg width="44" height="58" viewBox="0 0 44 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="svgshield" d="M22 0C22 0 15.333 8 0 8V27.085C0 37.051 4.328 46.662 12.164 52.82C14.937 55 18.208 56.875 22 58C25.792 56.875 29.062 55 31.836 52.82C39.672 46.662 44 37.051 44 27.085V8C28.667 8 22 0 22 0Z" fill="#88C057"/>
          </div>
        <div style="font-size: 10px; text-align: center">Protected by SafeProtect</div>
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

  /*   
  <path class="svggear" d="M34 26H31.427C30.117 26 29.571 24.917 30.497 23.991L32.283 22.205C32.631 21.857 32.631 21.294 32.283 20.946L30.007 18.67C29.659 18.322 29.096 18.322 28.748 18.67L26.962 20.456C26.035 21.381 24 20.725 24 19.416V16.89C24 16.398 23.601 16 23.11 16H20.89C20.399 16 20 16.399 20 16.89V19.416C20 20.725 17.869 21.381 16.943 20.455L15.157 18.669C14.809 18.321 14.246 18.321 13.898 18.669L11.622 20.945C11.274 21.293 11.274 21.856 11.622 22.204L13.408 23.99C14.334 24.916 13.788 25.999 12.478 25.999H10C9.508 25.999 9 26.898 9 27.389V30C9 30.492 9.508 31 10 31H12.478C13.787 31 14.333 33.083 13.408 34.009L11.622 35.795C11.274 36.143 11.274 36.706 11.622 37.054L13.898 39.33C14.246 39.678 14.809 39.678 15.157 39.33L16.943 37.544C17.869 36.619 20 37.691 20 39V41C20 41.492 19.851 42 20.343 42H23.562C24.054 42 24 41.492 24 41V39C24 37.691 26.035 36.619 26.961 37.545L28.747 39.331C29.095 39.679 29.658 39.679 30.006 39.331L32.282 37.055C32.63 36.707 32.63 36.144 32.282 35.796L30.496 34.01C29.571 33.083 30.117 32 31.427 32H34C34.492 32 35 31.101 35 30.61V27.39C35 26.899 34.492 26 34 26ZM21.952 33C19.743 33 17.952 31.209 17.952 29C17.952 26.791 19.743 25 21.952 25C24.161 25 25.952 26.791 25.952 29C25.952 31.209 24.161 33 21.952 33Z" fill="#ECF0F1"/>
  </svg>
   */