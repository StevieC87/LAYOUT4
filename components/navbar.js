class Navbar extends HTMLElement {
  constructor() {
    super();
  }


connectedCallback() {
  this.innerHTML = `
  <nav id="navbar" class="paddingspecial">
  <!--  <div class="paddingspecial"> -->
  <div id="logo" class="logodiv">
    <a href="index.html"><img src="images/logo-transparent.png" alt="logo" /></a>
  </div>
  <div id="hamburger-menu" class="hamburger-menu">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
  </div>
  <div class="navlist">
    <ul tabindex="-1">
      <li><a class="current" href="features.html">Features</a></li>
      <li><a href="about-us.html">About</a></li>
      <li><a href="case-studies.html">Case Studies</a></li>
      <li><a href="pricing.html">Pricing</a></li>
    </ul>
  </div>
  <!-- </div> -->
  </nav>
  `;
  const template = document.createElement('template');
  
  template.innerHTML = `
    <h1>Hello, World!</h1>
    <p>And all who inhabit it</p>
  `;
}
}
customElements.define('nav-bar', Navbar);
/* const nav = `

`;

document.body.appendChild(template.content); */