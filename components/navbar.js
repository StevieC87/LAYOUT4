
class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
 
  <nav id="navbar" class="paddingspecial">
  <div tabindex="0"  id="logo" class="logodiv">
    <a href="index.html"><img src="images/logo-transparent.png" alt="logo" /></a>
  </div>

  <div tabindex="0" id="hamburger-menu" class="hamburger-menu">

    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
  </div>
  <div class="navlist">
    <ul tabindex="0">
      <li><a class="current" href="features.html">Features</a></li>
      <li><a href="about-us.html">About</a></li>
      <li><a href="case-studies.html">Case Studies</a></li>
      <li><a href="pricing.html">Pricing</a></li>
    </ul>
  </div>
  </nav>
  `;

  }
}
customElements.define('nav-bar', Navbar);
