import { LitElement, html } from 'lit-element';
class MyNavbar extends LitElement {
    static get properties() {
        return {
            appbar_ypos: { type: Number },
            scrollpos: { type: Number }
        };
    }
    firstUpdated() {
        if (window.pageYOffset > 0) {
            this.appbar_ypos = "-65px";
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
            this.appbar_ypos = "-65px";
        }
        this.scrollpos = a;
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
        background: white;
        height:50px;
        box-shadow: 0px 0px 8px 0px #888888;

    }
    ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
    li {
            float: left;
            padding: 8px;
        }
    .my-text {
        font-size: 30%
    }
</style>
<ul>
  <li><a href="#home"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg></a></li>
  <li><a href="#news"><slot name="my-text" class="my-text">My default text</slot></a></li>
</ul>`;
    }
}
customElements.define('my-navbar', MyNavbar);
