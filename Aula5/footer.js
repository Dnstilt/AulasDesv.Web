class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            footer {
                text-align: center;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 14px;
                color: white;
                left: 0;
                bottom: 0;
                width: 100%;
                opacity: 0.5;
            }
        </style>
        <footer>
            Rua Pet Feliz, 970 - Centro - Florianopolis/SC <br/>
            Fale conosco no instagram
            <a href="https://instagram.com/petland" target="_blank">@petland</a>
        </footer>
    `;
    }
}

customElements.define('footer-component', Footer);