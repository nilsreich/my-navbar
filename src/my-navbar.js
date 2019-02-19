import { LitElement, html } from 'lit-element';
import { searchIcon, navIcon, menuIcon, favoriteIcon } from './my-icons';
class MyNavbar extends LitElement {
    static get properties() {
        return {
            appbar_ypos: { type: Number },
            scrollpos: { type: Number },
            layer: { type: String }
        };
    }
    firstUpdated() {
        if (window.pageYOffset > 0) {
            this.appbar_ypos = "-165px";
        }
        else {
            this.appbar_ypos = "0";
        }
    }
    boundListener() {
        let a = window.pageYOffset;
        if (a < this.scrollpos) {
            this.appbar_ypos = "0";
        }
        else {
            this.appbar_ypos = "-165px";
        }
        this.scrollpos = a;
        if (a > 0) {
            this.layer = "0px 0px 8px 0px #888888";
        }
        else {
            this.layer = "";
        }
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('scroll', this.boundListener.bind(this));
    }
    disconnectedCallback() {
        document.removeEventListener('scroll', this.boundListener.bind(this));
        super.disconnectedCallback();
    }
    render() {
        return html `
<style>
    :host {
        position: sticky;
        position: -webkit-sticky;
        width: 100%;
        top:${this.appbar_ypos};
        transition: top 0.3s;
        display: block;
        background: #6200ea;
        height:60px;
        box-shadow:${this.layer};
        display: flex;
        justify-content: space-between;
    }
    div{
        margin:18px;
    }
    .title {
        font-size:18px;
        color:white;
        flex-grow: 1}
    
    @media only screen and (max-width: 500px) {
  .action2 {
    display:none;
  }
}
@media only screen and (max-width: 400px) {
  .action1 {
    display:none;
  }
}
@media only screen and (max-width: 350px) {
  :host {
    height:90px;
  }
}

</style>
<div class="nav">${navIcon}</div>
<div class="title"><slot name="my-text" >AppBar for Content</slot></div>
<div class="action1"><slot name="action1">${favoriteIcon}</slot></div>
<div class="action2"><slot name="action2">${searchIcon}</slot></div>
<div class="menu">${menuIcon}</div>
`;
    }
}
customElements.define('my-navbar', MyNavbar);
