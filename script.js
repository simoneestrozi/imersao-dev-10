const cardContainer = document.querySelector(".card-container");
const campoBusca = document.querySelector("#campo-busca");
let dados = [];

// Função para carregar os dados do JSON uma única vez
async function carregarDados() {
    try {
        const resposta = await fetch("data.json");
        dados = await resposta.json();
        renderizarCards(dados); // Exibe todos os cards inicialmente
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
}

function iniciarBusca() {
    const termoBusca = campoBusca.value.toLowerCase();

    const resultados = dados.filter(dado => {
        const nome = dado.nome.toLowerCase();
        const descricao = dado.descricao.toLowerCase();
        return nome.includes(termoBusca) || descricao.includes(termoBusca);
    });

    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    for (let dado of dados) {
        let card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `
            <h2>${dado.nome}</h2>
            <p><strong>Ano de criação:</strong> ${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba Mais</a>
        `;
        cardContainer.appendChild(card);
    }
}

// Carrega os dados assim que a página é carregada
window.addEventListener('load', carregarDados);
 
// Adiciona um event listener para a tecla "Enter" no campo de busca
campoBusca.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        iniciarBusca(); // Executa a busca ao pressionar Enter
    }
});

// Adiciona um event listener para o evento 'input' no campo de busca
campoBusca.addEventListener('input', () => {
    // Executa a busca automaticamente se tiver 2+ caracteres
    if (campoBusca.value.length >= 2) {
        iniciarBusca();
    } else if (campoBusca.value.length === 0) {
        // Se o campo for limpo, mostra todos os cards novamente
        renderizarCards(dados);
    }
});
