class Quotes extends HTMLElement {
    constructor() {
      super();
    }
  
  
  connectedCallback() {
    this.innerHTML = `
    <section class="quotewrapper">
      
    </section>
    `;
  }
  }
  customElements.define('quotes-component', Quotes);
/*   <slot name="slot1"></slot> */

  /*    <section class="quotewrapper">
      <div>
        <h3 class="centertext">
       
        </h3>
      </div>
    </section> */