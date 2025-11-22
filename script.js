const cardContainer = document.querySelector(".card-container");
const campoBusca = document.querySelector("#campo-busca");
let dados = [];

// Função para carregar os dados do JSON uma única vez
async function carregarDados() {
    try {
        const resposta = await fetch("data.json");
        dados = await resposta.json();
        mostrarPaginaInicial(); // Exibe a página inicial
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
}

function iniciarBusca() {
    // Pega os ingredientes digitados, separa por vírgula, remove espaços e descarta os vazios
    const ingredientesBusca = campoBusca.value.toLowerCase().split(',')
        .map(item => item.trim())
        .filter(item => item);

    // Filtra as receitas
    const resultados = dados.filter(dado => {
        // Verifica se TODOS os ingredientes buscados estão na lista de ingredientes da receita
        return ingredientesBusca.every(ingredienteBuscado => 
            dado.ingredientes.some(ingredienteReceita => 
                ingredienteReceita.toLowerCase().includes(ingredienteBuscado)
            )
        );
    });

    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    if (dados.length === 0 && campoBusca.value.length > 0) {
        cardContainer.innerHTML = `<p class="sem-resultados">Nenhuma receita encontrada com esses ingredientes. Tente outros!</p>`;
        return;
    }

    const isMultiplosResultados = dados.length > 1;

    for (let dado of dados) {
        let card = document.createElement("article");
        card.classList.add("card");

        // Se não for múltiplos resultados (ou seja, só 1), já expande
        if (!isMultiplosResultados) {
            card.classList.add("card-expandido");
        }

        card.innerHTML = `
            <h2>${dado.nome}</h2>
            <div class="conteudo-receita">
                <p><strong>Tempo de Preparo:</strong> ${dado.tempo_preparo}</p>
                <div>
                    <strong>Ingredientes:</strong>
                    <ul class="lista-ingredientes">
                        ${dado.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
                    </ul>
                </div>
                <p><strong>Modo de Preparo:</strong><br>${dado.modo_preparo}</p>
            </div>
        `;
        cardContainer.appendChild(card);
    }
}

function mostrarPaginaInicial() {
    cardContainer.innerHTML = `
        <div class="pagina-inicial">
            <h2>Bem-vindo ao Mestre Cuca Express!</h2>
            <p>Sua geladeira está cheia, mas a criatividade na cozinha sumiu?</p>
            <p>Digite os ingredientes que você tem em casa, separados por vírgula, e nós sugerimos receitas deliciosas para você!</p>
            <h3>Como usar:</h3>
            <ol>
                <li>No campo de busca acima, digite os ingredientes que você tem. Ex: <strong>ovo, tomate, queijo</strong></li>
                <li>As receitas que usam esses ingredientes aparecerão automaticamente.</li>
                <li>Quanto mais ingredientes você digitar, mais específica será a busca.</li>
            </ol>
            <p class="bom-apetite">Bom apetite!</p>
        </div>
    `;
}

// Carrega os dados assim que a página é carregada
window.addEventListener('load', carregarDados);
 
// Adiciona um event listener no container para gerenciar cliques nos cards (Event Delegation)
cardContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (card) {
        card.classList.toggle('card-expandido');
    }
});

// Adiciona um event listener para o evento 'input' no campo de busca
campoBusca.addEventListener('input', () => {
    if (campoBusca.value.length > 0) {
        iniciarBusca();
    } else if (campoBusca.value.length === 0) {
        // Se o campo for limpo, mostra a página inicial novamente
        mostrarPaginaInicial();
    }
});
