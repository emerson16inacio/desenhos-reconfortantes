function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                 <img class="item-resultado__imagem" src="${dado.imagem}" alt="${dado.titulo}">
                    <div class="item-resultado__texto">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <a href=${dado.link} target="_blank">Ver episódio</a>
                    </div>
        </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}