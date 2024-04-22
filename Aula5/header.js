class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .header {
                display: inline-flex;
                width: 1000px;
                margin-bottom: 55px;
                align-items: center;
                justify-content: space-between;
            }
            .logo {
                font-family: "Righteous", sans-serif;
                font-weight: 400;
                font-size: 25px;
                font-style: normal;
                color: #819bf3;
            }
            .menus {
                font-family: 'Mulish', sans-serif;
                display: grid;
                column-gap: 10px;
                grid-template-columns: 85px 85px 85px 85px 85px;
                color: white;
                padding: 10px;
                text-align: center;
            }
            .menu:hover {
                font-weight: bold;
                transform: scale(1.2);
                opacity: 1;
                color: white;
            }
        </style>
        <header>
            <div class="header">
                <a class="logo" href="index.html">PetLand.me</a>
                <div class="menus">
                    <div class="menu"><a href="index.html">Home</a></div>
                    <div class="menu"><a href="produtos.html">Produtos</a></div>
                    <div class="menu"><a href="cadastro.html">Cadastro</a></div>  
                    <div class="menu"><a href="sobre.html">Sobre</a></div> 
                </div>
            </div>   
        </header>
    `;
    }
}
customElements.define('header-component', Header);