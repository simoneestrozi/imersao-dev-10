# Mestre Cuca Express 🍳

![Logo Mestre Cuca Express](logo.svg)

## 📖 Sobre o Projeto

**Mestre Cuca Express** é uma aplicação web desenvolvida para resolver a eterna dúvida: "O que eu posso cozinhar com o que tenho em casa?". Este projeto funciona como uma base de conhecimento de receitas, permitindo que os usuários encontrem pratos deliciosos simplesmente digitando os ingredientes que possuem na geladeira ou na despensa.

A interface é limpa, intuitiva e projetada para oferecer uma experiência de usuário rápida e agradável, transformando a tarefa de decidir o que cozinhar em um momento de descoberta.

Este projeto foi desenvolvido como parte de um curso, aplicando conceitos de manipulação do DOM, consumo de dados via `fetch`, e criação de interfaces dinâmicas e responsivas com HTML, CSS e JavaScript puro.

---

## ✨ Funcionalidades

- **Busca Inteligente por Ingredientes:** Digite um ou mais ingredientes (separados por vírgula) e o sistema filtra as receitas que contêm **todos** eles.
- **Resultados em Tempo Real:** A lista de receitas é atualizada automaticamente enquanto você digita.
- **Interface Expansível (Accordion):** Para manter a tela limpa, os resultados são exibidos como títulos. Clique em uma receita para expandir e ver todos os detalhes (tempo de preparo, ingredientes e modo de preparo).
- **Página Inicial Amigável:** Ao abrir o site, uma tela de boas-vindas explica como utilizar a ferramenta, guiando o usuário.
- **Design Responsivo:** A aplicação se adapta a diferentes tamanhos de tela, funcionando bem em desktops, tablets e celulares.
- **Base de Dados Extensa:** Conta com mais de 100 receitas caseiras para inspirar suas refeições.

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização, layout responsivo (Flexbox) e animações.
- **JavaScript (ES6+):** Manipulação do DOM, lógica de busca, consumo de dados locais (`fetch API`) e interatividade.

---

## 🏃‍♀️ Como Executar o Projeto

Este é um projeto puramente front-end e não requer um servidor ou processo de build. Para executá-lo localmente, siga os passos:

1.  Clone este repositório (ou baixe os arquivos para uma pasta em seu computador).
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` em seu navegador de preferência (Google Chrome, Firefox, etc.).

E pronto! O Mestre Cuca Express estará funcionando.

---

## 📂 Estrutura de Arquivos

```
mestre-cuca-express/
├── 📄 index.html       # Estrutura principal da página
├── 🎨 style.css        # Folha de estilos para a aparência do site
├── ⚙️ script.js        # Lógica de busca e manipulação da página
├── 📚 data.json        # Base de dados com todas as receitas
├── 🖼️ logo.svg         # Logo do projeto em formato vetorial
└── 📖 README.md        # Este arquivo
```

### Como Adicionar Novas Receitas

Para expandir a base de conhecimento, basta editar o arquivo `data.json` e adicionar um novo objeto de receita, seguindo a estrutura existente:

```json
{
  "nome": "Nome da Receita",
  "tempo_preparo": "XX minutos",
  "ingredientes": ["ingrediente 1", "ingrediente 2", "..."],
  "modo_preparo": "Passos para preparar a receita."
}
```

---

Projeto desenvolvido com base nos aprendizados do curso da Alura.