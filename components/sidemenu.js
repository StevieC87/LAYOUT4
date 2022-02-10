class SideMenu extends HTMLElement {
    constructor() {
      super();
    }
  
  
  connectedCallback() {
    this.innerHTML = `
    <div id="menuhidden" class="menuhidden hiddenright">
    <div class="slidemenu">
      <ul tabindex="-1" aria-hidden="true">
        <li><a href="index.html">Home</a></li>
        <li><a href="features.html">Features</a></li>
        <li><a href="about-us.html">About</a></li>
        <li><a class="activeSidebarLi" href="case-studies.html">Case Studies</a></li>
        <li><a href="pricing.html">Pricing</a></li>
      </ul>
    </div>
  </div>
    `;
   
  }
  }
  customElements.define('side-menu', SideMenu);