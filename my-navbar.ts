import { LitElement, html } from 'lit-element';

class MyNavbar extends LitElement {

    static get properties() {
        return {
            position: { type: Number },
            scrollpos: { type: Number },
        };
    }

    firstUpdated() {
        if (window.pageYOffset > 0) {
            this.position = "-65px"
        } else {
            this.position = "0"
        }
    }
    boundListener() {
        let scrollposneu = window.pageYOffset;
        if (scrollposneu < this.scrollpos) {
            this.position = "0";
        } else {
            this.position = "-65px";
        }
        this.scrollpos = scrollposneu;
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
        return html`
<style>
    :host {
        position: sticky;

        position: -webkit-sticky;

        width: 100%;

        top:${this.position}

        ;
        transition: top 0.3s;
        display: block;
        background: white;
        height:50px;
        box-shadow: 0px 0px 8px 0px #888888;
    }
</style>
<div>ICON</div>
<div>Menu</div>
`;
    }
}

customElements.define('my-navbar', MyNavbar);
